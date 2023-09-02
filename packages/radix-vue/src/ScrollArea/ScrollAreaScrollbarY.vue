<script setup lang="ts">
import { onMounted } from 'vue'
import { injectScrollAreaScrollbarVisibleContext } from './ScrollAreaScrollbarVisible.vue'
import { injectScrollAreaContext } from './ScrollAreaRoot.vue'
import ScrollAreaScrollbarImpl from './ScrollAreaScrollbarImpl.vue'
import { getThumbSize } from './utils'
import { usePrimitiveElement } from '@/Primitive'

const rootContext = injectScrollAreaContext()
const scrollbarContextVisible = injectScrollAreaScrollbarVisibleContext()

const { primitiveElement, currentElement: scrollbarElement }
  = usePrimitiveElement()

onMounted(() => {
  if (scrollbarElement.value)
    rootContext.onScrollbarYChange(scrollbarElement.value)
})
</script>

<template>
  <ScrollAreaScrollbarImpl
    ref="primitiveElement"
    :is-horizontal="false"
    data-orientation="vertical"
    :style="{
      'top': 0,
      'right': rootContext.dir.value === 'ltr' ? 0 : undefined,
      'left': rootContext.dir.value === 'rtl' ? 0 : undefined,
      'bottom': 'var(--radix-scroll-area-corner-height)',
      '--radix-scroll-area-thumb-height': scrollbarContextVisible.sizes.value ? `${getThumbSize(scrollbarContextVisible.sizes.value)}px` : undefined,
    }"
    @on-drag-scroll="scrollbarContextVisible.onDragScroll($event.y)"
  >
    <slot />
  </ScrollAreaScrollbarImpl>
</template>
