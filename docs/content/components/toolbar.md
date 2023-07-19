---
outline: deep
metaTitle: Toolbar
metaDescription: A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.
name: toolbar
aria: https://www.w3.org/WAI/ARIA/apg/patterns/toolbar
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoToolbar from '../../components/demo/Toolbar/index.vue'
import PropsTable from '../../components/tables/PropsTable.vue'
import EmitsTable from '../../components/tables/EmitsTable.vue'
import DataAttributesTable from '../../components/tables/DataAttributesTable.vue'
import KeyboardTable from '../../components/tables/KeyboardTable.vue'
import Highlights from '../../components/Highlights.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Toolbar

<Description>
A container for grouping a set of controls, such as buttons, Toolbar groups or
dropdown menus.
</Description>

<HeroContainer>
<DemoToolbar />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Toolbar/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights :features="['Full keyboard navigation.']" />

## Installation

Install the component from your command line.

```bash
npm install radix-vue
```

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import {
  ToolbarRoot,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarSeparator,
  ToolbarButton,
  ToolbarLink,
} from "radix-vue";
</script>

<template>
  <ToolbarRoot>
    <ToolbarButton />
    <ToolbarSeparator />
    <ToolbarLink />
    <ToolbarToggleGroup>
      <ToolbarToggleItem />
    </ToolbarToggleGroup>
  </ToolbarRoot>
</template>
```

## API Reference

### Root

Contains all the toolbar component parts.

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
      name: 'orientation',
      required: false,
      type: '&quot;horizontal&quot; | &quot;vertical&quot; | undefined',
      typeSimple: 'enum',
      default: '&quot;horizontal&quot;',
      description: 'The orientation of the toolbar',
    },
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      description: '<span> The reading direction of the toolbar If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.</span>',
    },
    {
      name: 'loop',
      required: false,
      type: 'boolean',
      default: 'true',
      description: '<span> When <Code>true</Code>, keyboard navigation will loop from last tab to first, and vice versa.</span>',
    },
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

### Button

A button item.

<PropsTable
  :data="[
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
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Link

A link item.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

### ToggleGroup

A set of two-state buttons that can be toggled on or off.

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
      name: 'type',
      required: true,
      type: '&quot;single&quot; | &quot;multiple&quot;',
      typeSimple: 'enum',
      description: '<span> Determines whether a single or multiple items can be pressed at a time.</span>',
    },
    {
      name: 'value',
      required: false,
      type: 'string | string[]',
      description: '<span> The controlled value of the pressed item when <Code>type</Code> is <Code>&quot;single&quot;</Code>. Must be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'defaultValue',
      required: false,
      type: 'string | string[]',
      description: '<span> The value of the item to show as pressed when initially rendered and <Code>type</Code> is <Code>&quot;single&quot;</Code>. Use when you do not need to control the state of the items.</span>',
    },
    {
      name: 'disabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the toggle group and all its items.</span>',
    },
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

### ToggleItem

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
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the item.</span>',
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

### Separator

Used to visually separate items in the toolbar

<PropsTable
  :data="[
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
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

## Examples

### Use with other primitives

All our primitives which expose a `Trigger` part, such as `Dialog`, `AlertDialog`, `Popover`, `DropdownMenu` can be composed within a toolbar by using the [`asChild` prop](/guides/composition).

Here is an example using our `DropdownMenu` primitive.

```vue line=21-23
<script setup lang="ts">
import {
  ToolbarRoot,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarSeparator,
  ToolbarButton,
  ToolbarLink,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent
} from "radix-vue";

</script>

<template>
  <ToolbarRoot>
    <ToolbarButton>Action 1</ToolbarButton>
    <ToolbarSeparator />
    <DropdownMenuRoot>
      <ToolbarButton asChild>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
      </ToolbarButton>
      <DropdownMenuContent>…</DropdownMenuContent>
    </DropdownMenuRoot>
  </ToolbarRoot>
</template>
```

## Accessibility

Uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/radio/radio.html) to manage focus movement among items.

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Tab'],
      description: 'Moves focus to the first item in the group.',
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
      description: '<span> Moves focus to the next item depending on <Code>orientation</Code>.</span>',
    },
    {
      keys: ['ArrowRight'],
      description: '<span> Moves focus to the next item depending on <Code>orientation</Code>.</span>',
    },
    {
      keys: ['ArrowUp'],
      description: '<span> Moves focus to the previous item depending on <Code>orientation</Code> .</span>',
    },
    {
      keys: ['ArrowLeft'],
      description: '<span> Moves focus to the previous item depending on <Code>orientation</Code> .</span>',
    },
    {
      keys: ['Home'],
      description: '<span>Moves focus to the first item.</span>',
    },
    {
      keys: ['End'],
      description: '<span>Moves focus to the last item.</span>',
    },
  ]"
/>
