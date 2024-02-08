<script lang="ts">
import { type DateValue } from '@internationalized/date'

import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import {
  type AnyExceptLiteral,
  type Formatter,
  type Granularity,
  type HourCycle,
  type Matcher,
  type SegmentPart,
  type SegmentValueObj,
  createContext,
  getDefaultDate,
  hasTime,
  isBefore,
  useDateFormatter,
  useKbd,
} from '@/shared'
import { createContent, initializeSegmentValues, isSegmentNavigationKey, syncSegmentValues } from './utils'

type DateFieldRootContext = {
  locale: Ref<string>
  modelValue: Ref<DateValue | undefined>
  placeholder: Ref<DateValue>
  isDateUnavailable?: Matcher
  isInvalid: Ref<boolean>
  disabled: Ref<boolean>
  readonly: Ref<boolean>
  formatter: Formatter
  hourCycle: HourCycle
  segmentValues: Ref<SegmentValueObj>
  segmentContents: Ref<{ part: SegmentPart; value: string }[]>
  elements: Ref<Set<HTMLElement>>
  focusNext: () => void
  setFocusedElement: (el: HTMLElement) => void
}

export interface DateFieldRootProps extends PrimitiveProps {
  defaultValue?: DateValue
  placeholder?: DateValue
  modelValue?: DateValue | undefined
  hourCycle?: HourCycle
  granularity?: Granularity
  hideTimeZone?: boolean
  maxValue?: DateValue
  minValue?: DateValue
  locale?: string
  disabled?: boolean
  readonly?: boolean
  isDateUnavailable?: Matcher
  name?: string
  required?: boolean
  id?: string
}

export type DateFieldRootEmits = {
  'update:modelValue': [date: DateValue | undefined]
  'update:placeholder': [date: DateValue]
}

export const [injectDateFieldRootContext, provideDateFieldRootContext]
  = createContext<DateFieldRootContext>('DateFieldRoot')
</script>

<script setup lang="ts">
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { useVModel } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DateFieldRootProps>(), {
  defaultValue: undefined,
  disabled: false,
  readonly: false,
  placeholder: undefined,
  locale: 'en',
  isDateUnavailable: undefined,
})
const emits = defineEmits<DateFieldRootEmits>()
const { locale, disabled, readonly, isDateUnavailable: propsIsDateUnavailable } = toRefs(props)

const formatter = useDateFormatter(props.locale)
const { primitiveElement, currentElement: parentElement }
  = usePrimitiveElement()
const segmentElements = ref<Set<HTMLElement>>(new Set())

onMounted(() => {
  Array.from(parentElement.value.querySelectorAll('[data-radix-vue-date-field-segment]')).filter(item => item.getAttribute('data-radix-vue-date-field-segment') !== 'literal').forEach(el => segmentElements.value.add(el as HTMLElement))
})

const defaultDate = getDefaultDate({
  defaultPlaceholder: props.placeholder,
  granularity: props.granularity,
  defaultValue: props.modelValue,
})

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? undefined,
  passive: (props.modelValue === undefined) as false,
}) as Ref<DateValue | undefined>

const placeholder = useVModel(props, 'placeholder', emits, {
  defaultValue: defaultDate,
  passive: (props.placeholder === undefined) as false,
}) as Ref<DateValue>

const inferredGranularity = computed(() => {
  if (props.granularity)
    return props.granularity

  return hasTime(placeholder.value) ? 'minute' : 'day'
})

const isInvalid = computed(() => {
  if (!modelValue.value)
    return false

  if (propsIsDateUnavailable.value?.(modelValue.value))
    return true

  if (props.minValue && isBefore(modelValue.value, props.minValue))
    return true

  if (props.maxValue && isBefore(props.maxValue, modelValue.value))
    return true

  return false
})

const initialSegments = initializeSegmentValues(inferredGranularity.value)

const segmentValues = ref<SegmentValueObj>(modelValue.value ? { ...syncSegmentValues({ value: modelValue.value, formatter }) } : { ...initialSegments })

const allSegmentContent = computed(() => createContent({
  granularity: inferredGranularity.value,
  dateRef: placeholder,
  formatter,
  hideTimeZone: props.hideTimeZone,
  hourCycle: props.hourCycle,
  segmentValues: segmentValues.value,
  locale: props.locale,
}))

const segmentContents = computed(() => allSegmentContent.value.arr)

const editableSegmentContents = computed(() => segmentContents.value.filter(({ part }) => part !== 'literal'))

watch(segmentValues, (value) => {
  if (Object.values(value).every(item => item !== null)) {
    let updateObject = { ...value as Record<AnyExceptLiteral, number> }
    if ('dayPeriod' in value) {
      updateObject = {
        ...updateObject,
        hour: value.dayPeriod === 'PM' && !modelValue.value ? value.hour! + 12 : value.hour!,
      }
    }

    let dateRef = placeholder.value
    Object.keys(updateObject).forEach((part) => {
      const value = updateObject[part as AnyExceptLiteral]
      dateRef = dateRef.set({ [part]: value })
    })

    if (modelValue.value && modelValue.value.toString() === dateRef.toString())
      return

    modelValue.value = dateRef
  }
}, { deep: true })

watch(modelValue, (value) => {
  if (value !== undefined && placeholder.value.toString() !== value.toString())
    placeholder.value = value
})

watch(modelValue, (modelValue) => {
  if (modelValue !== undefined)
    segmentValues.value = { ...syncSegmentValues({ value: modelValue, formatter }) }
  else
    segmentValues.value = { ...initialSegments }
})

const currentFocusedElement = ref<HTMLElement | null>(null)

const currentSegmentIndex = computed(() => Array.from(segmentElements.value).findIndex(el => el.getAttribute('data-radix-vue-date-field-segment') === currentFocusedElement.value?.getAttribute('data-radix-vue-date-field-segment')))

const nextFocusableSegment = computed(() => {
  if (currentSegmentIndex.value > segmentElements.value.size - 1)
    return null
  const segmentToFocus = Array.from(segmentElements.value)[currentSegmentIndex.value + 1]
  return segmentToFocus
})
const prevFocusableSegment = computed(() => {
  if (currentSegmentIndex.value < 0)
    return null

  const segmentToFocus = Array.from(segmentElements.value)[currentSegmentIndex.value - 1]
  return segmentToFocus
})

const kbd = useKbd()

function handleKeydown(e: KeyboardEvent) {
  if (!isSegmentNavigationKey(e.key))
    return
  if (e.key === kbd.ARROW_LEFT)
    prevFocusableSegment.value?.focus()
  if (e.key === kbd.ARROW_RIGHT)
    nextFocusableSegment.value?.focus()
}

function setFocusedElement(el: HTMLElement) {
  currentFocusedElement.value = el
}

provideDateFieldRootContext({
  isDateUnavailable: propsIsDateUnavailable.value,
  locale,
  modelValue,
  placeholder,
  disabled,
  formatter,
  hourCycle: props.hourCycle,
  readonly,
  segmentValues,
  isInvalid,
  segmentContents: editableSegmentContents,
  elements: segmentElements,
  setFocusedElement,
  focusNext() {
    nextFocusableSegment.value?.focus()
  },
})

defineExpose({
  setFocusedElement,
})
</script>

<template>
  <Primitive
    v-bind="$attrs"
    ref="primitiveElement"
    role="group"
    :aria-disabled="disabled ? true : undefined"
    :data-disabled="disabled ? '' : undefined"
    :data-readonly="readonly ? '' : undefined"
    :data-invalid="isInvalid ? '' : undefined"
    @keydown.left.right="handleKeydown"
  >
    <slot :model-value="modelValue" :segments="segmentContents" />
  </Primitive>

  <input
    :id="id"
    type="text"
    tabindex="-1"
    aria-hidden
    :value="modelValue?.toString()"
    :name="name"
    :disabled="disabled"
    :required="required"
    :style="{
      transform: 'translateX(-100%)',
      position: 'absolute',
      pointerEvents: 'none',
      opacity: 0,
      margin: 0,
    }"
    @focus="Array.from(segmentElements)?.[0]?.focus()"
  >
</template>
