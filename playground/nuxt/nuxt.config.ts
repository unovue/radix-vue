// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  // components: [
  //   {
  //     path: '../../docs/components/demo',
  //   },
  // ],
  hooks: {
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '../../docs/components/demo',
        ignore: ['**/css/**'],
        // this is required else Nuxt will autoImport `.ts` file
        extensions: ['.vue'],
        // prefix for your components, eg: UiButton
        prefix: '',
        // prevent adding another prefix component by it's path.
        pathPrefix: true,
        extendComponent(component) {
          return {
            ...component,
            kebabName: component.kebabName.replace('-tailwind', ''),
            pascalName: component.pascalName.replace('Tailwind', ''),
          }
        },
      })
    },
  },

  compatibilityDate: '2024-09-17',
})
