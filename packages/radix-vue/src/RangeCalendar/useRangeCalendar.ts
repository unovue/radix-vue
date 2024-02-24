/*
  * Adapted from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/builders/range-calendar/create.ts
*/

import { type DateValue, isSameDay } from '@internationalized/date'
import { type Ref, computed } from 'vue'
import { areAllDaysBetweenValid, isBefore, isBetween, toDate } from '@/shared'
import type { CalendarView, Grid, Matcher, useDateFormatter } from '@/shared'
import type { CalendarHeadingSegmentValue } from '@/shared/date'

export type UseRangeCalendarProps = {
  start: Ref<DateValue | undefined>
  end: Ref<DateValue | undefined>
  formatter: ReturnType<typeof useDateFormatter>
  grid: Ref<Grid<DateValue>[]>
  isDateDisabled: Matcher
  isDateUnavailable: Matcher
  locale: string
  calendarLabel: string | undefined
  focusedValue: Ref<DateValue | undefined>
  calendarView: Ref<CalendarView>
}

export function useRangeCalendarState(props: UseRangeCalendarProps) {
  const isStartInvalid = computed(() => {
    if (!props.start.value)
      return false
    if (props.isDateDisabled(props.start.value))
      return true
    return false
  })

  const isEndInvalid = computed(() => {
    if (!props.end.value)
      return false
    if (props.isDateDisabled(props.end.value))
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

  const fullCalendarLabel = computed(() => `${props.calendarLabel ?? 'Event Date'}, ${headingValue.value.map(v => v.value).join('')}`)

  return {
    fullCalendarLabel,
    headingValue,
    isInvalid,
    isSelected,
    highlightedRange,
    isSelectionStart,
    isSelectionEnd,
  }
}
