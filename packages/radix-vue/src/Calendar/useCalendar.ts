/*
  * Adapted from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/builders/calendar/create.ts
*/

import { type DateValue, isSameDay } from '@internationalized/date'
import { type Ref, computed } from 'vue'
import { type CalendarHeadingSegmentValue, type CalendarView, type Grid, type Matcher, type WeekDayFormat, createMonths, isAfter, isBefore, toDate } from '@/shared/date'
import { useDateFormatter } from '@/shared'

export type UseCalendarProps = {
  locale: string
  placeholder: Ref<DateValue>
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6
  fixedWeeks: boolean
  numberOfMonths: number
  minValue?: DateValue
  maxValue?: DateValue
  disabled: boolean
  weekdayFormat: WeekDayFormat
  pagedNavigation: boolean
  isDateDisabled?: Matcher
  isDateUnavailable?: Matcher
  calendarView: Ref<CalendarView>
}

export type UseCalendarStateProps = {
  formatter: ReturnType<typeof useDateFormatter>
  grid: Ref<Grid<DateValue>[]>
  isDateDisabled: Matcher
  isDateUnavailable: Matcher
  date: Ref<DateValue | DateValue[] | undefined>
  locale: string
  calendarLabel: string | undefined
  calendarView: Ref<CalendarView>
}

export function useCalendarState(props: UseCalendarStateProps) {
  function isDateSelected(dateObj: DateValue) {
    if (Array.isArray(props.date.value))
      return props.date.value.some(d => isSameDay(d, dateObj))

    else if (!props.date.value)
      return false

    else
      return isSameDay(props.date.value, dateObj)
  }

  const isInvalid = computed(
    () => {
      if (Array.isArray(props.date.value)) {
        if (!props.date.value.length)
          return false
        for (const dateObj of props.date.value) {
          if (props.isDateDisabled?.(dateObj))
            return true
          if (props.isDateUnavailable?.(dateObj))
            return true
        }
      }
      else {
        if (!props.date.value)
          return false
        if (props.isDateDisabled?.(props.date.value))
          return true
        if (props.isDateUnavailable?.(props.date.value))
          return true
      }
      return false
    },
  )

  const headingValue = computed((): CalendarHeadingSegmentValue[] => {
    if (!props.grid.value.length)
      return []

    if (props.locale !== props.formatter.getLocale())
      props.formatter.setLocale(props.locale)

    if (props.grid.value.length === 1) {
      const month = props.grid.value[0].value
      return [{ type: 'month', value: props.formatter.fullMonth(toDate(month)) }, { type: 'literal', value: ' ' }, { type: 'year', value: props.formatter.fullYear(toDate(month)) }]
    }

    const startMonth = toDate(props.grid.value[0].value as DateValue)
    const endMonth = toDate(props.grid.value[props.grid.value.length - 1].value as DateValue)

    const startMonthName = props.formatter.fullMonth(startMonth)
    const endMonthName = props.formatter.fullMonth(endMonth)
    const startMonthYear = props.formatter.fullYear(startMonth)
    const endMonthYear = props.formatter.fullYear(endMonth)

    const content: CalendarHeadingSegmentValue[] = startMonthYear === endMonthYear ? [{ type: 'month', value: startMonthName }, { type: 'literal', value: ' - ' }, { type: 'month', value: endMonthName }, { type: 'literal', value: ' ' }, { type: 'year', value: startMonthYear }] : [{ type: 'month', value: startMonthName }, { type: 'literal', value: ' ' }, { type: 'year', value: startMonthYear }, { type: 'literal', value: ' - ' }, { type: 'month', value: endMonthName }, { type: 'literal', value: ' ' }, { type: 'year', value: endMonthYear }]

    return content
  })

  const fullCalendarLabel = computed(() => `${props.calendarLabel ?? 'Event Date'}, ${headingValue.value.map(item => item.value).join('')}`)
  return {
    fullCalendarLabel,
    isDateSelected,
    isInvalid,
    headingValue,
  }
}

export function useCalendar(props: UseCalendarProps) {
  const formatter = useDateFormatter(props.locale)

  const grid = computed<Grid<DateValue>[]>(() => createMonths({
    dateObj: props.placeholder.value,
    weekStartsOn: props.weekStartsOn,
    locale: props.locale,
    fixedWeeks: props.fixedWeeks,
    numberOfMonths: props.numberOfMonths,
  })) as Ref<Grid<DateValue>[]>

  const visibleView = computed(() => {
    return grid.value.map(month => month.value)
  })

  function isOutsideVisibleView(date: DateValue) {
    return !visibleView.value.includes(date)
  }

  const isNextButtonDisabled = computed(() => {
    if (!props.maxValue || !grid.value.length)
      return false
    if (props.disabled)
      return true
    const lastPeriodInView = grid.value[grid.value.length - 1].value

    const firstPeriodOfNextPage = lastPeriodInView.add({ months: 1 }).set({ day: 1 })
    return isAfter(firstPeriodOfNextPage, props.maxValue)
  })

  const isPrevButtonDisabled = computed(() => {
    if (!props.minValue || !grid.value.length)
      return false
    if (props.disabled)
      return true
    const firstPeriodInView = grid.value[0].value
    const lastPeriodOfPrevPage = firstPeriodInView.subtract({ months: 1 }).set({ day: 35 })
    return isBefore(lastPeriodOfPrevPage, props.minValue)
  })

  function isDateDisabled(dateObj: DateValue) {
    if (props.isDateDisabled?.(dateObj) || props.disabled)
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

  const weekdays = computed(() => {
    if (!grid.value.length)
      return []
    return grid.value[0].rows[0].map((date) => {
      return formatter.dayOfWeek(toDate(date), props.weekdayFormat)
    })
  })

  const nextPage = () => {
    const firstDate = grid.value[0].value

    const firstDateOfNewMonth = firstDate.add({ months: props.pagedNavigation ? props.numberOfMonths : 1 })

    props.placeholder.value = firstDateOfNewMonth.set({ day: 1 })
  }

  const prevPage = () => {
    const firstDate = grid.value[0].value

    const firstDateOfNewMonth = firstDate.subtract({ months: props.pagedNavigation ? props.numberOfMonths : 1 })

    props.placeholder.value = firstDateOfNewMonth
  }

  return {
    isDateDisabled,
    isDateUnavailable,
    isNextButtonDisabled,
    isPrevButtonDisabled,
    grid,
    weekdays,
    visibleView,
    isOutsideVisibleView,
    formatter,
    nextPage,
    prevPage,
  }
}
