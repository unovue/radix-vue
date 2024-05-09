<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useVModel } from '@vueuse/core'
import { clamp, createContext, snapValueToStep } from '@/shared'
import { type Ref, computed, ref, toRefs } from 'vue'

export interface NumberFieldRootProps extends PrimitiveProps {
  defaultValue?: number
  modelValue?: number
  /** The smallest value allowed for the input. */
  min?: number
  /** The largest value allowed for the input. */
  max?: number
  /** The amount that the input value changes with each increment or decrement "tick". */
  step?: number
  disabled?: boolean
  /** Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user. */
  formatOptions?: Intl.NumberFormatOptions
}

export type NumberFieldRootEmits = {
  'update:modelValue': [val: number]
}

interface NumberFieldRootContext {
  modelValue: Ref<number>
  handleIncrease: () => void
  handleDecrease: () => void
  inputEl: Ref<HTMLInputElement | undefined>
  onInputElement: (el: HTMLInputElement) => void
  textValue: Ref<string>
  validate: (val: string) => boolean
  applyInputValue: (val: string) => void
  disabled: Ref<boolean>
  isMin: Ref<boolean>
  isMax: Ref<boolean>
}

export const [injectNumberFieldRootContext, provideNumberFieldRootContext] = createContext<NumberFieldRootContext>('NumberFieldRoot')
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { useNumberFormatter, useNumberParser } from './utils'

const props = withDefaults(defineProps<NumberFieldRootProps>(), {
  as: 'div',
  defaultValue: 0,
})
const emits = defineEmits<NumberFieldRootEmits>()
const { disabled, min, max } = toRefs(props)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
}) as Ref<number>

const inputEl = ref<HTMLInputElement>()

const isMin = computed(() => clampInputValue(modelValue.value) === min.value)
const isMax = computed(() => clampInputValue(modelValue.value) === max.value)
function handleIncrease() {
  modelValue.value = clampInputValue(modelValue.value + 1)
}
function handleDecrease() {
  modelValue.value = clampInputValue(modelValue.value - 1)
}

// Formatter
const numberFormatter = useNumberFormatter(props.formatOptions)
const numberParser = useNumberParser(props.formatOptions)
const intlOptions = computed(() => numberFormatter.resolvedOptions())

// Replace negative textValue formatted using currencySign: 'accounting'
// with a textValue that can be announced using a minus sign.
const textValueFormatter = useNumberFormatter({ ...props.formatOptions, currencySign: undefined })
const textValue = computed(() => Number.isNaN(modelValue.value) ? '' : textValueFormatter.format(modelValue.value))

function validate(val: string) {
  return numberParser.isValidPartialNumber(val, min.value, max.value)
}

function setInputValue(val: string) {
  if (inputEl.value)
    inputEl.value.value = val
}

function clampInputValue(val: number) {
  // Clamp to min and max, round to the nearest step, and round to specified number of digits
  let clampedValue: number
  if (props.step === undefined || Number.isNaN(props.step))
    clampedValue = clamp(val, min.value, max.value)
  else
    clampedValue = snapValueToStep(val, min.value, max.value, props.step)

  clampedValue = numberParser.parse(numberFormatter.format(clampedValue))
  return clampedValue
}

function applyInputValue(val: string) {
  const parsedValue = numberParser.parse(val)
  // modelValue.value = Number.isNaN(newValue) ? Number.NaN : newValue

  // Set to empty state if input value is empty
  if (!val.length)
    return setInputValue(modelValue.value === undefined ? '' : textValue.value)

  // if it failed to parse, then reset input to formatted version of current number
  if (Number.isNaN(parsedValue))
    return setInputValue(textValue.value)

  modelValue.value = clampInputValue(parsedValue)
  return setInputValue(textValue.value)
}

provideNumberFieldRootContext({
  modelValue,
  handleDecrease,
  handleIncrease,
  inputEl,
  onInputElement: el => inputEl.value = el,
  textValue,
  validate,
  applyInputValue,
  disabled,
  isMin,
  isMax,
})
</script>

<template>
  <Primitive
    role="group"
    v-bind="props"
  >
    <slot />
  </Primitive>
</template>
