/*
  * Implementation ported from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/internal/helpers/date/formatter.ts
*/

import { DateFormatter, getLocalTimeZone, isZonedDateTime, set, today } from 'flat-internationalized-date'
import type { DateValue, ZonedDateTime } from 'flat-internationalized-date'
import { hasTime, toDate } from './date'
import { ref } from 'vue'

export type Formatter = {
  getLocale: () => string
  setLocale: (newLocale: string) => void
  custom: (date: DateValue, options: Intl.DateTimeFormatOptions) => string
  selectedDate: (date: DateValue, includeTime?: boolean) => string
  dayOfWeek: (date: DateValue, length?: Intl.DateTimeFormatOptions['weekday']) => string
  fullMonthAndYear: (date: DateValue) => string
  fullMonth: (date: DateValue) => string
  fullYear: (date: DateValue) => string
  dayPeriod: (date: DateValue) => string
  part: (dateObj: DateValue, type: Intl.DateTimeFormatPartTypes, options?: Intl.DateTimeFormatOptions) => string
  toParts: (date: DateValue, options?: Intl.DateTimeFormatOptions) => Intl.DateTimeFormatPart[]
  getMonths: () => { label: string; value: number }[]
}

/**
 * Creates a wrapper around the `DateFormatter`, which is
 * an improved version of the {@link Intl.DateTimeFormat} API,
 * that is used internally by the various date builders to
 * easily format dates in a consistent way.
 *
 * @see [DateFormatter](https://react-spectrum.adobe.com/internationalized/date/DateFormatter.html)
 */
export function useDateFormatter(initialLocale: string): Formatter {
  const locale = ref(initialLocale)

  function getLocale() {
    return locale.value
  }

  function setLocale(newLocale: string) {
    locale.value = newLocale
  }

  const formatter = (options: Intl.DateTimeFormatOptions) => DateFormatter(locale.value, options)

  function custom(date: DateValue, options: Intl.DateTimeFormatOptions) {
    return formatter(options).format(toDate(date))
  }

  function selectedDate(date: DateValue, includeTime = true) {
    if (hasTime(date) && includeTime) {
      return custom(date, {
        dateStyle: 'long',
        timeStyle: 'long',
      })
    }
    else {
      return custom(date, {
        dateStyle: 'long',
      })
    }
  }

  function fullMonthAndYear(date: DateValue) {
    return formatter({ month: 'long', year: 'numeric' }).format(toDate(date))
  }

  function fullMonth(date: DateValue) {
    return formatter({ month: 'long' }).format(toDate(date))
  }

  function getMonths() {
    const defaultDate = today(getLocalTimeZone())
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return months.map(item => ({ label: fullMonth(set(defaultDate, { month: item })), value: item }))
  }

  function fullYear(date: DateValue) {
    return formatter({ year: 'numeric' }).format(toDate(date))
  }

  function toParts(date: DateValue, options?: Intl.DateTimeFormatOptions) {
    if (isZonedDateTime(date)) {
      return formatter({
        ...options,
        timeZone: (date as ZonedDateTime).timezone,
      }).formatToParts(toDate(date))
    }
    else {
      return formatter(options ?? {}).formatToParts(toDate(date))
    }
  }

  function dayOfWeek(date: DateValue, length: Intl.DateTimeFormatOptions['weekday'] = 'narrow') {
    return formatter({ weekday: length }).format(toDate(date))
  }

  function dayPeriod(date: DateValue) {
    const parts = formatter({
      hour: 'numeric',
      minute: 'numeric',
    }).formatToParts(toDate(date))
    const value = parts.find(p => p.type === 'dayPeriod')?.value
    if (value === 'PM')
      return 'PM'

    return 'AM'
  }

  const defaultPartOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  function part(
    dateObj: DateValue,
    type: Intl.DateTimeFormatPartTypes,
    options: Intl.DateTimeFormatOptions = {},
  ) {
    const opts = { ...defaultPartOptions, ...options }
    const parts = toParts(dateObj, opts)
    const part = parts.find(p => p.type === type)
    return part ? part.value : ''
  }

  return {
    setLocale,
    getLocale,
    fullMonth,
    fullYear,
    fullMonthAndYear,
    toParts,
    custom,
    part,
    dayPeriod,
    selectedDate,
    dayOfWeek,
    getMonths,
  }
}
