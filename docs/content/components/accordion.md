---
title: Accordion
description: A vertically stacked set of interactive headings that each reveal an associated section of content.
name: accordion
aria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion
---

<script setup>
import DemoAccordion from '../../components/demo/Accordion/index.vue'
</script>

# Accordion

<Description>
A vertically stacked set of interactive headings that each reveal an
associated section of content.
</Description>

<HeroContainer folder="Accordion">
<DemoAccordion />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Accordion/index.vue

</div>
<div filename="tailwind.config.js">

<<< ../../components/demo/Accordion/tailwind.config.js

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Full keyboard navigation.',
    'Supports horizontal/vertical orientation.',
    'Supports Right to Left direction.',
    'Can expand one or multiple items.',
    'Can be controlled or uncontrolled.'
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
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
</script>

<template>
  <AccordionRoot>
    <AccordionItem>
      <AccordionHeader>
        <AccordionTrigger />
      </AccordionHeader>
      <AccordionContent />
    </AccordionItem>
  </AccordionRoot>
</template>
```

## API Reference

### Root

Contains all the parts of an Accordion

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
      name: 'type',
      required: true,
      type: '&quot;single&quot; | &quot;multiple&quot;',
      typeSimple: 'enum',
      description: 'Determines whether one or multiple items can be opened at the same time.',
    },
    {
      name: 'defaultValue',
      required: false,
      type: 'string | string[]',
      description: 'The value of the item to expand when initially rendered. Use when you do not need to control the state of the items.',
    },
    {
      name: 'value',
      required: false,
      type: 'string | string[]',
      description: 'The controlled value of the item to expand. Must be binded with v-model.',
    },
    {
      name: 'collapsible',
      required: false,
      default: 'false',
      type: 'boolean',
      description: 'When <code>type</code> is <code>&quot;single&quot;</code>, allows closing content when clicking trigger for an open item.',
    },
    {
      name: 'disabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'When `true`, prevents the user from interacting with the accordion and all its items.',
    },
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      default: '&quot;ltr&quot;',
      description: 'The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.',
    },
    {
      name: 'orientation',
      required: false,
      type: '&quot;horizontal&quot; | &quot;vertical&quot;',
      typeSimple: 'enum',
      default: '&quot;vertical&quot;',
      description: 'The orientation of the Accordion',
    }
  ]"
/>

<EmitsTable 
  :data="[
    {
      name: '@update:modelValue',
      type: '(value: string) => void',
      description: 'Event handler called when the expanded state of an item changes'
    },
  ]" 
/>


<DataAttributesTable
  :data="[
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
  }]"
/>

### Item

Contains all the parts of a collapsible section.

<PropsTable :data="[
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
      description: 'When true, prevents the user from interacting with accordion and all items',
    },
    {
      name: 'value',
      required: true,
      type: 'string',
      description: 'A unique value for the item.',
    }]" />

<DataAttributesTable :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    }]" />

### Header

Wraps an `AccordionTrigger`. Use the `asChild` prop to update it to the appropriate heading level for your page.

<PropsTable :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'h3',
      description: 'The element or component this component should render as. Can be overwrite by <Code>asChild</Code>'
    },
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    }]" />

<DataAttributesTable :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    }]" />

### Trigger

Toggles the collapsed state of its associated item. It should be nested inside of an `AccordionHeader`.

<PropsTable :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'button',
      description: 'The element or component this component should render as. Can be overwrite by <Code>asChild</Code>'
    },{
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    }]" />

<DataAttributesTable :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    }]" />

### Content

Contains the collapsible content for an item.

<PropsTable :data="[
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
      name: 'forceMount',
      type: 'boolean',
      description: `
        Used to force mounting when more control is needed. Useful when controlling animation with Vue.js animation libraries.
      `,
    },
  ]" />

<DataAttributesTable :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    }]" />

<CssVariablesTable :data="[
    {
      cssVariable: '--radix-accordion-content-width',
      description: 'The width of the content when it opens/closes',
    },
    {
      cssVariable: '--radix-accordion-content-height',
      description: 'The height of the content when it opens/closes',
    }]"
/>

## Examples

### Expanded by default

Use the `defaultValue` prop to define the open item by default.

```vue line=2
<template>
  <AccordionRoot type="single" default-value="item-2">
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### Allow collapsing all items

Use the `collapsible` prop to allow all items to close.

```vue line=2
<template>
  <AccordionRoot type="single" collapsible>
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### Multiple items open at the same time

Set the `type` prop to `multiple` to enable opening multiple items at once.

```vue line=2
<template>
  <AccordionRoot type="multiple">
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### Rotated icon when open

You can add extra decorative elements, such as chevrons, and rotate it when the item is open.

```vue line=14
// index.vue
<script setup>
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import { Icon } from '@iconify/vue'
import './styles.css'
</script>

<template>
  <AccordionRoot type="single">
    <AccordionItem value="item-1">
      <AccordionHeader>
        <AccordionTrigger class="AccordionTrigger">
          <span>Trigger text</span>
          <Icon icon="radix-icons:chevron-down" class="AccordionChevron" aria-hidden />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>…</AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
```

```css line=5-7
/* styles.css */
.AccordionChevron {
  transition: transform 300ms;
}
.AccordionTrigger[data-state="open"] > .AccordionChevron {
  transform: rotate(180deg);
}
```

### Horizontal orientation

Use the `orientation` prop to create a horizontal Accordion

```vue line=2
<template>
  <AccordionRoot orientation="horizontal">
    <AccordionItem value="item-1">
      …
    </AccordionItem>
    <AccordionItem value="item-2">
      …
    </AccordionItem>
  </AccordionRoot>
</template>
```

### Animating content size

Use the `--radix-accordion-content-width` and/or `--radix-accordion-content-height` CSS variables to animate the size of the content when it opens/closes:

```vue line=11
// index.vue
<script setup>
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import './styles.css'
</script>

<template>
  <AccordionRoot type="single">
    <AccordionItem value="item-1">
      <AccordionHeader>…</AccordionHeader>
      <AccordionContent class="AccordionContent">
        …
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
```

```css line=17,23
/* styles.css */
.AccordionContent {
  overflow: hidden;
}
.AccordionContent[data-state="open"] {
  animation: slideDown 300ms ease-out;
}
.AccordionContent[data-state="closed"] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
```

## Accessibility

Adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion).

### Keyboard Interactions

<KeyboardTable :data="[
    {
      keys: ['Space'],
      description: 'When focus is on an <code>AccordionTrigger</code> of a collapsed section, expands the section.',
    },
    {
      keys: ['Enter'],
      description: 'When focus is on an <code>AccordionTrigger</code> of a collapsed section, expands the section.',
    },
    {
      keys: ['Tab'],
      description: 'Moves focus to the next focusable element.',
    },
    {
      keys: ['Shift + Tab'],
      description: 'Moves focus to the previous focusable element.',
    },
    {
      keys: ['ArrowDown'],
      description: 'Moves focus to the next <code>AccordionTrigger</code> when <code>orientation</code> is <code>vertical</code>.',
    },
    {
      keys: ['ArrowUp'],
      description: 'Moves focus to the previous <code>AccordionTrigger</code> when <code>orientation</code> is <code>vertical</code>.',
    },
    {
      keys: ['ArrowRight'],
      description: 'Moves focus to the next <code>AccordionTrigger</code> when <code>orientation</code> is <code>horizontal</code>.',
    },
    {
      keys: ['ArrowLeft'],
      description: 'Moves focus to the previous <code>AccordionTrigger</code> when <code>orientation</code> is <code>horizontal</code>.',
    },
    {
      keys: ['Home'],
      description: 'When focus is on an <code>AccordionTrigger</code>, moves focus to the start <code>AccordionTrigger</code>.',
    },
    {
      keys: ['End'],
      description: 'When focus is on an <code>AccordionTrigger</code>, moves focus to the last <code>AccordionTrigger</code>.',
    }]" />
