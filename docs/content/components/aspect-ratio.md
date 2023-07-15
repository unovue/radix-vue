---
outline: deep
metaTitle: Aspect Ratio
metaDescription: Displays content within a desired ratio.
name: aspect-ratio
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoAspectRatio from '../../components/demo/AspectRatio/index.vue'
import PropsTable from '../../components/tables/PropsTable.vue'
import EmitsTable from '../../components/tables/EmitsTable.vue'
import DataAttributesTable from '../../components/tables/DataAttributesTable.vue'
import KeyboardTable from '../../components/tables/KeyboardTable.vue'
import Highlights from '../../components/Highlights.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Aspect Ratio

<Description>
A modal dialog that interrupts the user with important content and expects a
response.
</Description>

<HeroContainer>
<DemoAspectRatio />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/AspectRatio/index.vue

</div>
<div filename="tailwind.config.js">

<<< ../../components/demo/AspectRatio/tailwind.config.js

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

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