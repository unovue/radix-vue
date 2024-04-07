---
title: Date Utilities
description: How to use utilities for comparing dates, creating months/years/decades, getting the first/last day of the week and determining the types of `DateValue` objects.
---

# Date Utilities

<Description>
Returns utilities for comparing dates, creating months/years/decades, getting the first/last day of the week and determining the types of `DateValue` objects.
</Description>


The utilities depend on the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package, which solves a lot of the problems that come with working with dates and times in JavaScript.


We highly recommend reading through the documentation for the package to get a solid feel for how it
works, and you'll need to install it in your project to use the date-related components.


<InstallationTabs value="@internationalized/date" />

## How to use?

```ts
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
} from 'radix-vue/date'

import { CalendarDate, type DateValue } from '@internationalized/date'

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

