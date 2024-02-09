<script lang="ts">
import { type DateValue, isSameDay } from '@internationalized/date'

import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { type Formatter, type Matcher, type WeekDayFormat, createContext, getDefaultDate, handleCalendarInitialFocus, isBefore } from '@/shared'
import { useRangeCalendarState } from './useRangeCalendar'
import { useCalendar } from '@/Calendar'

type RangeCalendarRootContext = {
  modelValue: Ref<{ start: DateValue | undefined; end: DateValue | undefined }>
  startValue: Ref<DateValue | undefined>
  endValue: Ref<DateValue | undefined>
  placeholder: Ref<DateValue>
  pagedNavigation: Ref<boolean>
  preventDeselect: Ref<boolean>
  weekStartsOn: Ref<0 | 1 | 2 | 3 | 4 | 5 | 6>
  weekdayFormat: Ref<WeekDayFormat>
  fixedWeeks: Ref<boolean>
  numberOfMonths: Ref<number>
  disabled: Ref<boolean>
  readonly: Ref<boolean>
  initialFocus: Ref<boolean>
  onPlaceholderChange: (date: DateValue) => void
  fullCalendarLabel: Ref<string>
  parentElement: Ref<HTMLElement | undefined>
  headingValue: Ref<string>
  isInvalid: Ref<boolean>
  nextPage: () => void
  prevPage: () => void
  isDateDisabled: Matcher
  isDateUnavailable?: Matcher
  isOutsideVisibleMonths: (date: DateValue) => boolean
  highlightedRange: Ref<{ start: DateValue; end: DateValue } | null>
  focusedValue: Ref<DateValue | undefined>
  lastPressedDateValue: Ref<DateValue | undefined>
  isSelected: (date: DateValue) => boolean
  isSelectionEnd: (date: DateValue) => boolean
  isSelectionStart: (date: DateValue) => boolean
  isNextButtonDisabled: Ref<boolean>
  isPrevButtonDisabled: Ref<boolean>
  formatter: Formatter
}

export interface RangeCalendarRootProps extends PrimitiveProps {
  modelValue?: { start: DateValue | undefined; end: DateValue | undefined }
  placeholder?: DateValue
  pagedNavigation?: boolean
  preventDeselect?: boolean
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  weekdayFormat?: WeekDayFormat
  calendarLabel?: string
  fixedWeeks?: boolean
  maxValue?: DateValue
  minValue?: DateValue
  locale?: string
  numberOfMonths?: number
  disabled?: boolean
  readonly?: boolean
  initialFocus?: boolean
  isDateDisabled?: Matcher
  isDateUnavailable?: Matcher
}

export type RangeCalendarRootEmits = {
  'update:modelValue': [{ start: DateValue | undefined; end: DateValue | undefined }]
  'update:placeholder': [date: DateValue]
}

export const [injectRangeCalendarRootContext, provideRangeCalendarRootContext]
  = createContext<RangeCalendarRootContext>('RangeCalendarRoot')
</script>

<script setup lang="ts">
import { onMounted, ref, toRefs, watch } from 'vue'
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<RangeCalendarRootProps>(), {
  as: 'div',
  pagedNavigation: false,
  preventDeselect: false,
  weekStartsOn: 0,
  weekdayFormat: 'narrow',
  fixedWeeks: false,
  numberOfMonths: 1,
  disabled: false,
  readonly: false,
  initialFocus: false,
  placeholder: undefined,
  locale: 'en',
  isDateDisabled: undefined,
  isDateUnavailable: undefined,
})
const emits = defineEmits<RangeCalendarRootEmits>()
const { disabled, readonly, initialFocus, pagedNavigation, weekStartsOn, weekdayFormat, fixedWeeks, numberOfMonths, preventDeselect, isDateUnavailable: propsIsDateUnavailable, isDateDisabled: propsIsDateDisabled } = toRefs(props)

const { primitiveElement, currentElement: parentElement }
  = usePrimitiveElement()

const lastPressedDateValue = ref(undefined) as Ref<DateValue | undefined>
const focusedValue = ref(undefined) as Ref<DateValue | undefined>

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: { start: undefined, end: undefined },
  passive: (props.modelValue === undefined) as false,

}) as Ref<{ start: DateValue | undefined; end: DateValue | undefined }>

const startValue = ref(modelValue.value.start) as Ref<DateValue | undefined>
const endValue = ref(modelValue.value.end) as Ref<DateValue | undefined>

const defaultDate = getDefaultDate({
  defaultPlaceholder: props.placeholder,
  defaultValue: props.modelValue?.start,
})

const placeholder = useVModel(props, 'placeholder', emits, {
  defaultValue: defaultDate,
  passive: (props.placeholder === undefined) as false,
}) as Ref<DateValue>

const {
  isDateDisabled,
  isDateUnavailable,
  isNextButtonDisabled,
  isPrevButtonDisabled,
  months,
  weekdays,
  isOutsideVisibleMonths,
  nextPage,
  prevPage,
  formatter,
} = useCalendar({
  locale: props.locale,
  placeholder,
  weekStartsOn: props.weekStartsOn,
  fixedWeeks: props.fixedWeeks,
  numberOfMonths: props.numberOfMonths,
  minValue: props.minValue,
  maxValue: props.maxValue,
  disabled: props.disabled,
  weekdayFormat: props.weekdayFormat,
  pagedNavigation: props.pagedNavigation,
  isDateDisabled: propsIsDateDisabled.value,
  isDateUnavailable: propsIsDateUnavailable.value,
})

const {
  fullCalendarLabel,
  headingValue,
  isInvalid,
  isSelected,
  highlightedRange,
  isSelectionStart,
  isSelectionEnd,
} = useRangeCalendarState({
  formatter,
  locale: props.locale,
  calendarLabel: props.calendarLabel,
  start: startValue,
  end: endValue,
  months,
  isDateDisabled,
  isDateUnavailable,
  focusedValue,
})

watch(modelValue, () => {
  if (modelValue.value.start && modelValue.value.end) {
    if (modelValue.value.start !== startValue.value)
      startValue.value = modelValue.value.start

    if (modelValue.value.end)
      endValue.value = modelValue.value.end
  }
})

watch(startValue, (value) => {
  if (value && !isSameDay(value, placeholder.value))
    placeholder.value = value
})

watch([startValue, endValue], () => {
  if (modelValue.value && modelValue.value.start === startValue.value && modelValue.value.end === endValue.value)
    return

  if (startValue.value && endValue.value) {
    if (isBefore(endValue.value, startValue.value))
      modelValue.value = { start: endValue.value, end: startValue.value }

    else
      modelValue.value = { start: startValue.value, end: endValue.value }
  }
})

provideRangeCalendarRootContext({
  isDateUnavailable,
  startValue,
  endValue,
  formatter,
  modelValue,
  placeholder,
  disabled,
  initialFocus,
  pagedNavigation,
  weekStartsOn,
  weekdayFormat,
  fixedWeeks,
  numberOfMonths,
  readonly,
  preventDeselect,
  fullCalendarLabel,
  headingValue,
  isInvalid,
  isDateDisabled,
  highlightedRange,
  focusedValue,
  lastPressedDateValue,
  isSelected,
  isSelectionEnd,
  isSelectionStart,
  isNextButtonDisabled,
  isPrevButtonDisabled,
  isOutsideVisibleMonths,
  nextPage,
  prevPage,
  parentElement,
  onPlaceholderChange(value) {
    placeholder.value = value
  },
})

onMounted(() => {
  if (initialFocus.value)
    handleCalendarInitialFocus(parentElement.value)
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :as="as"
    :as-child="asChild"
    role="application"
    :aria-label="fullCalendarLabel"
    :data-readonly="readonly ? '' : undefined"
    :data-disabled="disabled ? '' : undefined"
    :data-invalid="isInvalid ? '' : undefined"
  >
    <div style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; white-space: nowrap; width: 1px;">
      <div role="heading" aria-level="2">
        {{ fullCalendarLabel }}
      </div>
    </div>

    <slot :date="modelValue" :months="months" :week-days="weekdays" />
  </Primitive>
</template>
