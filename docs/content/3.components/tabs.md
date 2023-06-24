---
metaTitle: Tabs
metaDescription: A set of layered sections of content—known as tab panels—that are displayed one at a time.
name: tabs
aria: https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel
---

# Tabs

<Description>
  A set of layered sections of content—known as tab panels—that are displayed
  one at a time.
</Description>

<HeroContainer>
  <TabsDemo />
</HeroContainer>

<HeroCodeBlock folder="Tabs" />

<Highlights
  features={[
    'Can be controlled or uncontrolled.',
    'Supports horizontal/vertical orientation.',
    'Supports automatic/manual activation.',
    'Full keyboard navigation.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-tabs
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Tabs from '@radix-ui/react-tabs';

export default () => (
  <Tabs.Root>
    <Tabs.List>
      <Tabs.Trigger />
    </Tabs.List>
    <Tabs.Content />
  </Tabs.Root>
);
```

## API Reference

### Root

Contains all the tabs component parts.

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
      name: 'defaultValue',
      required: false,
      type: 'string',
      description:
        'The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.',
    },
    {
      name: 'value',
      required: false,
      type: 'string',
      description: (
        <span>
          The controlled value of the tab to activate. Should be used in
          conjunction with <Code>onValueChange</Code>.
        </span>
      ),
    },
    {
      name: 'onValueChange',
      required: false,
      type: '(value: string) => void',
      typeSimple: 'function',
      description: 'Event handler called when the value changes.',
    },
    {
      name: 'orientation',
      required: false,
      type: '"horizontal" | "vertical" | undefined',
      typeSimple: 'enum',
      default: '"horizontal"',
      description: 'The orientation of the component.',
    },
    {
      name: 'dir',
      required: false,
      type: '"ltr" | "rtl"',
      typeSimple: 'enum',
      description: (
        <span>
          The reading direction of the tabs. If omitted, inherits globally from{' '}
          <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading
          mode.
        </span>
      ),
    },
    {
      name: 'activationMode',
      required: false,
      type: '"automatic" | "manual"',
      typeSimple: 'enum',
      default: '"automatic"',
      description: (
        <span>
          When <Code>automatic</Code>, tabs are activated when receiving focus.
          When <Code>manual</Code>, tabs are activated when clicked.
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

### List

Contains the triggers that are aligned along the edge of the active content.

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
      name: 'loop',
      required: false,
      type: 'boolean',
      default: 'true',
      description: (
        <span>
          When <Code>true</Code>, keyboard navigation will loop from last tab to
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

### Trigger

The button that activates its associated content.

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
      description: 'A unique value that associates the trigger with a content.',
    },
    {
      name: 'disabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <span>
          When <Code>true</Code>, prevents the user from interacting with the
          tab.
        </span>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-state]',
      values: ['active', 'inactive'],
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

### Content

Contains the content associated with each trigger.

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
      description: 'A unique value that associates the content with a trigger.',
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
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-state]',
      values: ['active', 'inactive'],
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]}
/>

## Examples

### Vertical

You can create vertical tabs by using the `orientation` prop.

```jsx line=4
import * as Tabs from '@radix-ui/react-tabs';

export default () => (
  <Tabs.Root defaultValue="tab1" __orientation__="vertical">
    <Tabs.List aria-label="tabs example">
      <Tabs.Trigger value="tab1">One</Tabs.Trigger>
      <Tabs.Trigger value="tab2">Two</Tabs.Trigger>
      <Tabs.Trigger value="tab3">Three</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">Tab one content</Tabs.Content>
    <Tabs.Content value="tab2">Tab two content</Tabs.Content>
    <Tabs.Content value="tab3">Tab three content</Tabs.Content>
  </Tabs.Root>
);
```

## Accessibility

Adheres to the [Tabs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel).

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Tab'],
      description: (
        <span>
          When focus moves onto the tabs, focuses the active trigger. When a
          trigger is focused, moves focus to the active content.
        </span>
      ),
    },
    {
      keys: ['ArrowDown'],
      description: (
        <span>
          Moves focus to the next trigger depending on <Code>orientation</Code>{' '}
          and activates its associated content.
        </span>
      ),
    },
    {
      keys: ['ArrowRight'],
      description: (
        <span>
          Moves focus to the next trigger depending on <Code>orientation</Code>{' '}
          and activates its associated content.
        </span>
      ),
    },
    {
      keys: ['ArrowUp'],
      description: (
        <span>
          Moves focus to the previous trigger depending on{' '}
          <Code>orientation</Code> and activates its associated content.
        </span>
      ),
    },
    {
      keys: ['ArrowLeft'],
      description: (
        <span>
          Moves focus to the previous trigger depending on{' '}
          <Code>orientation</Code> and activates its associated content.
        </span>
      ),
    },
    {
      keys: ['Home'],
      description: (
        <span>
          Moves focus to the first trigger and activates its associated content.
        </span>
      ),
    },
    {
      keys: ['End'],
      description: (
        <span>
          Moves focus to the last trigger and activates its associated content.
        </span>
      ),
    },
  ]}
/>