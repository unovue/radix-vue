import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  failOnWarn: false,
  outDir: '../radix-vue/dist/nuxt',
  externals: [
    '@nuxt/schema',
  ],
})
