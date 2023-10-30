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
      state.tokens[index].content = `<ComponentPreview name="${componentName}"><div filename="index.vue">`

      const { realPath, path: _path } = state.env as MarkdownEnv
      const folder = resolve(dirname(realPath ?? _path), `../../components/demo/${componentName}`)
      const files = readdirSync(folder, { withFileTypes: true, recursive: true }).map(i => join(i.path, i.name))

      files.forEach((file, i) => {
        const { filepath, extension, lines, lang, title }
      = rawPathToToken(file)
        const resolvedPath = resolve(dirname(realPath ?? _path), filepath)

        // Add code tokens for each line
        const token = new state.Token('fence', 'code', 0)
        token.info = `${lang || extension}${lines ? `{${lines}}` : ''}${
          title ? `[${title}]` : ''
        }`

        token.content = `<<< ${filepath}`
        // @ts-expect-error token.src is for snippets plugin to handle importing snippet
        token.src = [resolvedPath]
        state.tokens.splice(index + i + 1, 0, token)
      })

      const endTag = new state.Token('html_inline', '', 0)
      endTag.content = '</div></ComponentPreview>'
      state.tokens.splice(index + files.length + 1, 0, endTag)

      // Return an empty string to replace the original pattern
      return ''
    })
  })
}
