# Installation

A quick tutorial to walk through installing the packages, as well as the supported plugins.


## Installing the package


<a href="https://www.npmjs.com/package/radix-vue" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/radix-vue?flat&colorA=002438&colorB=41c399"></a>

```bash
pnpm add radix-vue
# yarn add radix-vue
# npm i radix-vue
```


## Nuxt modules

Since [v0.1.18](https://github.com/radix-vue/radix-vue/releases/tag/v0.1.18), Radix Vue has introduced Nuxt modules.

In `nuxt.config.ts`, simply add `radix-vue/nuxt` into the modules, and it will auto-imports all the components for you.

```ts
export default defineNuxtConfig({
  modules: ['radix-vue/nuxt'],
})
```

## unplugin-vue-components

Also, since [v0.1.29](https://github.com/radix-vue/radix-vue/releases/tag/v0.1.29), Radix Vue has introduced resolver for the popular [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

In `vite.config.ts`, import `radix-vue/resolver`, and configure as such and it will auto-imports all the components from Radix Vue.

```ts{2,10  }
import Component from 'unplugin-vue-components/vite'
import RadixVueResolver from 'radix-vue/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Component({
      dts: true,
      resolvers: [
        RadixVueResolver()

        // RadixVueResolver({
        //   prefix: '' // use the prefix option to add Prefix to the imported components
        // })
      ],
    }),
  ],
})
```

