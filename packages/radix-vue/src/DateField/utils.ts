import { type Formatter, type HourCycle, type SegmentValueObj, getDaysInMonth, toDate, useKbd } from '@/shared'
import type { DateValue } from '@internationalized/date'

type SegmentAttrProps = {
  segmentValues: SegmentValueObj
  hourCycle: HourCycle
  placeholder: DateValue
  formatter: Formatter
}

const defaultSegmentAttrs = {
  role: 'spinbutton',
  contenteditable: true,
  tabindex: 0,
  spellcheck: false,
  inputmode: 'numeric',
  autocorrect: 'off',
  enterkeyhint: 'next',
  style: 'caret-color: transparent;',
}

export function isSegmentNavigationKey(key: string) {
  const kbd = useKbd()
  if (key === kbd.ARROW_RIGHT || key === kbd.ARROW_LEFT)
    return true
  return false
}

export function isNumberString(value: string) {
  if (Number.isNaN(Number.parseInt(value)))
    return false
  return true
}

export function isAcceptableSegmentKey(key: string) {
  const kbd = useKbd()
  const acceptableSegmentKeys = [
    kbd.ENTER,
    kbd.ARROW_UP,
    kbd.ARROW_DOWN,
    kbd.ARROW_LEFT,
    kbd.ARROW_RIGHT,
    kbd.BACKSPACE,
    kbd.SPACE,
  ]
  if (acceptableSegmentKeys.includes(key))
    return true
  if (isNumberString(key))
    return true
  return false
}

function daySegmentAttrs(props: SegmentAttrProps) {
  const { segmentValues, placeholder } = props
  const isEmpty = segmentValues.day === null
  const date = segmentValues.day ? placeholder.set({ day: segmentValues.day }) : placeholder

  const valueNow = date.day
  const valueMin = 1
  const valueMax = getDaysInMonth(toDate(date))
  const valueText = isEmpty ? 'Empty' : `${valueNow}`

  return {
    ...defaultSegmentAttrs,
    'aria-label': 'day,',
    'aria-valuemin': valueMin,
    'aria-valuemax': valueMax,
    'aria-valuenow': valueNow,
    'aria-valuetext': valueText,
  }
}

function monthSegmentAttrs(props: SegmentAttrProps) {
  const { segmentValues, placeholder, formatter } = props
  const isEmpty = segmentValues.month === null
  const date = segmentValues.month
    ? placeholder.set({ month: segmentValues.month })
    : placeholder
  const valueNow = date.month
  const valueMin = 1
  const valueMax = 12
  const valueText = isEmpty ? 'Empty' : `${valueNow} - ${formatter.fullMonth(toDate(date))}`

  return {
    ...defaultSegmentAttrs,
    'aria-label': 'month, ',
    'contenteditable': true,
    'aria-valuemin': valueMin,
    'aria-valuemax': valueMax,
    'aria-valuenow': valueNow,
    'aria-valuetext': valueText,
  }
}

function yearSegmentAttrs(props: SegmentAttrProps) {
  const { segmentValues, placeholder } = props
  const isEmpty = segmentValues.year === null
  const date = segmentValues.year ? placeholder.set({ year: segmentValues.year }) : placeholder
  const valueMin = 1
  const valueMax = 9999
  const valueNow = date.year
  const valueText = isEmpty ? 'Empty' : `${valueNow}`

  return {
    ...defaultSegmentAttrs,
    'aria-label': 'year, ',
    'aria-valuemin': valueMin,
    'aria-valuemax': valueMax,
    'aria-valuenow': valueNow,
    'aria-valuetext': valueText,
  }
}

function hourSegmentAttrs(props: SegmentAttrProps) {
  const { segmentValues, hourCycle, placeholder } = props

  if (!('hour' in segmentValues) || !('hour' in placeholder))
    return {}
  const isEmpty = segmentValues.hour === null
  const date = segmentValues.hour ? placeholder.set({ hour: segmentValues.hour }) : placeholder
  const valueMin = hourCycle === 12 ? 1 : 0
  const valueMax = hourCycle === 12 ? 12 : 23
  const valueNow = date.hour
  const valueText = isEmpty ? 'Empty' : `${valueNow} ${segmentValues.dayPeriod ?? ''}`

  return {
    ...defaultSegmentAttrs,
    'aria-label': 'hour, ',
    'aria-valuemin': valueMin,
    'aria-valuemax': valueMax,
    'aria-valuenow': valueNow,
    'aria-valuetext': valueText,
  }
}

function minuteSegmentAttrs(props: SegmentAttrProps) {
  const { segmentValues, placeholder } = props
  if (!('minute' in segmentValues) || !('minute' in placeholder))
    return {}
  const isEmpty = segmentValues.minute === null
  const date = segmentValues.minute
    ? placeholder.set({ minute: segmentValues.minute })
    : placeholder
  const valueNow = date.minute
  const valueMin = 0
  const valueMax = 59
  const valueText = isEmpty ? 'Empty' : `${valueNow}`

  return {
    ...defaultSegmentAttrs,
    'aria-label': 'minute, ',
    'aria-valuemin': valueMin,
    'aria-valuemax': valueMax,
    'aria-valuenow': valueNow,
    'aria-valuetext': valueText,
  }
}

function secondSegmentAttrs(props: SegmentAttrProps) {
  const { segmentValues, placeholder } = props
  if (!('second' in segmentValues) || !('second' in placeholder))
    return {}
  const isEmpty = segmentValues.second === null
  const date = segmentValues.second
    ? placeholder.set({ second: segmentValues.second })
    : placeholder
  const valueNow = date.second
  const valueMin = 0
  const valueMax = 59
  const valueText = isEmpty ? 'Empty' : `${valueNow}`

  return {
    ...defaultSegmentAttrs,
    'aria-label': 'second, ',
    'aria-valuemin': valueMin,
    'aria-valuemax': valueMax,
    'aria-valuenow': valueNow,
    'aria-valuetext': valueText,
  }
}

function dayPeriodSegmentAttrs(props: SegmentAttrProps) {
  const { segmentValues } = props
  if (!('dayPeriod' in segmentValues))
    return {}

  const valueMin = 0
  const valueMax = 12
  const valueNow = segmentValues.hour ? (segmentValues.hour > 12 ? segmentValues.hour - 12 : segmentValues.hour) : 0
  const valueText = segmentValues.dayPeriod ?? 'AM'

  return {
    ...defaultSegmentAttrs,
    'inputmode': 'text',
    'aria-label': 'AM/PM',
    'aria-valuemin': valueMin,
    'aria-valuemax': valueMax,
    'aria-valuenow': valueNow,
    'aria-valuetext': valueText,
  }
}

function literalSegmentAttrs(_: SegmentAttrProps) {
  return {
    'aria-hidden': true,
    'data-segment': 'literal',
  }
}

function timeZoneSegmentAttrs(_: SegmentAttrProps) {
  return {
    'role': 'textbox',
    'aria-label': 'timezone, ',
    'data-readonly': true,
    'data-segment': 'timeZoneName',
    'tabindex': 0,
    'style': 'caret-color: transparent;',
  }
}

export const segmentBuilders = {
  day: {
    attrs: daySegmentAttrs,
  },
  month: {
    attrs: monthSegmentAttrs,
  },
  year: {
    attrs: yearSegmentAttrs,
  },
  hour: {
    attrs: hourSegmentAttrs,
  },
  minute: {
    attrs: minuteSegmentAttrs,
  },
  second: {
    attrs: secondSegmentAttrs,
  },
  dayPeriod: {
    attrs: dayPeriodSegmentAttrs,
  },
  literal: {
    attrs: literalSegmentAttrs,
  },
  timeZoneName: {
    attrs: timeZoneSegmentAttrs,
  },
}
