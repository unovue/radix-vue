<script lang="ts">
import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import type { DataOrientation, Direction } from '../shared/types'
import { createContext, useDirection, useFormControl, useForwardExpose } from '@/shared'
import { CollectionSlot, createCollection } from '@/Collection'

export interface SliderRootProps extends PrimitiveProps {
  name?: string
  /** The value of the slider when initially rendered. Use when you do not need to control the state of the slider. */
  defaultValue?: number[]
  /** The controlled value of the slider. Can be bind as `v-model`. */
  modelValue?: number[]
  /** When `true`, prevents the user from interacting with the slider. */
  disabled?: boolean
  /** The orientation of the slider. */
  orientation?: DataOrientation
  /** The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. */
  dir?: Direction
  /** Whether the slider is visually inverted. */
  inverted?: boolean
  /** The minimum value for the range. */
  min?: number
  /** The maximum value for the range. */
  max?: number
  /** The stepping interval. */
  step?: number
  /** The minimum permitted steps between multiple thumbs. */
  minStepsBetweenThumbs?: number
}

export type SliderRootEmits = {
  /**
   * Event handler called when the slider value changes
   */
  'update:modelValue': [payload: number[] | undefined]
  /**
   * Event handler called when the value changes at the end of an interaction.
   *
   * Useful when you only need to capture a final value e.g. to update a backend service.
   */
  'valueCommit': [payload: number[]]
}

export interface SliderRootContext {
  orientation: Ref<DataOrientation>
  disabled: Ref<boolean>
  min: Ref<number>
  max: Ref<number>
  modelValue?: Readonly<Ref<number[] | undefined>>
  valueIndexToChangeRef: Ref<number>
  thumbElements: Ref<HTMLElement[]>
}

export const [injectSliderRootContext, provideSliderRootContext]
  = createContext<SliderRootContext>('SliderRoot')
</script>

<script setup lang="ts">
import SliderHorizontal from './SliderHorizontal.vue'
import SliderVertical from './SliderVertical.vue'
import { ref, toRaw, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { ARROW_KEYS, PAGE_KEYS, clamp, getClosestValueIndex, getDecimalCount, getNextSortedValues, hasMinStepsBetweenValues, roundValue } from './utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SliderRootProps>(), {
  min: 0,
  max: 100,
  step: 1,
  orientation: 'horizontal',
  disabled: false,
  minStepsBetweenThumbs: 0,
  defaultValue: () => [0],
  inverted: false,
})
const emits = defineEmits<SliderRootEmits>()

defineSlots<{
  default(props: {
    /** Current slider values */
    modelValue: typeof modelValue.value
  }): any
}>()

const { min, max, step, minStepsBetweenThumbs, orientation, disabled, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)
const { forwardRef, currentElement } = useForwardExpose()
const isFormControl = useFormControl(currentElement)

createCollection()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
}) as Ref<number[]>

const valueIndexToChangeRef = ref(0)
const valuesBeforeSlideStartRef = ref(modelValue.value)

function handleSlideStart(value: number) {
  const closestIndex = getClosestValueIndex(modelValue.value, value)
  updateValues(value, closestIndex)
}

function handleSlideMove(value: number) {
  updateValues(value, valueIndexToChangeRef.value)
}

function handleSlideEnd() {
  const prevValue = valuesBeforeSlideStartRef.value[valueIndexToChangeRef.value]
  const nextValue = modelValue.value[valueIndexToChangeRef.value]
  const hasChanged = nextValue !== prevValue
  if (hasChanged)
    emits('valueCommit', toRaw(modelValue.value))
}

function updateValues(value: number, atIndex: number, { commit } = { commit: false }) {
  const decimalCount = getDecimalCount(step.value)
  const snapToStep = roundValue(Math.round((value - min.value) / step.value) * step.value + min.value, decimalCount)
  const nextValue = clamp(snapToStep, [min.value, max.value])

  const nextValues = getNextSortedValues(modelValue.value, nextValue, atIndex)

  if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs.value * step.value)) {
    valueIndexToChangeRef.value = nextValues.indexOf(nextValue)
    const hasChanged = String(nextValues) !== String(modelValue.value)
    if (hasChanged && commit)
      emits('valueCommit', nextValues)

    if (hasChanged) {
      thumbElements.value[valueIndexToChangeRef.value]?.focus()
      modelValue.value = nextValues
    }
  }
}

const thumbElements = ref<HTMLElement[]>([])
provideSliderRootContext({
  modelValue,
  valueIndexToChangeRef,
  thumbElements,
  orientation,
  min,
  max,
  disabled,
})
</script>

<template>
  <CollectionSlot>
    <component
      :is="orientation === 'horizontal' ? SliderHorizontal : SliderVertical"
      v-bind="$attrs"
      :ref="forwardRef"
      :as-child="asChild"
      :as="as"
      :min="min"
      :max="max"
      :dir="dir"
      :inverted="inverted"
      :aria-disabled="disabled"
      :data-disabled="disabled ? '' : undefined"
      @pointerdown="() => {
        if (!disabled) valuesBeforeSlideStartRef = modelValue
      }"
      @slide-start="!disabled && handleSlideStart($event)"
      @slide-move="!disabled && handleSlideMove($event)"
      @slide-end="!disabled && handleSlideEnd()"
      @home-key-down="!disabled && updateValues(min, 0, { commit: true })"
      @end-key-down="!disabled && updateValues(max, modelValue.length - 1, { commit: true })"
      @step-key-down="(event, direction) => {
        if (!disabled) {
          const isPageKey = PAGE_KEYS.includes(event.key);
          const isSkipKey = isPageKey || (event.shiftKey && ARROW_KEYS.includes(event.key));
          const multiplier = isSkipKey ? 10 : 1;
          const atIndex = valueIndexToChangeRef;
          const value = modelValue[atIndex];
          const stepInDirection = step * multiplier * direction;
          updateValues(value + stepInDirection, atIndex, { commit: true });
        }
      }"
    >
      <slot :model-value="modelValue" />
    </component>
  </CollectionSlot>

  <template v-if="isFormControl">
    <input
      v-for="(value, index) in modelValue"
      :key="index"
      :value="value"
      type="number"
      style="display: none"
      :name="name ? name + (modelValue.length > 1 ? '[]' : '') : undefined"
      :disabled="disabled"
      :step="step"
    >
  </template>
</template>
