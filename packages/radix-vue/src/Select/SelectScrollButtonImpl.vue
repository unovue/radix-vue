<script setup lang="ts">
import { inject, onBeforeUnmount, ref, watchEffect } from 'vue'
import { SELECT_CONTENT_INJECTION_KEY } from './SelectContentImpl.vue'
import { Primitive } from '@/Primitive'
import { useNewCollection } from '@/shared'

export interface SelectScrollButtonImplEmits {
  (e: 'autoScroll'): void
}

const emits = defineEmits<SelectScrollButtonImplEmits>()
const { injectCollection } = useNewCollection()

const collectionItems = injectCollection()
const contentContext = inject(SELECT_CONTENT_INJECTION_KEY)
const autoScrollTimerRef = ref<number | null>(null)

function clearAutoScrollTimer() {
  if (autoScrollTimerRef.value !== null) {
    window.clearInterval(autoScrollTimerRef.value)
    autoScrollTimerRef.value = null
  }
}

watchEffect(() => {
  const activeItem = collectionItems.value.find(
    item => item === document.activeElement,
  )
  activeItem?.scrollIntoView({ block: 'nearest' })
})

function handlePointerDown() {
  if (autoScrollTimerRef.value === null) {
    autoScrollTimerRef.value = window.setInterval(() => {
      emits('autoScroll')
    }, 50)
  }
}

function handlePointerMove() {
  contentContext!.onItemLeave()
  if (autoScrollTimerRef.value === null) {
    autoScrollTimerRef.value = window.setInterval(() => {
      emits('autoScroll')
    }, 50)
  }
}

onBeforeUnmount(() => clearAutoScrollTimer())
</script>

<template>
  <Primitive
    aria-hidden
    :style="{
      flexShrink: 0,
    }"
    v-bind="$parent?.$props"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerleave="
      () => {
        clearAutoScrollTimer();
      }
    "
  >
    <slot />
  </Primitive>
</template>
