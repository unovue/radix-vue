<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from 'vue'
import { SCROLL_AREA_INJECTION_KEY } from './ScrollAreaRoot.vue'
import ScrollAreaScrollbarAuto from './ScrollAreaScrollbarAuto.vue'

const injectedValue = inject(SCROLL_AREA_INJECTION_KEY)

let timeout: ReturnType<typeof setTimeout> | undefined | number
const visible = ref(false)

function handlePointerEnter() {
  window.clearTimeout(timeout)
  visible.value = true
}
function handlePointerLeave() {
  timeout = window.setTimeout(() => {
    visible.value = false
  }, injectedValue?.scrollHideDelay.value)
}

onMounted(() => {
  const scrollArea = injectedValue?.scrollArea.value

  if (scrollArea) {
    scrollArea.addEventListener('pointerenter', handlePointerEnter)
    scrollArea.addEventListener('pointerleave', handlePointerLeave)
  }
})

onUnmounted(() => {
  const scrollArea = injectedValue?.scrollArea.value
  if (scrollArea) {
    window.clearTimeout(timeout)
    scrollArea.removeEventListener('pointerenter', handlePointerEnter)
    scrollArea.removeEventListener('pointerleave', handlePointerLeave)
  }
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <ScrollAreaScrollbarAuto
    v-if="visible"
    v-bind="$attrs"
    :data-state="visible ? 'visible' : 'hidden'"
  >
    <slot />
  </ScrollAreaScrollbarAuto>
</template>
