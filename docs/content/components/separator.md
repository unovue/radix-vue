---
outline: deep
metaTitle: Separator
metaDescription: Visually or semantically separates content.
name: separator
aria: https://www.w3.org/TR/wai-aria-1.2/#separator
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoSeparator from '../../components/demo/Separator/index.vue'
import PropsTable from '../../components/tables/PropsTable.vue'
import EmitsTable from '../../components/tables/EmitsTable.vue'
import DataAttributesTable from '../../components/tables/DataAttributesTable.vue'
import KeyboardTable from '../../components/tables/KeyboardTable.vue'
import Highlights from '../../components/Highlights.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Separator

<Description>
A modal dialog that interrupts the user with important content and expects a
response.
</Description>

<HeroContainer>
<DemoSeparator />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Separator/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

```
<Highlights features={['Supports horizontal and vertical orientations.']} />
```
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
```
<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
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
```
## Accessibility

Adheres to the [`separator` role requirements](https://www.w3.org/TR/wai-aria-1.2/#separator).