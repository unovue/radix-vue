---
title: Tags Input
description: Tags input render tags inside an input, followed by an actual text input.
name: tags-input 
---

# Tags Input

<Badge>Alpha</Badge>

<Description>
Tag inputs render tags inside an input, followed by an actual text input.
</Description>

<ComponentPreview name="TagsInput" />

## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Full keyboard navigation.',
    'Limit the number of tags.',
    'Accept value from clipboard.',
    'Clear button to reset all tags values.'
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
import { TagsInputClear, TagsInputDelete, TagsInputInput, TagsInputItem, TagsInputRoot, TagsInputText } from 'radix-vue'
</script>

<template>
  <TagsInputRoot>
    <TagsInputItem>
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>

    <TagsInputInput />
    <TagsInputClear />
  </TagsInputRoot>
</template>
```

## API Reference

### Root

Contains all the tags input component parts.

<!-- @include: @/meta/TagsInputRoot.md -->


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
    {
      attribute: '[data-invalid]',
      values: 'Present when input value is invalid',
    },
  ]"
/>

### Item

The component that contains the tag.

<!-- @include: @/meta/TagsInputItem.md -->

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

### ItemText

The textual part of the tag. Important for accessibility. 

<!-- @include: @/meta/TagsInputItemText.md -->

### ItemDelete

The button that delete the associate tag.

<!-- @include: @/meta/TagsInputItemDelete.md -->

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

The input element for the tags input.

<!-- @include: @/meta/TagsInputInput.md -->

<DataAttributesTable
  :data="[ 
    {
      attribute: '[data-invalid]',
      values: 'Present when input value is invalid',
    },
  ]"
/>


### Clear

The button that remove all tags.

<!-- @include: @/meta/TagsInputClear.md -->

<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    }, 
  ]"
/>

## Examples

### With Combobox

You can compose Tags input together with [Combobox](../components/combobox.html).

<ComponentPreview name="TagsInputCombobox" />


### Paste behavior

You can automatically add tags on paste by passing the `add-on-paste` prop.

```vue line=6
<script setup lang="ts">
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'radix-vue'
</script>

<template>
  <TagsInputRoot v-model="modelValue" add-on-paste>
    …
  </TagsInputRoot>
</template>
```

## Accessibility
 
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
