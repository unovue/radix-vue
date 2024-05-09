<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectNumberFieldRootContext } from './NumberFieldRoot.vue'
import { useMousePressed } from '@vueuse/core'
import { usePressedHold } from './utils'

export interface NumberFieldIncrementProps extends PrimitiveProps {
}
</script>

<script setup lang="ts">
import { Primitive, usePrimitiveElement } from '@/Primitive'

const props = withDefaults(defineProps<NumberFieldIncrementProps>(), {
  as: 'button',
})

const rootContext = injectNumberFieldRootContext()
const { primitiveElement, currentElement } = usePrimitiveElement()
const { handlePressStart, handlePressEnd, onTrigger } = usePressedHold()

const { pressed: isPressed } = useMousePressed({ target: currentElement })

onTrigger(() => {
  rootContext.handleIncrease()
})
</script>

<template>
  <Primitive
    v-bind="props"
    ref="primitiveElement"
    tabindex="-1"
    aria-label="Increase"
    :type="as === 'button' ? 'button' : undefined"
    :style="{
      userSelect: isPressed ? 'none' : undefined,
    }"
    :data-pressed="isPressed ? 'true' : undefined"
    @pointerdown.left="() => {
      rootContext.inputEl.value?.focus()
      handlePressStart()
    }"
    @pointerup.left="() => {
      handlePressEnd()
    }"
    @mousedown.left.prevent
  >
    <slot />
  </Primitive>
</template>
