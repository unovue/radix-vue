import isEqual from 'fast-deep-equal'

export function queryCheckedElement(parentEl: HTMLElement | null) {
  return parentEl?.querySelector('[data-state=checked]') as HTMLElement | null
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

export function findValuesBetween<T>(array: T[], start: T, end: T) {
  const startIndex = array.findIndex(i => isEqual(i, start))
  const endIndex = array.findIndex(i => isEqual(i, end))
  if (startIndex === -1 || endIndex === -1)
    return []

  const [minIndex, maxIndex] = [startIndex, endIndex].sort((a, b) => a - b)

  return array.slice(minIndex, maxIndex + 1)
}
