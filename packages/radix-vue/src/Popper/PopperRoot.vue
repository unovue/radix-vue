<script lang="ts">
import type { InjectionKey, Ref } from 'vue'

export interface Measurable {
  getBoundingClientRect(): DOMRect
}

interface PopperContextValue {
  anchor: Ref<Measurable | HTMLElement | undefined>
  onAnchorChange(element: Measurable | HTMLElement | undefined): void
}

export const POPPER_ROOT_KEY = Symbol() as InjectionKey<PopperContextValue>
</script>

<script setup lang="ts">
import { provide, ref } from 'vue'

const anchor = ref<Measurable | HTMLElement>()

provide(POPPER_ROOT_KEY, {
  anchor,
  onAnchorChange: (element: Measurable | HTMLElement | undefined) => {
    anchor.value = element
  },
})
</script>

<template>
  <slot />
</template>
