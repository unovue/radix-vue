import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    name: 'Nuxt module',
    entries: ['./src/nuxt/index'],
    outDir: '../radix-vue/dist',
    clean: false,
    declaration: true,
    externals: [
      '@nuxt/schema',
    ],
    rollup: {
      emitCJS: true,
    },
  },
  {
    name: 'Unplugin-vue-component Resolver',
    entries: ['./src/resolver/index'],
    outDir: '../radix-vue/dist',
    clean: false,
    declaration: true,
    externals: [
      'unplugin-vue-components',
    ],
    rollup: {
      emitCJS: true,
    },
  },
  {
    name: 'Namespaced',
    entries: ['./src/namespaced/index'],
    outDir: '../radix-vue/dist',
    clean: false,
    declaration: true,
    externals: [
      'radix-vue',
    ],
    rollup: {
      emitCJS: true,
    },
  },
  {
    name: 'Date',
    entries: ['./src/date/index'],
    outDir: '../radix-vue/dist',
    clean: false,
    declaration: true,
    externals: [
      'radix-vue',
    ],
    rollup: {
      emitCJS: true,
    },
  },
])
