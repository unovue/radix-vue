---
metaTitle: Collapsible
metaDescription: An interactive component which expands/collapses a panel.
name: collapsible
aria: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure
---

# Collapsible

<Description>
  An interactive component which expands/collapses a panel.
</Description>

<HeroContainer>
  <CollapsibleDemo />
</HeroContainer>

<HeroCodeBlock folder="Collapsible" />

<Highlights
  features={['Full keyboard navigation.', 'Can be controlled or uncontrolled.']}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-collapsible
```

## Anatomy

Import the components and piece the parts together.

```jsx
import * as Collapsible from '@radix-ui/react-collapsible';

export default () => (
  <Collapsible.Root>
    <Collapsible.Trigger />
    <Collapsible.Content />
  </Collapsible.Root>
);
```

## API Reference

### Root

Contains all the parts of a collapsible.

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
      name: 'defaultOpen',
      type: 'boolean',
      description:
        'The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.',
    },
    {
      name: 'open',
      type: 'boolean',
      description: (
        <span>
          The controlled open state of the collapsible. Must be used in
          conjunction with <Code>onOpenChange</Code>.
        </span>
      ),
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      typeSimple: 'function',
      description:
        'Event handler called when the open state of the collapsible changes.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, prevents the user from interacting with the
          collapsible.
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
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

### Trigger

The button that toggles the collapsible.

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
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

### Content

The component that contains the collapsible content.

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
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

<CssVariablesTable
  data={[
    {
      cssVariable: '--radix-collapsible-content-width',
      description: 'The width of the content when it opens/closes',
    },
    {
      cssVariable: '--radix-collapsible-content-height',
      description: 'The height of the content when it opens/closes',
    },
  ]}
/>

## Examples

### Animating content size

Use the `--radix-collapsible-content-width` and/or `--radix-collapsible-content-height` CSS variables to animate the size of the content when it opens/closes. Here's a demo:

```jsx line=8
// index.jsx
import * as Collapsible from '@radix-ui/react-collapsible';
import './styles.css';

export default () => (
  <Collapsible.Root>
    <Collapsible.Trigger>…</Collapsible.Trigger>
    <Collapsible.Content __className__="CollapsibleContent">
      …
    </Collapsible.Content>
  </Collapsible.Root>
);
```

```css line=17,23
/* styles.css */
.CollapsibleContent {
  overflow: hidden;
}
.CollapsibleContent[data-state='open'] {
  animation: slideDown 300ms ease-out;
}
.CollapsibleContent[data-state='closed'] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(__--radix-collapsible-content-height__);
  }
}

@keyframes slideUp {
  from {
    height: var(__--radix-collapsible-content-height__);
  }
  to {
    height: 0;
  }
}
```

## Accessibility

Adheres to the [Disclosure WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure).

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Space'],
      description: 'Opens/closes the collapsible.',
    },
    {
      keys: ['Enter'],
      description: 'Opens/closes the collapsible.',
    },
  ]}
/>