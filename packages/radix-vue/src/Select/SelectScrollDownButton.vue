<script setup lang="ts">
import { inject, ref, watch, watchEffect } from 'vue'
import { SELECT_CONTENT_INJECTION_KEY } from './SelectContentImpl.vue'
import { SELECT_VIEWPORT_INJECTION_KEY } from './SelectViewport.vue'
import SelectScrollButtonImpl from './SelectScrollButtonImpl.vue'
import { type PrimitiveProps, usePrimitiveElement } from '@/Primitive'

export interface SelectScrollDownButtonProps extends PrimitiveProps {}
defineProps<SelectScrollDownButtonProps>()

const contentContext = inject(SELECT_CONTENT_INJECTION_KEY)
const viewportContext
  = contentContext!.position === 'item-aligned'
    ? inject(SELECT_VIEWPORT_INJECTION_KEY)
    : undefined

const { primitiveElement, currentElement } = usePrimitiveElement()

const canScrollDown = ref(false)

watchEffect((cleanupFn) => {
  if (contentContext!.viewport?.value && contentContext!.isPositioned?.value) {
    const viewport = contentContext!.viewport.value

    function handleScroll() {
      const maxScroll = viewport.scrollHeight - viewport.clientHeight
      // we use Math.ceil here because if the UI is zoomed-in
      // `scrollTop` is not always reported as an integer
      canScrollDown.value = Math.ceil(viewport.scrollTop) < maxScroll
    }
    handleScroll()
    viewport.addEventListener('scroll', handleScroll)

    cleanupFn(() => viewport.removeEventListener('scroll', handleScroll))
  }
})

watch(currentElement, () => {
  if (currentElement.value)
    viewportContext?.onScrollButtonChange(currentElement.value)
})
</script>

<template>
  <SelectScrollButtonImpl
    v-if="canScrollDown"
    ref="primitiveElement"
    @auto-scroll="
      () => {
        const { viewport, selectedItem } = contentContext!;
        if (viewport?.value && selectedItem?.value) {
          viewport.value.scrollTop = viewport.value.scrollTop + selectedItem.value.offsetHeight;
        }
      }
    "
  >
    <slot />
  </SelectScrollButtonImpl>
</template>
