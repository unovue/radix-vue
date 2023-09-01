<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'
import { injectSelectContentContext } from './SelectContentImpl.vue'
import SelectScrollButtonImpl from './SelectScrollButtonImpl.vue'
import { type PrimitiveProps, usePrimitiveElement } from '@/Primitive'
import { injectSelectItemAlignedPositionContext } from './SelectItemAlignedPosition.vue'

export interface SelectScrollUpButtonProps extends PrimitiveProps {}
defineProps<SelectScrollUpButtonProps>()

const contentContext = injectSelectContentContext()
const viewportContext
  = contentContext.position === 'item-aligned'
    ? injectSelectItemAlignedPositionContext()
    : null

const { primitiveElement, currentElement } = usePrimitiveElement()

const canScrollUp = ref(false)

watchEffect((cleanupFn) => {
  if (contentContext.viewport?.value && contentContext.isPositioned?.value) {
    const viewport = contentContext.viewport.value

    function handleScroll() {
      canScrollUp.value = viewport.scrollTop > 0
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
    v-if="canScrollUp"
    ref="primitiveElement"
    @auto-scroll="() => {
      const { viewport, selectedItem } = contentContext;
      if (viewport?.value && selectedItem?.value) {
        viewport.value.scrollTop = viewport.value.scrollTop - selectedItem.value.offsetHeight;
      }
    }"
  >
    <slot />
  </SelectScrollButtonImpl>
</template>
