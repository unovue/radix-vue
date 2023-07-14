---
outline: deep
metaTitle: Accordion
metaDescription: A vertically stacked set of interactive headings that each reveal an associated section of content.
name: accordion
aria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoAccordion from '../../components/demo/Accordion/index.vue'
import PropsTable from '../../components/tables/PropsTable.vue'
import DataAttributesTable from '../../components/tables/DataAttributesTable.vue'
import CssVariablesTable from '../../components/tables/CssVariablesTable.vue'
import KeyboardTable from '../../components/tables/KeyboardTable.vue'
import Highlights from '../../components/Highlights.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Accordion

<Description>
A vertically stacked set of interactive headings that each reveal an
associated section of content.
</Description>

<HeroContainer>
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
npm install @radix-ui/react-accordion
```

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from "radix-vue";
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

Contains all the parts of an accordion.
<!---->
<PropsTable :data="[{
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
    },
    {
      name: 'type',
      required: true,
      type: '&quot;single&quot; | &quot;multiple&quot;',
      typeSimple: 'enum',
      description: 'Determines whether one or multiple items can be opened at the same time.',
    },
    {
      name: 'value',
      required: false,
      type: 'string',
      description: 'The controlled value of the item to expand when',
    },
    {
      name: 'defaultValue',
      required: false,
      type: 'string',
      description: 'The value of the item to expand when initially rendered and',
    },
    {
      name: 'onValueChange',
      required: false,
      type: '(value: string) => void',
      typeSimple: 'function',
      description: 'Event handler called when the expanded state of an item changes and',
    },
    {
      name: 'value',
      required: false,
      default: '[]',
      type: 'string[]',
      description: 'The controlled value of the item to expand when',
    },
    {
      name: 'defaultValue',
      required: false,
      default: '[]',
      type: 'string[]',
      description: 'The value of the item to expand when initially rendered when',
    },
    {
      name: 'onValueChange',
      required: false,
      type: '(value: string[]) => void',
      typeSimple: 'function',
      description: 'Event handler called when the expanded state of an item changes and',
    },
    {
      name: 'collapsible',
      required: false,
      default: 'false',
      type: 'boolean',
      description: 'allows closing content when clicking trigger for an open item.',
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
      description: 'The orientation of the accordion.',
    }]" />


<DataAttributesTable :data="[
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    }]" />

### Item

Contains all the parts of a collapsible section.

<PropsTable :data="[{
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
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

Wraps an `Accordion.Trigger`. Use the `asChild` prop to update it to the appropriate heading level for your page.

<PropsTable :data="[{
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
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

Toggles the collapsed state of its associated item. It should be nested inside of an `Accordion.Header`.

<PropsTable :data="[{
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
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

<PropsTable :data="[{
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description: 'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.',
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

```jsx line=1
<Accordion.Root type="single" __defaultValue__="item-2">
  <Accordion.Item value="item-1">…</Accordion.Item>
  <Accordion.Item value="item-2">…</Accordion.Item>
</Accordion.Root>
```

### Allow collapsing all items

Use the `collapsible` prop to allow all items to close.

```jsx line=1
<Accordion.Root type="single" __collapsible__>
  <Accordion.Item value="item-1">…</Accordion.Item>
  <Accordion.Item value="item-2">…</Accordion.Item>
</Accordion.Root>
```

### Multiple items open at the same time

Set the `type` prop to `multiple` to enable opening multiple items at once.

```jsx line=1
<Accordion.Root type="__multiple__">
  <Accordion.Item value="item-1">…</Accordion.Item>
  <Accordion.Item value="item-2">…</Accordion.Item>
</Accordion.Root>
```

### Rotated icon when open

You can add extra decorative elements, such as chevrons, and rotate it when the item is open.

```jsx line=12
// index.jsx
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './styles.css';

export default () => (
  <Accordion.Root type="single">
    <Accordion.Item value="item-1">
      <Accordion.Header>
        <Accordion.Trigger className="AccordionTrigger">
          <span>Trigger text</span>
          <ChevronDownIcon __className__="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>…</Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);
```

```css line=5-7
/* styles.css */
.AccordionChevron {
  transition: transform 300ms;
}
.AccordionTrigger[data-state='open'] > .AccordionChevron {
  transform: rotate(180deg);
}
```

### Horizontal orientation

Use the `orientation` prop to create a horizontal accordion.

```jsx line=1
<Accordion.Root __orientation__="horizontal">
  <Accordion.Item value="item-1">…</Accordion.Item>
  <Accordion.Item value="item-2">…</Accordion.Item>
</Accordion.Root>
```

### Animating content size

Use the `--radix-accordion-content-width` and/or `--radix-accordion-content-height` CSS variables to animate the size of the content when it opens/closes:

```jsx line=9
// index.jsx
import * as Accordion from '@radix-ui/react-accordion';
import './styles.css';

export default () => (
  <Accordion.Root type="single">
    <Accordion.Item value="item-1">
      <Accordion.Header>…</Accordion.Header>
      <Accordion.Content __className__="AccordionContent">…</Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);
```

```css line=21,27
/* styles.css */
.AccordionContent {
  overflow: hidden;
}
.AccordionContent[data-state='open'] {
  animation: slideDown 300ms ease-out;
}
.AccordionContent[data-state='closed'] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(__--radix-accordion-content-height__);
  }
}

@keyframes slideUp {
  from {
    height: var(__--radix-accordion-content-height__);
  }
  to {
    height: 0;
  }
}
```

## Accessibility

Adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion).

### Keyboard Interactions

<KeyboardTable :data="[
    {
      keys: ['Space'],
      description: 'Moves focus to the next',
    },
    {
      keys: ['Enter'],
      description: 'Moves focus to the next',
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
      description: 'Moves focus to the next',
    },
    {
      keys: ['ArrowUp'],
      description: 'Moves focus to the next',
    },
    {
      keys: ['ArrowRight'],
      description: 'Moves focus to the next',
    },
    {
      keys: ['ArrowLeft'],
      description: 'Moves focus to the next',
    },
    {
      keys: ['Home'],
      description: 'Moves focus to the next',
    },
    {
      keys: ['End'],
      description: 'Moves focus to the next',
    }]" />