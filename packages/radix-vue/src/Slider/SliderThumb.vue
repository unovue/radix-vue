<script lang="ts">
export interface SliderThumbProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { SLIDER_INJECTION_KEY } from './SliderRoot.vue'
import type { SliderProvideValue } from './SliderRoot.vue'
import { clamp, convertValueToPercentage } from './utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SliderThumbProps>(), {
  as: 'span',
})
const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY)
const { primitiveElement, currentElement: thumbElement }
  = usePrimitiveElement()

onMounted(() => {
  if (injectedValue?.thumbElements && thumbElement.value)
    injectedValue.thumbElements.value.push(thumbElement.value)
})

const index = computed<number>(() => {
  if (injectedValue && injectedValue.thumbElements && thumbElement.value) {
    const foundIndex = injectedValue.thumbElements.value.indexOf(
      thumbElement.value,
    )
    if (foundIndex !== -1)
      return foundIndex
  }

  return -1
})

const value = computed<number | undefined>(() => {
  if (injectedValue?.modelValue && index.value !== -1)
    return injectedValue.modelValue.value?.[index.value]

  return undefined
})

const percent = computed(() => {
  if (value.value === undefined)
    return 0

  const minValue = injectedValue?.min.value ?? 0
  const maxValue = injectedValue?.max.value ?? 100

  return convertValueToPercentage(value.value, minValue, maxValue)
})

const offset = computed(() => {
  const offsetPercent = (percent.value - 50) / 50
  const offsetMultiplier = injectedValue?.flipped?.value ?? false ? 1 : -1
  return offsetPercent * 10 * offsetMultiplier
})

const thumbStyle = computed(() => {
  if (!injectedValue)
    return {}

  const { orientation, flipped } = injectedValue
  const style: Record<string, string | number> = {
    position: 'absolute',
    transform:
      orientation === 'vertical' ? 'translateY(-50%)' : 'translateX(-50%)',
  }

  const value = `calc(${
    flipped?.value ? 100 - percent.value : percent.value
  }% + ${offset.value}px)`

  if (orientation === 'vertical')
    style.top = value

  else
    style.left = value

  return style
})

function onKeyDown(e: KeyboardEvent) {
  if (!injectedValue)
    return

  // Prevent default when enter/space
  if (e.keyCode === 32 || e.key === 'Enter')
    e.preventDefault()

  const isShiftPressed = e.shiftKey
  const extraStep = 10
  const step = Number(injectedValue.step.value)

  let newValue = value.value ?? 0

  const isArrowUpOrRight = ['ArrowUp', 'ArrowRight'].includes(e.key)
  const isArrowDownOrLeft = ['ArrowDown', 'ArrowLeft'].includes(e.key)

  if (isArrowUpOrRight || isArrowDownOrLeft) {
    const adjustedExtraStep = isShiftPressed ? extraStep * step : step

    if (injectedValue.flipped?.value)
      newValue += isArrowUpOrRight ? -adjustedExtraStep : adjustedExtraStep

    else
      newValue += isArrowUpOrRight ? adjustedExtraStep : -adjustedExtraStep

    injectedValue.setValueByIndex(
      clamp(newValue, [injectedValue.min.value, injectedValue.max.value]),
      index.value,
    )

    if (['PageUp', 'PageDown'].includes(e.key)) {
      const pageMultiplier = e.key === 'PageUp' ? extraStep : -extraStep
      newValue += step * pageMultiplier

      injectedValue.setValueByIndex(
        clamp(newValue, [injectedValue.min.value, injectedValue.max.value]),
        index.value,
      )
    }

    if (['Home', 'End'].includes(e.key)) {
      newValue = e.key === 'Home' ? injectedValue.min.value : injectedValue.max.value
      injectedValue.setValueByIndex(newValue, index.value)
    }
  }
}
</script>

<template>
  <span :style="thumbStyle">
    <Primitive
      v-bind="$attrs"
      ref="primitiveElement"
      role="slider"
      tabindex="0"
      :data-disabled="injectedValue?.disabled"
      :data-orientation="injectedValue?.orientation"
      :aria-valuenow="value"
      :aria-valuemin="injectedValue?.min"
      :aria-valuemax="injectedValue?.max"
      :aria-orientation="injectedValue?.orientation"
      :as-child="props.asChild"
      :as="as"
      @keydown="onKeyDown"
    />
  </span>
</template>
