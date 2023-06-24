---
metaTitle: Toggle Group
metaDescription: A set of two-state buttons that can be toggled on or off.
name: toggle-group
aria: https://www.w3.org/WAI/ARIA/apg/patterns/button
---

# Toggle Group

<Description>
  A set of two-state buttons that can be toggled on or off.
</Description>

<HeroContainer>
  <ToggleGroupDemo />
</HeroContainer>

<HeroCodeBlock folder="ToggleGroup" />

<Highlights
  features={[
    'Full keyboard navigation.',
    'Supports horizontal/vertical orientation.',
    'Support single and multiple pressed buttons.',
    'Can be controlled or uncontrolled.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-toggle-group
```

## Anatomy

Import the component.

```jsx
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export default () => (
  <ToggleGroup.Root>
    <ToggleGroup.Item />
  </ToggleGroup.Root>
);
```

## API Reference

### Root

Contains all the parts of a toggle group.

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
      required: true,
      type: '"single" | "multiple"',
      typeSimple: 'enum',
      description: (
        <span>
          Determines whether a single or multiple items can be pressed at a
          time.
        </span>
      ),
    },
    {
      name: 'value',
      required: false,
      type: 'string',
      description: (
        <span>
          The controlled value of the pressed item when <Code>type</Code> is{' '}
          <Code>"single"</Code>. Must be used in conjunction with{' '}
          <Code>onValueChange</Code>.
        </span>
      ),
    },
    {
      name: 'defaultValue',
      required: false,
      type: 'string',
      description: (
        <span>
          The value of the item to show as pressed when initially rendered and{' '}
          <Code>type</Code> is <Code>"single"</Code>. Use when you do not need
          to control the state of the items.
        </span>
      ),
    },
    {
      name: 'onValueChange',
      required: false,
      type: '(value: string) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the pressed state of an item changes and{' '}
          <Code>type</Code> is <Code>"single"</Code>.
        </span>
      ),
    },
    {
      name: 'value',
      required: false,
      default: '[]',
      type: 'string[]',
      description: (
        <span>
          The controlled value of the pressed items when <Code>type</Code> is{' '}
          <Code>"multiple"</Code>. Must be used in conjunction with{' '}
          <Code>onValueChange</Code>.
        </span>
      ),
    },
    {
      name: 'defaultValue',
      required: false,
      default: '[]',
      type: 'string[]',
      description: (
        <span>
          The values of the items to show as pressed when initially rendered and{' '}
          <Code>type</Code> is <Code>"multiple"</Code>. Use when you do not need
          to control the state of the items.
        </span>
      ),
    },
    {
      name: 'onValueChange',
      required: false,
      type: '(value: string[]) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the pressed state of an item changes and{' '}
          <Code>type</Code> is <Code>"multiple"</Code>.
        </span>
      ),
    },
    {
      name: 'disabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <span>
          When <Code>true</Code>, prevents the user from interacting with the
          toggle group and all its items.
        </span>
      ),
    },
    {
      name: 'rovingFocus',
      required: false,
      type: 'boolean',
      default: 'true',
      description: (
        <span>
          When <Code>false</Code>, navigating through the items using arrow keys
          will be disabled.
        </span>
      ),
    },
    {
      name: 'orientation',
      required: false,
      type: '"horizontal" | "vertical" | undefined',
      typeSimple: 'enum',
      default: 'undefined',
      description: (
        <span>
          The orientation of the component, which determines how focus moves:{' '}
          <Code>horizontal</Code> for left/right arrows and{' '}
          <Code>vertical</Code> for up/down arrows.
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
          The reading direction of the toggle group. If omitted, inherits
          globally from <Code>DirectionProvider</Code> or assumes LTR
          (left-to-right) reading mode.
        </span>
      ),
    },
    {
      name: 'loop',
      required: false,
      type: 'boolean',
      default: 'true',
      description: (
        <span>
          When <Code>true</Code> and <Code>rovingFocus</Code> is{' '}
          <Code>true</Code>, keyboard navigation will loop from last item to
          first, and vice versa.
        </span>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]}
/>

### Item

An item in the group.

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
      name: 'value',
      required: true,
      type: 'string',
      description: 'A unique value for the item.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, prevents the user from interacting with the
          item.
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
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]}
/>

## Examples

### Ensuring there is always a value

You can control the component to ensure a value.

```jsx line=5,8
import * as React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export default () => {
  const [value, setValue] = React.useState('left');

  return (
    <ToggleGroup.Root
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      <ToggleGroup.Item value="left">
        <TextAlignLeftIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="center">
        <TextAlignCenterIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="right">
        <TextAlignRightIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
```

## Accessibility

Uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/radio/radio.html) to manage focus movement among items.

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Tab'],
      description:
        'Moves focus to either the pressed item or the first item in the group.',
    },
    {
      keys: ['Space'],
      description: 'Activates/deactivates the item.',
    },
    {
      keys: ['Enter'],
      description: 'Activates/deactivates the item.',
    },
    {
      keys: ['ArrowDown'],
      description: 'Moves focus to the next item in the group.',
    },
    {
      keys: ['ArrowRight'],
      description: 'Moves focus to the next item in the group.',
    },
    {
      keys: ['ArrowUp'],
      description: 'Moves focus to the previous item in the group.',
    },
    {
      keys: ['ArrowLeft'],
      description: 'Moves focus to the previous item in the group.',
    },
    {
      keys: ['Home'],
      description: 'Moves focus to the first item.',
    },
    {
      keys: ['End'],
      description: 'Moves focus to the last item.',
    },
  ]}
/>