import type { ShikiTransformer, ShikiTransformerContextMeta, ThemedToken } from 'shiki'

export function createHoverTransformer(): ShikiTransformer {
  const map = new WeakMap<ShikiTransformerContextMeta, any>()

  return {
    name: 'custom:hover-card',
    preprocess(code, options) {
      // TODO:
      // Wanted to implement a feature where user hover on component in Vue code snippet to render a HoverCard showing it's API as content

      // https://github.com/shikijs/shiki/blob/5cf4b3c24baef51df44618e3d2652102fdddc794/packages/twoslash/src/renderer-rich.ts
      // https://github.com/shikijs/shiki/blob/5cf4b3c24baef51df44618e3d2652102fdddc794/packages/vitepress-twoslash/src/renderer-floating-vue.ts
    },

  }
}
