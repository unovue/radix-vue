---
outline: deep
metaTitle: Toggle Group
metaDescription: A set of two-state buttons that can be toggled on or off.
name: toggle-group
aria: https://www.w3.org/WAI/ARIA/apg/patterns/button
---

<script setup> 
import DemoToggleGroup from '../../components/demo/ToggleGroup/index.vue' 
</script>

# ToggleGroup

<Description>
A set of two-state buttons that can be toggled on or off.
</Description>

<HeroContainer folder="ToggleGroup">
<DemoToggleGroup />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/ToggleGroup/index.vue

</div>
<div filename="tailwind.config.js">

<<< ../../components/demo/ToggleGroup/tailwind.config.js

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Full keyboard navigation.',
    'Supports horizontal/vertical orientation.',
    'Support single and multiple pressed buttons.',
    'Can be controlled or uncontrolled.',
  ]"
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
import { ToggleGroupItem, ToggleGroupRoot } from 'radix-vue'
</script>

<template>
  <ToggleGroupRoot>
    <ToggleGroupItem />
  </ToggleGroupRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a toggle group.

<PropsTable
  :data="[
    {
      name: 'type',
      required: true,
      type: '&quot;single&quot; | &quot;multiple&quot;',
      typeSimple: 'enum',
      description: '<span> Determines whether a single or multiple items can be pressed at a time. </span>',
    },
    {
      name: 'modelValue',
      required: false,
      type: 'string | string[]',
      description: '<span> The controlled value of the pressed item. Can be binded with <Code>v-model</Code>. </span>',
    },
    {
      name: 'defaultValue',
      required: false,
      type: 'string | string[]',
      description: '<span> The value of the item to show as pressed when initially rendered. Use when you do not need to control the state of the items. </span>',
    },
    {
      name: 'disabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the toggle group and all its items. </span>',
    },
    {
      name: 'rovingFocus',
      required: false,
      type: 'boolean',
      default: 'true',
      description: '<span> When <Code>false</Code>, navigating through the items using arrow keys will be disabled. </span>',
    },
    {
      name: 'orientation',
      required: false,
      type: '&quot;horizontal&quot; | &quot;vertical&quot; | undefined',
      typeSimple: 'enum',
      default: 'undefined',
      description: '<span> The orientation of the component, which determines how focus moves: <Code>horizontal</Code> for left/right arrows and <Code>vertical</Code> for up/down arrows. </span>',
    },
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      description: '<span> The reading direction of the toggle group. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode. </span>',
    },
    {
      name: 'loop',
      required: false,
      type: 'boolean',
      default: 'true',
      description: '<span> When <Code>true</Code> and <Code>rovingFocus</Code> is <Code>true</Code>, keyboard navigation will loop from last item to first, and vice versa. </span>',
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
    type: '(payload: string | string[]) => void',
    description: 'Event handler called when the value changes.',
    }
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Item

An item in the group.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
    {
      name: 'value',
      required: true,
      type: 'string',
      description: 'A unique value for the item.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the item. </span>',
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
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

## Examples

### Ensuring there is always a value

You can control the component to ensure a value.

```vue line=4,8
<script setup>
import { ref } from 'vue'
import { ToggleGroupItem, ToggleGroupRoot } from 'radix-vue'

const value = ref('left')
</script>

<template>
  <ToggleGroupRoot v-model="value" type="single">
    <ToggleGroupItem value="left">
      <TextAlignLeftIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <TextAlignCenterIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <TextAlignRightIcon />
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>
```

## Accessibility

Uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/radio/radio.html) to manage focus movement among items.

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Tab'],
      description:
        'Moves focus to either the pressed item or the first item in the group.',
    },
    {
      keys: ['Space'],
      description: 'Activates/deactivates the item.',
    },
    {
      keys: ['Enter'],
      description: 'Activates/deactivates the item.',
    },
    {
      keys: ['ArrowDown'],
      description: 'Moves focus to the next item in the group.',
    },
    {
      keys: ['ArrowRight'],
      description: 'Moves focus to the next item in the group.',
    },
    {
      keys: ['ArrowUp'],
      description: 'Moves focus to the previous item in the group.',
    },
    {
      keys: ['ArrowLeft'],
      description: 'Moves focus to the previous item in the group.',
    },
    {
      keys: ['Home'],
      description: 'Moves focus to the first item.',
    },
    {
      keys: ['End'],
      description: 'Moves focus to the last item.',
    },
  ]"
/>
