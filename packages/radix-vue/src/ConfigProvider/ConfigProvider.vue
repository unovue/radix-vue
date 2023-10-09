<script lang="ts">
import { createContext } from '@/shared'
import type { Direction, ScrollBodyOption } from '@/shared/types'
import { type Ref, toRefs } from 'vue'

interface ConfigProviderContextValue {
  dir?: Ref<Direction>
  scrollBody?: Ref<boolean | ScrollBodyOption>
}

export const [injectConfigProviderContext, provideConfigProviderContext]
  = createContext<ConfigProviderContextValue>('ConfigProvider')

export interface ConfigProviderProps {
  /**
   * The global reading direction of your application. This will be inherited by all primitives.
   * @defaultValue 'ltr'
   */
  dir?: Direction
  scrollBody?: boolean | ScrollBodyOption
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ConfigProviderProps>(), {
  dir: 'ltr',
  scrollBody: true,
})

const { dir, scrollBody } = toRefs(props)

provideConfigProviderContext({
  dir,
  scrollBody,
})
</script>

<template>
  <slot />
</template>
