/* eslint-disable unused-imports/no-unused-vars */
/// @ts-check
import { defineConfig } from 'vue-docgen-cli'
import { parsePropsType } from './parser.js'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default defineConfig({
  cwd: '..',
  componentsRoot: 'packages/radix-vue/src',
  components: ['Accordion/[A-Z]*.vue', 'Accordion/![A-Z]*.story.vue'], // ['**/*.vue', '!**/*.story.vue']
  outDir: 'docs/content/meta',
  apiOptions: {
    alias: {
      '@': '../',
    },
  },
  templates: {
    component: (
      renderedUsage, // props, events, methods and slots documentation rendered
      doc, // the object returned by vue-docgen-api
      config, // the local config, useful to know the context
      fileName, // the name of the current file in the doc (to explain how to import it)
      requiresMd, // a list of all the documentation files
      // attached to the component documented. It includes documentation of subcomponents
      { isSubComponent, hasSubComponents }, // are we documenting
    ) => {
      const { displayName, description, docsBlocks, props, events } = doc

      let parsedString = ''
      if (props) {
        const mapped = props.sort((a, b) => a.name.localeCompare(b.name)).map((prop) => {
          return {
            name: prop.name,
            description: md.render(prop.description ?? ''),
            // @ts-expect-error it should have description
            default: prop.tags?.default?.[0].description ?? prop.defaultValue?.value.replace(/\'/g, '"') ?? '-',
            type: parsePropsType(prop),
            required: prop.required,
          }
        })
        parsedString += `<PropsTable :data="${JSON.stringify(mapped, null, 2).replace(/"/g, '\'')}" />\n`
      }

      if (events) {
        const mapped = events.map((event) => {
          return {
            name: event.name,
            description: event.description,
            type: `(${event.properties?.[0].type.names?.[0].trim()}) => void`,
          }
        })
        parsedString += `<EmitsTable :data="${JSON.stringify(mapped, null, 2).replace(/"/g, '\'')}" />\n`
      }

      return `${parsedString}`
    },
  },
})
