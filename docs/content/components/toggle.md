---

title: Toggle
description: A two-state button that can be either on or off.
name: toggle
aria: https://www.w3.org/WAI/ARIA/apg/patterns/button
---

# Toggle

<Description>
A two-state button that can be either on or off.
</Description>

<ComponentPreview name="Toggle" />


## Features

<Highlights
  :features="['Full keyboard navigation.', 'Can be controlled or uncontrolled.']"
/>

## Installation

Install the component from your command line.

```bash
npm install radix-vue
```

## Anatomy

Import the component.

```vue
<script setup>
import { Toggle } from 'radix-vue'
</script>

<template>
  <Toggle />
</template>
```

## API Reference

### Root

The toggle.

<PropsTable
  :data="[
    {
      name: 'defaultPressed',
      type: 'boolean',
      description: 'The pressed state of the toggle when it is initially rendered. Use when you do not need to control its pressed state.',
    },
    {
      name: 'pressed',
      type: 'boolean',
      description: '<span> The controlled pressed state of the toggle. Must be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the toggle.</span>',
    },
    {
      name: 'as',
      type: 'string | Component',
      default: 'button',
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
      name: '@update:pressed',
      type: '(value: string) => void',
      description: 'Event handler called when the pressed state of the toggle changes.'
    },
  ]" 
/>


<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['on', 'off'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

## Accessibility

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Space'],
      description: 'Activates/deactivates the toggle.',
    },
    {
      keys: ['Enter'],
      description: 'Activates/deactivates the toggle.',
    },
  ]"
/>
