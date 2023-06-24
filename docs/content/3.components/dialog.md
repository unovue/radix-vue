---
metaTitle: Dialog
metaDescription: A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
name: dialog
aria: https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal
---

# Dialog

<Description>
  A window overlaid on either the primary window or another dialog window,
  rendering the content underneath inert.
</Description>

<HeroContainer>
  <DialogDemo />
</HeroContainer>

<HeroCodeBlock folder="Dialog" />

<Highlights
  features={[
    'Supports modal and non-modal modes.',
    'Focus is automatically trapped when modal.',
    'Can be controlled or uncontrolled.',
    <span>
      Manages screen reader announcements with <Code>Title</Code> and{' '}
      <Code>Description</Code> components.
    </span>,
    'Esc closes the component automatically.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-dialog
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Dialog from '@radix-ui/react-dialog';

export default () => (
  <Dialog.Root>
    <Dialog.Trigger />
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
```

## API Reference

### Root

Contains all the parts of a dialog.

<PropsTable
  data={[
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: (
        <span>
          The open state of the dialog when it is initially rendered. Use when
          you do not need to control its open state.
        </span>
      ),
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
      description: (
        <span>
          Event handler called when the open state of the dialog changes.
        </span>
      ),
    },
    {
      name: 'modal',
      required: false,
      type: 'boolean',
      default: 'true',
      description: (
        <span>
          The modality of the dialog. When set to <Code>true</Code>, interaction
          with outside elements will be disabled and only dialog content will be
          visible to screen readers.
        </span>
      ),
    },
  ]}
/>

### Trigger

The button that opens the dialog.

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

### Portal

When used, portals your overlay and content parts into the `body`.

<PropsTable
  data={[
    {
      name: 'forceMount',
      type: 'boolean',
      description: (
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with React animation libraries. If used on this
          part, it will be inherited by <Code>Dialog.Overlay</Code> and{' '}
          <Code>Dialog.Content</Code>.
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

### Overlay

A layer that covers the inert portion of the view when the dialog is open.

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
      name: 'forceMount',
      type: 'boolean',
      description: (
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with React animation libraries. It inherits from{' '}
          <Code>Dialog.Portal</Code>.
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
  ]}
/>

### Content

Contains content to be rendered in the open dialog.

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
      name: 'forceMount',
      type: 'boolean',
      description: (
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with React animation libraries. It inherits from{' '}
          <Code>Dialog.Portal</Code>.
        </span>
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
      name: 'onInteractOutside',
      type: '(event: React.FocusEvent | MouseEvent | TouchEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when an interaction (pointer or focus event)
          happens outside the bounds of the component. It can be prevented by
          calling <Code>event.preventDefault</Code>.
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
  ]}
/>

### Close

The button that closes the dialog.

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

### Title

An accessible title to be announced when the dialog is opened.

If you want to hide the title, wrap it inside our [Visually Hidden](../utilities/visually-hidden) utility like this `<VisuallyHidden asChild>`.

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

An optional accessible description to be announced when the dialog is opened.

If you want to hide the description, wrap it inside our [Visually Hidden](../utilities/visually-hidden) utility like this `<VisuallyHidden asChild>`. If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `Dialog.Content`.

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

### Close after asynchronous form submission

Use the controlled props to programmatically close the Dialog after an async operation has completed.

```jsx line=4,7,10,15,17
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root __open__={open} __onOpenChange__={setOpen}>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <form
            onSubmit={(event) => {
              wait().then(() => setOpen(false));
              event.preventDefault();
            }}
          >
            {/** some inputs */}
            <button type="submit">Submit</button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
```

### Scrollable overlay

Move the content inside the overlay to render a dialog with overflow.

```jsx
// index.jsx
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';

export default () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay">
          <Dialog.Content className="DialogContent">...</Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
```

```css
/* styles.css */
.DialogOverlay {
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
}

.DialogContent {
  min-width: 300px;
  background: white;
  padding: 30px;
  border-radius: 4px;
}
```

### Custom portal container

Customise the element that your dialog portals into.

```jsx line=5,10,16
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export default () => {
  const [container, setContainer] = React.useState(null);
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger />
        <Dialog.Portal __container__={container}>
          <Dialog.Overlay />
          <Dialog.Content>...</Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div ref={__setContainer__} />
    </div>
  );
};
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal).

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Space'],
      description: 'Opens/closes the dialog.',
    },
    {
      keys: ['Enter'],
      description: 'Opens/closes the dialog.',
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
      keys: ['Esc'],
      description: (
        <span>
          Closes the dialog and moves focus to <Code>Dialog.Trigger</Code>.
        </span>
      ),
    },
  ]}
/>

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract the overlay and the close button

This example abstracts the `Dialog.Overlay` and `Dialog.Close` parts.

#### Usage

```jsx
import { Dialog, DialogTrigger, DialogContent } from './your-dialog';

export default () => (
  <Dialog>
    <DialogTrigger>Dialog trigger</DialogTrigger>
    <DialogContent>Dialog Content</DialogContent>
  </Dialog>
);
```

#### Implementation

```jsx
// your-dialog.jsx
import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';

export const DialogContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content {...props} ref={forwardedRef}>
        {children}
        <DialogPrimitive.Close aria-label="Close">
          <Cross1Icon />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
```