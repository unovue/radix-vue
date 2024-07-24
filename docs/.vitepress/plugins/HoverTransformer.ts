import type { ShikiTransformer, ShikiTransformerContextMeta, ThemedToken } from 'shiki'
import type { Element, ElementContent, Text } from 'hast'
import { components as componentsObj } from '../../../packages/radix-vue/constant/components'

export function createHoverTransformer(): ShikiTransformer {
  const map = new WeakMap<ShikiTransformerContextMeta, any>()

  return {
    name: 'custom:hover-card',
    preprocess(code, options) {
      // Reference
      // https://github.com/shikijs/shiki/blob/5cf4b3c24baef51df44618e3d2652102fdddc794/packages/vitepress-twoslash/src/index.ts
      // https://github.com/shikijs/shiki/blob/5cf4b3c24baef51df44618e3d2652102fdddc794/packages/twoslash/src/renderer-rich.ts
      // https://github.com/shikijs/shiki/blob/5cf4b3c24baef51df44618e3d2652102fdddc794/packages/vitepress-twoslash/src/renderer-floating-vue.ts

      if (options.lang === 'vue') {
        // Disable v-pre for this transformer, because we need to render `LinkHoverCard`
        const vPre = options.transformers?.find(i => i.name === 'vitepress:v-pre')
        if (vPre)
          options.transformers?.splice(options.transformers.indexOf(vPre), 1)
      }
    },
    code(codeEl) {
      if (this.options.lang !== 'vue')
        return

      const component = Object.values(componentsObj).flat()
      // Build a map of tokens to their line and character position
      const tokensMap: [line: number, charStart: number, charEnd: number, token: Element | Text][] = []
      this.lines.forEach((lineEl, line) => {
        let index = 0
        for (const token of lineEl.children.flatMap(i => i.type === 'element' ? i.children || [] : []) as (Text | Element)[]) {
          if ('value' in token && typeof token.value === 'string') {
            if (component.includes(token.value)) {
              tokensMap.push([line, index, index + token.value.length, token])
              index += token.value.length
            }
          }
        }
      })

      // We excluded vPre transformer during preprocess so that we can render `LinkHoverCard` component
      // However this causes some code to be executed instead of just being rendered as string
      // Temporary using hacky way to add `v-pre` to each line.
      const ignoredPreLine = tokensMap.map(i => i[0])
      this.lines.forEach((lineEl, line) => {
        if (!ignoredPreLine.includes(line)) {
          lineEl.properties['v-pre'] = ''
        }
      })

      if (tokensMap.length) {
        tokensMap.forEach(([,,,token]) => {
          Object.assign(token, {
            type: 'element',
            tagName: 'link-hover-card',
            properties: {
              href: '/',
            },
            children: [
              { ...token },
              {
                type: 'element',
                tagName: 'template',
                properties: {
                  'v-slot:content': '{}',
                },
                children: [],
                content: {
                  type: 'root',
                  children: [
                    { type: 'text', value: `Testing ${token.value}` },
                  ],
                },
              },
            ],
          } satisfies Element)
        })
      }
    },
  }
}
