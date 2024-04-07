---
title: useDateUtils
description: Returns utilities for comparing dates, creating months/years/decades, getting the first/last day of the week and determining the types of `DateValue` objects.
---

# useDateUtils

<Description>
Returns utilities for comparing dates, creating months/years/decades, getting the first/last day of the week and determining the types of `DateValue` objects.
</Description>

## Usage

```ts
import { useDateUtils } from 'radix-vue'
import { CalendarDate, type DateValue } from '@internationalized/date'

const {
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
} = useDateUtils()

const date = new CalendarDate(1995, 8, 18)
const minDate = new CalendarDate(1995, 8, 1)
const maxDate = new CalendarDate(1995, 8, 31)

parseStringToDateValue('1995-08-18') // returns a DateValue object
toDate(date) // returns a Date object
isCalendarDateTime(date) // returns false
isZonedDateTime(date) // returns false
hasTime(date) // returns false
getDaysInMonth(date) // returns 31
isAfter(date, minDate) // returns true
isBeforeOrSame(date, maxDate) // returns true
isAfterOrSame(date, minDate) // returns true
isBefore(date, maxDate) // returns true
isBetweenInclusive(date, minDate, maxDate) // returns true
isBetween(date, minDate, maxDate) // returns true
```
