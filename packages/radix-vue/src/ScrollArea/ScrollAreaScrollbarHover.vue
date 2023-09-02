<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { injectScrollAreaContext } from './ScrollAreaRoot.vue'
import ScrollAreaScrollbarAuto from './ScrollAreaScrollbarAuto.vue'

const context = injectScrollAreaContext()

let timeout: ReturnType<typeof setTimeout> | undefined | number
const visible = ref(false)

function handlePointerEnter() {
  window.clearTimeout(timeout)
  visible.value = true
}
function handlePointerLeave() {
  timeout = window.setTimeout(() => {
    visible.value = false
  }, context.scrollHideDelay.value)
}

onMounted(() => {
  const scrollArea = context.scrollArea.value

  if (scrollArea) {
    scrollArea.addEventListener('pointerenter', handlePointerEnter)
    scrollArea.addEventListener('pointerleave', handlePointerLeave)
  }
})

onUnmounted(() => {
  const scrollArea = context.scrollArea.value
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
