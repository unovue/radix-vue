---
outline: deep
metaTitle: Tabs
metaDescription: A set of layered sections of content—known as tab panels—that are displayed one at a time.
name: tabs
aria: https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoTabs from '../../components/demo/Tabs/index.vue'
import PropsTable from '../../components/tables/PropsTable.vue'
import EmitsTable from '../../components/tables/EmitsTable.vue'
import DataAttributesTable from '../../components/tables/DataAttributesTable.vue'
import KeyboardTable from '../../components/tables/KeyboardTable.vue'
import Highlights from '../../components/Highlights.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Tabs

<Description>
A set of layered sections of content—known as tab panels—that are displayed one at a time.
</Description>

<HeroContainer>
<DemoTabs />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Tabs/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features
<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Supports horizontal/vertical orientation.',
    'Supports automatic/manual activation.',
    'Full keyboard navigation.',
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
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "radix-vue";
</script>

<template>
  <TabsRoot>
    <TabsList>
      <TabsTrigger />
    </TabsList>
    <TabsContent />
  </TabsRoot>
</template>
```

## API Reference

### Root

Contains all the tabs component parts.

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
      required: false,
      type: 'string',
      description:
        'The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs',
    },
    {
      name: 'value',
      required: false,
      type: 'string',
      description: '<span> The controlled value of the tab to activate. Should be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'orientation',
      required: false,
      type: '&quot;horizontal&quot; | &quot;vertical&quot; | undefined',
      typeSimple: 'enum',
      default: '&quot;horizontal&quot;',
      description: 'The orientation of the component.',
    },
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      description: '<span> The reading direction of the tabs If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.</span>',
    },
    {
      name: 'activationMode',
      required: false,
      type: '&quot;automatic&quot; | &quot;manual&quot;',
      typeSimple: 'enum',
      default: '&quot;automatic&quot;',
      description: '<span> When <Code>automatic</Code>, tabs are activated when receiving focus. When <Code>manual</Code>, tabs are activated when clicked.</span>',
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

### List

Contains the triggers that are aligned along the edge of the active content.

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

### Trigger

The button that activates its associated content.

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
      description: 'A unique value that associates the trigger with a content.',
    },
    {
      name: 'disabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the tab.</span>',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['active', 'inactive'],
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

### Content

Contains the content associated with each trigger.

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
      description: 'A unique value that associates the content with a trigger.',
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description: '<span> Used to force mounting when more control is needed. Useful when controlling animation with Vue.js animation libraries.</span>',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['active', 'inactive'],
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

## Examples

### Vertical

You can create vertical tabs by using the `orientation` prop.

```vue line=6
<script setup>
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "radix-vue";
</script>

<template>
  <TabsRoot defaultValue="tab1" orientation="vertical">
    <TabsList aria-label="tabs example">
      <TabsTrigger value="tab1">One</TabsTrigger>
      <TabsTrigger value="tab2">Two</TabsTrigger>
      <TabsTrigger value="tab3">Three</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Tab one content</TabsContent>
    <TabsContent value="tab2">Tab two content</TabsContent>
    <TabsContent value="tab3">Tab three content</TabsContent>
  </TabsRoot>
</template>
```

## Accessibility

Adheres to the [Tabs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Tab'],
      description: '<span> When focus moves onto the tabs, focuses the active trigger. When a trigger is focused, moves focus to the active content.</span>',
    },
    {
      keys: ['ArrowDown'],
      description: '<span> Moves focus to the next trigger depending on <Code>orientation</Code> and activates its associated content.</span>',
    },
    {
      keys: ['ArrowRight'],
      description: '<span> Moves focus to the next trigger depending on <Code>orientation</Code> and activates its associated content.</span>',
    },
    {
      keys: ['ArrowUp'],
      description: '<span> Moves focus to the previous trigger depending on <Code>orientation</Code> and activates its associated content.</span>',
    },
    {
      keys: ['ArrowLeft'],
      description: '<span> Moves focus to the previous trigger depending on <Code>orientation</Code> and activates its associated content.</span>',
    },
    {
      keys: ['Home'],
      description: '<span> Moves focus to the first trigger and activates its associated content.</span>',
    },
    {
      keys: ['End'],
      description: '<span> Moves focus to the last trigger and activates its associated content.</span>',
    },
  ]"
/>