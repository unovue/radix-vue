<script lang="ts">
import { type DateValue, isSameDay } from '@internationalized/date'

import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { type Formatter, createContext } from '@/shared'
import type { CalendarHeadingSegmentValue, CalendarView, Matcher, WeekDayFormat } from '@/shared/date'
import { getDefaultDate, handleCalendarInitialFocus, isBefore } from '@/shared/date'
import { useRangeCalendarState } from './useRangeCalendar'
import { useCalendar } from '@/Calendar/useCalendar'

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
  headingValue: Ref<CalendarHeadingSegmentValue[]>
  isInvalid: Ref<boolean>
  nextPage: () => void
  prevPage: () => void
  isDateDisabled: Matcher
  isDateUnavailable?: Matcher
  isOutsideVisibleView: (date: DateValue) => boolean
  highlightedRange: Ref<{ start: DateValue; end: DateValue } | null>
  focusedValue: Ref<DateValue | undefined>
  lastPressedDateValue: Ref<DateValue | undefined>
  isSelected: (date: DateValue) => boolean
  isSelectionEnd: (date: DateValue) => boolean
  isSelectionStart: (date: DateValue) => boolean
  isNextButtonDisabled: Ref<boolean>
  isPrevButtonDisabled: Ref<boolean>
  formatter: Formatter
  setView: (view: CalendarView) => void
  calendarView: Ref<CalendarView>
  columns: Ref<number>
}

export interface RangeCalendarRootProps extends PrimitiveProps {
  /** The default value for the calendar */
  defaultValue?: { start: DateValue; end: DateValue }
  /** The initial view of the calendar when it is rendered */
  initialView?: CalendarView
  /** The controlled checked state of the calendar. Can be bound as `v-model`. */
  modelValue?: { start: DateValue | undefined; end: DateValue | undefined }
  /** The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programatically control the calendar view */
  placeholder?: DateValue
  /** This property causes the previous and next buttons to navigate by the number of months displayed at once, rather than one month */
  pagedNavigation?: boolean
  /** Whether or not to prevent the user from deselecting a date without selecting another date first */
  preventDeselect?: boolean
  /** The day of the week to start the calendar on */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  /** The format to use for the weekday strings provided via the weekdays slot prop */
  weekdayFormat?: WeekDayFormat
  /** The accessible label for the calendar */
  calendarLabel?: string
  /** Whether or not to always display 6 weeks in the calendar */
  fixedWeeks?: boolean
  /** The maximum date that can be selected */
  maxValue?: DateValue
  /** The minimum date that can be selected */
  minValue?: DateValue
  /** The locale to use for formatting dates */
  locale?: string
  /** The number of months to display at once */
  numberOfMonths?: number
  /** Whether or not the calendar is disabled */
  disabled?: boolean
  /** Whether or not the calendar is readonly */
  readonly?: boolean
  /** If true, the calendar will focus the selected day, today, or the first day of the month depending on what is visible when the calendar is mounted */
  initialFocus?: boolean
  /** A function that returns whether or not a date is disabled */
  isDateDisabled?: Matcher
  /** A function that returns whether or not a date is unavailable */
  isDateUnavailable?: Matcher
  /** The number of columns the grid should be divided for year and decade views */
  columns?: number
}

export type RangeCalendarRootEmits = {
  /** Event handler called whenever the model value changes */
  'update:modelValue': [{ start: DateValue | undefined; end: DateValue | undefined }]
  /** Event handler called whenever the placeholder value changes */
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
  defaultValue: undefined,
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
  initialView: 'month',
  columns: 4,
})
const emits = defineEmits<RangeCalendarRootEmits>()
const {
  disabled,
  readonly,
  initialFocus,
  pagedNavigation,
  weekStartsOn,
  weekdayFormat,
  fixedWeeks,
  numberOfMonths,
  preventDeselect,
  isDateUnavailable: propsIsDateUnavailable,
  isDateDisabled: propsIsDateDisabled,
  columns,
} = toRefs(props)

const calendarView = ref(props.initialView)

const { primitiveElement, currentElement: parentElement }
  = usePrimitiveElement()

const lastPressedDateValue = ref(undefined) as Ref<DateValue | undefined>
const focusedValue = ref(undefined) as Ref<DateValue | undefined>

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? { start: undefined, end: undefined },
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
  grid,
  weekdays,
  isOutsideVisibleView,
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
  calendarView,
  columns,
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
  grid,
  calendarView,
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
  columns,
  isSelectionStart,
  isNextButtonDisabled,
  isPrevButtonDisabled,
  setView(view) {
    calendarView.value = view
  },
  isOutsideVisibleView,
  nextPage,
  prevPage,
  parentElement,
  calendarView,
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
    :data-radix-vue-calendar-view="calendarView"
  >
    <div style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; white-space: nowrap; width: 1px;">
      <div role="heading" aria-level="2">
        {{ fullCalendarLabel }}
      </div>
    </div>

    <slot
      :date="placeholder"
      :grid="grid"
      :calendar-view="calendarView"
      :week-days="weekdays"
      :formatter="formatter"
    />
  </Primitive>
</template>
