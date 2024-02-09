/*
  * Adapted from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/builders/calendar/create.ts
*/

import { type DateValue, isSameDay } from '@internationalized/date'
import { type Ref, computed, ref } from 'vue'
import { type Matcher, type Month, type WeekDayFormat, createMonths, isAfter, isBefore, toDate, useDateFormatter } from '@/shared'

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
}

export type UseCalendarStateProps = {
  formatter: ReturnType<typeof useDateFormatter>
  months: Ref<Month<DateValue>[]>
  isDateDisabled: Matcher
  isDateUnavailable: Matcher
  date: Ref<DateValue | DateValue[] | undefined>
  locale: string
  calendarLabel: string | undefined
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

  const headingValue = computed(() => {
    if (!props.months.value.length)
      return ''

    if (props.locale !== props.formatter.getLocale())
      props.formatter.setLocale(props.locale)

    if (props.months.value.length === 1) {
      const month = props.months.value[0].value
      return `${props.formatter.fullMonthAndYear(toDate(month))}`
    }

    const startMonth = toDate(props.months.value[0].value as DateValue)
    const endMonth = toDate(props.months.value[props.months.value.length - 1].value as DateValue)

    const startMonthName = props.formatter.fullMonth(startMonth)
    const endMonthName = props.formatter.fullMonth(endMonth)
    const startMonthYear = props.formatter.fullYear(startMonth)
    const endMonthYear = props.formatter.fullYear(endMonth)

    const content = startMonthYear === endMonthYear ? `${startMonthName} - ${endMonthName} ${endMonthYear}` : `${startMonthName} ${startMonthYear} - ${endMonthName} ${endMonthYear}`

    return content
  })

  const fullCalendarLabel = computed(() => `${props.calendarLabel ?? 'Event Date'}, ${headingValue.value}`)
  return {
    fullCalendarLabel,
    isDateSelected,
    isInvalid,
    headingValue,
  }
}

export function useCalendar(props: UseCalendarProps) {
  const formatter = useDateFormatter(props.locale)

  const months = ref<Month<DateValue>[]>(createMonths({
    dateObj: props.placeholder.value,
    weekStartsOn: props.weekStartsOn,
    locale: props.locale,
    fixedWeeks: props.fixedWeeks,
    numberOfMonths: props.numberOfMonths,
  })) as Ref<Month<DateValue>[]>

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
    if (!months.value.length)
      return []
    return months.value[0].weeks[0].map((date) => {
      return formatter.dayOfWeek(toDate(date), props.weekdayFormat)
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

    months.value = newMonths
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

    months.value = newMonths
    props.placeholder.value = newMonths[0].value.set({ day: 1 })
  }

  return {
    isDateDisabled,
    isDateUnavailable,
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
