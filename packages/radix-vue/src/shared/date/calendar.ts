/*
 * Implementation ported from from from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/builders/calendar/create.ts
*/

import { type DateValue, endOfMonth, endOfYear, startOfMonth, startOfYear } from '@internationalized/date'
import type { Grid } from './types'
import { chunk } from '@/shared'
import { getDaysInMonth, getLastFirstDayOfWeek, getNextLastDayOfWeek } from '@/shared/date'

export type WeekDayFormat = 'narrow' | 'short' | 'long'

export type CreateSelectProps = {
  /**
   * The date object representing the month's date (usually the first day of the month).
   */
  dateObj: DateValue

  /**
   * The number of columns to build the grid
   */
  columns: number
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
  let dCurrent = start.add({ days: 1 })
  const dEnd = end
  while (dCurrent.compare(dEnd) < 0) {
    days.push(dCurrent)
    dCurrent = dCurrent.add({ days: 1 })
  }
  return days
}

export function createMonth(props: CreateMonthProps): Grid<DateValue> {
  const { dateObj, weekStartsOn, fixedWeeks, locale } = props
  const daysInMonth = getDaysInMonth(dateObj)

  const datesArray = Array.from({ length: daysInMonth }, (_, i) => dateObj.set({ day: i + 1 }))

  const firstDayOfMonth = startOfMonth(dateObj)
  const lastDayOfMonth = endOfMonth(dateObj)

  const lastSunday = getLastFirstDayOfWeek(firstDayOfMonth, weekStartsOn, locale)
  const nextSaturday = getNextLastDayOfWeek(lastDayOfMonth, weekStartsOn, locale)

  const lastMonthDays = getDaysBetween(lastSunday.subtract({ days: 1 }), firstDayOfMonth)
  const nextMonthDays = getDaysBetween(lastDayOfMonth, nextSaturday.add({ days: 1 }))

  const totalDays = lastMonthDays.length + datesArray.length + nextMonthDays.length

  if (fixedWeeks && totalDays < 42) {
    const extraDays = 42 - totalDays

    let startFrom = nextMonthDays[nextMonthDays.length - 1]

    if (!startFrom)
      startFrom = dateObj.add({ months: 1 }).set({ day: 1 })

    const extraDaysArray = Array.from({ length: extraDays }, (_, i) => {
      const incr = i + 1
      return startFrom.add({ days: incr })
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
  numberOfMonths: number | undefined
  pagedNavigation: boolean
}

type SetDecadeProps = CreateSelectProps

export function startOfDecade(dateObj: DateValue) {
  // round to the lowest nearest 10 when building the decade
  return startOfYear(dateObj.subtract({ years: dateObj.year - Math.floor(dateObj.year / 10) * 10 }).set({ day: 1, month: 1 }))
}

export function endOfDecade(dateObj: DateValue) {
  // round to the lowest nearest 10 when building the decade
  return endOfYear(dateObj.add({ years: Math.ceil((dateObj.year + 1) / 10) * 10 - dateObj.year - 1 }).set({ day: 35, month: 12 }))
}

export function createDecade(props: SetDecadeProps): Grid<DateValue>[] {
  const { dateObj, columns } = props

  const decadeArray = []

  const decadeStart = startOfDecade(dateObj)
  for (let i = decadeStart.year; i < decadeStart.year + 10; i++)
    decadeArray.push(dateObj.set({ year: i }))

  const rows = chunk(decadeArray, columns)

  if (!rows.every(row => row.length === columns)) {
    const lastRow = rows[rows.length - 1]
    const lastRowLength = lastRow.length
    for (let i = 0; i < columns - lastRowLength; i++)
      rows[rows.length - 1].push(lastRow[lastRowLength - 1].add({ years: i + 1 }))
  }

  return [{ value: dateObj, cells: decadeArray, rows }]
}

export function createYear(props: SetYearProps): Grid<DateValue>[] {
  const { dateObj, columns, numberOfMonths, pagedNavigation } = props

  if (numberOfMonths && pagedNavigation) {
    const monthsArray = Array.from({ length: Math.floor(12 / numberOfMonths) }, (_, i) => startOfMonth(dateObj.set({ month: i * numberOfMonths + 1 })))
    const rows = chunk(monthsArray, columns)

    if (!rows.every(row => row.length === columns)) {
      const lastRow = rows[rows.length - 1]
      const lastRowLength = lastRow.length
      for (let i = 0; i < columns - lastRowLength; i++)
        rows[rows.length - 1].push(lastRow[lastRowLength - 1].add({ months: i * numberOfMonths + 1 }))
    }

    return [{ value: dateObj, cells: monthsArray, rows }]
  }

  const monthsArray = Array.from({ length: 12 }, (_, i) => startOfMonth(dateObj.set({ month: i + 1 })))

  const rows = chunk(monthsArray, columns)

  if (!rows.every(row => row.length === columns)) {
    const lastRow = rows[rows.length - 1]
    const lastRowLength = lastRow.length
    for (let i = 0; i < columns - lastRowLength; i++)
      rows[rows.length - 1].push(lastRow[lastRowLength - 1].add({ months: i + 1 }))
  }

  return [{ value: dateObj, cells: monthsArray, rows }]
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
    const nextMonth = dateObj.add({ months: i })
    months.push(
      createMonth({
        ...monthProps,
        dateObj: nextMonth,
      }),
    )
  }

  return months
}
