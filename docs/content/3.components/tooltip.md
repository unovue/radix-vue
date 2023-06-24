---
metaTitle: Tooltip
metaDescription: A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
name: tooltip
aria: https://www.w3.org/WAI/ARIA/apg/patterns/tooltip
---

# Tooltip

<Description>
  A popup that displays information related to an element when the element
  receives keyboard focus or the mouse hovers over it.
</Description>

<HeroContainer>
  <TooltipDemo />
</HeroContainer>

<HeroCodeBlock folder="Tooltip" />

<Highlights
  features={[
    'Provider to control display delay globally.',
    'Opens when the trigger is focused or hovered.',
    'Closes when the trigger is activated or when pressing escape.',
    'Supports custom timings.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-tooltip
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Tooltip from '@radix-ui/react-tooltip';

export default () => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger />
      <Tooltip.Portal>
        <Tooltip.Content>
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);
```

## API Reference

### Provider

Wraps your app to provide global functionality to your tooltips.

<PropsTable
  data={[
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
      description: (
        <span>
          Prevents <Code>Tooltip.Content</Code> from remaining open when
          hovering. Disabling this has accessibility consequences.
        </span>
      ),
    },
  ]}
/>

### Root

Contains all the parts of a tooltip.

<PropsTable
  data={[
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: (
        <span>
          The open state of the tooltip when it is initially rendered. Use when
          you do not need to control its open state.
        </span>
      ),
    },
    {
      name: 'open',
      type: 'boolean',
      description: (
        <span>
          The controlled open state of the tooltip. Must be used in conjunction
          with <Code>onOpenChange</Code>.
        </span>
      ),
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the open state of the tooltip changes.
        </span>
      ),
    },
    {
      name: 'delayDuration',
      type: 'number',
      default: 700,
      description:
        'Override the duration given to the `Provider` to customise the open delay for a specific tooltip.',
    },
    {
      name: 'disableHoverableContent',
      type: 'boolean',
      default: false,
      description: (
        <span>
          Prevents <Code>Tooltip.Content</Code> from remaining open when
          hovering. Disabling this has accessibility consequences. Inherits from{' '}
          <Code>Tooltip.Provider</Code>.
        </span>
      ),
    },
  ]}
/>

### Trigger

The button that toggles the tooltip. By default, the `Tooltip.Content` will position itself against the trigger.

<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more
          details.
        </>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-state]',
      values: ['closed', 'delayed-open', 'instant-open'],
    },
  ]}
/>

### Portal

When used, portals the content part into the `body`.

<PropsTable
  data={[
    {
      name: 'forceMount',
      type: 'boolean',
      description: (
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with React animation libraries. If used on this
          part, it will be inherited by <Code>Tooltip.Content</Code>.
        </span>
      ),
    },
    {
      name: 'container',
      type: 'HTMLElement',
      default: 'document.body',
      description: 'Specify a container element to portal the content into.',
    },
  ]}
/>

### Content

The component that pops out when the tooltip is open.

<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more
          details.
        </>
      ),
    },
    {
      name: 'aria-label',
      type: 'string',
      description: (
        <span>
          By default, screenreaders will announce the content inside the
          component. If this is not descriptive enough, or you have content that
          cannot be announced, use <Code>aria-label</Code> as a more descriptive
          label.
        </span>
      ),
    },
    {
      name: 'onEscapeKeyDown',
      type: '(event: KeyboardEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the escape key is down. It can be prevented
          by calling <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'onPointerDownOutside',
      type: '(event: PointerDownOutsideEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when a pointer event occurs outside the bounds of
          the component. It can be prevented by calling{' '}
          <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description: (
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with React animation libraries. It inherits from{' '}
          <Code>Tooltip.Portal</Code>.
        </span>
      ),
    },
    {
      name: 'side',
      type: '"top" | "right" | "bottom" | "left"',
      typeSimple: 'enum',
      default: '"top"',
      description: (
        <span>
          The preferred side of the trigger to render against when open. Will be
          reversed when collisions occur and <Code>avoidCollisions</Code> is
          enabled.
        </span>
      ),
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '0',
      description: (
        <span>
          <span>The distance in pixels from the trigger.</span>
        </span>
      ),
    },
    {
      name: 'align',
      type: '"start" | "center" | "end"',
      typeSimple: 'enum',
      default: '"center"',
      description: (
        <span>
          The preferred alignment against the trigger. May change when
          collisions occur.
        </span>
      ),
    },
    {
      name: 'alignOffset',
      type: 'number',
      default: '0',
      description: (
        <span>
          An offset in pixels from the <Code>"start"</Code> or{' '}
          <Code>"end"</Code> alignment options.
        </span>
      ),
    },
    {
      name: 'avoidCollisions',
      type: 'boolean',
      default: 'true',
      description: (
        <span>
          When <Code>true</Code>, overrides the <Code>side</Code> and
          <Code>align</Code> preferences to prevent collisions with boundary edges.
        </span>
      ),
    },
    {
      name: 'collisionBoundary',
      type: 'Element | null | Array<Element | null>',
      typeSimple: 'Boundary',
      default: '[]',
      description: (
        <span>
          The element used as the collision boundary. By default this is the
          viewport, though you can provide additional element(s) to be included
          in this check.
        </span>
      ),
    },
    {
      name: 'collisionPadding',
      type: 'number | Partial<Record<Side, number>>',
      typeSimple: 'number | Padding',
      default: '0',
      description: (
        <span>
          The distance in pixels from the boundary edges where collision
          detection should occur. Accepts a number (same for all sides), or a
          partial padding object, for example: <Code>{`{ top: 20, left: 20 }`}</Code>
          .
        </span>
      ),
    },
    {
      name: 'arrowPadding',
      type: 'number',
      default: '0',
      description: (
        <span>
          The padding between the arrow and the edges of the content. If your
          content has <Code>border-radius</Code>, this will prevent it from
          overflowing the corners.
        </span>
      ),
    },
    {
      name: 'sticky',
      type: '"partial" | "always"',
      typeSimple: 'enum',
      default: '"partial"',
      description: (
        <span>
          The sticky behavior on the align axis. <Code>"partial"</Code> will
          keep the content in the boundary as long as the trigger is at least
          partially in the boundary whilst <Code>"always"</Code> will keep the
          content in the boundary regardless.
        </span>
      ),
    },
    {
      name: 'hideWhenDetached',
      type: 'boolean',
      default: 'false',
      description: (
        <span>
          Whether to hide the content when the trigger becomes fully occluded.
        </span>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-state]',
      values: ['closed', 'delayed-open', 'instant-open'],
    },
    {
      attribute: '[data-side]',
      values: ['left', 'right', 'bottom', 'top'],
    },
    {
      attribute: '[data-align]',
      values: ['start', 'end', 'center'],
    },
  ]}
/>

<CssVariablesTable
  data={[
    {
      cssVariable: '--radix-tooltip-content-transform-origin',
      description: (
        <>
          The <Code>transform-origin</Code> computed from the content and arrow
          positions/offsets
        </>
      ),
    },
    {
      cssVariable: '--radix-tooltip-content-available-width',
      description: (
        <>The remaining width between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-tooltip-content-available-height',
      description: (
        <>The remaining height between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-tooltip-trigger-width',
      description: <>The width of the trigger</>,
    },
    {
      cssVariable: '--radix-tooltip-trigger-height',
      description: <>The height of the trigger</>,
    },
  ]}
/>

### Arrow

An optional arrow element to render alongside the tooltip. This can be used to help visually link the trigger with the `Tooltip.Content`. Must be rendered inside `Tooltip.Content`.

<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more
          details.
        </>
      ),
    },
    {
      name: 'width',
      type: 'number',
      default: 10,
      description: <span>The width of the arrow in pixels.</span>,
    },
    {
      name: 'height',
      type: 'number',
      default: 5,
      description: <span>The height of the arrow in pixels.</span>,
    },
  ]}
/>

## Examples

### Configure globally

Use the `Provider` to control `delayDuration` and `skipDelayDuration` globally.

```jsx line=4
import * as Tooltip from '@radix-ui/react-tooltip';

export default () => (
  <Tooltip.Provider __delayDuration__={800} __skipDelayDuration__={500}>
    <Tooltip.Root>
      <Tooltip.Trigger>…</Tooltip.Trigger>
      <Tooltip.Content>…</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger>…</Tooltip.Trigger>
      <Tooltip.Content>…</Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);
```

### Show instantly

Use the `delayDuration` prop to control the time it takes for the tooltip to open.

```jsx line=4
import * as Tooltip from '@radix-ui/react-tooltip';

export default () => (
  <Tooltip.Root __delayDuration__={0}>
    <Tooltip.Trigger>…</Tooltip.Trigger>
    <Tooltip.Content>…</Tooltip.Content>
  </Tooltip.Root>
);
```

### Displaying a tooltip from a disabled button

Since disabled buttons don't fire events, you need to:

- Render the `Trigger` as `span`.
- Ensure the `button` has no `pointerEvents`.

```jsx line=5-11
import * as Tooltip from '@radix-ui/react-tooltip';

export default () => (
  <Tooltip.Root>
    <Tooltip.Trigger __asChild__>
      <span tabIndex={0}>
        <button disabled style={{ __pointerEvents__: 'none' }}>
          …
        </button>
      </span>
    </Tooltip.Trigger>
    <Tooltip.Content>…</Tooltip.Content>
  </Tooltip.Root>
);
```

### Constrain the content size

You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-tooltip-trigger-width` and `--radix-tooltip-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import * as Tooltip from '@radix-ui/react-tooltip';
import './styles.css';

export default () => (
  <Tooltip.Root>
    <Tooltip.Trigger>…</Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Content __className__="TooltipContent" sideOffset={5}>
        …
      </Tooltip.Content>
    </Tooltip.Portal>
  </Tooltip.Root>
);
```

```css
/* styles.css */
.TooltipContent {
  width: var(__--radix-tooltip-trigger-width__);
  max-height: var(__--radix-tooltip-content-available-height__);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-tooltip-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```jsx line=8
// index.jsx
import * as Tooltip from '@radix-ui/react-tooltip';
import './styles.css';

export default () => (
  <Tooltip.Root>
    <Tooltip.Trigger>…</Tooltip.Trigger>
    <Tooltip.Content __className__="TooltipContent">…</Tooltip.Content>
  </Tooltip.Root>
);
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

```jsx line=8
// index.jsx
import * as Tooltip from '@radix-ui/react-tooltip';
import './styles.css';

export default () => (
  <Tooltip.Root>
    <Tooltip.Trigger>…</Tooltip.Trigger>
    <Tooltip.Content __className__="TooltipContent">…</Tooltip.Content>
  </Tooltip.Root>
);
```

```css line=6,9
/* styles.css */
.TooltipContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.TooltipContent[data-side='top'] {
  animation-name: slideUp;
}
.TooltipContent[data-side='bottom'] {
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
  data={[
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
  ]}
/>

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract parts and introduce a content prop

This example abstracts all of the `Tooltip` parts and introduces a new `content` prop.

#### Usage

```jsx
import { Tooltip } from './your-tooltip';

export default () => (
  <Tooltip content="Tooltip content">
    <button>Tooltip trigger</button>
  </Tooltip>
);
```

#### Implementation

Use the [`asChild` prop](/docs/primitives/guides/composition) to convert the trigger part into a slottable area. It will replace the trigger with the child that gets passed to it.

```jsx line=8-10
// your-tooltip.jsx
import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}) {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger __asChild__>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content side="top" align="center" {...props}>
        {content}
        <TooltipPrimitive.Arrow width={11} height={5} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}
```