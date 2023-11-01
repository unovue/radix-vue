---

title: Progress
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
name: progress
aria: https://www.w3.org/WAI/ARIA/apg/patterns/meter
---


# Progress

<Description>
Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
</Description>

<ComponentPreview name="Progress" />


## Features

<Highlights
  :features="[
    'Provides context for assistive technology to read the progress of a task.',
  ]"
/>

## Installation

Install the component from your command line.

```bash
npm install radix-vue
```

### Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
</script>

<template>
  <ProgressRoot>
    <ProgressIndicator />
  </ProgressRoot>
</template>
```

## Accessibility

Adheres to the [`progressbar` role requirements](https://www.w3.org/WAI/ARIA/apg/patterns/meter).

## API Reference

### Root

Contains all of the progress parts.

<PropsTable
  :data="[
    {
      name: 'modelValue',
      type: 'number | null',
      description: 'The progress value.',
    },
    {
      name: 'max',
      type: 'number',
      description: 'The maximum progress value.',
    },
    {
      name: 'getValueLabel',
      type: '(value: number, max: number) => string',
      typeSimple: 'function',
      description:
        'A function to get the accessible label text representing the current value in a human-readable format. If not provided, the value label will be read as the numeric value as a percentage of the max value.',
    },
    {
      name: 'as',
      type: 'string | Component',
      default: 'div',
      description: 'The element or component this component should render as. Can be overwrite by <Code>asChild</Code>'
    },
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

<EmitsTable 
  :data="[
    {
      name: '@update:modelValue',
      type: '(value: string) => void',
      description: 'Event handler called when the progres value changes'
    },
  ]" 
/>


<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['complete', 'indeterminate', 'loading'],
    },
    {
      attribute: '[data-value]',
      values: 'The current value',
    },
    {
      attribute: '[data-max]',
      values: 'The max value',
    },
  ]"
/>

### Indicator

Used to show the progress visually. It also makes progress accessible to assistive technologies.

<PropsTable
  :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'div',
      description: 'The element or component this component should render as. Can be overwrite by <Code>asChild</Code>'
    },
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['complete', 'indeterminate', 'loading'],
    },
    {
      attribute: '[data-value]',
      values: 'The current value',
    },
    {
      attribute: '[data-max]',
      values: 'The max value',
    },
  ]"
/>
