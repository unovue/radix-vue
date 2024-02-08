import { DATE_SEGMENT_PARTS, type DateSegmentPart, EDITABLE_SEGMENT_PARTS, type Formatter, type Granularity, type HourCycle, type SegmentContentObj, type SegmentPart, type SegmentValueObj, TIME_SEGMENT_PARTS, type TimeSegmentPart, getDaysInMonth, getOptsByGranularity, getPlaceholder, isDateSegmentPart, isSegmentPart, isZonedDateTime, toDate, useKbd } from '@/shared'
import type { DateValue } from '@internationalized/date'
import type { Ref } from 'vue'

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

const calendarDateTimeGranularities = ['hour', 'minute', 'second']

type SyncSegmentValuesProps = {
  value: DateValue
  formatter: Formatter
}

export function syncSegmentValues(props: SyncSegmentValuesProps) {
  const { formatter } = props

  const dateValues = DATE_SEGMENT_PARTS.map((part) => {
    return [part, props.value[part]]
  })
  if ('hour' in props.value) {
    const timeValues = TIME_SEGMENT_PARTS.map((part) => {
      if (part === 'dayPeriod')
        return [part, formatter.dayPeriod(toDate(props.value))]
      return [part, props.value[part as keyof DateValue]]
    })

    const mergedSegmentValues = [...dateValues, ...timeValues]
    return Object.fromEntries(mergedSegmentValues) as SegmentValueObj
  }

  return Object.fromEntries(dateValues) as SegmentValueObj
}

export function initializeSegmentValues(granularity: Granularity) {
  const initialParts = EDITABLE_SEGMENT_PARTS.map((part) => {
    if (part === 'dayPeriod')
      return [part, 'AM']

    return [part, null]
  }).filter(([key]) => {
    if (key === 'literal' || key === null)
      return false
    if (granularity === 'day')
      return !calendarDateTimeGranularities.includes(key)
    else return true
  })

  return Object.fromEntries(initialParts)
}

type SharedContentProps = {
  granularity: Granularity
  dateRef: Ref<DateValue>
  formatter: Formatter
  hideTimeZone: boolean
  hourCycle: HourCycle
}

type CreateContentObjProps = SharedContentProps & {
  segmentValues: SegmentValueObj
  locale: string
}

type CreateContentArrProps = SharedContentProps & {
  contentObj: SegmentContentObj
}

function createContentObj(props: CreateContentObjProps) {
  const { segmentValues, formatter, locale } = props
  function getPartContent(part: DateSegmentPart | TimeSegmentPart) {
    if ('hour' in segmentValues) {
      const value = segmentValues[part]
      if (value !== null) {
        return formatter.part(props.dateRef.value.set({ [part]: value }), part, {
          hourCycle: props.hourCycle === 24 ? 'h24' : undefined,
        })
      }
      else {
        return getPlaceholder(part, '', locale)
      }
    }
    else {
      if (isDateSegmentPart(part)) {
        const value = segmentValues[part]
        if (value !== null)
          return formatter.part(props.dateRef.value.set({ [part]: value }), part)

        else
          return getPlaceholder(part, '', locale)
      }
      return ''
    }
  }

  const content = Object.keys(segmentValues).reduce((obj, part) => {
    if (!isSegmentPart(part))
      return obj
    if ('hour' in segmentValues && part === 'dayPeriod') {
      const value = segmentValues[part]

      if (value !== null)
        obj[part] = value

      else
        obj[part] = getPlaceholder(part, 'AM', locale)
    }
    else {
      obj[part] = getPartContent(part)
    }

    return obj
  }, {} as SegmentContentObj)

  return content
}

function createContentArr(props: CreateContentArrProps) {
  const { granularity, formatter, contentObj, hideTimeZone, hourCycle } = props
  const parts = formatter.toParts(props.dateRef.value, getOptsByGranularity(granularity, hourCycle))

  const segmentContentArr = parts
    .map((part) => {
      const defaultParts = ['literal', 'timeZoneName', null]

      if (defaultParts.includes(part.type) || !isSegmentPart(part.type)) {
        return {
          part: part.type,
          value: part.value,
        }
      }

      return {
        part: part.type,
        value: contentObj[part.type],
      }
    })
    .filter((segment): segment is { part: SegmentPart; value: string } => {
      if (segment.part === null || segment.value === null)
        return false
      if (segment.part === 'timeZoneName' && (!isZonedDateTime(props.dateRef.value) || hideTimeZone))
        return false

      return true
    })

  return segmentContentArr
}

type CreateContentProps = CreateContentObjProps

export function createContent(props: CreateContentProps) {
  const contentObj = createContentObj(props)

  const contentArr = createContentArr({
    contentObj,
    ...props,
  })

  return {
    obj: contentObj,
    arr: contentArr,
  }
}
