import { dirname, join, resolve } from 'node:path'
import { readdirSync } from 'node:fs'
import type { MarkdownEnv, MarkdownRenderer } from 'vitepress'

export const rawPathRegexp
  = /^(.+?(?:(?:\.([a-z0-9]+))?))(?:(#[\w-]+))?(?: ?(?:{(\d+(?:[,-]\d+)*)? ?(\S+)?}))? ?(?:\[(.+)\])?$/

function rawPathToToken(rawPath: string) {
  const [
    filepath = '',
    extension = '',
    region = '',
    lines = '',
    lang = '',
    rawTitle = '',
  ] = (rawPathRegexp.exec(rawPath) || []).slice(1)

  const title = rawTitle || filepath.split('/').pop() || ''

  return { filepath, extension, region, lines, lang, title }
}

export default function (md: MarkdownRenderer) {
  md.core.ruler.after('inline', 'component-preview', (state) => {
    // Define the regular expression to match the desired pattern
    const regex = /<ComponentPreview name="([^"]+)" \/>/g

    // Iterate through the Markdown content and replace the pattern
    state.src = state.src.replace(regex, (match, componentName) => {
      const index = state.tokens.findIndex(i => i.content.match(regex))

      const { realPath, path: _path } = state.env as MarkdownEnv

      const childFiles = readdirSync(resolve(dirname(realPath ?? _path), `../../components/demo/${componentName}`), { withFileTypes: true, recursive: true })
      const groupedFiles = childFiles.reduce((prev, curr) => {
        if (curr.isDirectory()) {
          prev[curr.name] = []
        }
        else {
          const folder = curr.path.split(`/demo/${componentName}/`)[1]
          prev[folder].push(join(curr.path, curr.name))
        }
        return prev
      }, {} as { [key: string]: string[] })

      state.tokens[index].content = `<ComponentPreview name="${componentName}" files="${encodeURIComponent(JSON.stringify(groupedFiles))}" >`

      Object.entries(groupedFiles).forEach(([key, value], groupIndex) => {
        const gap = groupIndex * (value.length * 2)
        const templateStart = new state.Token('html_inline', '', 0)
        templateStart.content = `<template #${key}>`
        state.tokens.splice(index + gap + 1, 0, templateStart)

        value.forEach((file, i) => {
          const { filepath, extension, lines, lang, title } = rawPathToToken(file)
          const resolvedPath = resolve(dirname(realPath ?? _path), filepath)

          // Add code tokens for each line
          const token = new state.Token('fence', 'code', 0)
          token.info = `${lang || extension}${lines ? `{${lines}}` : ''}${
            title ? `[${title}]` : ''
          }`

          token.content = `<<< ${filepath}`
          // @ts-expect-error token.src is for snippets plugin to handle importing snippet
          token.src = [resolvedPath]
          state.tokens.splice(index + gap + i + 2, 0, token)
        })

        const templateEnd = new state.Token('html_inline', '', 0)
        templateEnd.content = '</template>'
        state.tokens.splice(index + gap + 4, 0, templateEnd)
      })

      const endTag = new state.Token('html_inline', '', 0)
      endTag.content = '</ComponentPreview>'

      const endPos = Object.keys(groupedFiles).length * 4
      state.tokens.splice(index + endPos + 1, 0, endTag)

      // Return an empty string to replace the original pattern
      return ''
    })
  })
}
