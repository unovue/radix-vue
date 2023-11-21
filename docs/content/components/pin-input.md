---

title: Pin Input
description: A sequence of one-character alphanumeric inputs.
name: pin-input
---
 
# Pin Input

<Badge>Alpha</Badge>

<Description>
A sequence of one-character alphanumeric inputs.
</Description>


<ComponentPreview name="PinInput" />


## Features

<Highlights
  :features="[
    'Full keyboard navigation.',
    'Can be controlled or uncontrolled.',
    'Supports pasting from clipboard',
    'Emit event when inputs were filled.'
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
import { PinInputInput, PinInputRoot } from 'radix-vue'
</script>

<template>
  <PinInputRoot>
    <PinInputInput />
  </PinInputRoot>
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
      name: 'defaultValue',
      type: 'string[]',
      description:
        'The default value of the pin inputs when it is initially rendered. Use when you do not need to control its checked state.',
    },
    {
      name: 'modelValue',
      type: 'string[]',
      description: '<span> The controlled checked state of the pin input. Can be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'The placeholder character to use for empty pin-inputs.',
    },
    {
      name: 'mask',
      type: 'boolean',
      default: 'false',
      description: '<span> When <Code>true</Code>, pin inputs will be treated as password.</span>',
    },
    {
      name: 'otp',
      type: 'boolean',
      default: 'false',
      description: '<span> When <Code>true</Code>, mobile devices will autodetect the OTP from messages or clipboard, and enable the autocomplete field.</span>',
    },
    {
      name: 'type',
      type: 'text | number',
      default: 'text',
      description: 'Input type for the inputs.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the pin input </span>',
    },
    {
      name: 'required',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, indicates that the user must check the pin input before the owning form can be submitted.</span>',
    },
    {
      name: 'name',
      type: 'string',
      description:
        'The name of the pin input Submitted with its owning form as part of a name/value pair.',
    }, 
  ]"
/>

<EmitsTable 
  :data="[
    {
      name: '@update:modelValue',
      type: '(value: string[]) => void',
      description: 'Event handler called when the value state of the pin input changes.'
    },
    {
      name: '@complete',
      type: '(value: string[]) => void',
      description: 'Event handler called the inputs were filled.'
    }
  ]" 
/>


<DataAttributesTable
  :data="[
    {
      attribute: '[data-complete]',
      values: 'Present when completed',
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

### Input

Input field for Pin Input. You can add as many input as you like.

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
      name: 'index',
      type: 'number',
      description: 'Position of the value this input bind to.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the pin input </span>'
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-complete]',
      values: 'Present when completed',
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>


## Examples

### OTP mode

You can set the pin input to `otp` mode by setting otp to `true`.

```vue{6}
<script setup lang="ts"> 
import { Label, PinInputInput, PinInputRoot } from 'radix-vue' 
</script>

<template>
  <PinInputRoot v-model="value" otp>
    …
  </PinInputRoot>
</template>
```

### Numeric mode

You can set the pin input to only accept `number` type by setting type to `number`.

```vue{6}
<script setup lang="ts"> 
import { Label, PinInputInput, PinInputRoot } from 'radix-vue' 
</script>

<template>
  <PinInputRoot v-model="value" type="number">
    …
  </PinInputRoot>
</template>
```



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
