---

title: Separator
description: Visually or semantically separates content.
name: separator
aria: https://www.w3.org/TR/wai-aria-1.2/#separator
---

# Separator

<Description>
Visually or semantically separates content.
</Description>

<ComponentPreview name="Separator" />


## Features

<Highlights :features="['Supports horizontal and vertical orientations.']" />

## Installation

Install the component from your command line.

```bash
npm install radix-vue
```

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { Separator } from 'radix-vue'
</script>

<template>
  <Separator />
</template>
```

## API Reference

### Root

The separator.

<PropsTable
  :data="[
    {
      name: 'orientation',
      type: '&quot;horizontal&quot; | &quot;vertical&quot;',
      typeSimple: 'enum',
      default: '&quot;horizontal&quot;',
      description: 'The orientation of the separator.',
    },
    {
      name: 'decorative',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.</span>',
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

<DataAttributesTable
  :data="[
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

## Accessibility

Adheres to the [`separator` role requirements](https://www.w3.org/TR/wai-aria-1.2/#separator).
