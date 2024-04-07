import {
  createDecade,
  createMonth,
  createMonths,
  createYear,
  getDaysInMonth,
  hasTime,
  isAfter,
  isAfterOrSame,
  isBefore,
  isBeforeOrSame,
  isBetween,
  isBetweenInclusive,
  isCalendarDateTime,
  isZonedDateTime,
  parseStringToDateValue,
  toDate,
} from './date'

export function useDateUtils() {
  return {
    parseStringToDateValue,
    toDate,
    isCalendarDateTime,
    isZonedDateTime,
    hasTime,
    getDaysInMonth,
    isAfter,
    isBeforeOrSame,
    isAfterOrSame,
    isBefore,
    isBetweenInclusive,
    isBetween,
    createMonths,
    createMonth,
    createYear,
    createDecade,
  }
}
