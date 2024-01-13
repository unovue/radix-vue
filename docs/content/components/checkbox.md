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
    {
      name: 'defaultChecked',
      type: 'boolean',
      description:
        'The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.',
    },
    {
      name: 'checked',
      type: 'boolean | \'intermediate\'',
      description: '<span> The controlled checked state of the checkbox Must be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the checkbox </span>',
    },
    {
      name: 'required',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, indicates that the user must check the checkbox before the owning form can be submitted.</span>',
    },
    {
      name: 'name',
      type: 'string',
      description:
        'The name of the checkbox Submitted with its owning form as part of a name/value pair.',
    },
    {
      name: 'value',
      type: 'string',
      default: 'on',
      description: '<span> The value given as data when submitted with a <Code>name</Code>.</span>',
    },
  ]"
/>

<EmitsTable 
  :data="[
    {
      name: '@update:checked',
      type: '(value: boolean) => void',
      description: 'Event handler called when the checked state of the checkbox changes.'
    }
  ]" 
/>


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

<PropsTable
  :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'span',
      description: 'The element or component this component should render as. Can be overwrite by <Code>asChild</Code>'
    },
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description: `
        Used to force mounting when more control is needed. Useful when controlling animation with Vue.js animation libraries.
      `,
    },
  ]"
/>

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
