---

title: Collapsible
description: An interactive component which expands/collapses a panel.
name: collapsible
aria: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure
---

 
# Collapsible

<Description>
An interactive component which expands/collapses a panel.
</Description>

<ComponentPreview name="Collapsible" />


## Features

<Highlights
  :features="[
    'Full keyboard navigation.',
    'Can be controlled or uncontrolled.',
  ]"
/>

## Installation

Install the component from your command line.

```bash
npm install radix-vue
```

## Anatomy

Import the components and piece the parts together.

```vue
<script setup>
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'radix-vue'
</script>

<template>
  <CollapsibleRoot>
    <CollapsibleTrigger />
    <CollapsibleContent />
  </CollapsibleRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a collapsible

<!-- @include: @/meta/CollapsibleRoot.md -->

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

### Trigger

The button that toggles the collapsible


<!-- @include: @/meta/CollapsibleTrigger.md -->

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

### Content

The component that contains the collapsible content.


<!-- @include: @/meta/CollapsibleContent.md -->

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

<CssVariablesTable
  :data="[
    {
      cssVariable: '--radix-collapsible-content-width',
      description: 'The width of the content when it opens/closes',
    },
    {
      cssVariable: '--radix-collapsible-content-height',
      description: 'The height of the content when it opens/closes',
    },
  ]"
/>

## Examples

### Animating content size

Use the `--radix-collapsible-content-width` and/or `--radix-collapsible-content-height` CSS variables to animate the size of the content when it opens/closes. Here's a demo:

```vue line=10
// index.vue
<script setup>
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'radix-vue'
import './styles.css'
</script>

<template>
  <CollapsibleRoot>
    <CollapsibleTrigger>…</CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent">
      …
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
```

```css line=17,23
/* styles.css */
.CollapsibleContent {
  overflow: hidden;
}
.CollapsibleContent[data-state="open"] {
  animation: slideDown 300ms ease-out;
}
.CollapsibleContent[data-state="closed"] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
}
```

## Accessibility

Adheres to the [Disclosure WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Space'],
      description: 'Opens/closes the collapsible',
    },
    {
      keys: ['Enter'],
      description: 'Opens/closes the collapsible',
    },
  ]"
/>
