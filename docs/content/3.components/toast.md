---
metaTitle: Toast
metaDescription: A succinct message that is displayed temporarily.
name: toast
aria: https://www.w3.org/TR/wai-aria/#aria-live
---

# Toast

<Description>A succinct message that is displayed temporarily.</Description>

<HeroContainer>
  <ToastDemo />
</HeroContainer>

<HeroCodeBlock folder="Toast" />

<Highlights
  features={[
    'Automatically closes.',
    'Pauses closing on hover, focus and window blur.',
    'Supports hotkey to jump to toast viewport.',
    'Supports closing via swipe gesture.',
    'Exposes CSS variables for swipe gesture animations.',
    'Can be controlled or uncontrolled.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-toast
```

## Anatomy

Import the component.

```jsx
import * as Toast from '@radix-ui/react-toast';

export default () => (
  <Toast.Provider>
    <Toast.Root>
      <Toast.Title />
      <Toast.Description />
      <Toast.Action />
      <Toast.Close />
    </Toast.Root>

    <Toast.Viewport />
  </Toast.Provider>
);
```

## API Reference

### Provider

The provider that wraps your toasts and toast viewport. It usually wraps the application.

<PropsTable
  data={[
    {
      name: 'duration',
      type: 'number',
      default: 5000,
      description:
        'The time in milliseconds that should elapse before automatically closing each toast.',
    },
    {
      name: 'label',
      required: true,
      type: 'string',
      default: '"Notification"',
      description:
        'An author-localized label for each toast. Used to help screen reader users associate the interruption with a toast.',
    },
    {
      name: 'swipeDirection',
      type: '"right" | "left" | "up" | "down"',
      typeSimple: 'enum',
      default: '"right"',
      description:
        'The direction of the pointer swipe that should close the toast.',
    },
    {
      name: 'swipeThreshold',
      type: 'number',
      default: 50,
      description:
        'The distance in pixels that the swipe gesture must travel before a close is triggered.',
    },
  ]}
/>

### Viewport

The fixed area where toasts appear. Users can jump to the viewport by pressing a hotkey. It is up to you to ensure the discoverability of the hotkey for keyboard users.

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
      name: 'hotkey',
      type: 'string[]',
      default: '["F8"]',
      description: (
        <span>
          The keys to use as the keyboard shortcut that will move focus to the
          toast viewport. Use <Code>event.code</Code> value for each key from{' '}
          <Link href="https://keycode.info/" variant="blue" target="_blank">
            keycode.info
          </Link>
          . For meta keys, use <Code>ctrlKey</Code>, <Code>shiftKey</Code>, <Code>
            altKey
          </Code> and/or <Code>metaKey</Code>.
        </span>
      ),
    },
    {
      name: 'label',
      type: 'string',
      default: '"Notifications ({hotkey})"',
      description:
        'An author-localized label for the toast region to provide context for screen reader users when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you.',
    },
  ]}
/>

### Root

The toast that automatically closes. It should not be held open to [acquire a user response](/docs/primitives/components/toast#action).

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
      name: 'type',
      type: '"foreground" | "background"',
      typeSimple: 'enum',
      default: '"foreground"',
      description: (
        <span>
          Control the{' '}
          <Link
            href="/docs/primitives/components/toast#sensitivity"
            variant="blue"
          >
            sensitivity
          </Link>{' '}
          of the toast for accessibility purposes. For toasts that are the
          result of a user action, choose <Code>foreground</Code>. Toasts
          generated from background tasks should use <Code>background</Code>.
        </span>
      ),
    },
    {
      name: 'duration',
      type: 'number',
      description:
        'The time in milliseconds that should elapse before automatically closing the toast. This will override the value supplied to the provider.',
    },
    {
      name: 'defaultOpen',
      type: 'boolean',
      default: 'true',
      description:
        'The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.',
    },
    {
      name: 'open',
      type: 'boolean',
      description: (
        <span>
          The controlled open state of the dialog. Must be used in conjunction
          with <Code>onOpenChange</Code>.
        </span>
      ),
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      typeSimple: 'function',
      description:
        'Event handler called when the open state of the dialog changes.',
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
      name: 'onPause',
      type: '() => void',
      typeSimple: 'function',
      description:
        'Event handler called when the dismiss timer is paused. This occurs when the pointer is moved over the viewport, the viewport is focused or when the window is blurred.',
    },
    {
      name: 'onResume',
      type: '() => void',
      typeSimple: 'function',
      description:
        'Event handler called when the dismiss timer is resumed. This occurs when the pointer is moved away from the viewport, the viewport is blurred or when the window is focused.',
    },
    {
      name: 'onSwipeStart',
      type: '(event: SwipeEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when starting a swipe interaction. It can be
          prevented by calling <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'onSwipeMove',
      type: '(event: SwipeEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called during a swipe interaction. It can be prevented
          by calling <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'onSwipeEnd',
      type: '(event: SwipeEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called at the end of a swipe interaction. It can be
          prevented by calling <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description:
        'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.',
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
      attribute: '[data-swipe]',
      values: ['start', 'move', 'cancel', 'end'],
    },
    {
      attribute: '[data-swipe-direction]',
      values: ['up', 'down', 'left', 'right'],
    },
  ]}
/>

<CssVariablesTable
  data={[
    {
      cssVariable: '--radix-toast-swipe-move-x',
      description: 'The offset position of the toast when horizontally swiping',
    },
    {
      cssVariable: '--radix-toast-swipe-move-y',
      description: 'The offset position of the toast when vertically swiping',
    },
    {
      cssVariable: '--radix-toast-swipe-end-x',
      description:
        'The offset end position of the toast after horizontally swiping',
    },
    {
      cssVariable: '--radix-toast-swipe-end-y',
      description:
        'The offset end position of the toast after vertically swiping',
    },
  ]}
/>

### Title

An optional title for the toast.

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

### Description

The toast message.

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

### Action

An action that is safe to ignore to ensure users are not expected to complete tasks with unexpected side effects as a result of a [time limit](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html).

When obtaining a user response is necessary, portal an [`AlertDialog`](/docs/primitives/components/alert-dialog) styled as a toast into the viewport instead.

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
      name: 'altText',
      required: true,
      type: 'string',
      description: (
        <>
          Describe an{' '}
          <Link variant="subtle" href="./toast#alternative-action">
            alternative way to achieve the action
          </Link>{' '}
          for screen reader users who cannot access the toast easily.
        </>
      ),
    },
  ]}
/>

### Close

A button that allows users to dismiss the toast before its duration has elapsed.

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

### Custom hotkey

Override the default hotkey using the `event.code` value for each key from [keycode.info](https://keycode.info/).

```jsx line=3
<Toast.Provider>
  {/* ... */}
  <Toast.Viewport __hotkey__={['altKey', 'KeyT']} />
</Toast.Provider>
```

### Custom duration

Customise the duration of a toast to override the provider value.

```jsx line=1
<Toast.Root __duration__={3000}>
  <Toast.Description>Saved!</Toast.Description>
</Toast.Root>
```

### Duplicate toasts

When a toast must appear every time a user clicks a button, use state to render multiple instances of the same toast (see below). Alternatively, you can abstract the parts to create your own [imperative API](/docs/primitives/components/toast#imperative-api).

```jsx line=6,11-15
export default () => {
  const [savedCount, setSavedCount] = React.useState(0);

  return (
    <div>
      <form onSubmit={() => setSavedCount((count) => count + 1)}>
        {/* ... */}
        <button>save</button>
      </form>

      {Array.from({ length: savedCount }).map((_, index) => (
        <Toast.Root key={index}>
          <Toast.Description>Saved!</Toast.Description>
        </Toast.Root>
      ))}
    </div>
  );
};
```

### Animating swipe gesture

Combine `--radix-toast-swipe-move-[x|y]` and `--radix-toast-swipe-end-[x|y]` CSS variables with `data-swipe="[start|move|cancel|end]"` attributes to animate a swipe to close gesture. Here's an example:

```jsx line=6,7
// index.jsx
import * as Toast from '@radix-ui/react-toast';
import './styles.css';

export default () => (
  <Toast.Provider __swipeDirection__="right">
    <Toast.Root __className__="ToastRoot">...</Toast.Root>
    <Toast.Viewport />
  </Toast.Provider>
);
```

```css line=2,3,5,9,15
/* styles.css */
.ToastRoot[__data-swipe__='move'] {
  transform: translateX(var(__--radix-toast-swipe-move-x__));
}
.ToastRoot[__data-swipe__='cancel'] {
  transform: translateX(0);
  transition: transform 200ms ease-out;
}
.ToastRoot[__data-swipe__='end'] {
  animation: slideRight 100ms ease-out;
}

@keyframes slideRight {
  from {
    transform: translateX(var(__--radix-toast-swipe-end-x__));
  }
  to {
    transform: translateX(100%);
  }
}
```

## Accessibility

Adheres to the [`aria-live` requirements](https://www.w3.org/TR/wai-aria/#aria-live).

### Sensitivity

Control the sensitivity of the toast for screen readers using the `type` prop.

For toasts that are the result of a user action, choose `foreground`. Toasts generated from background tasks should use `background`.

#### Foreground

Foreground toasts are announced immediately. Assistive technologies may choose to clear previously queued messages when a foreground toast appears. Try to avoid stacking distinct foreground toasts at the same time.

#### Background

Background toasts are announced at the next graceful opportunity, for example, when the screen reader has finished reading its current sentence. They do not clear queued messages so overusing them can be perceived as a laggy user experience for screen reader users when used in response to a user interaction.

```jsx line=1,6
<Toast.Root type="foreground">
  <Toast.Description>File removed successfully.</Toast.Description>
  <Toast.Close>Dismiss</Toast.Close>
</Toast.Root>

<Toast.Root type="background">
  <Toast.Description>We've just released Radix 1.0.</Toast.Description>
  <Toast.Close>Dismiss</Toast.Close>
</Toast.Root>
```

### Alternative action

Use the `altText` prop on the `Action` to instruct an alternative way of actioning the toast to screen reader users.

You can direct the user to a permanent place in your application where they can action it or implement your own custom hotkey logic. If implementing the latter, use `foreground` type to announce immediately and increase the duration to give the user ample time.

```jsx line=4,10,12
<Toast.Root type="background">
  <Toast.Title>Upgrade Available!</Toast.Title>
  <Toast.Description>We've just released Radix 1.0.</Toast.Description>
  <Toast.Action altText="Goto account settings to upgrade">
    Upgrade
  </Toast.Action>
  <Toast.Close>Dismiss</Toast.Close>
</Toast.Root>

<Toast.Root __type__="foreground" __duration__={10000}>
  <Toast.Description>File removed successfully.</Toast.Description>
  <Toast.Action altText="Undo (Alt+U)">
    Undo <kbd>Alt</kbd>+<kbd>U</kbd>
  </Toast.Action>
  <Toast.Close>Dismiss</Toast.Close>
</Toast.Root>
```

### Close icon button

When providing an icon (or font icon), remember to label it correctly for screen reader users.

```jsx line=3-4
<Toast.Root type="foreground">
  <Toast.Description>Saved!</Toast.Description>
  <Toast.Close aria-label="Close">
    <span aria-hidden>×</span>
  </Toast.Close>
</Toast.Root>
```

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['F8'],
      description: 'Focuses toasts viewport.',
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
      keys: ['Space'],
      description: (
        <span>
          When focus is on a <Code>Toast.Action</Code> or{' '}
          <Code>Toast.Close</Code>, closes the toast.
        </span>
      ),
    },
    {
      keys: ['Enter'],
      description: (
        <span>
          When focus is on a <Code>Toast.Action</Code> or{' '}
          <Code>Toast.Close</Code>, closes the toast.
        </span>
      ),
    },
    {
      keys: ['Esc'],
      description: (
        <span>
          When focus is on a <Code>Toast</Code>, closes the toast.
        </span>
      ),
    },
  ]}
/>

## Custom APIs

### Abstract parts

Create your own API by abstracting the primitive parts into your own component.

#### Usage

```jsx
import { Toast } from './your-toast';

export default () => (
  <Toast title="Upgrade available" content="We've just released Radix 3.0!">
    <button onClick={handleUpgrade}>Upgrade</button>
  </Toast>
);
```

#### Implementation

```jsx
// your-toast.jsx
import * as ToastPrimitive from '@radix-ui/react-toast';

export const Toast = ({ title, content, children, ...props }) => {
  return (
    <ToastPrimitive.Root {...props}>
      {title && <ToastPrimitive.Title>{title}</ToastPrimitive.Title>}
      <ToastPrimitive.Description>{content}</ToastPrimitive.Description>
      {children && (
        <ToastPrimitive.Action asChild>{children}</ToastPrimitive.Action>
      )}
      <ToastPrimitive.Close aria-label="Close">
        <span aria-hidden>×</span>
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
};
```

### Imperative API

Create your own imperative API to allow [toast duplication](/docs/primitives/components/toast#duplicate-toasts) if preferred.

#### Usage

```jsx
import { Toast } from './your-toast';

export default () => {
  const savedRef = React.useRef();
  return (
    <div>
      <form onSubmit={() => savedRef.current.publish()}>
        {/* ... */}
        <button>Save</button>
      </form>
      <Toast ref={savedRef}>Saved successfully!</Toast>
    </div>
  );
};
```

#### Implementation

```jsx
// your-toast.jsx
import React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';

export const Toast = React.forwardRef((props, forwardedRef) => {
  const { children, ...toastProps } = props;
  const [count, setCount] = React.useState(0);

  React.useImperativeHandle(forwardedRef, () => ({
    publish: () => setCount((count) => count + 1),
  }));

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <ToastPrimitive.Root key={index} {...toastProps}>
          <ToastPrimitive.Description>{children}</ToastPrimitive.Description>
          <ToastPrimitive.Close>Dismiss</ToastPrimitive.Close>
        </ToastPrimitive.Root>
      ))}
    </>
  );
});
```