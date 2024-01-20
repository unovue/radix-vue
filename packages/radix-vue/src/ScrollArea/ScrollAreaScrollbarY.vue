<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { injectScrollAreaScrollbarVisibleContext } from './ScrollAreaScrollbarVisible.vue'
import { injectScrollAreaRootContext } from './ScrollAreaRoot.vue'
import ScrollAreaScrollbarImpl from './ScrollAreaScrollbarImpl.vue'
import { getThumbSize } from './utils'
import { useForwardExpose } from '@/shared'

const rootContext = injectScrollAreaRootContext()
const scrollbarVisibleContext = injectScrollAreaScrollbarVisibleContext()

const { forwardRef, currentElement: scrollbarElement } = useForwardExpose()

onMounted(() => {
  if (scrollbarElement.value)
    rootContext.onScrollbarYChange(scrollbarElement.value)
})

const sizes = computed(() => scrollbarVisibleContext.sizes.value)
</script>

<template>
  <ScrollAreaScrollbarImpl
    :ref="forwardRef"
    :is-horizontal="false"
    data-orientation="vertical"
    :style="{
      top: 0,
      right: rootContext.dir.value === 'ltr' ? 0 : undefined,
      left: rootContext.dir.value === 'rtl' ? 0 : undefined,
      bottom: 'var(--radix-scroll-area-corner-height)',
      ['--radix-scroll-area-thumb-height' as any]: sizes ? `${getThumbSize(sizes)}px` : undefined,
    }"
    @on-drag-scroll="scrollbarVisibleContext.onDragScroll($event.y)"
  >
    <slot />
  </ScrollAreaScrollbarImpl>
</template>
