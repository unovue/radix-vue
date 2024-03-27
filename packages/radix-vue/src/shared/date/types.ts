/*
  * Implementation ported from https://github.com/melt-ui/melt-ui/blob/develop/src/lib/internal/helpers/date/types.ts
*/

import type { DateValue } from '@internationalized/date'
import type { DATE_SEGMENT_PARTS, EDITABLE_SEGMENT_PARTS, NON_EDITABLE_SEGMENT_PARTS, TIME_SEGMENT_PARTS } from './parts'

// Days of the week, starting with Sunday
const daysOfWeek = [0, 1, 2, 3, 4, 5, 6] as const
export type DayOfWeek = {
  daysOfWeek: (typeof daysOfWeek)[number][]
}

export type DateRange = {
  start: DateValue | undefined
  end: DateValue | undefined
}

export type Grid<T> = {
  /**
   * A `DateValue` used to represent the month. Since days
   * from the previous and next months may be included in the
   * calendar grid, we need a source of truth for the value
   * the grid is representing.
   */
  value: DateValue

  /**
   * An array of arrays representing the weeks in the calendar.
   * Each sub-array represents a week, and contains the dates for each
   * day in that week. This structure is useful for rendering the calendar
   * grid using a table, where each row represents a week and each cell
   * represents a day.
   */
  rows: T[][]

  /**
   * An array of all the dates in the current month, including dates from
   * the previous and next months that are used to fill out the calendar grid.
   * This array is useful for rendering the calendar grid in a customizable way,
   * as it provides all the dates that should be displayed in the grid in a flat
   * array.
   */
  cells: T[]
}

export type HourCycle = 12 | 24 | undefined

export type DateSegmentPart = (typeof DATE_SEGMENT_PARTS)[number]
export type TimeSegmentPart = (typeof TIME_SEGMENT_PARTS)[number]
export type EditableSegmentPart = (typeof EDITABLE_SEGMENT_PARTS)[number]
export type NonEditableSegmentPart = (typeof NON_EDITABLE_SEGMENT_PARTS)[number]
export type SegmentPart = EditableSegmentPart | NonEditableSegmentPart

export type AnyExceptLiteral = Exclude<SegmentPart, 'literal'>

export type DayPeriod = 'AM' | 'PM' | null
export type DateSegmentObj = {
  [K in DateSegmentPart]: number | null;
}
export type TimeSegmentObj = {
  [K in TimeSegmentPart]: K extends 'dayPeriod' ? DayPeriod : number | null;
}
export type DateAndTimeSegmentObj = DateSegmentObj & TimeSegmentObj
export type SegmentValueObj = DateSegmentObj | DateAndTimeSegmentObj
export type SegmentContentObj = Record<EditableSegmentPart, string>
