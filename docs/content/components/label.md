---
outline: deep
metaTitle: Label
metaDescription: Renders an accessible label associated with controls.
name: label
---

<script setup> 
import DemoLabel from '../../components/demo/Label/index.vue' 
</script>

# Label

<Description>
Renders an accessible label associated with controls.
</Description>

<HeroContainer>
<DemoLabel />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Label/index.vue

</div>
<div filename="tailwind.config.js">

<<< ../../components/demo/Label/tailwind.config.js

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Text selection is prevented when double clicking label.',
    'Supports nested controls.',
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
import { Label } from "radix-vue";
</script>

<template>
  <Label />
</template>
```

## API Reference

### Root

Contains the content for the label.

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
      name: 'for',
      type: 'string',
      description: 'The id of the element the label is associated with.',
    },
  ]"
/>

## Accessibility

This component is based on the native `label` element, it will automatically apply the correct labelling when wrapping controls or using the `for` attribute. For your own custom controls to work correctly, ensure they use native elements such as `button` or `input` as a base.
