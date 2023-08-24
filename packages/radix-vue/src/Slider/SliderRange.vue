<script lang="ts">
export interface SliderRangeProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { SLIDER_INJECTION_KEY } from './SliderRoot.vue'
import type { SliderProvideValue } from './SliderRoot.vue'
import { convertValueToPercentage } from './utils'

const props = withDefaults(defineProps<SliderRangeProps>(), { as: 'span' })
const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY)

const smallestValue = computed<number | undefined>(() => {
  return injectedValue?.modelValue?.value
    ? Math.min(...injectedValue.modelValue.value)
    : undefined
})

const largestValue = computed<number | undefined>(() => {
  return injectedValue?.modelValue?.value
    ? Math.max(...injectedValue.modelValue.value)
    : undefined
})

function calculateOffset(value: number) {
  return convertValueToPercentage(
    value,
    injectedValue?.min ?? 0,
    injectedValue?.max ?? 100,
  )
}

const sliderRangeStyle = computed(() => {
  if (!injectedValue)
    return {}

  const offset
    = injectedValue.modelValue?.value?.length === 1
      ? 0
      : calculateOffset(smallestValue.value ?? 0)

  const size = calculateOffset(largestValue.value ?? 0) - offset

  const { orientation, flipped } = injectedValue

  const style: Record<string, string | number> = {
    position: 'absolute',
  }

  let offsetKey = flipped?.value ? 'right' : 'left'
  const sizeKey = orientation === 'vertical' ? 'height' : 'width'

  if (orientation === 'vertical')
    offsetKey = flipped?.value ? 'bottom' : 'top'

  style[offsetKey] = `${offset}%`
  style[sizeKey] = `${size}%`

  return style
})
</script>

<template>
  <Primitive
    :data-disabled="injectedValue?.disabled"
    :data-orientation="injectedValue?.orientation"
    :as-child="props.asChild"
    :as="as"
    :style="sliderRangeStyle"
  />
</template>
