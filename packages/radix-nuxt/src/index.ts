import { addComponent, defineNuxtModule } from '@nuxt/kit'

import type { } from '@nuxt/schema' // workaround for TS bug with "phantom" deps
import * as components from 'radix-vue'

export default defineNuxtModule({
  meta: {
    name: '@radix-vue/nuxt',
    configKey: 'radix',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  setup() {
    for (const component of Object.keys(components)) {
      addComponent({
        name: component,
        export: component,
        filePath: 'radix-vue',
      })
    }
  },
})
