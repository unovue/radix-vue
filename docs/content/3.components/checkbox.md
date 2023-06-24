---
metaTitle: Checkbox
metaDescription: A control that allows the user to toggle between checked and not checked.
name: checkbox
aria: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox
---

# Checkbox

<Description>
  A control that allows the user to toggle between checked and not checked.
</Description>

<HeroContainer>
  <CheckboxDemo />
</HeroContainer>

<HeroCodeBlock folder="Checkbox" />

<Highlights
  features={[
    'Supports indeterminate state.',
    'Full keyboard navigation.',
    'Can be controlled or uncontrolled.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-checkbox
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Checkbox from '@radix-ui/react-checkbox';

export default () => (
  <Checkbox.Root>
    <Checkbox.Indicator />
  </Checkbox.Root>
);
```

## API Reference

### Root

Contains all the parts of a checkbox. An `input` will also render when used within a `form` to ensure events propagate correctly.

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
        'The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.',
    },
    {
      name: 'checked',
      type: 'boolean',
      description: (
        <span>
          The controlled checked state of the checkbox. Must be used in
          conjunction with <Code>onCheckedChange</Code>.
        </span>
      ),
    },
    {
      name: 'onCheckedChange',
      type: `(checked: boolean | 'indeterminate') => void`,
      typeSimple: 'function',
      description:
        'Event handler called when the checked state of the checkbox changes.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, prevents the user from interacting with the
          checkbox.
        </span>
      ),
    },
    {
      name: 'required',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, indicates that the user must check the
          checkbox before the owning form can be submitted.
        </span>
      ),
    },
    {
      name: 'name',
      type: 'string',
      description:
        'The name of the checkbox. Submitted with its owning form as part of a name/value pair.',
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
      values: ['checked', 'unchecked', 'indeterminate'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

### Indicator

Renders when the checkbox is in a checked or indeterminate state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

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
      values: ['checked', 'unchecked', 'indeterminate'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

## Examples

### Indeterminate

You can set the checkbox to `indeterminate` by taking control of its state.

```jsx line=5,9-14,16
import { DividerHorizontalIcon, CheckIcon } from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox';

export default () => {
  const [checked, setChecked] = React.useState('indeterminate');

  return (
    <>
      <StyledCheckbox checked={checked} onCheckedChange={setChecked}>
        <Checkbox.Indicator>
          {checked === 'indeterminate' && <DividerHorizontalIcon />}
          {checked === true && <CheckIcon />}
        </Checkbox.Indicator>
      </StyledCheckbox>

      <button
        type="button"
        onClick={() =>
          setChecked((prevIsChecked) =>
            prevIsChecked === 'indeterminate' ? false : 'indeterminate'
          )
        }
      >
        Toggle indeterminate
      </button>
    </>
  );
};
```

## Accessibility

Adheres to the [tri-state Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox).

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Space'],
      description: 'Checks/unchecks the checkbox.',
    },
  ]}
/>