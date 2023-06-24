---
metaTitle: Popover
metaDescription: Displays rich content in a portal, triggered by a button.
name: popover
aria: https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal
---

# Popover

<Description>
  Displays rich content in a portal, triggered by a button.
</Description>

<HeroContainer>
  <PopoverDemo />
</HeroContainer>

<HeroCodeBlock folder="Popover" />

<Highlights
  features={[
    'Can be controlled or uncontrolled.',
    'Customize side, alignment, offsets, collision handling.',
    'Optionally render a pointing arrow.',
    'Focus is fully managed and customizable.',
    'Supports modal and non-modal modes.',
    'Dismissing and layering behavior is highly customizable.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-popover
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Popover from '@radix-ui/react-popover';

export default () => (
  <Popover.Root>
    <Popover.Trigger />
    <Popover.Anchor />
    <Popover.Portal>
      <Popover.Content>
        <Popover.Close />
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
```

## API Reference

### Root

Contains all the parts of a popover.

<PropsTable
  data={[
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: (
        <span>
          The open state of the popover when it is initially rendered. Use when
          you do not need to control its open state.
        </span>
      ),
    },
    {
      name: 'open',
      type: 'boolean',
      description: (
        <span>
          The controlled open state of the popover. Must be used in conjunction
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
          Event handler called when the open state of the popover changes.
        </span>
      ),
    },
    {
      name: 'modal',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <span>
          The modality of the popover. When set to <Code>true</Code>,
          interaction with outside elements will be disabled and only popover
          content will be visible to screen readers.
        </span>
      ),
    },
  ]}
/>

### Trigger

The button that toggles the popover. By default, the `Popover.Content` will position itself against the trigger.

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
      values: ['open', 'closed'],
    },
  ]}
/>

### Anchor

An optional element to position the `Popover.Content` against. If this part is not used, the content will position alongside the <Code>Popover.Trigger</Code>.

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
          part, it will be inherited by <Code>Popover.Content</Code>.
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

The component that pops out when the popover is open.

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
      name: 'onOpenAutoFocus',
      type: '(event: Event) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when focus moves into the component after
          opening. It can be prevented by calling{' '}
          <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'onCloseAutoFocus',
      type: '(event: Event) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when focus moves to the trigger after closing. It
          can be prevented by calling <Code>event.preventDefault</Code>.
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
      name: 'onFocusOutside',
      type: '(event: FocusOutsideEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when focus moves outside the bounds of the
          component. It can be prevented by calling{' '}
          <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'onInteractOutside',
      type: '(event: PointerDownOutsideEvent | FocusOutsideEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when an interaction (pointer or focus event)
          happens outside the bounds of the component. It can be prevented by
          calling <Code>event.preventDefault</Code>.
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
          <Code>Popover.Portal</Code>.
        </span>
      ),
    },
    {
      name: 'side',
      type: '"top" | "right" | "bottom" | "left"',
      typeSimple: 'enum',
      default: '"bottom"',
      description: (
        <span>
          The preferred side of the anchor to render against when open. Will be
          reversed when collisions occur and <Code>avoidCollisions</Code> is
          enabled.
        </span>
      ),
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '0',
      description: <span>The distance in pixels from the anchor.</span>,
    },
    {
      name: 'align',
      type: '"start" | "center" | "end"',
      typeSimple: 'enum',
      default: '"center"',
      description: (
        <span>
          The preferred alignment against the anchor. May change when collisions
          occur.
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
  ]}
/>

<CssVariablesTable
  data={[
    {
      cssVariable: '--radix-popover-content-transform-origin',
      description: (
        <>
          The <Code>transform-origin</Code> computed from the content and arrow
          positions/offsets
        </>
      ),
    },
    {
      cssVariable: '--radix-popover-content-available-width',
      description: (
        <>The remaining width between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-popover-content-available-height',
      description: (
        <>The remaining height between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-popover-trigger-width',
      description: <>The width of the trigger</>,
    },
    {
      cssVariable: '--radix-popover-trigger-height',
      description: <>The height of the trigger</>,
    },
  ]}
/>

### Arrow

An optional arrow element to render alongside the popover. This can be used to help visually link the anchor with the `Popover.Content`. Must be rendered inside `Popover.Content`.

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

### Close

The button that closes an open popover.

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

## Examples

### Constrain the content size

You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-popover-trigger-width` and `--radix-popover-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import * as Popover from '@radix-ui/react-popover';
import './styles.css';

export default () => (
  <Popover.Root>
    <Popover.Trigger>…</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content __className__="PopoverContent" sideOffset={5}>
        …
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
```

```css
/* styles.css */
.PopoverContent {
  width: var(__--radix-popover-trigger-width__);
  max-height: var(__--radix-popover-content-available-height__);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-popover-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```jsx line=9
// index.jsx
import * as Popover from '@radix-ui/react-popover';
import './styles.css';

export default () => (
  <Popover.Root>
    <Popover.Trigger>…</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content __className__="PopoverContent">…</Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
```

```css line=3
/* styles.css */
.PopoverContent {
  transform-origin: var(__--radix-popover-content-transform-origin__);
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

```jsx line=9
// index.jsx
import * as Popover from '@radix-ui/react-popover';
import './styles.css';

export default () => (
  <Popover.Root>
    <Popover.Trigger>…</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content __className__="PopoverContent">…</Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
```

```css line=6-11
/* styles.css */
.PopoverContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.PopoverContent[__data-side__='top'] {
  animation-name: slideUp;
}
.PopoverContent[__data-side__='bottom'] {
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

### With custom anchor

You can anchor the content to another element if you do not want to use the trigger as the anchor.

```jsx line=7-11
// index.jsx
import * as Popover from '@radix-ui/react-popover';
import './styles.css';

export default () => (
  <Popover.Root>
    <Popover.Anchor __asChild__>
      <div className="Row">
        Row as anchor <Popover.Trigger>Trigger</Popover.Trigger>
      </div>
    </Popover.Anchor>

    <Popover.Portal>
      <Popover.Content>…</Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
```

```css
/* styles.css */
.Row {
  background-color: gainsboro;
  padding: 20px;
}
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal).

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Space'],
      description: 'Opens/closes the popover.',
    },
    {
      keys: ['Enter'],
      description: 'Opens/closes the popover.',
    },
    {
      keys: ['Tab'],
      description: 'Moves focus to the next focusable element',
    },
    {
      keys: ['Shift + Tab'],
      description: 'Moves focus to the previous focusable element',
    },
    {
      keys: ['Esc'],
      description: (
        <span>
          Closes the popover and moves focus to <Code>Popover.Trigger</Code>.
        </span>
      ),
    },
  ]}
/>

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

#### Abstract the arrow and set default configuration

This example abstracts the `Popover.Arrow` part and sets a default `sideOffset` configuration.

#### Usage

```jsx
import { Popover, PopoverTrigger, PopoverContent } from './your-popover';

export default () => (
  <Popover>
    <PopoverTrigger>Popover trigger</PopoverTrigger>
    <PopoverContent>Popover content</PopoverContent>
  </Popover>
);
```

#### Implementation

```jsx
// your-popover.jsx
import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content sideOffset={5} {...props} ref={forwardedRef}>
        {children}
        <PopoverPrimitive.Arrow />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
);
```