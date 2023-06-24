---
metaTitle: Scroll Area
metaDescription: Augments native scroll functionality for custom, cross-browser styling.
name: scroll-area
---

# Scroll Area

<Description>
  Augments native scroll functionality for custom, cross-browser styling.
</Description>

<HeroContainer css={{ py: '$8' }}>
  <ScrollAreaDemo />
</HeroContainer>

<HeroCodeBlock folder="ScrollArea" />

<Highlights
  features={[
    'Scrollbar sits on top of the scrollable content, taking up no space.',
    'Scrolling is native; no underlying position movements via CSS transformations.',
    'Shims pointer behaviors only when interacting with the controls, so keyboard controls are unaffected.',
    'Supports Right to Left direction.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-scroll-area
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as ScrollArea from '@radix-ui/react-scroll-area';

export default () => (
  <ScrollArea.Root>
    <ScrollArea.Viewport />
    <ScrollArea.Scrollbar orientation="horizontal">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
);
```

## API Reference

### Root

Contains all the parts of a scroll area.

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
      type: '"auto" | "always" | "scroll" | "hover"',
      typeSimple: 'enum',
      default: '"hover"',
      description: (
        <span>
          Describes the nature of scrollbar visibility, similar to how the
          scrollbar preferences in MacOS control visibility of native
          scrollbars.
          <br />
          <br />
          <Code>"auto"</Code> means that scrollbars are visible when content is overflowing
          on the corresponding orientation.
          <br />
          <Code>"always"</Code> means that scrollbars are always visible regardless
          of whether the content is overflowing.
          <br />
          <Code>"scroll"</Code> means that scrollbars are visible when the user is
          scrolling along its corresponding orientation.
          <br />
          <Code>"hover"</Code> when the user is scrolling along its corresponding
          orientation and when the user is hovering over the scroll area.
        </span>
      ),
    },
    {
      name: 'scrollHideDelay',
      type: 'number',
      default: '600',
      description: (
        <span>
          If <Code>type</Code> is set to either <Code>"scroll"</Code> or{' '}
          <Code>"hover"</Code>, this prop determines the length of time, in
          milliseconds, before the scrollbars are hidden after the user stops
          interacting with scrollbars.
        </span>
      ),
    },
    {
      name: 'dir',
      required: false,
      type: '"ltr" | "rtl"',
      typeSimple: 'enum',
      description: (
        <span>
          The reading direction of the scroll area. If omitted, inherits
          globally from <Code>DirectionProvider</Code> or assumes LTR
          (left-to-right) reading mode.
        </span>
      ),
    },
  ]}
/>

### Viewport

The viewport area of the scroll area.

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

### Scrollbar

The vertical scrollbar. Add a second `Scrollbar` with an `orientation` prop to enable horizontal scrolling.

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
          controlling animation with React animation libraries.
        </span>
      ),
    },
    {
      name: 'orientation',
      required: false,
      type: '"horizontal" | "vertical"',
      typeSimple: 'enum',
      default: 'vertical',
      description: 'The orientation of the scrollbar',
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-state]',
      values: ['visible', 'hidden'],
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]}
/>

### Thumb

The thumb to be used in `ScrollArea.Scrollbar`.

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
      values: ['visible', 'hidden'],
    },
  ]}
/>

### Corner

The corner where both vertical and horizontal scrollbars meet.

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

## Accessibility

In most cases, it's best to rely on native scrolling and work with the customization options available in CSS. When that isn't enough, `ScrollArea` provides additional customizability while maintaining the browser's native scroll behavior (as well as accessibility features, like keyboard scrolling).

### Keyboard Interactions

Scrolling via keyboard is supported by default because the component relies on native scrolling. Specific keyboard interactions may differ between platforms, so we do not specify them here or add specific event listeners to handle scrolling via key events.