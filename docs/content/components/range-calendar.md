---

title: RangeCalendar
description: Presents a calendar view tailored for selecting date ranges.
name: range-calendar
---

# Range Calendar

<Badge>Alpha</Badge>

<Description>
Presents a calendar view tailored for selecting date ranges.
</Description>

<ComponentPreview name="RangeCalendar" />

## Features

<Highlights
  :features="[
    'Full keyboard navigation',
    'Can be controlled or uncontrolled',
    'Focus is fully managed',
    'Localization support',
    'Highly composable'
  ]"
/>

## Preface

The component depends on the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package, which solves a lot of the problems that come with working with dates and times in JavaScript.

We highly recommend reading through the documentation for the package to get a solid feel for how it works, and you'll need to install it in your project to use the date-related components.

## Installation

Install the date package.

```bash
npm install -D @internationalized/date
```

Install the component from your command line.

```bash
npm install radix-vue
```

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import {
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarHeadingSegment,
  RangeCalendarNext,
  RangeCalendarPrev,
  RangeCalendarRoot
} from 'radix-vue'
</script>

<template>
  <RangeCalendarRoot>
    <RangeCalendarHeader>
      <RangeCalendarPrev />
      <RangeCalendarHeading>
        <RangeCalendarHeadingSegment />
      </RangeCalendarHeading>
      <RangeCalendarNext />
    </RangeCalendarHeader>
    <RangeCalendarGrid>
      <RangeCalendarGridHead>
        <RangeCalendarGridRow>
          <RangeCalendarHeadCell />
        </RangeCalendarGridRow>
      </RangeCalendarGridHead>
      <RangeCalendarGridBody>
        <RangeCalendarGridRow>
          <RangeCalendarCell>
            <RangeCalendarCellTrigger />
          </RangeCalendarCell>
        </RangeCalendarGridRow>
      </RangeCalendarGridBody>
    </RangeCalendarGrid>
  </RangeCalendarRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a calendar

<!-- @include: @/meta/RangeCalendarRoot.md -->

### Header

Contains the navigation buttons and the heading segments.

<!-- @include: @/meta/RangeCalendarHeader.md -->

### Prev Button

Calendar navigation button. It navigates the calendar one month/year/decade in the past based on the current calendar view.

<!-- @include: @/meta/RangeCalendarPrev.md -->

### NextButton

Calendar navigation button. It navigates the calendar one month/year/decade in the future based on the current calendar view.

<!-- @include: @/meta/RangeCalendarNext.md -->

### Heading

Container for the interactable heading segments.

<!-- @include: @/meta/RangeCalendarHeading.md -->

### Heading Segment

Interactable heading segments displaying the month/year, used for changing the calendar view.

<!-- @include: @/meta/RangeCalendarHeadingSegment.md -->

### Grid

Container for wrapping the calendar grid.

<!-- @include: @/meta/RangeCalendarGrid.md -->

### Grid Head

Container for wrapping the grid head.

<!-- @include: @/meta/RangeCalendarGridHead.md -->

### Grid Body

Container for wrapping the grid body.

<!-- @include: @/meta/RangeCalendarGridBody.md -->

### Grid Row

Container for wrapping the grid row.

<!-- @include: @/meta/RangeCalendarGridRow.md -->

### Head Cell

Container for wrapping the head cell. Used for displaying the week days.

<!-- @include: @/meta/RangeCalendarHeadCell.md -->

### Cell

Container for wrapping the calendar cells.

<!-- @include: @/meta/RangeCalendarCell.md -->

### Cell Trigger

Interactable container for displaying the cell dates. Clicking it selects the date.

<!-- @include: @/meta/RangeCalendarCellTrigger.md -->

## Accessibility

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Tab'],
      description: 'When focus moves onto the calendar, focuses the first navigation button.'
    },
    {
      keys: ['Space'],
      description:`
      <span>
          When the focus is on either <Code>CalendarNext</Code> or <Code>CalendarPrev</Code>, it navigates the calendar. Otherwise, it selects the date.
      </span>
    ` ,
    },
    {
      keys: ['Enter'],
      description:`
      <span>
          When the focus is on either <Code>CalendarNext</Code> or <Code>CalendarPrev</Code>, it navigates the calendar. Otherwise, it selects the date.
      </span>
    ` ,
    },
    {
      keys: ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'],
      description:
      `
        When the focus is on <Code>CalendarCellTrigger</Code>, it navigates the dates, changing the month/year/decade if necessary.
      `
    }
  ]"
/>
