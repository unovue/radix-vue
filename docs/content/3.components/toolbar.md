---
metaTitle: Toolbar
metaDescription: A container for grouping a set of controls, such as buttons, toggle groups or dropdown menus.
name: toolbar
aria: https://www.w3.org/WAI/ARIA/apg/patterns/toolbar
---

# Toolbar

<Description>
  A container for grouping a set of controls, such as buttons, toggle groups or
  dropdown menus.
</Description>

<HeroContainer
  css={{
    justifyContent: 'flex-start',
    overflow: 'auto',
    '@bp2': {
      justifyContent: 'center',
    },
  }}
>
  <Box css={{ flex: '0 0 20px', '@bp1': { flex: '0 0 60px' } }} />
  <Box css={{ flex: 1 }}>
    <ToolbarDemo />
  </Box>
  <Box css={{ flex: '0 0 20px', '@bp1': { flex: '0 0 60px' } }} />
</HeroContainer>

<HeroCodeBlock folder="Toolbar" />

<Highlights features={['Full keyboard navigation.']} />

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-toolbar
```

## Anatomy

Import the component.

```jsx
import * as Toolbar from '@radix-ui/react-toolbar';

export default () => (
  <Toolbar.Root>
    <Toolbar.Button />
    <Toolbar.Separator />
    <Toolbar.Link />
    <Toolbar.ToggleGroup>
      <Toolbar.ToggleItem />
    </Toolbar.ToggleGroup>
  </Toolbar.Root>
);
```

## API Reference

### Root

Contains all the toolbar component parts.

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
      name: 'orientation',
      required: false,
      type: '"horizontal" | "vertical" | undefined',
      typeSimple: 'enum',
      default: '"horizontal"',
      description: 'The orientation of the toolbar.',
    },
    {
      name: 'dir',
      required: false,
      type: '"ltr" | "rtl"',
      typeSimple: 'enum',
      description: (
        <span>
          The reading direction of the toolbar. If omitted, inherits globally
          from <Code>DirectionProvider</Code> or assumes LTR (left-to-right)
          reading mode.
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

### Button

A button item.

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
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]}
/>

### Link

A link item.

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

### ToggleGroup

A set of two-state buttons that can be toggled on or off.

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

### ToggleItem

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

### Separator

Used to visually separate items in the toolbar.

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
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]}
/>

## Examples

### Use with other primitives

All our primitives which expose a `Trigger` part, such as `Dialog`, `AlertDialog`, `Popover`, `DropdownMenu` can be composed within a toolbar by using the [`asChild` prop](/docs/primitives/guides/composition).

Here is an example using our `DropdownMenu` primitive.

```jsx line=9-11
import * as Toolbar from '@radix-ui/react-toolbar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default () => (
  <Toolbar.Root>
    <Toolbar.Button>Action 1</Toolbar.Button>
    <Toolbar.Separator />
    <DropdownMenu.Root>
      <Toolbar.Button __asChild__>
        <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
      </Toolbar.Button>
      <DropdownMenu.Content>…</DropdownMenu.Content>
    </DropdownMenu.Root>
  </Toolbar.Root>
);
```

## Accessibility

Uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/radio/radio.html) to manage focus movement among items.

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Tab'],
      description: 'Moves focus to the first item in the group.',
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
      description: (
        <span>
          Moves focus to the next item depending on <Code>orientation</Code>.
        </span>
      ),
    },
    {
      keys: ['ArrowRight'],
      description: (
        <span>
          Moves focus to the next item depending on <Code>orientation</Code>.
        </span>
      ),
    },
    {
      keys: ['ArrowUp'],
      description: (
        <span>
          Moves focus to the previous item depending on <Code>orientation</Code>
          .
        </span>
      ),
    },
    {
      keys: ['ArrowLeft'],
      description: (
        <span>
          Moves focus to the previous item depending on <Code>orientation</Code>
          .
        </span>
      ),
    },
    {
      keys: ['Home'],
      description: <span>Moves focus to the first item.</span>,
    },
    {
      keys: ['End'],
      description: <span>Moves focus to the last item.</span>,
    },
  ]}
/>