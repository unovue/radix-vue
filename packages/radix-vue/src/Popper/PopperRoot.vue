<script lang="ts">
import { createContext } from '@/shared'
import type { Ref } from 'vue'

export interface Measurable {
  getBoundingClientRect(): DOMRect
}

interface PopperContextValue {
  anchor: Ref<Measurable | HTMLElement | undefined>
  onAnchorChange(element: Measurable | HTMLElement | undefined): void
}

export const [injectPopperContext, providePopperContext]
  = createContext<PopperContextValue>('PopperRoot')
</script>

<script setup lang="ts">
import { ref } from 'vue'

const anchor = ref<Measurable | HTMLElement>()

providePopperContext({
  anchor,
  onAnchorChange: (element: Measurable | HTMLElement | undefined) => {
    anchor.value = element
  },
})
</script>

<template>
  <slot />
</template>
