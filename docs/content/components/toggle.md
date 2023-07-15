---
outline: deep
metaTitle: Toggle
metaDescription: A two-state button that can be either on or off.
name: toggle
aria: https://www.w3.org/WAI/ARIA/apg/patterns/button
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoToggle from '../../components/demo/Toggle/index.vue'
import PropsTable from '../../components/tables/PropsTable.vue'
import EmitsTable from '../../components/tables/EmitsTable.vue'
import DataAttributesTable from '../../components/tables/DataAttributesTable.vue'
import KeyboardTable from '../../components/tables/KeyboardTable.vue'
import Highlights from '../../components/Highlights.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Toggle

<Description>
A two-state button that can be either on or off.
</Description>

<HeroContainer>
<DemoToggle />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Toggle/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features
<Highlights
  :features="['Full keyboard navigation.', 'Can be controlled or uncontrolled.']"
/>

## Installation

Install the component from your command line.

```bash
npm install radix-vue
```

## Anatomy

Import the component.

```vue
<script setup>
import { Separator } from "radix-vue";
</script>

<template>
  <Separator />
</template>
import * as Toggle from 'radix-vue';

export default () => <Toggle.Root />;
```

## API Reference

### Root

The toggle.
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
```
## Accessibility

### Keyboard Interactions
```
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
```