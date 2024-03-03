<script lang="ts">
import { type DateValue, isSameDay } from '@internationalized/date'

import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { type Formatter, createContext } from '@/shared'
import { createDecade, createYear, getDefaultDate, handleCalendarInitialFocus, isBefore } from '@/shared/date'
import type { Grid, Matcher, SupportedLocale, WeekDayFormat } from '@/shared/date'
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
  headingValue: Ref<string>
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
  defaultDate: DateValue
}

export interface RangeCalendarRootProps extends PrimitiveProps {
  /** The default placeholder date */
  defaultPlaceholder?: DateValue
  /** The default value for the calendar */
  defaultValue?: { start: DateValue; end: DateValue }
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
  locale?: SupportedLocale
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
import { computed, onMounted, ref, toRefs, watch } from 'vue'
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
})
const emits = defineEmits<RangeCalendarRootEmits>()

defineSlots<{
  default(props: {
    /** The current date of the placeholder */
    date: DateValue
    /** The grid of dates */
    grid: Grid<DateValue>[]
    /** The days of the week */
    weekDays: string[]
    /** The formatter used inside the calendar for displaying dates */
    formatter: Formatter
    /** The months that can be selected */
    getMonths: DateValue[]
    /** The years that can be selected */
    getYears: ({ startIndex, endIndex }: { startIndex?: number; endIndex: number }) => DateValue[]
  }): any
}>()

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
  calendarLabel,
  maxValue,
  minValue,
} = toRefs(props)

const { primitiveElement, currentElement: parentElement }
  = usePrimitiveElement()

const lastPressedDateValue = ref() as Ref<DateValue | undefined>
const focusedValue = ref() as Ref<DateValue | undefined>

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? { start: undefined, end: undefined },
  passive: (props.modelValue === undefined) as false,
}) as Ref<{ start: DateValue | undefined; end: DateValue | undefined }>

const defaultDate = getDefaultDate({
  defaultPlaceholder: props.placeholder,
  defaultValue: modelValue.value.start,
})

const startValue = ref(modelValue.value.start) as Ref<DateValue | undefined>
const endValue = ref(modelValue.value.end) as Ref<DateValue | undefined>

const placeholder = useVModel(props, 'placeholder', emits, {
  defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
  passive: (props.placeholder === undefined) as false,
}) as Ref<DateValue>

function onPlaceholderChange(value: DateValue) {
  placeholder.value = defaultDate.set({ ...value })
}

const {
  fullCalendarLabel,
  headingValue,
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
  minValue,
  maxValue,
  disabled,
  weekdayFormat: props.weekdayFormat,
  pagedNavigation: props.pagedNavigation,
  isDateDisabled: propsIsDateDisabled.value,
  isDateUnavailable: propsIsDateUnavailable.value,
  calendarLabel: calendarLabel.value,
})

const {
  isInvalid,
  isSelected,
  highlightedRange,
  isSelectionStart,
  isSelectionEnd,
} = useRangeCalendarState({
  start: startValue,
  end: endValue,
  grid,
  isDateDisabled,
  isDateUnavailable,
  focusedValue,
})

watch(modelValue, () => {
  if (modelValue.value.start && modelValue.value.end) {
    if (modelValue.value.start.toString() !== startValue.value?.toString())
      startValue.value = defaultDate.set({ ...modelValue.value.start })

    if (modelValue.value.end.toString() !== endValue.value?.toString())
      endValue.value = defaultDate.set({ ...modelValue.value.end })
  }
})

watch(startValue, (value) => {
  if (value && !isSameDay(value, placeholder.value))
    onPlaceholderChange(value)
})

watch([startValue, endValue], () => {
  if (modelValue.value && modelValue.value.start?.toString() === startValue.value?.toString() && modelValue.value.end?.toString() === endValue.value?.toString())
    return

  if (startValue.value && endValue.value) {
    if (isBefore(endValue.value, startValue.value)) {
      modelValue.value = {
        start: defaultDate.set({ ...endValue.value }),
        end: defaultDate.set({ ...startValue.value }),
      }
    }

    else {
      modelValue.value = {
        start: defaultDate.set({ ...startValue.value }),
        end: defaultDate.set({ ...endValue.value }),
      }
    }
  }
})

const getMonths = computed(() => {
  const dateObj = defaultDate.set({ ...placeholder.value })
  return createYear({
    dateObj,
    minValue: minValue.value,
    maxValue: maxValue.value,
    numberOfMonths: numberOfMonths.value,
    pagedNavigation: pagedNavigation.value,
  })
})

function getYears({ startIndex, endIndex }: { startIndex?: number; endIndex: number }) {
  const dateObj = defaultDate
  return createDecade({
    dateObj,
    startIndex,
    endIndex,
    minValue: minValue.value,
    maxValue: maxValue.value,
  })
}

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
  isOutsideVisibleView,
  nextPage,
  prevPage,
  parentElement,
  defaultDate,
  onPlaceholderChange,
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

    <slot
      :date="defaultDate.set({ ...placeholder })"
      :grid="grid"
      :week-days="weekdays"
      :formatter="formatter"
      :get-months="getMonths"
      :get-years="getYears"
    />
  </Primitive>
</template>
