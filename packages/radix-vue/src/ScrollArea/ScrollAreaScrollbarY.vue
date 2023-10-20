<script setup lang="ts">
import { type ComponentPublicInstance, computed, onMounted } from 'vue'
import { injectScrollAreaScrollbarVisibleContext } from './ScrollAreaScrollbarVisible.vue'
import { injectScrollAreaRootContext } from './ScrollAreaRoot.vue'
import ScrollAreaScrollbarImpl from './ScrollAreaScrollbarImpl.vue'
import { getThumbSize } from './utils'
import { usePrimitiveElement } from '@/Primitive'
import { useForwardRef } from '@/shared'

const rootContext = injectScrollAreaRootContext()
const scrollbarVisibleContext = injectScrollAreaScrollbarVisibleContext()

const { primitiveElement, currentElement: scrollbarElement }
  = usePrimitiveElement()
const forwardRef = useForwardRef()

onMounted(() => {
  if (scrollbarElement.value)
    rootContext.onScrollbarYChange(scrollbarElement.value)
})

const sizes = computed(() => scrollbarVisibleContext.sizes.value)
</script>

<template>
  <ScrollAreaScrollbarImpl
    :ref="vnode => {
      forwardRef(vnode)
      primitiveElement = vnode as ComponentPublicInstance
    }"
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
