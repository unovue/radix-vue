---

title: Aspect Ratio
description: Displays content within a desired ratio.
name: aspect-ratio
---

# Aspect Ratio

<Description>
Displays content within a desired ratio.
</Description>

<ComponentPreview name="AspectRatio" />

## Features

<Highlights
  :features="[
    'Accepts any custom ratio.'
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
import { AspectRatio } from 'radix-vue'
</script>

<template>
  <AspectRatio />
</template>
```

## API Reference

### Root

Contains the content you want to constrain to a given ratio.

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
      name: 'ratio',
      type: 'number',
      default: '1',
      description: 'The desired ratio',
    },
  ]"
/>
