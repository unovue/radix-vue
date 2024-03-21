/*
  * Implementation ported from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/internal/helpers/date/utils.ts
*/

import { type DateValue, add, compare, createCalendarDate, createCalendarDateTime, getDayOfWeek, getLocalTimeZone, isCalendarDateTime, isZonedDateTime, toDate as libToDate, parseDate, parseDateTime, parseZonedDateTime, subtract, toCalendar } from 'flat-internationalized-date'

export type Granularity = 'day' | 'hour' | 'minute' | 'second'

export type Matcher = (date: DateValue) => boolean

type GetDefaultDateProps = {
  defaultValue?: DateValue | DateValue[] | undefined
  defaultPlaceholder?: DateValue | undefined
  granularity?: Granularity
}

const defaultDateDefaults = {
  defaultValue: undefined,
  defaultPlaceholder: undefined,
  granularity: 'day',
}

/**
 * A helper function used throughout the various date builders
 * to generate a default `DateValue` using the `defaultValue`,
 * `defaultPlaceholder`, and `granularity` props.
 *
 * It's important to match the `DateValue` type being used
 * elsewhere in the builder, so they behave according to the
 * behavior the user expects based on the props they've provided.
 *
 */
export function getDefaultDate(props?: GetDefaultDateProps): DateValue {
  const withDefaults = { ...defaultDateDefaults, ...props }
  const { defaultValue, defaultPlaceholder, granularity } = withDefaults

  if (Array.isArray(defaultValue) && defaultValue.length)
    return defaultValue[defaultValue.length - 1]

  if (defaultValue && !Array.isArray(defaultValue)) {
    return defaultValue
  }
  else if (defaultPlaceholder) {
    return defaultPlaceholder
  }
  else {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const calendarDateTimeGranularities = ['hour', 'minute', 'second']

    if (calendarDateTimeGranularities.includes(granularity ?? 'day'))
      return createCalendarDateTime({ year, month, day, hour: 0, minute: 0, millisecond: 0 })

    return createCalendarDate({ year, month, day })
  }
}

/**
 * Given a date string and a reference `DateValue` object, parse the
 * string to the same type as the reference object.
 *
 * Useful for parsing strings from data attributes, which are always
 * strings, to the same type being used by the date component.
 */
export function parseStringToDateValue(dateStr: string, referenceVal: DateValue): DateValue {
  let dateValue: DateValue
  if (isZonedDateTime(referenceVal))
    dateValue = parseZonedDateTime(dateStr)

  else if (isCalendarDateTime(referenceVal))
    dateValue = parseDateTime(dateStr)

  else
    dateValue = parseDate(dateStr)

  return dateValue.calendar !== referenceVal.calendar ? toCalendar(dateValue, referenceVal.calendar) : dateValue
}

export function hasTime(dateValue: DateValue) {
  return isCalendarDateTime(dateValue) || isZonedDateTime(dateValue)
}

/**
 * Given a `DateValue` object, convert it to a native `Date` object.
 * If a timezone is provided, the date will be converted to that timezone.
 * If no timezone is provided, the date will be converted to the local timezone.
 */
export function toDate(dateValue: DateValue, tz: string = getLocalTimeZone()) {
  if (isZonedDateTime(dateValue))
    return libToDate(dateValue, dateValue.timezone)
  else
    return libToDate(dateValue, tz)
}

/**
 * Determine if a date is before the reference date.
 * @param dateToCompare - is this date before the `referenceDate`
 * @param referenceDate - is the `dateToCompare` before this date
 *
 * @see {@link isBeforeOrSame} for inclusive
 */
export function isBefore(dateToCompare: DateValue, referenceDate: DateValue) {
  return compare(dateToCompare, referenceDate) < 0
}

/**
 * Determine if a date is after the reference date.
 * @param dateToCompare - is this date after the `referenceDate`
 * @param referenceDate - is the `dateToCompare` after this date
 *
 * @see {@link isAfterOrSame} for inclusive
 */
export function isAfter(dateToCompare: DateValue, referenceDate: DateValue) {
  return compare(dateToCompare, referenceDate) > 0
}

/**
 * Determine if a date is before or the same as the reference date.
 *
 * @param dateToCompare - the date to compare
 * @param referenceDate - the reference date to make the comparison against
 *
 * @see {@link isBefore} for non-inclusive
 */
export function isBeforeOrSame(dateToCompare: DateValue, referenceDate: DateValue) {
  return compare(dateToCompare, referenceDate) <= 0
}

/**
 * Determine if a date is after or the same as the reference date.
 *
 * @param dateToCompare - is this date after or the same as the `referenceDate`
 * @param referenceDate - is the `dateToCompare` after or the same as this date
 *
 * @see {@link isAfter} for non-inclusive
 */
export function isAfterOrSame(dateToCompare: DateValue, referenceDate: DateValue) {
  return compare(dateToCompare, referenceDate) >= 0
}

/**
 * Determine if a date is inclusively between a start and end reference date.
 *
 * @param date - is this date inclusively between the `start` and `end` dates
 * @param start - the start reference date to make the comparison against
 * @param end - the end reference date to make the comparison against
 *
 * @see {@link isBetween} for non-inclusive
 */
export function isBetweenInclusive(date: DateValue, start: DateValue, end: DateValue) {
  return isAfterOrSame(date, start) && isBeforeOrSame(date, end)
}

/**
 * Determine if a date is between a start and end reference date.
 *
 * @param date - is this date between the `start` and `end` dates
 * @param start - the start reference date to make the comparison against
 * @param end - the end reference date to make the comparison against
 *
 * @see {@link isBetweenInclusive} for inclusive
 */
export function isBetween(date: DateValue, start: DateValue, end: DateValue) {
  return isAfter(date, start) && isBefore(date, end)
}

export function getLastFirstDayOfWeek<T extends DateValue = DateValue>(
  date: T,
  firstDayOfWeek: number,
  locale: string,
): T {
  const day = getDayOfWeek(date, locale)

  if (firstDayOfWeek > day)
    return subtract(date, { days: day + 7 - firstDayOfWeek }) as T

  if (firstDayOfWeek === day)
    return date as T

  return subtract(date, { days: day - firstDayOfWeek }) as T
}

export function getNextLastDayOfWeek<T extends DateValue = DateValue>(
  date: T,
  firstDayOfWeek: number,
  locale: string,
): T {
  const day = getDayOfWeek(date, locale)
  const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1

  if (day === lastDayOfWeek)
    return date as T

  if (day > lastDayOfWeek)
    return add(date, { days: 7 - day + lastDayOfWeek }) as T

  return add(date, { days: lastDayOfWeek - day }) as T
}

export function areAllDaysBetweenValid(
  start: DateValue,
  end: DateValue,
  isUnavailable: Matcher | undefined,
  isDisabled: Matcher | undefined,
) {
  if (isUnavailable === undefined && isDisabled === undefined)
    return true

  let dCurrent = add(start, { days: 1 })
  if (isDisabled?.(dCurrent) || isUnavailable?.(dCurrent))
    return false

  const dEnd = end
  while (compare(dCurrent, dEnd) < 0) {
    dCurrent = add(dCurrent, { days: 1 })
    if (isDisabled?.(dCurrent) || isUnavailable?.(dCurrent))
      return false
  }
  return true
}
