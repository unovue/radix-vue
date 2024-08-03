/*
  * Implementation ported from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/internal/helpers/date/utils.ts
*/

import { CalendarDate, CalendarDateTime, type DateValue } from '@internationalized/date'

export type Granularity = 'day' | 'hour' | 'minute' | 'second'

type GetDefaultDateProps = {
  defaultValue?: DateValue | DateValue[] | undefined
  defaultPlaceholder?: DateValue | undefined
  granularity?: Granularity
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
export function getDefaultDate(props: GetDefaultDateProps): DateValue {
  const { defaultValue, defaultPlaceholder, granularity = 'day' } = props

  if (Array.isArray(defaultValue) && defaultValue.length)
    return defaultValue.at(-1)!.copy()

  if (defaultValue && !Array.isArray(defaultValue))
    return defaultValue.copy()

  if (defaultPlaceholder)
    return defaultPlaceholder.copy()

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const calendarDateTimeGranularities = ['hour', 'minute', 'second']

  if (calendarDateTimeGranularities.includes(granularity ?? 'day'))
    return new CalendarDateTime(year, month, day, 0, 0, 0)

  return new CalendarDate(year, month, day)
}
