---
metaTitle: Separator
metaDescription: Visually or semantically separates content.
name: separator
aria: https://www.w3.org/TR/wai-aria-1.2/#separator
---

# Separator

<Description>Visually or semantically separates content.</Description>

<HeroContainer>
  <SeparatorDemo />
</HeroContainer>

<HeroCodeBlock folder="Separator" />

<Highlights features={['Supports horizontal and vertical orientations.']} />

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-separator
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Separator from '@radix-ui/react-separator';

export default () => <Separator.Root />;
```

## API Reference

### Root

The separator.

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
      type: '"horizontal" | "vertical"',
      typeSimple: 'enum',
      default: '"horizontal"',
      description: 'The orientation of the separator.',
    },
    {
      name: 'decorative',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, signifies that it is purely visual, carries no
          semantic meaning, and ensures it is not present in the accessibility
          tree.
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

## Accessibility

Adheres to the [`separator` role requirements](https://www.w3.org/TR/wai-aria-1.2/#separator).