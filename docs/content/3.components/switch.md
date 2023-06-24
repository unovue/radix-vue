---
metaTitle: Switch
metaDescription: A control that allows the user to toggle between checked and not checked.
name: switch
aria: https://www.w3.org/WAI/ARIA/apg/patterns/switch
---

# Switch

<Description>
  A control that allows the user to toggle between checked and not checked.
</Description>

<HeroContainer>
  <SwitchDemo />
</HeroContainer>

<HeroCodeBlock folder="Switch" />

<Highlights
  features={['Full keyboard navigation.', 'Can be controlled or uncontrolled.']}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-switch
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Switch from '@radix-ui/react-switch';

export default () => (
  <Switch.Root>
    <Switch.Thumb />
  </Switch.Root>
);
```

## API Reference

### Root

Contains all the parts of a switch. An `input` will also render when used within a `form` to ensure events propagate correctly.

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
      name: 'defaultChecked',
      type: 'boolean',
      description:
        'The state of the switch when it is initially rendered. Use when you do not need to control its state.',
    },
    {
      name: 'checked',
      type: 'boolean',
      description: (
        <span>
          The controlled state of the switch. Must be used in conjunction with{' '}
          <Code>onCheckedChange</Code>.
        </span>
      ),
    },
    {
      name: 'onCheckedChange',
      type: '(checked: boolean) => void',
      typeSimple: 'function',
      description: 'Event handler called when the state of the switch changes.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, prevents the user from interacting with the
          switch.
        </span>
      ),
    },
    {
      name: 'required',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, indicates that the user must check the switch
          before the owning form can be submitted.
        </span>
      ),
    },
    {
      name: 'name',
      type: 'string',
      description:
        'The name of the switch. Submitted with its owning form as part of a name/value pair.',
    },
    {
      name: 'value',
      type: 'string',
      default: 'on',
      description: (
        <span>
          The value given as data when submitted with a <Code>name</Code>.
        </span>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-state]',
      values: ['checked', 'unchecked'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

### Thumb

The thumb that is used to visually indicate whether the switch is on or off.

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
      values: ['checked', 'unchecked'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

## Accessibility

Adheres to the [`switch` role requirements](https://www.w3.org/WAI/ARIA/apg/patterns/switch).

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Space'],
      description: "Toggles the component's state.",
    },
    {
      keys: ['Enter'],
      description: "Toggles the component's state.",
    },
  ]}
/>