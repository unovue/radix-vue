---
metaTitle: Avatar
metaDescription: An image element with a fallback for representing the user.
name: avatar
---

# Avatar

::description
An image element with a fallback for representing the user.
::

::hero-container
#previewSlot
  :avatar
#codeSlot
::hero-code-group{folder="Avatar"}
::
::

<Highlights
  features={[
    'Automatic and manual control over when the image renders.',
    'Fallback part accepts any children.',
    'Optionally delay fallback rendering to avoid content flashing.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-avatar
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Avatar from '@radix-ui/react-avatar';

export default () => (
  <Avatar.Root>
    <Avatar.Image />
    <Avatar.Fallback />
  </Avatar.Root>
);
```

## API Reference

### Root

Contains all the parts of an avatar.

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

### Image

The image to render. By default it will only render when it has loaded. You can use the `onLoadingStatusChange` handler if you need more control.

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
      name: 'onLoadingStatusChange',
      type: '(status: "idle" | "loading" | "loaded" | "error") => void',
      typeSimple: 'function',
      description:
        'A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading.',
    },
  ]}
/>

### Fallback

An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error. If you notice a flash during loading, you can provide a `delayMs` prop to delay its rendering so it only renders for those with slower connections. For more control, use the `onLoadingStatusChange` handler on `Avatar.Image`.

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
      name: 'delayMs',
      type: 'number',
      description:
        'Useful for delaying rendering so it only appears for those with slower connections.',
    },
  ]}
/>

## Examples

### Clickable Avatar with tooltip

You can compose the Avatar with a [Tooltip](/docs/primitives/components/tooltip) to display extra information.

```jsx line=2,5,6,8,10-14
import * as Avatar from '@radix-ui/react-avatar';
import * as Tooltip from '@radix-ui/react-tooltip';

export default () => (
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Avatar.Root>…</Avatar.Root>
    </Tooltip.Trigger>

    <Tooltip.Content side="top">
      Tooltip content
      <Tooltip.Arrow />
    </Tooltip.Content>
  </Tooltip.Root>
);
```