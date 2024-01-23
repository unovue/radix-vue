import { join, parse, resolve } from 'node:path'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import fg from 'fast-glob'
import MarkdownIt from 'markdown-it'
import type { ComponentMeta, MetaCheckerOptions } from 'vue-component-meta'
import { createComponentMetaChecker } from 'vue-component-meta'
import { babelParse, parse as sfcParse } from 'vue/compiler-sfc'
import { components } from '../../packages/radix-vue/constant/components'

import * as url from 'node:url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const md = new MarkdownIt()

const checkerOptions: MetaCheckerOptions = {
  forceUseTs: true,
  printer: { newLine: 1 },
}

const tsconfigChecker = createComponentMetaChecker(
  resolve(__dirname, '../../packages/radix-vue/tsconfig.json'),
  checkerOptions,
)

const eventDescriptionMap = new Map<string, string>()

function parseMeta(meta: ComponentMeta) {
  // Exclude global props
  const props = meta.props
    .filter(prop => !prop.global)
    .map((prop) => {
      const { name, description, required, type, default: defaultValue } = prop
      return ({
        name,
        description: md.render(description),
        type: type.replace(/\s*\|\s*undefined/g, ''),
        required,
        default: defaultValue ?? undefined,
      })
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  const events = meta.events
    .map((event) => {
      const { name, type } = event
      return ({
        name,
        description: md.render(eventDescriptionMap.get(name) ?? ''),
        type: type.replace(/\s*\|\s*undefined/g, ''),
      })
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  return {
    props,
    events,
    slots: meta.slots,
  }
}

function getEventFromComponentPath(componentPath: string) {
  const componentName = parse(componentPath).name

  const source = readFileSync(componentPath, { encoding: 'utf8' })
  const { descriptor } = sfcParse(source, {
    filename: componentName,
  })

  const code = descriptor.script?.content
  if (code) {
    const result = babelParse(code, {
      sourceType: 'module',
      plugins: ['typescript'],
    })

    for (const node of result.program.body) {
      if (node.type === 'ExportNamedDeclaration' && node.loc) {
        if (node.declaration?.type === 'TSTypeAliasDeclaration') {
          if (node.declaration.typeAnnotation.type === 'TSTypeLiteral') {
            node.declaration.typeAnnotation.members.forEach((member) => {
              if (member.type === 'TSPropertySignature' && member.key.type === 'StringLiteral' && member.leadingComments?.[0].loc) {
                const key = member.key.value
                const description = member.leadingComments?.[0].value.replaceAll('*', '').trim()
                eventDescriptionMap.set(key, description)
              }
            })
          }
          else if (node.declaration.typeAnnotation.type === 'TSIntersectionType') {
            const literalType = node.declaration.typeAnnotation.types.find(t => t.type === 'TSTypeLiteral')
            if (literalType?.type === 'TSTypeLiteral') {
              literalType.members.forEach((member) => {
                if (member.type === 'TSPropertySignature' && member.key.type === 'StringLiteral' && member.leadingComments?.[0].loc) {
                  const key = member.key.value
                  const description = member.leadingComments?.[0].value.replaceAll('*', '').trim()
                  eventDescriptionMap.set(key, description)
                }
              })
            }
          }
        }
      }
    }
  }
}

const allComponents = fg.sync(['src/**/*.vue', '!src/**/story/*.vue', '!src/**/*.story.vue'], {
  cwd: resolve(__dirname, '../../packages/radix-vue'),
  absolute: true,
})

const listOfComponents = Object.values(components).flatMap(i => i)
const primitiveComponents = allComponents.filter(i => listOfComponents.includes(parse(i).name))

allComponents.forEach(getEventFromComponentPath)

// Generate component meta
primitiveComponents.forEach((componentPath) => {
  getEventFromComponentPath(componentPath)

  const componentName = parse(componentPath).name
  const meta = parseMeta(tsconfigChecker.getComponentMeta(componentPath))

  const metaDirPath = resolve(__dirname, '../content/meta')
  // if meta dir doesn't exist create
  if (!existsSync(metaDirPath))
    mkdirSync(metaDirPath)

  const metaMdFilePath = join(metaDirPath, `${componentName}.md`)

  let parsedString = '<!-- This file was automatic generated. Do not edit it manually -->\n\n'
  if (meta.props.length)
    parsedString += `<PropsTable :data="${JSON.stringify(meta.props, null, 2).replace(/"/g, '\'')}" />\n`

  if (meta.events.length)
    parsedString += `\n<EmitsTable :data="${JSON.stringify(meta.events, null, 2).replace(/"/g, '\'')}" />\n`

  writeFileSync(metaMdFilePath, parsedString)
})
