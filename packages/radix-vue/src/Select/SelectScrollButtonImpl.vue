<script setup lang="ts">
import { onBeforeUnmount, ref, watchEffect } from 'vue'
import { SelectContentDefaultContextValue, injectSelectContentContext } from './SelectContentImpl.vue'
import { Primitive } from '@/Primitive'
import { useCollection } from '@/shared'

export type SelectScrollButtonImplEmits = {
  autoScroll: []
}

const emits = defineEmits<SelectScrollButtonImplEmits>()
const { injectCollection } = useCollection()

const collectionItems = injectCollection()
const contentContext = injectSelectContentContext(SelectContentDefaultContextValue)
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
  contentContext.onItemLeave?.()
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
    aria-hidden="true"
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
