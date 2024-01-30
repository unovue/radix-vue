---

title: Checkbox
description: A control that allows the user to toggle between checked and not checked.
name: checkbox
aria: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox
---
 
# Checkbox

<Description>
A control that allows the user to toggle between checked and not checked.
</Description>

<ComponentPreview name="Checkbox" />


## Features

<Highlights
  :features="[
    'Supports indeterminate state.',
    'Full keyboard navigation.',
    'Can be controlled or uncontrolled.',
  ]"
/>

## Installation

Install the component from your command line.

```bash
npm install radix-vue
```

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue'
</script>

<template>
  <CheckboxRoot>
    <CheckboxIndicator />
  </CheckboxRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a checkbox. An `input` will also render when used within a `form` to ensure events propagate correctly.


<!-- @include: @/meta/CheckboxRoot.md -->

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['checked', 'unchecked', 'indeterminate'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

### Indicator

Renders when the checkbox is in a checked or indeterminate state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.


<!-- @include: @/meta/CheckboxIndicator.md -->

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['checked', 'unchecked', 'indeterminate'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

## Examples

### Indeterminate

You can set the checkbox to `indeterminate` by taking control of its state.

```vue line=5,9-14,16-18
<script setup>
import { Icon } from '@iconify/vue'
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue'

const checked = ref('indeterminate')
</script>

<template>
  <CheckboxRoot v-model:checked="checked">
    <CheckboxIndicator>
      <Icon v-if="checked === 'indeterminate'" icon="radix-icons:divider-horizontal" />
      <Icon v-if="checked" icon="radix-icons:check" />
    </CheckboxIndicator>
  </CheckboxRoot>

  <button type="button" @click="() => (checked === 'indeterminate' ? (checked = false) : (checked = 'indeterminate'))">
    Toggle indeterminate
  </button>
</template>
```

## Accessibility

Adheres to the [tri-state Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Space'],
      description: 'Checks/unchecks the checkbox',
    },
  ]"
/>
