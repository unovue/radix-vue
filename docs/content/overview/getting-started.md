---
outline: deep
metaTitle: Getting started
metaDescription: A quick tutorial to get you up and running with Radix Primitives.
name: popover
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoGettingStarted from '../../components/demo/GettingStarted/index.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Getting started

<Description>
A quick tutorial to get you up and running with Radix Primitives.
</Description>

## Implementing a Popover

In this quick tutorial, we will install and style the [Popover](../components/popover) component.

### 1. Install the library

Install the component from your command line.

```bash
npm install radix-vue
```

### 2. Import the parts

Import and structure the parts.

```vue
<!-- Popover.vue -->
<script setup lang="ts">
import { PopoverRoot, PopoverTrigger, PopoverPortal, PopoverContent, PopoverArrow, PopoverClose } from "radix-vue";
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>More info</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent>
        Some more info...
        <PopoverClose />
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

### 3. Add your styles

Add styles where desired.

```vue
<template>
  <PopoverRoot>
    <PopoverTrigger class="PopoverTrigger">More info</PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="PopoverContent">
        Some more info...
        <PopoverClose />
        <PopoverArrow class="PopoverArrow" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style>
.PopoverTrigger {
  background-color: white;
  border-radius: 4px;
}

.PopoverContent {
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  background-color: white;
}

.PopoverArrow {
  background-color: white;
}
</style>
```

### Demo

Here's a complete demo.

<HeroContainer>
<DemoGettingStarted />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/GettingStarted/index.vue

</div>
<div filename="styles.css">

<<< ../../components/demo/GettingStarted/styles.css

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Nuxt modules

Since [v0.1.18](https://github.com/radix-vue/radix-vue/releases/tag/v0.1.18), Radix Vue has introduced Nuxt modules.

In `nuxt.config.ts`, simply add `radix-vue/nuxt` into the modules, and it will auto-imports all the components for you.

```ts
export default defineNuxtConfig({
  modules: ["radix-vue/nuxt"],
});
```

## Summary

The steps above outline briefly what's involved in using a Radix Primitive in your application.

These components are low-level enough to give you control over how you want to wrap them. You're free to introduce your own high-level API to better suit the needs of your team and product.

In a few simple steps, we've implemented a fully accessible Popover component, without having to worry about many of its complexities.

- Adheres to [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal) design pattern.
- Can be controlled or uncontrolled.
- Customize side, alignment, offsets, collision handling.
- Optionally render a pointing arrow.
- Focus is fully managed and customizable.
- Dismissing and layering behavior is highly customizable.
