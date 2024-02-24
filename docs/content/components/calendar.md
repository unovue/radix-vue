---

title: Calendar
description: Displays dates and days of the week, facilitating date-related interactions.
name: calendar
---

# Calendar

<Badge>Alpha</Badge>

<Description>
Displays dates and days of the week, facilitating date-related interactions.
</Description>

<!--<ComponentPreview name="Calendar" />-->

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
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarHeadingSegment,
  CalendarNext,
  CalendarPrev,
  CalendarRoot
} from 'radix-vue'
</script>

<template>
  <CalendarRoot>
    <CalendarHeader>
      <CalendarPrev />
      <CalendarHeading>
        <CalendarHeadingSegment />
      </CalendarHeading>
      <CalendarNext />
    </CalendarHeader>
    <CalendarGrid>
      <CalendarGridHead>
        <CalendarGridRow>
          <CalendarHeadCell />
        </CalendarGridRow>
      </CalendarGridHead>
      <CalendarGridBody>
        <CalendarGridRow>
          <CalendarCell>
            <CalendarCellTrigger />
          </CalendarCell>
        </CalendarGridRow>
      </CalendarGridBody>
      <CalendarGrid />
    </calendargrid>
  </CalendarRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a calendar

<!-- @include: @/meta/CalendarRoot.md -->

### Header

<!-- @include: @/meta/CalendarHeader.md -->

### Prev Button

<!-- @include: @/meta/CalendarPrev.md -->

### NextButton

<!-- @include: @/meta/CalendarNext.md -->

### Heading

<!-- @include: @/meta/CalendarHeading.md -->

### Heading Segment

<!-- @include: @/meta/CalendarHeadingSegment.md -->

### Grid

<!-- @include: @/meta/CalendarGrid.md -->

### Grid Head

<!-- @include: @/meta/CalendarGridHead.md -->

### Grid Body

<!-- @include: @/meta/CalendarGridBody.md -->

### Grid Row

<!-- @include: @/meta/CalendarGridRow.md -->

### Cell

<!-- @include: @/meta/CalendarCell.md -->

### Cell Trigger

<!-- @include: @/meta/CalendarCellTrigger.md -->

## Accessibility

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['ArrowLeft'],
      description: 'Focus on previous input.',
    },
    {
      keys: ['ArrowRight'],
      description: 'Focus on next input.',
    },
    {
      keys: ['Home'],
      description: 'Focus on the first input.',
    },
    {
      keys: ['End'],
      description: 'Focus on the last input.',
    },
    {
      keys: ['Backspace'],
      description: 'Deletes the value of the current input. If the input is empty, moves to the previous input and deletes that value as well.',
    },
    {
      keys: ['Delete'],
      description: 'Deletes the value of the current input.',
    },
    {
      keys: ['Ctrl + V'],
      description: `
Pastes the contents of the clipboard into the pin input. If the number of characters in the clipboard equals exceeds the number of inputs, the contents are pasted from the first input. Otherwise, the contents are pasted from the current input onwards.`,
    }
  ]"
/>
