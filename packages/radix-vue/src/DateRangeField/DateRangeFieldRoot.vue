<script lang="ts">
import { type DateValue } from '@internationalized/date'

import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { type Formatter, createContext, useDateFormatter, useKbd } from '@/shared'
import {
  type AnyExceptLiteral,
  type Granularity,
  type HourCycle,
  type Matcher,
  type SegmentPart,
  type SegmentValueObj,
  type SupportedLocale,
  areAllDaysBetweenValid,
  getDefaultDate,
  hasTime,
  isBefore,
} from '@/shared/date'
import { createContent, initializeSegmentValues, isSegmentNavigationKey, syncSegmentValues } from '@/DateField/utils'

export type DateRangeType = 'start' | 'end'

type DateRangeFieldRootContext = {
  locale: Ref<SupportedLocale>
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
  defaultDate: DateValue
}

export interface DateRangeFieldRootProps extends PrimitiveProps {
  /** The default value for the calendar */
  defaultValue?: { start: DateValue | undefined; end: DateValue | undefined }
  /** The default placeholder date */
  defaultPlaceholder?: DateValue
  /** The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programatically control the calendar view */
  placeholder?: DateValue
  /** The controlled checked state of the calendar. Can be bound as `v-model`. */
  modelValue?: { start: DateValue | undefined;end: DateValue | undefined }
  /** The hour cycle used for formatting times. Defaults to the local preference */
  hourCycle?: HourCycle
  /** The granularity to use for formatting times. Defaults to day if a CalendarDate is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity */
  granularity?: Granularity
  /** Whether or not to hide the time zone segment of the field */
  hideTimeZone?: boolean
  /** The maximum date that can be selected */
  maxValue?: DateValue
  /** The locale to use for formatting dates */
  minValue?: DateValue
  /** Whether or not the calendar is readonly */
  locale?: SupportedLocale

  /** Whether or not the date field is disabled */
  disabled?: boolean
  /** Whether or not the date field is readonly */
  readonly?: boolean
  /** A function that returns whether or not a date is unavailable */
  isDateUnavailable?: Matcher
  /** The name of the date field. Submitted with its owning form as part of a name/value pair. */
  name?: string/** When `true`, indicates that the user must check the date field before the owning form can be submitted. */
  /** When `true`, indicates that the user must check the date field before the owning form can be submitted. */
  required?: boolean
  /** Id of the element */
  id?: string
}

export type DateRangeFieldRootEmits = {
  /** Event handler called whenever the model value changes */
  'update:modelValue': [{ start: DateValue | undefined; end: DateValue | undefined }]
  /** Event handler called whenever the placeholder value changes */
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

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? { start: undefined, end: undefined },
  passive: (props.modelValue === undefined) as false,
}) as Ref<{ start: DateValue | undefined; end: DateValue | undefined }>

const defaultDate = getDefaultDate({
  defaultPlaceholder: props.placeholder,
  granularity: props.granularity,
  defaultValue: modelValue.value.start,
})

const placeholder = useVModel(props, 'placeholder', emits, {
  defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
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
    return false

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
  dateRef: placeholder.value,
  formatter,
  hideTimeZone: props.hideTimeZone,
  hourCycle: props.hourCycle,
  segmentValues: startSegmentValues.value,
  locale: props.locale,
}))

const endSegmentContent = computed(() => createContent({
  granularity: inferredGranularity.value,
  dateRef: placeholder.value,
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

const startValue = ref(defaultDate.set({ ...modelValue.value.start })) as Ref<DateValue | undefined>
const endValue = ref(defaultDate.set({ ...modelValue.value.end })) as Ref<DateValue | undefined>

watch([startValue, endValue], ([startValue, endValue]): void => {
  if (modelValue.value.start && modelValue.value.end && startValue && endValue && modelValue.value.start.toString() === startValue.toString() && modelValue.value.end.toString() === endValue.toString())
    return

  if (startValue && endValue) {
    modelValue.value = { start: defaultDate.set({ ...startValue }), end: defaultDate.set({ ...endValue }) }
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

    let dateRef = defaultDate.set({ ...placeholder.value })
    Object.keys(updateObject).forEach((part) => {
      const value = updateObject[part as AnyExceptLiteral]
      dateRef = dateRef.set({ [part]: value })
    })
    if (startValue.value && startValue.value.toString() === dateRef.toString())
      return
    startValue.value = defaultDate.set({ ...dateRef })
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

    let dateRef = defaultDate.set({ ...placeholder.value })
    Object.keys(updateObject).forEach((part) => {
      const value = updateObject[part as AnyExceptLiteral]
      dateRef = dateRef.set({ [part]: value })
    })
    if (endValue.value && endValue.value.toString() === dateRef.toString())
      return
    endValue.value = defaultDate.set({ ...dateRef })
  }
}, { deep: true })

watch(modelValue, (value) => {
  if (value.start)
    startValue.value = defaultDate.set({ ...value.start })

  if (value.end)
    endValue.value = defaultDate.set({ ...value.end })

  if (value.start !== undefined && placeholder.value.toString() !== value.start.toString())
    placeholder.value = defaultDate.set({ ...value.start })
})

watch(startValue, (modelValue) => {
  if (modelValue !== undefined)
    startSegmentValues.value = { ...syncSegmentValues({ value: modelValue, formatter }) }
  else
    startSegmentValues.value = { ...initialSegments }
})

watch(modelValue, (value) => {
  if (value.start !== undefined && placeholder.value.toString() !== value.start.toString())
    placeholder.value = defaultDate.set({ ...value.start })
})

watch(endValue, (modelValue) => {
  if (modelValue !== undefined)
    endSegmentValues.value = { ...syncSegmentValues({ value: modelValue, formatter }) }
  else
    endSegmentValues.value = { ...initialSegments }
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
  defaultDate,
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
