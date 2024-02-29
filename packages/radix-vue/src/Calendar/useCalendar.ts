/*
  * Adapted from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/builders/calendar/create.ts
*/

import { type DateTimeDuration, type DateValue, isSameDay, isSameMonth } from '@internationalized/date'
import { type Ref, computed, ref, watch } from 'vue'
import { type CalendarHeadingSegmentValue, type CalendarView, type Grid, type Matcher, type WeekDayFormat, createDecade, createMonths, createYear, isAfter, isBefore, toDate } from '@/shared/date'
import { useDateFormatter } from '@/shared'

export type UseCalendarProps = {
  locale: string
  placeholder: Ref<DateValue>
  columns: Ref<number>
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6
  fixedWeeks: boolean
  numberOfMonths: number
  minValue: Ref<DateValue | undefined>
  maxValue: Ref<DateValue | undefined>
  disabled: Ref<boolean>
  weekdayFormat: WeekDayFormat
  pagedNavigation: boolean
  isDateDisabled?: Matcher
  isDateUnavailable?: Matcher
  calendarView: Ref<CalendarView>
  defaultDate: DateValue
  calendarLabel: string | undefined
}

export type UseCalendarStateProps = {
  isDateDisabled: Matcher
  isDateUnavailable: Matcher
  date: Ref<DateValue | DateValue[] | undefined>
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

  return {
    isDateSelected,
    isInvalid,
  }
}

export function useCalendar(props: UseCalendarProps) {
  const formatter = useDateFormatter(props.locale)
  const placeholder = props.defaultDate.set({ ...props.placeholder.value })

  const gridGenerator: Record<CalendarView, (value?: DateValue) => Grid<DateValue>[]> = {
    month: (value?: DateValue) => createMonths({
      dateObj: value ? placeholder.set({ ...value }) : placeholder,
      weekStartsOn: props.weekStartsOn,
      locale: props.locale,
      fixedWeeks: props.fixedWeeks,
      numberOfMonths: props.numberOfMonths,
    }),
    year: (value?: DateValue) => createYear({
      dateObj: value ? placeholder.set({ ...value }) : placeholder,
      columns: props.columns.value,
      numberOfMonths: props.numberOfMonths,
      pagedNavigation: props.pagedNavigation,
    }),
    decade: (value?: DateValue) => createDecade({
      dateObj: value ? placeholder.set({ ...value }) : placeholder,
      columns: props.columns.value,
    }),
  }

  const grid = ref<Grid<DateValue>[]>(gridGenerator[props.calendarView.value]()) as Ref<Grid<DateValue>[]>

  const visibleView = computed(() => {
    return grid.value.map(month => month.value)
  })

  function isOutsideVisibleView(date: DateValue) {
    return !visibleView.value.includes(date)
  }

  const isNextButtonDisabled = computed(() => {
    if (!props.maxValue?.value || !grid.value.length)
      return false
    if (props.disabled.value)
      return true
    const lastPeriodInView = grid.value[grid.value.length - 1].value

    const firstPeriodOfNextPage = lastPeriodInView.add({ months: 1 }).set({ day: 1 })
    return isAfter(firstPeriodOfNextPage, props.maxValue?.value)
  })

  const isPrevButtonDisabled = computed(() => {
    if (!props.minValue?.value || !grid.value.length)
      return false
    if (props.disabled.value)
      return true
    const firstPeriodInView = grid.value[0].value
    const lastPeriodOfPrevPage = firstPeriodInView.subtract({ months: 1 }).set({ day: 35 })
    return isBefore(lastPeriodOfPrevPage, props.minValue?.value)
  })

  function isDateDisabled(dateObj: DateValue) {
    if (props.isDateDisabled?.(dateObj) || props.disabled.value)
      return true
    if (props.maxValue?.value && isAfter(dateObj, props.maxValue?.value))
      return true
    if (props.minValue?.value && isBefore(dateObj, props.minValue?.value))
      return true
    return false
  }

  const isDateUnavailable = (date: DateValue) => {
    if (props.isDateUnavailable?.(date))
      return true
    return false
  }

  const weekdays = computed(() => {
    if (props.calendarView.value !== 'month')
      return []
    if (!grid.value.length)
      return []
    return grid.value[0].rows[0].map((date) => {
      return formatter.dayOfWeek(toDate(date), props.weekdayFormat)
    })
  })

  const viewToDateField: Record<CalendarView, Record<'key' | 'value', keyof DateTimeDuration | number>> = {
    month: { key: 'months', value: props.pagedNavigation ? props.numberOfMonths : 1 },
    year: { key: 'years', value: 1 },
    decade: { key: 'years', value: 10 },
  }

  const nextPage = () => {
    const firstDate = grid.value[0].value

    const newGrid = gridGenerator[props.calendarView.value](
      firstDate.add({ [viewToDateField[props.calendarView.value].key]: viewToDateField[props.calendarView.value].value }))

    grid.value = newGrid

    props.placeholder.value = newGrid[0].value.set({ day: 1 })
  }

  const prevPage = () => {
    const firstDate = grid.value[0].value

    const newGrid = gridGenerator[props.calendarView.value](
      firstDate.subtract({ [viewToDateField[props.calendarView.value].key]: viewToDateField[props.calendarView.value].value }))

    grid.value = newGrid

    props.placeholder.value = newGrid[0].value.set({ day: 1 })
  }

  watch(props.calendarView, (value) => {
    grid.value = gridGenerator[value](placeholder.set({ ...props.placeholder.value }))
  })

  watch(props.placeholder, (value, oldValue) => {
    if (props.calendarView.value === 'month' && !isSameMonth(placeholder.set({ ...value }), placeholder.set({ ...oldValue })))
      grid.value = gridGenerator[props.calendarView.value](value)
  })

  const headingValue = computed((): CalendarHeadingSegmentValue[] => {
    if (!grid.value.length)
      return []

    if (props.locale !== formatter.getLocale())
      formatter.setLocale(props.locale)

    if (grid.value.length === 1) {
      const month = props.defaultDate.set({ ...props.placeholder.value, ...grid.value[0].value })
      return [{ type: 'month', value: formatter.fullMonth(toDate(month)) }, { type: 'literal', value: ' ' }, { type: 'year', value: formatter.fullYear(toDate(month)) }]
    }

    const startMonth = toDate(props.defaultDate.set({ ...props.placeholder.value, ...grid.value[0].value }))
    const endMonth = toDate(props.defaultDate.set({ ...props.placeholder.value, ...grid.value[grid.value.length - 1].value }))

    const startMonthName = formatter.fullMonth(startMonth)
    const endMonthName = formatter.fullMonth(endMonth)
    const startMonthYear = formatter.fullYear(startMonth)
    const endMonthYear = formatter.fullYear(endMonth)

    const content: CalendarHeadingSegmentValue[] = startMonthYear === endMonthYear ? [{ type: 'month', value: startMonthName }, { type: 'literal', value: ' - ' }, { type: 'month', value: endMonthName }, { type: 'literal', value: ' ' }, { type: 'year', value: startMonthYear }] : [{ type: 'month', value: startMonthName }, { type: 'literal', value: ' ' }, { type: 'year', value: startMonthYear }, { type: 'literal', value: ' - ' }, { type: 'month', value: endMonthName }, { type: 'literal', value: ' ' }, { type: 'year', value: endMonthYear }]

    return content
  })

  const fullCalendarLabel = computed(() => `${props.calendarLabel ?? 'Event Date'}, ${headingValue.value.map(item => item.value).join('')}`)

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
    headingValue,
    fullCalendarLabel,
  }
}
