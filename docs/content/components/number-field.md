---

title: Number Field
description: A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.
name: number field
aria: https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton
---
 
# Number Field

<Description>
A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.
</Description>

<ComponentPreview name="NumberField" />


## Features

<Highlights
  :features="[
    'Full keyboard navigation.',
    'Can be controlled or uncontrolled.',
  ]"
/>

## Installation

Install the component from your command line.

<InstallationTabs value="radix-vue" />

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldLabel, NumberFieldRoot } from 'radix-vue'
</script>

<template>
  <NumberFieldRoot>
    <NumberFieldLabel />

    <NumberFieldDecrement />
    <NumberFieldInput />
    <NumberFieldIncrement />
  </NumberFieldRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a number field. An `input` will also render when used within a `form` to ensure events propagate correctly.


<!-- @include: @/meta/NumberFieldRoot.md -->

<DataAttributesTable
  :data="[ 
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>
 
### Label

Label for the input.

<!-- @include: @/meta/NumberFieldLabel.md -->

### Input

Input

The input component that render the textValue based on value and format options.

<!-- @include: @/meta/NumberFieldInput.md -->


<DataAttributesTable
  :data="[ 
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>
 

### Increment

The button that increase the value.

<!-- @include: @/meta/NumberFieldIncrement.md -->


<DataAttributesTable
  :data="[ 
    {
      attribute: '[data-pressed]',
      values: 'Present when pressed',
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>
 

### Decrement

The button that decrease the value.

<!-- @include: @/meta/NumberFieldDecrement.md -->


<DataAttributesTable
  :data="[ 
    {
      attribute: '[data-pressed]',
      values: 'Present when pressed',
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>
 


## Accessibility

Adheres to the [Spinbutton WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Arrow Up'],
      description: 'Increase the value',
    },
    {
      keys: ['Arrow Down'],
      description: 'Decrease the value',
    },
    {
      keys: ['Page Up'],
      description: 'Increase the value by scale of 10',
    },
    {
      keys: ['Page Down'],
      description: 'Decrease the value by scale of 10',
    },
    {
      keys: ['Home'],
      description: 'Set value to minimum (if <code>min</code> is provided)',
    },
    {
      keys: ['End'],
      description: 'Set value to maximum (if <code>max</code> is provided)',
    },
  ]"
/>
