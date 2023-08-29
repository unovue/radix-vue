import { addComponent, defineNuxtModule } from '@nuxt/kit'

import type { } from '@nuxt/schema' // workaround for TS bug with "phantom" deps
import * as components from 'radix-vue'

export interface ModuleOptions {
  prefix: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@radix-vue/nuxt',
    configKey: 'radix',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    prefix: '',
  },
  setup(options) {
    for (const component of Object.keys(components)) {
      addComponent({
        name: `${options.prefix}${component}`,
        export: component,
        filePath: 'radix-vue',
      })
    }
  },
})
