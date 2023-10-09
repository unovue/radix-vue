<script lang="ts">
import { createContext } from '@/shared'
import type { Direction } from '@/shared/types'
import { type Ref, toRefs } from 'vue'

interface ConfigProviderContextValue {
  dir: Ref<Direction>
}

export const [injectConfigProviderContext, provideConfigProviderContext]
  = createContext<ConfigProviderContextValue>('ConfigProvider')

export interface ConfigProviderProps {
  /**
   * The global reading direction of your application. This will be inherited by all primitives.
   * @defaultValue 'ltr'
   */
  dir: Direction
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ConfigProviderProps>(), {
  dir: 'ltr',
})

const { dir } = toRefs(props)

provideConfigProviderContext({
  dir,
})
</script>

<template>
  <slot />
</template>
