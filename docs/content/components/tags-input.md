---
title: Tags Input
description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
name: tabs
aria: https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel
---


# Tags Input

<Description>
A set of layered sections of content—known as tab panels—that are displayed one at a time.
</Description>

<ComponentPreview name="TagsInput" />

## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Full keyboard navigation.'
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
import { TagsInputDelete, TagsInputInput, TagsInputItem, TagsInputRoot, TagsInputText } from 'radix-vue'
</script>

<template>
  <TagsInputRoot>
    <TagsInputItem>
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>

    <TagsInputInput />
  </TagsInputRoot>
</template>
```

## API Reference

### Root

Contains all the tabs component parts.

<PropsTable
  :data="[
    {
      name: 'defaultValue',
      required: false,
      type: 'string | object',
      description:
        'The value of the tags that should be added. Use when you do not need to control the state of the tags input',
    },
    {
      name: 'modelValue',
      required: false,
      type: 'string | object',
      description: '<span> The controlled value of the tags input. Can be binded with <Code>v-model</Code>.</span>',
    }, 
    {
      name: 'duplicate',
      required: false,
      type: 'boolean',
      description: '<span> When <Code>true</Code>, allow duplicated tags.</span>',
    }, 
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      description: '<span> The reading direction of the tabs If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.</span>',
    }, 
    {
      name: 'disabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the tags input.</span>',
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
      type: '(value: string | object) => void',
      description: 'Event handler called when the value changes'
    },
  ]" 
/>


<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-focused]',
      values: 'Present when focus on input',
    },
  ]"
/>

### Item

Contains the triggers that are aligned along the edge of the active content.

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
      name: 'disabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the tags input.</span>',
    },
    {
      name: 'value',
      type: 'string | object',
      description: 'Value associated with the tags',
    },
  ]"
/>

<DataAttributesTable
  :data="[ 
    {
      attribute: '[data-state]',
      values: ['active', 'inactive'],
    },
  ]"
/>

### Item Text

The button that activates its associated content.

<PropsTable
  :data="[
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

### Item Delete

The button that activates its associated content.

<PropsTable
  :data="[
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
  ]"
/>

### Input

Contains the content associated with each trigger.

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
      name: 'placeholder', 
      type: 'string',
      description: 'The placeholder character to use for empty tags input.',
    },
    {
      name: 'autoFocus',
      type: 'boolean',
      description: '<span> Focus on element when mounted.</span>',
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
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
</script>

<template>
  <TabsRoot default-value="tab1" orientation="vertical">
    <TabsList aria-label="tabs example">
      <TabsTrigger value="tab1">
        One
      </TabsTrigger>
      <TabsTrigger value="tab2">
        Two
      </TabsTrigger>
      <TabsTrigger value="tab3">
        Three
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      Tab one content
    </TabsContent>
    <TabsContent value="tab2">
      Tab two content
    </TabsContent>
    <TabsContent value="tab3">
      Tab three content
    </TabsContent>
  </TabsRoot>
</template>
```

## Accessibility

Adheres to the [Tabs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Delete'],
      description: '<span> When tag is active, remove it and set the tag on right active.</span>',
    },
    {
      keys: ['Backspace'],
      description: '<span> When tag is active, remove it and set the tag on left active. If there are no tags to the left, either the next tags gets focus, or the input.</span>',
    },
    {
      keys: ['ArrowRight'],
      description: '<span> Set the next tag active.</span>',
    }, 
    {
      keys: ['ArrowLeft'],
      description: '<span> Set the previous tag active.</span>',
    },
    {
      keys: ['Home'],
      description: '<span> Set the first tag active</span>',
    },
    {
      keys: ['End'],
      description: '<span> Set the last tag active</span>',
    },
  ]"
/>
