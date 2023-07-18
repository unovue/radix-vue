---
outline: deep
metaTitle: Radio Group
metaDescription: A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
name: radio-group
aria: https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoRadioGroup from '../../components/demo/RadioGroup/index.vue'
import PropsTable from '../../components/tables/PropsTable.vue'
import EmitsTable from '../../components/tables/EmitsTable.vue'
import DataAttributesTable from '../../components/tables/DataAttributesTable.vue'
import KeyboardTable from '../../components/tables/KeyboardTable.vue'
import Highlights from '../../components/Highlights.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# RadioGroup

<Description>
A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
</Description>

<HeroContainer>
<DemoRadioGroup />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/RadioGroup/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features
<Highlights
  :features="[
    'Full keyboard navigation.',
    'Supports horizontal/vertical orientation.',
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
import { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator } from "radix-vue";
</script>

<template>
  <RadioGroupRoot>
    <RadioGroupItem>
      <RadioGroupIndicator />
    </RadioGroupItem>
  </RadioGroupRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a radio group.

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
      name: 'defaultValue',
      type: 'string',
      description: 'The value of the radio item that should be checked when initially rendered. Use when you do not need to control the state of the radio items.',
    },
    {
      name: 'value',
      type: 'string',
      description: '<span> The controlled value of the radio item to check. Should be binded with <Code>v-model</Code>. </span>',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with radio items. </span>',
    },
    {
      name: 'name',
      type: 'string',
      description: 'The name of the group. Submitted with its owning form as part of a name/value pair.',
    },
    {
      name: 'required',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, indicates that the user must check a radio item before the owning form can be submitted. </span>',
    },
    {
      name: 'orientation',
      required: false,
      type: '&quot;horizontal&quot; | &quot;vertical&quot; | undefined',
      typeSimple: 'enum',
      default: 'undefined',
      description: 'The orientation of the component.',
    },
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      description: '<span> The reading direction of the radio group. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode. </span>',
    },
    {
      name: 'loop',
      required: false,
      type: 'boolean',
      default: 'true',
      description: '<span> When <Code>true</Code>, keyboard navigation will loop from last item to first, and vice versa. </span>',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

### Item

An item in the group that can be checked. An `input` will also render when used within a `form` to ensure events propagate correctly.

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
      type: 'string',
      description: '<span> The value given as data when submitted with a <Code>name</Code>. </span>',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the radio item. </span>',
    },
    {
      name: 'required',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, indicates that the user must check the radio item before the owning form can be submitted. </span>',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['checked', 'unchecked'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

### Indicator

Renders when the radio item is in a checked state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

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
      name: 'forceMount',
      type: 'boolean',
      description: 'Used to force mounting when more control is needed. Useful when controlling animation with Vue.js animation libraries.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['checked', 'unchecked'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

## Accessibility

Adheres to the [Radio Group WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton) and uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/radio/radio.html) to manage focus movement among radio items.

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Tab'],
      description: 'Moves focus to either the checked radio item or the first radio item in the group.',
    },
    {
      keys: ['Space'],
      description: 'When focus is on an unchecked radio item, checks it.',
    },
    {
      keys: ['ArrowDown'],
      description: 'Moves focus and checks the next radio item in the group.',
    },
    {
      keys: ['ArrowRight'],
      description: 'Moves focus and checks the next radio item in the group.',
    },
    {
      keys: ['ArrowUp'],
      description: 'Moves focus to the previous radio item in the group.',
    },
    {
      keys: ['ArrowLeft'],
      description: 'Moves focus to the previous radio item in the group.',
    },
  ]"
/>
