/*
  * Adapted from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/builders/range-calendar/create.ts
*/

import { type DateValue, isSameDay } from '@internationalized/date'
import { type Ref, computed, ref } from 'vue'
import { type Matcher, type Month, type WeekDayFormat, areAllDaysBetweenValid, createMonths, isAfter, isBefore, isBetween, toDate, useDateFormatter } from '@/shared'

export type UseRangeCalendarProps = {
  locale: string
  placeholder: Ref<DateValue>
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6
  start: Ref<DateValue | undefined>
  end: Ref<DateValue | undefined>
  fixedWeeks: boolean
  numberOfMonths: number
  minValue?: DateValue
  maxValue?: DateValue
  disabled: boolean
  calendarLabel?: string
  weekdayFormat: WeekDayFormat
  pagedNavigation: boolean
  isDateDisabled?: Matcher
  isDateUnavailable?: Matcher
  focusedValue: Ref<DateValue | undefined>
}

export function useRangeCalendar(props: UseRangeCalendarProps) {
  const lastPressedDateValue = ref(undefined) as Ref<DateValue | undefined>
  const formatter = useDateFormatter(props.locale)

  const months = computed<Month<DateValue>[]>(() =>
    createMonths({
      dateObj: props.placeholder.value,
      weekStartsOn: props.weekStartsOn,
      locale: props.locale,
      fixedWeeks: props.fixedWeeks,
      numberOfMonths: props.numberOfMonths,
    }),
  ) as Ref<Month<DateValue>[]>

  const visibleMonths = computed(() => months.value.map(month => month.value))

  function isOutsideVisibleMonths(date: DateValue) {
    return !visibleMonths.value.includes(date)
  }

  const isNextButtonDisabled = computed(() => {
    if (!props.maxValue || !months.value.length)
      return false
    if (props.disabled)
      return true
    const lastMonthInView = months.value[months.value.length - 1].value
    const firstMonthOfNextPage = lastMonthInView.add({ months: 1 }).set({ day: 1 })
    return isAfter(firstMonthOfNextPage, props.maxValue)
  })

  const isPrevButtonDisabled = computed(() => {
    if (!props.minValue || !months.value.length)
      return false
    if (props.disabled)
      return true
    const firstMonthInView = months.value[0].value
    const lastMonthOfPrevPage = firstMonthInView.subtract({ months: 1 }).set({ day: 35 })
    return isBefore(lastMonthOfPrevPage, props.minValue)
  })

  function isDateDisabled(dateObj: DateValue) {
    if (props.isDateDisabled?.(dateObj))
      return true
    if (props.maxValue && isAfter(dateObj, props.maxValue))
      return true
    if (props.minValue && isBefore(dateObj, props.minValue))
      return true
    return false
  }

  const isDateUnavailable = (date: DateValue) => {
    if (props.isDateUnavailable?.(date))
      return true
    return false
  }

  const isStartInvalid = computed(() => {
    if (!props.start.value)
      return false
    if (isDateDisabled(props.start.value))
      return true
    return false
  })

  const isEndInvalid = computed(() => {
    if (!props.end.value)
      return false
    if (isDateDisabled(props.end.value))
      return true
    return false
  })

  const isInvalid = computed(
    () => {
      if (isStartInvalid.value || isEndInvalid.value)
        return false
      if (props.start.value && props.end.value && isBefore(props.end.value, props.start.value))
        return true
      return false
    },
  )

  const isSelectionStart = (date: DateValue) => {
    if (!props.start.value || !props.end.value)
      return false
    return isSameDay(props.start.value, date)
  }

  const isSelectionEnd = (date: DateValue) => {
    if (!props.end.value || !props.start.value)
      return false
    return isSameDay(props.end.value, date)
  }

  const isSelected = (date: DateValue) => {
    if (props.start.value && isSameDay(props.start.value, date))
      return true
    if (props.end.value && isSameDay(props.end.value, date))
      return true
    if (props.end.value && props.start.value)
      return isBetween(date, props.start.value, props.end.value)

    return false
  }

  const highlightedRange = computed(() => {
    if (props.start.value && props.end.value)
      return null
    if (!props.start.value || !props.focusedValue.value)
      return null

    const isStartBeforeFocused = isBefore(props.start.value, props.focusedValue.value)
    const start = isStartBeforeFocused ? props.start.value : props.focusedValue.value
    const end = isStartBeforeFocused ? props.focusedValue.value : props.start.value

    if (isSameDay(start.add({ days: 1 }), end)) {
      return {
        start,
        end,
      }
    }

    const isValid = areAllDaysBetweenValid(start, end, props.isDateUnavailable, props.isDateDisabled)
    if (isValid) {
      return {
        start,
        end,
      }
    }
    return null
  })

  const headingValue = computed(() => {
    if (!months.value.length)
      return ''

    if (props.locale !== formatter.getLocale())
      formatter.setLocale(props.locale)

    if (months.value.length === 1) {
      const month = months.value[0].value as DateValue
      return `${formatter.fullMonthAndYear(toDate(month))}`
    }

    const startMonth = toDate(months.value[0].value as DateValue)
    const endMonth = toDate(months.value[months.value.length - 1].value as DateValue)

    const startMonthName = formatter.fullMonth(startMonth)
    const endMonthName = formatter.fullMonth(endMonth)
    const startMonthYear = formatter.fullYear(startMonth)
    const endMonthYear = formatter.fullYear(endMonth)

    const content = startMonthYear === endMonthYear ? `${startMonthName} - ${endMonthName} ${endMonthYear}` : `${startMonthName} ${startMonthYear} - ${endMonthName} ${endMonthYear}`

    return content
  })

  const fullCalendarLabel = computed(() => `${props.calendarLabel ?? 'Event Date'}, ${headingValue.value}`)

  const weekdays = computed(() => {
    if (!months.value.length)
      return []
    return months.value[0].weeks[0].map((date) => {
      return formatter.dayOfWeek(toDate(date as DateValue), props.weekdayFormat)
    })
  })

  const nextPage = () => {
    const firstMonth = months.value[0].value
    const newMonths = createMonths({
      dateObj: firstMonth.add({ months: props.pagedNavigation ? props.numberOfMonths : 1 }),
      weekStartsOn: props.weekStartsOn,
      locale: props.locale,
      fixedWeeks: props.fixedWeeks,
      numberOfMonths: props.numberOfMonths,
    })

    props.placeholder.value = newMonths[0].value.set({ day: 1 })
  }

  const prevPage = () => {
    const firstMonth = months.value[0].value
    const newMonths = createMonths({
      dateObj: firstMonth.subtract({ months: props.pagedNavigation ? props.numberOfMonths : 1 }),
      weekStartsOn: props.weekStartsOn,
      locale: props.locale,
      fixedWeeks: props.fixedWeeks,
      numberOfMonths: props.numberOfMonths,
    })

    props.placeholder.value = newMonths[0].value.set({ day: 1 })
  }

  return {
    fullCalendarLabel,
    headingValue,
    isInvalid,
    isDateDisabled,
    isDateUnavailable,
    isSelected,
    lastPressedDateValue,
    highlightedRange,
    isSelectionStart,
    isSelectionEnd,
    isNextButtonDisabled,
    isPrevButtonDisabled,
    months,
    weekdays,
    visibleMonths,
    isOutsideVisibleMonths,
    formatter,
    nextPage,
    prevPage,
  }
}
