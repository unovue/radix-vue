<script lang="ts">
import { type DateValue, isSameDay } from '@internationalized/date'

import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { type Formatter, type Matcher, type WeekDayFormat, createContext, getDefaultDate, handleCalendarInitialFocus } from '@/shared'
import { useCalendar, useCalendarState } from './useCalendar'

type CalendarRootContext = {
  locale: Ref<string>
  modelValue: Ref<DateValue | DateValue[] | undefined>
  placeholder: Ref<DateValue>
  pagedNavigation: Ref<boolean>
  preventDeselect: Ref<boolean>
  weekStartsOn: Ref<0 | 1 | 2 | 3 | 4 | 5 | 6>
  weekdayFormat: Ref<WeekDayFormat>
  fixedWeeks: Ref<boolean>
  multiple: Ref<boolean>
  numberOfMonths: Ref<number>
  disabled: Ref<boolean>
  readonly: Ref<boolean>
  initialFocus: Ref<boolean>
  onDateChange: (date: DateValue) => void
  onPlaceholderChange: (date: DateValue) => void
  fullCalendarLabel: Ref<string>
  parentElement: Ref<HTMLElement | undefined>
  headingValue: Ref<string>
  isInvalid: Ref<boolean>
  nextPage: () => void
  prevPage: () => void
  isDateDisabled: Matcher
  isDateSelected: Matcher
  isDateUnavailable?: Matcher
  isOutsideVisibleMonths: (date: DateValue) => boolean
  isNextButtonDisabled: Ref<boolean>
  isPrevButtonDisabled: Ref<boolean>
  formatter: Formatter
}

interface BaseCalendarRootProps extends PrimitiveProps {
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

interface MultipleCalendarRootProps extends BaseCalendarRootProps {
  modelValue?: DateValue[] | undefined
  multiple: true
}

interface SingleCalendarRootProps extends BaseCalendarRootProps {
  modelValue?: DateValue | undefined
  multiple?: false
}

export type CalendarRootProps = MultipleCalendarRootProps | SingleCalendarRootProps

export type CalendarRootEmits = {
  'update:modelValue': [date: DateValue | undefined]
  'update:placeholder': [date: DateValue]
}

export const [injectCalendarRootContext, provideCalendarRootContext]
  = createContext<CalendarRootContext>('CalendarRoot')
</script>

<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<CalendarRootProps>(), {
  as: 'div',
  pagedNavigation: false,
  preventDeselect: false,
  weekStartsOn: 0,
  weekdayFormat: 'narrow',
  fixedWeeks: false,
  multiple: false,
  numberOfMonths: 1,
  disabled: false,
  readonly: false,
  initialFocus: false,
  placeholder: undefined,
  locale: 'en',
  isDateDisabled: undefined,
  isDateUnavailable: undefined,
})
const emits = defineEmits<CalendarRootEmits>()
const { locale, disabled, readonly, initialFocus, pagedNavigation, weekStartsOn, weekdayFormat, fixedWeeks, multiple, numberOfMonths, preventDeselect, isDateDisabled: propsIsDateDisabled, isDateUnavailable: propsIsDateUnavailable } = toRefs(props)

const { primitiveElement, currentElement: parentElement }
  = usePrimitiveElement()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: multiple.value ? [] : undefined,
  passive: (props.modelValue === undefined) as false,
}) as Ref<DateValue | DateValue[] | undefined>

const defaultDate = getDefaultDate({
  defaultPlaceholder: props.placeholder,
  defaultValue: props.modelValue,
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
  isDateSelected,
} = useCalendarState({
  date: modelValue,
  formatter,
  months,
  isDateDisabled,
  isDateUnavailable,
  locale: props.locale,
  calendarLabel: props.calendarLabel,
})

function onDateChange(value: DateValue) {
  if (!multiple.value) {
    if (!modelValue.value) {
      modelValue.value = placeholder.value.set({ ...value })
      return
    }

    if (isSameDay(modelValue.value as DateValue, value)) {
      placeholder.value = placeholder.value.set({ ...value })
      modelValue.value = undefined
    }
    else {
      modelValue.value = placeholder.value.set({ ...value })
    }
  }
  else if (Array.isArray(modelValue.value)) {
    if (!modelValue.value) {
      modelValue.value = [placeholder.value.set({ ...value })]
      return
    }

    const index = modelValue.value.findIndex(date => isSameDay(date, value))
    if (index === -1) {
      modelValue.value = [...modelValue.value, value]
    }
    else {
      const next = modelValue.value.filter(date => !isSameDay(date, value))
      if (!next.length) {
        placeholder.value = placeholder.value.set({ ...value })
        modelValue.value = []
        return
      }
      modelValue.value = next.map(date => placeholder.value.set({ ...date }))
    }
  }
}

onMounted(() => {
  if (initialFocus.value)
    handleCalendarInitialFocus(parentElement.value)
})

provideCalendarRootContext({
  isDateUnavailable,
  isDateDisabled,
  locale,
  formatter,
  modelValue,
  placeholder,
  disabled,
  initialFocus,
  pagedNavigation,
  weekStartsOn,
  weekdayFormat,
  fixedWeeks,
  multiple,
  numberOfMonths,
  readonly,
  preventDeselect,
  fullCalendarLabel,
  headingValue,
  isInvalid,
  isDateSelected,
  isNextButtonDisabled,
  isPrevButtonDisabled,
  isOutsideVisibleMonths,
  nextPage,
  prevPage,
  parentElement,
  onPlaceholderChange(value) {
    placeholder.value = placeholder.value.set({ ...value })
  },
  onDateChange,
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
