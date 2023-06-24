---
metaTitle: Toggle
metaDescription: A two-state button that can be either on or off.
name: toggle
aria: https://www.w3.org/WAI/ARIA/apg/patterns/button
---

# Toggle

<Description>A two-state button that can be either on or off.</Description>

<HeroContainer>
  <ToggleDemo />
</HeroContainer>

<HeroCodeBlock folder="Toggle" />

<Highlights
  features={['Full keyboard navigation.', 'Can be controlled or uncontrolled.']}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-toggle
```

## Anatomy

Import the component.

```jsx
import * as Toggle from '@radix-ui/react-toggle';

export default () => <Toggle.Root />;
```

## API Reference

### Root

The toggle.

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
      name: 'defaultPressed',
      type: 'boolean',
      description:
        'The pressed state of the toggle when it is initially rendered. Use when you do not need to control its pressed state.',
    },
    {
      name: 'pressed',
      type: 'boolean',
      description: (
        <span>
          The controlled pressed state of the toggle. Must be used in
          conjunction with <Code>onPressedChange</Code>.
        </span>
      ),
    },
    {
      name: 'onPressedChange',
      type: '(pressed: boolean) => void',
      typeSimple: 'function',
      description:
        'Event handler called when the pressed state of the toggle changes.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, prevents the user from interacting with the
          toggle.
        </span>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-state]',
      values: ['on', 'off'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

## Accessibility

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Space'],
      description: 'Activates/deactivates the toggle.',
    },
    {
      keys: ['Enter'],
      description: 'Activates/deactivates the toggle.',
    },
  ]}
/>