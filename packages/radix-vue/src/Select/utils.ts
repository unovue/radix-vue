import isEqual from 'fast-deep-equal'

export const OPEN_KEYS = [' ', 'Enter', 'ArrowUp', 'ArrowDown']
export const SELECTION_KEYS = [' ', 'Enter']
export const CONTENT_MARGIN = 10

export function getValue<T>(value: T, by?: string | ((a: T) => boolean)) {
  if (typeof value === 'string')
    return value

  if (typeof by === 'function')
    return by(value)

  if (typeof by === 'string')
    return value?.[by as keyof T]
}

export function valueComparator<T>(value: T | T[] | undefined, currentValue: T, comparator?: string | ((a: T, b: T) => boolean)) {
  if (value === undefined)
    return false
  else if (Array.isArray(value))
    return value.some(val => compare(val, currentValue, comparator))
  else
    return compare(value, currentValue, comparator)
}

export function compare<T>(value?: T, currentValue?: T, comparator?: string | ((a: T, b: T) => boolean)) {
  if (value === undefined || currentValue === undefined)
    return false

  if (typeof value === 'string')
    return value === currentValue

  if (typeof comparator === 'function')
    return comparator(value, currentValue)

  if (typeof comparator === 'string')
    return value?.[comparator as keyof T] === currentValue?.[comparator as keyof T]

  return isEqual(value, currentValue)
}
