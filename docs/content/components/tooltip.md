---
outline: deep
metaTitle: Tooltip
metaDescription: A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
name: tooltip
aria: https://www.w3.org/WAI/ARIA/apg/patterns/tooltip
---

<script setup> 
import DemoTooltip from '../../components/demo/Tooltip/index.vue' 
</script>

# Tooltip

<Description>
A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
</Description>

<HeroContainer folder="Tooltip">
<DemoTooltip />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Tooltip/index.vue

</div>
<div filename="tailwind.config.js">

<<< ../../components/demo/Tooltip/tailwind.config.js

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Provider to control display delay globally.',
    'Opens when the trigger is focused or hovered.',
    'Closes when the trigger is activated or when pressing escape.',
    'Supports custom timings.']"
/>

## Anatomy

Import all parts and piece them together.

```vue
<script setup lang="ts">
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow } from "radix-vue";
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger />
      <Tooltip>
        <TooltipContent>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipRoot>
  </TooltipProvider>
</template>
```

## API Reference

### Provider

Wraps your app to provide global functionality to your tooltips.

<PropsTable :data="[
  {
  name: 'delayDuration',
  type: 'number',
  default: 700,
  description:
  'The duration from when the mouse enters a tooltip trigger until the tooltip opens.',
  },
  {
  name: 'skipDelayDuration',
  type: 'number',
  default: 300,
  description:
  'How much time a user has to enter another trigger without incurring a delay again.',
  },
  {
  name: 'disableHoverableContent',
  type: 'boolean',
  description: '<span> Prevents <Code>TooltipContent</Code> from remaining open when hovering. Disabling this has accessibility consequences. </span>'
  }
]" />

### Root

Contains all the parts of a tooltip.

<PropsTable :data="[
  {
  name: 'defaultOpen',
  type: 'boolean',
  description: '<span> The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state. </span>',
  },
  {
  name: 'open',
  type: 'boolean',
  description: '<span> The controlled open state of the tooltip. Must be binded with <Code>v-model</Code>. </span>',
  },
  {
  name: 'delayDuration',
  type: 'number',
  default: 700,
  description: 'Override the duration given to the `Provider` to customise the open delay for a specific tooltip.',
  },
  {
  name: 'disableHoverableContent',
  type: 'boolean',
  default: false,
  description: '<span> Prevents <Code>TooltipContent</Code> from remaining open when hovering. Disabling this has accessibility consequences. Inherits from <Code>TooltipProvider</Code>. </span>'
  }
]" />


<EmitsTable 
  :data="[
    {
      name: '@update:open',
      type: '(value: boolean) => void',
      description: 'Event handler called when the open state of the tooltip changes.'
    }
  ]" 
/>



### Trigger

The button that toggles the tooltip. By default, the `TooltipContent` will position itself against the trigger.

<PropsTable :data="[
{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description:'Change the default rendered element for the one passed as a child, merging their props and behavior. <br /> <br /> Read our <a href=&quot;../guides/composition&quot;>Composition</a> guide for more details.',},
]" />

<DataAttributesTable :data="[
{
attribute: '[data-state]',
values: ['closed', 'delayed-open', 'instant-open'],
},
]" />

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

The component that pops out when the tooltip is open.

<PropsTable
  :data="[
    {
      name: 'aria-label',
      required: false,
      type: 'string',
      description: 'By default, screenreaders will announce the content inside the component. If this is not descriptive enough, or you have content that cannot be announced, use <code>aria-label</code> as a more descriptive label.',
    }, 
    {
      name: 'side',
      type: '&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;',
      typeSimple: 'enum',
      default: '&quot;top&quot;',
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
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

<EmitsTable :data="[
{
name: '@escape-key-down',
type: '(event: KeyboardEvent) => void',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
},
{
name: '@pointer-down-outside',
type: '(event: KeyboardEvent) => void',
description: '<span>Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.</span>',
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
      cssVariable: '--radix-tooltip-content-transform-origin',
      description: ' The <Code>transform-origin</Code> computed from the content and arrow positions/offsets',
    },
    {
      cssVariable: '--radix-tooltip-content-available-width',
      description: 'The remaining width between the trigger and the boundary edge',
    },
    {
      cssVariable: '--radix-tooltip-content-available-height',
      description: 'The remaining height between the trigger and the boundary edge',
    },
    {
      cssVariable: '--radix-tooltip-trigger-width',
      description: 'The width of the trigger',
    },
    {
      cssVariable: '--radix-tooltip-trigger-height',
      description: 'The height of the trigger',
    },
  ]"
/>

### Arrow

An optional arrow element to render alongside the tooltip. This can be used to help visually link the trigger with the `TooltipContent`. Must be rendered inside `TooltipContent`.

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

### Configure globally

Use the `Provider` to control `delayDuration` and `skipDelayDuration` globally.

```vue line=11
<script setup>
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from "radix-vue";
</script>

<template>
  <TooltipProvider :delayDuration="800" :skipDelayDuration="500">
    <TooltipRoot>
      <TooltipTrigger>…</TooltipTrigger>
      <TooltipContent>…</TooltipContent>
    </TooltipRoot>
    <TooltipRoot>
      <TooltipTrigger>…</TooltipTrigger>
      <TooltipContent>…</TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
```

### Show instantly

Use the `delayDuration` prop to control the time it takes for the tooltip to open.

```vue line=11
<script setup>
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from "radix-vue";
</script>

<template>
  <TooltipRoot :delayDuration="0">
    <TooltipTrigger>…</TooltipTrigger>
    <TooltipContent>…</TooltipContent>
  </TooltipRoot>
</template>
```

### Displaying a tooltip from a disabled button

Since disabled buttons don't fire events, you need to:

- Render the `Trigger` as `span`.
- Ensure the `button` has no `pointerEvents`.

```vue line=12-16
<script setup>
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from "radix-vue";
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger asChild>
      <span tabindex="0">
        <button disabled style="{ pointerEvents: 'none' }">…</button>
      </span>
    </TooltipTrigger>
    <TooltipContent>…</TooltipContent>
  </TooltipRoot>
  <template></template>
</template>
```

### Constrain the content size

You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-tooltip-trigger-width` and `--radix-tooltip-content-available-height` to support this. Use them to constrain the content dimensions.

```vue line=16
// index.vue
<script setup>
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from "radix-vue";
import "./styles.css";
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger>…</TooltipTrigger>
    <TooltipPortal>
      <TooltipContent class="TooltipContent" :sideOffset="5"> … </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
```

```css
/* styles.css */
.TooltipContent {
  width: var(--radix-tooltip-trigger-width);
  max-height: var(--radix-tooltip-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-tooltip-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```vue line=15
// index.vue
<script setup>
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from "radix-vue";
import "./styles.css";
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger>…</TooltipTrigger>
    <TooltipContent class="TooltipContent">…</TooltipContent>
  </TooltipRoot>
</template>
```

```css line=3-4
/* styles.css */
.TooltipContent {
  transform-origin: var(--radix-tooltip-content-transform-origin);
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

```vue line=15
// index.vue
<script setup>
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from "radix-vue";
import "./styles.css";
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger>…</TooltipTrigger>
    <TooltipContent class="TooltipContent">…</TooltipContent>
  </TooltipRoot>
</template>
```

```css line=6,9
/* styles.css */
.TooltipContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.TooltipContent[data-side="top"] {
  animation-name: slideUp;
}
.TooltipContent[data-side="bottom"] {
  animation-name: slideDown;
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
```

## Accessibility

### Keyboard Interactions

<KeyboardTable
:data="[
{
keys: ['Tab'],
description: 'Opens/closes the tooltip without delay.',
},
{
keys: ['Space'],
description: 'If open, closes the tooltip without delay.',
},
{
keys: ['Enter'],
description: 'If open, closes the tooltip without delay.',
},
{
keys: ['Escape'],
description: 'If open, closes the tooltip without delay.',
},
]"
/>

<!--
## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract parts and introduce a content prop

This example abstracts all of the `Tooltip` parts and introduces a new `content` prop.

#### Usage

```vue
import { Tooltip } from "./your-tooltip"; <template>
<Tooltip content="Tooltip content">
		<button>Tooltip trigger</button>
	</Tooltip>
</template>
```

#### Implementation

Use the [`asChild` prop](/guides/composition) to convert the trigger part into a slottable area. It will replace the trigger with the child that gets passed to it.

```vue line=8-10
// your-tooltip.vue import React from "react"; import * as TooltipPrimitive from
"radix-vue"; export function Tooltip({ children, content, open, defaultOpen,
onOpenChange, ...props }) { return (
<TooltipPrimitive.Root
	open="open"
	defaultOpen="defaultOpen"
	onOpenChange="onOpenChange"
>
			<TooltipPrimitive.Trigger asChild>
				{children}
			</TooltipPrimitive.Trigger>
			<TooltipPrimitive.Content side="top" align="center" {...props}>
				{content}
				<TooltipPrimitive.Arrow width={11} height={5} />
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Root>
  </template> }
```
-->
