---
metaTitle: Alert Dialog
metaDescription: A modal dialog that interrupts the user with important content and expects a response.
name: alert-dialog
aria: https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog
---

# Alert Dialog

<Description>
  A modal dialog that interrupts the user with important content and expects a
  response.
</Description>

<HeroContainer>
  <AlertDialogDemo />
</HeroContainer>

<HeroCodeBlock folder="AlertDialog" />

<Highlights
  features={[
    'Focus is automatically trapped.',
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
npm install @radix-ui/react-alert-dialog
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export default () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger />
    <AlertDialog.Portal>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title />
        <AlertDialog.Description />
        <AlertDialog.Cancel />
        <AlertDialog.Action />
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);
```

## API Reference

### Root

Contains all the parts of an alert dialog.

<PropsTable
  data={[
    {
      name: 'defaultOpen',
      type: 'boolean',
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
  ]}
/>

### Trigger

A button that opens the dialog.

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
          part, it will be inherited by <Code>AlertDialog.Overlay</Code> and{' '}
          <Code>AlertDialog.Content</Code>.
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
          <Code>AlertDialog.Portal</Code>.
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

Contains content to be rendered when the dialog is open.

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
          <Code>AlertDialog.Portal</Code>.
        </span>
      ),
    },
    {
      name: 'onOpenAutoFocus',
      type: '(event: Event) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when focus moves to the destructive action after
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

### Cancel

A button that closes the dialog. This button should be distinguished visually from `AlertDialog.Action` buttons.

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

A button that closes the dialog. These buttons should be distinguished visually from the `AlertDialog.Cancel` button.

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

An accessible name to be announced when the dialog is opened. Alternatively, you can provide `aria-label` or `aria-labelledby` to `AlertDialog.Content` and exclude this component.

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

An accessible description to be announced when the dialog is opened. Alternatively, you can provide `aria-describedby` to `AlertDialog.Content` and exclude this component.

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

Use the controlled props to programmatically close the Alert Dialog after an async operation has completed.

```jsx line=4,7,10,15,17
import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default () => {
  const [open, setOpen] = React.useState(false);

  return (
    <AlertDialog.Root __open__={open} __onOpenChange__={setOpen}>
      <AlertDialog.Trigger>Open</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <form
            onSubmit={(event) => {
              wait().then(() => setOpen(false));
              event.preventDefault();
            }}
          >
            {/** some inputs */}
            <button type="submit">Submit</button>
          </form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
```

### Custom portal container

Customise the element that your alert dialog portals into.

```jsx line=2,13
export default () => {
  const [container, setContainer] = React.useState(null);
  return (
    <div>
      <AlertDialog.Root>
        <AlertDialog.Trigger />
        <AlertDialog.Portal __container__={container}>
          <AlertDialog.Overlay />
          <AlertDialog.Content>...</AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>

      <div ref={setContainer} />
    </div>
  );
};
```

## Accessibility

Adheres to the [Alert and Message Dialogs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog).

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
          Closes the dialog and moves focus to <Code>AlertDialog.Trigger</Code>.
        </span>
      ),
    },
  ]}
/>