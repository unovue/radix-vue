<script setup lang="ts">
import { ref } from 'vue'
import { useDebounceFn, useResizeObserver } from '@vueuse/core'
import { injectScrollAreaContext } from './ScrollAreaRoot.vue'
import { injectScrollAreaScrollbarContext } from './ScrollAreaScrollbar.vue'
import ScrollAreaScrollbarVisible from './ScrollAreaScrollbarVisible.vue'

const rootContext = injectScrollAreaContext()
const scrollbarContext = injectScrollAreaScrollbarContext()

const visible = ref(false)

const handleResize = useDebounceFn(() => {
  if (rootContext.viewport.value) {
    const isOverflowX
      = rootContext.viewport.value.offsetWidth
      < rootContext.viewport.value.scrollWidth
    const isOverflowY
      = rootContext.viewport.value.offsetHeight
      < rootContext.viewport.value.scrollHeight

    visible.value = scrollbarContext.isHorizontal.value
      ? isOverflowX
      : isOverflowY
  }
}, 10)

useResizeObserver(rootContext.viewport, handleResize)
useResizeObserver(rootContext.content, handleResize)
</script>

<template>
  <ScrollAreaScrollbarVisible
    v-if="visible"
    v-bind="$attrs"
    :data-state="visible ? 'visible' : 'hidden'"
  >
    <slot />
  </ScrollAreaScrollbarVisible>
</template>
