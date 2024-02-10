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
  areAllDaysBetweenValid,
  createContext,
  getDefaultDate,
  hasTime,
  isBefore,
  useDateFormatter,
  useKbd,
} from '@/shared'
import { createContent, initializeSegmentValues, isSegmentNavigationKey, syncSegmentValues } from '@/DateField'

export type DateRangeType = 'start' | 'end'

type DateRangeFieldRootContext = {
  locale: Ref<string>
  modelValue: Ref<{ start: DateValue | undefined;end: DateValue | undefined }>
  placeholder: Ref<DateValue>
  isDateUnavailable?: Matcher
  isInvalid: Ref<boolean>
  disabled: Ref<boolean>
  readonly: Ref<boolean>
  formatter: Formatter
  hourCycle: HourCycle
  segmentValues: Record<DateRangeType, Ref<SegmentValueObj>>
  segmentContents: Ref<{ start: { part: SegmentPart; value: string }[]; end: { part: SegmentPart; value: string }[] }>
  elements: Ref<Set<HTMLElement>>
  focusNext: () => void
  setFocusedElement: (el: HTMLElement) => void
}

export interface DateRangeFieldRootProps extends PrimitiveProps {
  defaultValue?: { start: DateValue; end: DateValue }
  placeholder?: DateValue
  modelValue?: { start: DateValue | undefined;end: DateValue | undefined }
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

export type DateRangeFieldRootEmits = {
  'update:modelValue': [{ start: DateValue | undefined; end: DateValue | undefined }]
  'update:placeholder': [date: DateValue]
}

export const [injectDateRangeFieldRootContext, provideDateRangeFieldRootContext]
  = createContext<DateRangeFieldRootContext>('DateRangeFieldRoot')
</script>

<script setup lang="ts">
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { useVModel } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DateRangeFieldRootProps>(), {
  defaultValue: undefined,
  disabled: false,
  readonly: false,
  placeholder: undefined,
  locale: 'en',
  isDateUnavailable: undefined,
})
const emits = defineEmits<DateRangeFieldRootEmits>()
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
  defaultValue: props.modelValue?.start,
})

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? { start: undefined, end: undefined },
  passive: (props.modelValue === undefined) as false,
}) as Ref<{ start: DateValue | undefined; end: DateValue | undefined }>

const placeholder = useVModel(props, 'placeholder', emits, {
  defaultValue: defaultDate,
  passive: (props.placeholder === undefined) as false,
}) as Ref<DateValue>

const inferredGranularity = computed(() => {
  if (props.granularity)
    return props.granularity

  return hasTime(placeholder.value) ? 'minute' : 'day'
})

const isStartInvalid = computed(() => {
  if (!modelValue.value.start)
    return false

  if (propsIsDateUnavailable.value?.(modelValue.value.start))
    return true

  if (props.minValue && isBefore(modelValue.value.start, props.minValue))
    return true

  if (props.maxValue && isBefore(props.maxValue, modelValue.value.start))
    return true

  return false
})

const isEndInvalid = computed(() => {
  if (!modelValue.value.end)
    return false

  if (propsIsDateUnavailable.value?.(modelValue.value.end))
    return true

  if (props.minValue && isBefore(modelValue.value.end, props.minValue))
    return true

  if (props.maxValue && isBefore(props.maxValue, modelValue.value.end))
    return true

  return false
})

const isInvalid = computed(() => {
  if (isStartInvalid.value || isEndInvalid.value)
    return true

  if (!modelValue.value.start || !modelValue.value.end)
    return true

  if (!isBefore(modelValue.value.start, modelValue.value.end))
    return true

  if (propsIsDateUnavailable.value !== undefined) {
    const allValid = areAllDaysBetweenValid(
      modelValue.value.start,
      modelValue.value.end,
      propsIsDateUnavailable.value,
      undefined,
    )
    if (!allValid)
      return true
  }
  return false
})

const initialSegments = initializeSegmentValues(inferredGranularity.value)

const startSegmentValues = ref<SegmentValueObj>(modelValue.value.start ? { ...syncSegmentValues({ value: modelValue.value.start, formatter }) } : { ...initialSegments })
const endSegmentValues = ref<SegmentValueObj>(modelValue.value.end ? { ...syncSegmentValues({ value: modelValue.value.end, formatter }) } : { ...initialSegments })

const startSegmentContent = computed(() => createContent({
  granularity: inferredGranularity.value,
  dateRef: placeholder,
  formatter,
  hideTimeZone: props.hideTimeZone,
  hourCycle: props.hourCycle,
  segmentValues: startSegmentValues.value,
  locale: props.locale,
}))

const endSegmentContent = computed(() => createContent({
  granularity: inferredGranularity.value,
  dateRef: placeholder,
  formatter,
  hideTimeZone: props.hideTimeZone,
  hourCycle: props.hourCycle,
  segmentValues: endSegmentValues.value,
  locale: props.locale,
}))

const segmentContents = computed(() => ({
  start: startSegmentContent.value.arr,
  end: endSegmentContent.value.arr,
}))

const editableSegmentContents = computed(() => ({ start: segmentContents.value.start.filter(({ part }) => part !== 'literal'), end: segmentContents.value.end.filter(({ part }) => part !== 'literal') }))

const startValue = ref(modelValue.value.start) as Ref<DateValue | undefined>
const endValue = ref(modelValue.value.end) as Ref<DateValue | undefined>

watch([startValue, endValue], ([startValue, endValue]): void => {
  if (modelValue.value.start && modelValue.value.end && startValue && endValue && modelValue.value.start.toString() === startValue.toString() && modelValue.value.end.toString() === endValue.toString())
    return

  if (startValue && endValue) {
    modelValue.value = { start: startValue, end: endValue }
    return
  }

  modelValue.value = { start: undefined, end: undefined }
})

watch(startSegmentValues, (value) => {
  if (Object.values(value).every(item => item !== null)) {
    let updateObject = { ...value as Record<AnyExceptLiteral, number> }
    if ('dayPeriod' in value) {
      updateObject = {
        ...updateObject,
        hour: value.dayPeriod === 'PM' && !startValue.value ? value.hour! + 12 : value.hour!,
      }
    }

    let dateRef = placeholder.value
    Object.keys(updateObject).forEach((part) => {
      const value = updateObject[part as AnyExceptLiteral]
      dateRef = dateRef.set({ [part]: value })
    })
    if (startValue.value && startValue.value.toString() === dateRef.toString())
      return
    startValue.value = dateRef
  }
}, { deep: true })

watch(endSegmentValues, (value) => {
  if (Object.values(value).every(item => item !== null)) {
    let updateObject = { ...value as Record<AnyExceptLiteral, number> }
    if ('dayPeriod' in value) {
      updateObject = {
        ...updateObject,
        hour: value.dayPeriod === 'PM' && !endValue.value ? value.hour! + 12 : value.hour!,
      }
    }

    let dateRef = placeholder.value
    Object.keys(updateObject).forEach((part) => {
      const value = updateObject[part as AnyExceptLiteral]
      dateRef = dateRef.set({ [part]: value })
    })
    if (endValue.value && endValue.value.toString() === dateRef.toString())
      return
    endValue.value = dateRef
  }
}, { deep: true })

watch(modelValue, (value) => {
  if (value.start && value.start.toString() !== startValue.value?.toString())
    startValue.value = value.start

  if (value.end && value.end.toString() !== endValue.value?.toString())
    endValue.value = value.end
})

const currentFocusedElement = ref<HTMLElement | null>(null)

const currentSegmentIndex = computed(() => Array.from(segmentElements.value).findIndex(el =>
  el.getAttribute('data-radix-vue-date-field-segment') === currentFocusedElement.value?.getAttribute('data-radix-vue-date-field-segment')
&& el.getAttribute('data-radix-vue-date-range-field-segment-type') === currentFocusedElement.value?.getAttribute('data-radix-vue-date-range-field-segment-type')))

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

provideDateRangeFieldRootContext({
  isDateUnavailable: propsIsDateUnavailable.value,
  locale,
  modelValue,
  placeholder,
  disabled,
  formatter,
  hourCycle: props.hourCycle,
  readonly,
  segmentValues: { start: startSegmentValues, end: endSegmentValues },
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
    :value="`${modelValue.start?.toString()} - ${modelValue.end?.toString()}`"
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
