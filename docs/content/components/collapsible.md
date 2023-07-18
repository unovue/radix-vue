---
outline: deep
metaTitle: Collapsible
metaDescription: An interactive component which expands/collapses a panel.
name: collapsible
aria: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoCollapsible from '../../components/demo/Collapsible/index.vue'
import PropsTable from '../../components/tables/PropsTable.vue'
import EmitsTable from '../../components/tables/EmitsTable.vue'
import DataAttributesTable from '../../components/tables/DataAttributesTable.vue'
import KeyboardTable from '../../components/tables/KeyboardTable.vue'
import Highlights from '../../components/Highlights.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Collapsible

<Description>
An interactive component which expands/collapses a panel.
</Description>

<HeroContainer>
<DemoCollapsible />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Collapsible/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

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
import {
	CollapsibleRoot,
	CollapsibleTrigger,
	CollapsibleContent,
} from "radix-vue";
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
      name: 'defaultOpen',
      type: 'boolean',
      description:
        'The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.',
    },
    {
      name: 'open',
      type: 'boolean',
      description: '<span>The controlled open state of the collapsible. Must be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span>When <Code>true</Code>, prevents the user from interacting with the collapsible.</span>',
    },
  ]"
/>

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

<PropsTable
  :data="[
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
      name: 'forceMount',
      type: 'boolean',
      description:
        'Used to force mounting when more control is needed. Useful when controlling animation with Vue.js animation libraries.',
    },
  ]"
/>

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
import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from "radix-vue";
import './styles.css';
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
		height: var(__--radix-collapsible-content-height__);
	}
}

@keyframes slideUp {
	from {
		height: var(__--radix-collapsible-content-height__);
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
