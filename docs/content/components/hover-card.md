---

title: Hover Card
description: For sighted users to preview content available behind a link.
name: hover-card
---


# HoverCard

<Description>
For sighted users to preview content available behind a link.
</Description>

<ComponentPreview name="HoverCard" />

## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Customize side, alignment, offsets, collision handling.',
    'Optionally render a pointing arrow.',
    'Supports custom open and close delays.',
    'Opens on hover only.',
    'Ignored by screen readers.',
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
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'
</script>

<template>
  <HoverCardRoot>
    <HoverCardTrigger />
    <HoverCardPortal>
      <HoverCardContent>
        <HoverCardArrow />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a hover card.

<PropsTable
  :data="[
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: '<span> The open state of the hover card when it is initially rendered. Use when you do not need to control its open state.</span>',
    },
    {
      name: 'open',
      type: 'boolean',
      description: '<span> The controlled open state of the hover card. Must be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'openDelay',
      type: 'number',
      default: 700,
      description:
        'The duration from when the mouse enters the trigger until the hover card opens.',
    },
    {
      name: 'closeDelay',
      type: 'number',
      default: 300,
      description:
        'The duration from when the mouse leaves the trigger or content until the hover card closes.',
    },
  ]"
/>

<EmitsTable 
  :data="[
    {
      name: '@update:open',
      type: '(value: boolean) => void',
      description: 'Event handler called when the open state of the hover card changes.'
    }
  ]" 
/>


### Trigger

The link that opens the hover card when hovered.

<PropsTable
  :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'a',
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
      values: ['open', 'closed'],
    },
  ]"
/>

### Portal

When used, portals the content part into the `body`.


<PropsTable
  :data="[
    {
      name: 'to',
      type:  'string | HTMLElement',
      default: 'body',
      description: 'Vue native teleport component props. (to)',
    },
  ]"
/>

### Content

The component that pops out when the hover card is open.

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
      name: 'forceMount',
      type: 'boolean',
      description: `
        Used to force mounting when more control is needed. Useful when controlling animation with Vue.js animation libraries.
      `,
    },
    {
      name: 'side',
      type: '&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;',
      typeSimple: 'enum',
      default: '&quot;bottom&quot;',
      description: '<span> The preferred side of the trigger to render against when open. Will be reversed when collisions occur and <Code>avoidCollisions</Code> is enabled.</span>',
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '0',
      description: '<span> <span>The distance in pixels from the trigger.</span></span>',
    },
    {
      name: 'align',
      type: '&quot;start&quot; | &quot;center&quot; | &quot;end&quot;',
      typeSimple: 'enum',
      default: '&quot;center&quot;',
      description: '<span> The preferred alignment against the trigger. May change when collisions occur.</span>',
    },
    {
      name: 'alignOffset',
      type: 'number',
      default: '0',
      description: '<span> An offset in pixels from the <Code>&quot;start&quot;</Code> or <Code>&quot;end&quot;</Code> alignment options.</span>',
    },
    {
      name: 'avoidCollisions',
      type: 'boolean',
      default: 'true',
      description: '<span> When <Code>true</Code>, overrides the <Code>side</Code> and <Code>align</Code> preferences to prevent collisions with boundary edges.</span>',
    },
    {
      name: 'collisionBoundary',
      type: 'Element | null | Array<Element | null>',
      typeSimple: 'Boundary',
      default: '[]',
      description: '<span> The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.</span>',
    },
    {
      name: 'collisionPadding',
      type: 'number | Partial<Record<Side, number>>',
      typeSimple: 'number | Padding',
      default: '0',
      description: '<span> The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: <Code>{`{ top: 20, left: 20 }`}</Code> .</span>',
    },
    {
      name: 'arrowPadding',
      type: 'number',
      default: '0',
      description: '<span> The padding between the arrow and the edges of the content. If your content has <Code>border-radius</Code>, this will prevent it from overflowing the corners.</span>',
    },
    {
      name: 'sticky',
      type: '&quot;partial&quot; | &quot;always&quot;',
      typeSimple: 'enum',
      default: '&quot;partial&quot;',
      description: '<span> The sticky behavior on the align axis. <Code>&quot;partial&quot;</Code> will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst <Code>&quot;always&quot;</Code> will keep the content in the boundary regardless.</span>',
    },
    {
      name: 'hideWhenDetached',
      type: 'boolean',
      default: 'false',
      description: '<span> Whether to hide the content when the trigger becomes fully occluded.</span>',
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
      attribute: '[data-side]',
      values: ['left', 'right', 'bottom', 'top'],
    },
    {
      attribute: '[data-align]',
      values: ['start', 'end', 'center'],
    },
  ]"
/>

<CssVariablesTable
  :data="[
    {
      cssVariable: '--radix-hover-card-content-transform-origin',
      description: 'The <Code>transform-origin</Code> computed from the content and arrow positions/offsets',
    },
    {
      cssVariable: '--radix-hover-card-content-available-width',
      description: 'The remaining width between the trigger and the boundary edge',
    },
    {
      cssVariable: '--radix-hover-card-content-available-height',
      description: 'The remaining height between the trigger and the boundary edge',
    },
    {
      cssVariable: '--radix-hover-card-trigger-width',
      description: 'The width of the trigger',
    },
    {
      cssVariable: '--radix-hover-card-trigger-height',
      description: 'The height of the trigger',
    },
  ]"
/>

### Arrow

An optional arrow element to render alongside the hover card. This can be used to help visually link the trigger with the `HoverCardContent`. Must be rendered inside `HoverCardContent`.

<PropsTable
  :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'svg',
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
      name: 'width',
      type: 'number',
      default: 10,
      description: '<span>The width of the arrow in pixels.</span>',
    },
    {
      name: 'height',
      type: 'number',
      default: 5,
      description: '<span>The height of the arrow in pixels.</span>',
    },
  ]"
/>

## Examples

### Show instantly

Use the `openDelay` prop to control the time it takes for the hover card to open.

```vue line=12
<script setup>
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger,
} from 'radix-vue'
</script>

<template>
  <HoverCardRoot :open-delay="0">
    <HoverCardTrigger>…</HoverCardTrigger>
    <HoverCardContent>…</HoverCardContent>
  </HoverCardRoot>
</template>
````

### Constrain the content size

You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-hover-card-trigger-width` and `--radix-hover-card-content-available-height` to support this. Use them to constrain the content dimensions.

```vue line=10
// index.vue
<script setup>
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'
</script>

<template>
  <HoverCardRoot>
    <HoverCardTrigger>…</HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent class="HoverCardContent" :side-offset="5">
        …
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
```

```css line=3-4
/* styles.css */
.HoverCardContent {
  width: var(--radix-hover-card-trigger-width);
  max-height: var(--radix-hover-card-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-hover-card-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```vue line=9
// index.vue
<script setup>
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'
</script>

<template>
  <HoverCardRoot>
    <HoverCardTrigger>…</HoverCardTrigger>
    <HoverCardContent class="HoverCardContent">
      …
    </HoverCardContent>
  </HoverCardRoot>
</template>
```

```css line=3
/* styles.css */
.HoverCardContent {
  transform-origin: var(--radix-hover-card-content-transform-origin);
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Collision-aware animations

We expose `data-side` and `data-align` attributes. Their values will change at runtime to reflect collisions. Use them to create collision and direction-aware animations.

```vue line=9
// index.vue
<script setup>
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'
</script>

<template>
  <HoverCardRoot>
    <HoverCardTrigger>…</HoverCardTrigger>
    <HoverCardContent class="HoverCardContent">
      …
    </HoverCardContent>
  </HoverCardRoot>
</template>
```

```css line=6-11
/* styles.css */
.HoverCardContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.HoverCardContent[data-side="top"] {
  animation-name: slideUp;
}
.HoverCardContent[data-side="bottom"] {
  animation-name: slideDown;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Accessibility

### Keyboard Interactions

The hover card is intended for mouse users only so will not respond to keyboard navigation.
