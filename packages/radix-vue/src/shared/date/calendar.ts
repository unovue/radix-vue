/*
 * Implementation ported from from from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/builders/calendar/create.ts
*/

import { type DateValue, add, compare, endOfMonth, endOfYear, getDaysInMonth, set, startOfMonth, startOfYear, subtract } from 'flat-internationalized-date'
import type { Grid } from './types'
import { chunk } from '@/shared'
import { getLastFirstDayOfWeek, getNextLastDayOfWeek, isAfter, isBefore } from '@/shared/date'

export type WeekDayFormat = 'narrow' | 'short' | 'long'

export type CreateSelectProps = {
  /**
   * The date object representing the month's date (usually the first day of the month).
   */
  dateObj: DateValue

  minValue?: DateValue

  maxValue?: DateValue
}

export type CreateMonthProps = {
  /**
   * The date object representing the month's date (usually the first day of the month).
   */
  dateObj: DateValue

  /**
   * The day of the week to start the calendar on (0 for Sunday, 1 for Monday, etc.).
   */
  weekStartsOn: number

  /**
   * Whether to always render 6 weeks in the calendar, even if the month doesn't
   * span 6 weeks.
   */
  fixedWeeks: boolean

  /**
   * The locale to use when creating the calendar month.
   */
  locale: string
}

/**
 * Retrieves an array of date values representing the days between
 * the provided start and end dates.
 */
export function getDaysBetween(start: DateValue, end: DateValue) {
  const days: DateValue[] = []
  let dCurrent = add(start, { days: 1 })
  const dEnd = end
  while (compare(dCurrent, dEnd) < 0) {
    days.push(dCurrent)
    dCurrent = add(dCurrent, { days: 1 })
  }
  return days
}

export function createMonth(props: CreateMonthProps): Grid<DateValue> {
  const { dateObj, weekStartsOn, fixedWeeks, locale } = props
  const daysInMonth = getDaysInMonth(dateObj)

  const datesArray = Array.from({ length: daysInMonth }, (_, i) => set(dateObj, { day: i + 1 }))

  const firstDayOfMonth = startOfMonth(dateObj)
  const lastDayOfMonth = endOfMonth(dateObj)

  const lastSunday = getLastFirstDayOfWeek(firstDayOfMonth, weekStartsOn, locale)
  const nextSaturday = getNextLastDayOfWeek(lastDayOfMonth, weekStartsOn, locale)

  const lastMonthDays = getDaysBetween(subtract(lastSunday, { days: 1 }), firstDayOfMonth)
  const nextMonthDays = getDaysBetween(lastDayOfMonth, add(nextSaturday, { days: 1 }))

  const totalDays = lastMonthDays.length + datesArray.length + nextMonthDays.length

  if (fixedWeeks && totalDays < 42) {
    const extraDays = 42 - totalDays

    let startFrom = nextMonthDays[nextMonthDays.length - 1]

    if (!startFrom)
      startFrom = set(add(dateObj, { months: 1 }), { day: 1 })

    const extraDaysArray = Array.from({ length: extraDays }, (_, i) => {
      const incr = i + 1
      return add(startFrom, { days: incr })
    })
    nextMonthDays.push(...extraDaysArray)
  }

  const allDays = lastMonthDays.concat(datesArray, nextMonthDays)

  const weeks = chunk(allDays, 7)

  return {
    value: dateObj,
    cells: allDays,
    rows: weeks,
  }
}

type SetMonthProps = CreateMonthProps & {
  numberOfMonths: number | undefined
  currentMonths?: Grid<DateValue>[]
}

type SetYearProps = CreateSelectProps & {
  numberOfMonths?: number
  pagedNavigation: boolean
}

type SetDecadeProps = CreateSelectProps & {
  startIndex?: number
  endIndex: number
}

export function startOfDecade(dateObj: DateValue) {
  // round to the lowest nearest 10 when building the decade
  return startOfYear(set(subtract(dateObj, { years: dateObj.year - Math.floor(dateObj.year / 10) * 10 }), { day: 1, month: 1 }))
}

export function endOfDecade(dateObj: DateValue) {
  // round to the lowest nearest 10 when building the decade
  return endOfYear(set(add(dateObj, { years: Math.ceil((dateObj.year + 1) / 10) * 10 - dateObj.year - 1 }), { day: 35, month: 12 }))
}

export function createDecade(props: SetDecadeProps): DateValue[] {
  const { dateObj, startIndex, endIndex, minValue, maxValue } = props

  const decadeArray = Array.from({ length: Math.abs((startIndex ?? 0) - endIndex) }, (_, i) => i < Math.abs(startIndex ?? 0) ? set(subtract(dateObj, { years: i }), { day: 1, month: 1 }) : set(add(dateObj, { years: i }), { day: 1, month: 1 })).toSorted((a, b) => a.year - b.year)

  return decadeArray.filter((year) => {
    if (minValue && isBefore(year, minValue))
      return false
    if (maxValue && isAfter(year, maxValue))
      return false
    return true
  })
}

export function createYear(props: SetYearProps): DateValue[] {
  const { dateObj, numberOfMonths, pagedNavigation, minValue, maxValue } = props

  if (numberOfMonths && pagedNavigation) {
    const monthsArray = Array.from({ length: Math.floor(12 / numberOfMonths) }, (_, i) => startOfMonth(set(dateObj, { month: i * numberOfMonths + 1 })))

    return monthsArray.filter((month) => {
      if (minValue && isBefore(month, minValue))
        return false
      if (maxValue && isAfter(month, maxValue))
        return false
      return true
    })
  }

  const monthsArray = Array.from({ length: 12 }, (_, i) => startOfMonth(set(dateObj, { month: i + 1 })))
  return monthsArray.filter((month) => {
    if (minValue && isBefore(month, minValue))
      return false
    if (maxValue && isAfter(month, maxValue))
      return false
    return true
  })
}

export function createMonths(props: SetMonthProps) {
  const { numberOfMonths, dateObj, ...monthProps } = props

  const months: Grid<DateValue>[] = []

  if (!numberOfMonths || numberOfMonths === 1) {
    months.push(
      createMonth({
        ...monthProps,
        dateObj,
      }),
    )
    return months
  }

  months.push(
    createMonth({
      ...monthProps,
      dateObj,
    }),
  )

  // Create all the months, starting with the current month
  for (let i = 1; i < numberOfMonths; i++) {
    const nextMonth = add(dateObj, { months: i })
    months.push(
      createMonth({
        ...monthProps,
        dateObj: nextMonth,
      }),
    )
  }

  return months
}
