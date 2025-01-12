<script lang="ts">
import type { Ref } from 'vue'
import { createContext } from '@/shared'

export interface Measurable {
  getBoundingClientRect: () => DOMRect
}

interface PopperRootContext {
  anchor: Ref<Measurable | HTMLElement | undefined>
  onAnchorChange: (element: Measurable | HTMLElement | undefined) => void
}

export const [injectPopperRootContext, providePopperRootContext]
  = createContext<PopperRootContext>('PopperRoot')
</script>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const anchor = ref<Measurable | HTMLElement>()

providePopperRootContext({
  anchor,
  onAnchorChange: element => anchor.value = element,
})
</script>

<template>
  <slot />
</template>
