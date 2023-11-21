---
title: Tags Input
description: Tags input render tags inside an input, followed by an actual text input.
name: tags-input 
---


# Tags Input

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

<PropsTable
  :data="[
    {
      name: 'defaultValue',
      required: false,
      type: 'string',
      description:
        'The value of the tags that should be added. Use when you do not need to control the state of the tags input',
    },
    {
      name: 'modelValue',
      required: false,
      type: 'string',
      description: '<span> The controlled value of the tags input. Can be binded with <Code>v-model</Code>.</span>',
    }, 
    {
      name: 'addOnPaste',
      required: false,
      type: 'boolean',
      description: '<span> When <Code>true</Code>, allow adding tags on paste. Work in conjunction with <Code>delimiter</Code> prop.</span>',
    }, 
    {
      name: 'delimiter',
      required: false,
      type: 'string',
      default: ', (comma)',
      description: 'The character to trigger the addition of a new tag. Also used to split tags for  <Code>@paste</Code> event',
    }, 
    {
      name: 'duplicate',
      required: false,
      type: 'boolean',
      default: 'false',
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
      name: 'max',
      required: false,
      type: 'number',
      description: 'Maximum number of tags.',
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
      type: '(value: string) => void',
      description: 'Event handler called when the value changes'
    },
    {
      name: '@invalid',
      type: '(value: string) => void',
      description: 'Event handler called when the value is invalid'
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
    {
      attribute: '[data-invalid]',
      values: 'Present when input value is invalid',
    },
  ]"
/>

### Item

The component that contains the tag.

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
      type: 'string',
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
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

### ItemText

The textual part of the tag. Important for accessibility. 

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
  ]"
/>

### ItemDelete

The button that delete the associate tag.

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

The input element for the tags input.

<PropsTable
  :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'input',
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
    {
      name: 'maxLength',
      type: 'number',
      description: 'Maximum number of character allowed.',
    },
  ]"
/>

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
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    }, 
  ]"
/>

## Examples

### With Combobox

You can compose Tags input together with [Combobox](components/combobox.html).

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
