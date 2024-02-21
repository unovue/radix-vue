/*
  * Implementation ported from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/internal/helpers/date/formatter.ts
*/

import { DateFormatter, getLocalTimeZone, today } from '@internationalized/date'
import type { DateValue, ZonedDateTime } from '@internationalized/date'
import { hasTime, isZonedDateTime, toDate } from './date'
import { ref } from 'vue'

export type Formatter = {
  getLocale: () => string
  setLocale: (newLocale: string) => void
  custom: (date: Date, options: Intl.DateTimeFormatOptions) => string
  selectedDate: (date: DateValue, includeTime?: boolean) => string
  dayOfWeek: (date: Date, length?: Intl.DateTimeFormatOptions['weekday']) => string
  fullMonthAndYear: (date: Date) => string
  fullMonth: (date: Date) => string
  fullYear: (date: Date) => string
  dayPeriod: (date: Date) => string
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

  function custom(date: Date, options: Intl.DateTimeFormatOptions) {
    return new DateFormatter(locale.value, options).format(date)
  }

  function selectedDate(date: DateValue, includeTime = true) {
    if (hasTime(date) && includeTime) {
      return custom(toDate(date), {
        dateStyle: 'long',
        timeStyle: 'long',
      })
    }
    else {
      return custom(toDate(date), {
        dateStyle: 'long',
      })
    }
  }

  function fullMonthAndYear(date: Date) {
    return new DateFormatter(locale.value, { month: 'long', year: 'numeric' }).format(date)
  }

  function fullMonth(date: Date) {
    return new DateFormatter(locale.value, { month: 'long' }).format(date)
  }

  function getMonths() {
    const defaultDate = today(getLocalTimeZone())
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return months.map(item => ({ label: fullMonth(toDate(defaultDate.set({ month: item }))), value: item }))
  }

  function fullYear(date: Date) {
    return new DateFormatter(locale.value, { year: 'numeric' }).format(date)
  }

  function toParts(date: DateValue, options?: Intl.DateTimeFormatOptions) {
    if (isZonedDateTime(date)) {
      return new DateFormatter(locale.value, {
        ...options,
        timeZone: (date as ZonedDateTime).timeZone,
      }).formatToParts(toDate(date))
    }
    else {
      return new DateFormatter(locale.value, options).formatToParts(toDate(date))
    }
  }

  function dayOfWeek(date: Date, length: Intl.DateTimeFormatOptions['weekday'] = 'narrow') {
    return new DateFormatter(locale.value, { weekday: length }).format(date)
  }

  function dayPeriod(date: Date) {
    const parts = new DateFormatter(locale.value, {
      hour: 'numeric',
      minute: 'numeric',
    }).formatToParts(date)
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
