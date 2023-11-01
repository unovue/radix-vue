---

title: Slider
description: An input where the user selects a value from within a given range.
name: slider
aria: https://www.w3.org/WAI/ARIA/apg/patterns/slidertwothumb
---


# Slider

<Description>
An input where the user selects a value from within a given range.
</Description>

<ComponentPreview name="Slider" />


## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Supports multiple thumbs.',
    'Supports a minimum value between thumbs.',
    'Supports touch or click on track to update value.',
    'Supports Right to Left direction.',
    'Full keyboard navigation.',
  ]"
/>

## Installation

Install the component from your command line.

```bash
npm install radix-vue
```

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
</script>

<template>
  <SliderRoot>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a slider. It will render an `input` for each thumb when used within a `form` to ensure events propagate correctly.

<PropsTable
  :data="[
    {
      name: 'defaultValue',
      required: false,
      type: 'number[]',
      description: 'The value of the slider when initially rendered. Use when you do not need to control the state of the slider.',
    },
    {
      name: 'modelValue',
      required: false,
      type: 'number[]',
      description: '<span> The controlled value of the slider. Must be binded with <Code>v-model</Code>. </span>',
    },
    {
      name: 'name',
      required: false,
      type: 'string',
      description: 'The name of the slider. Submitted with its owning form as part of a name/value pair.',
    },
    {
      name: 'disabled',
      required: false,
      type: 'boolean',
      default: 'false',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the slider. </span>',
    },
    {
      name: 'orientation',
      required: false,
      type: '&quot;horizontal&quot; | &quot;vertical&quot;',
      typeSimple: 'enum',
      default: '&quot;horizontal&quot;',
      description: 'The orientation of the slider.',
    },
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      description: '<span> The reading direction of the slider. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode. </span>',
    },
    {
      name: 'inverted',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Whether the slider is visually inverted.',
    },
    {
      name: 'min',
      required: false,
      type: 'number',
      default: '0',
      description: 'The minimum value for the range.',
    },
    {
      name: 'max',
      required: false,
      type: 'number',
      default: '100',
      description: 'The maximum value for the range.',
    },
    {
      name: 'step',
      required: false,
      type: 'number',
      default: '1',
      description: 'The stepping interval.',
    },
    {
      name: 'minStepsBetweenThumbs',
      required: false,
      type: 'number',
      default: '0',
      description: '<span> The minimum permitted <Code>step</Code>s between multiple thumbs. </span>',
    },
    {
      name: 'as',
      type: 'string | Component',
      default: 'div',
      description: 'The element or component this component should render as. Can be overwrite by <Code>asChild</Code>'
    },
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>


<EmitsTable 
  :data="[
    {
      name: '@update:modelValue',
      type: '(value: number) => void',
      description: 'Event handler called when the slider value changes'
    },
    {
      name: '@valueCommit',
      type: '(value: number[]): void',
      description: 'Event handler called when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service.',
    },
  ]" 
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Track

The track that contains the `SliderRange`.

<PropsTable
  :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'span',
      description: 'The element or component this component should render as. Can be overwrite by <Code>asChild</Code>'
    },
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Range

The range part. Must live inside `SliderTrack`.

<PropsTable
  :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'span',
      description: 'The element or component this component should render as. Can be overwrite by <Code>asChild</Code>'
    },
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Thumb

A draggable thumb. You can render multiple thumbs.

<PropsTable
  :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'div',
      description: 'The element or component this component should render as. Can be overwrite by <Code>asChild</Code>'
    },
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

## Examples

### Vertical orientation

Use the `orientation` prop to create a vertical slider.

```vue line=7
// index.vue
<script setup>
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
</script>

<template>
  <SliderRoot class="SliderRoot" :default-value="[50]" orientation="vertical">
    <SliderTrack class="SliderTrack">
      <SliderRange class="SliderRange" />
    </SliderTrack>
    <SliderThumb class="SliderThumb" />
  </SliderRoot>
</template>
```

```css line=7,18,26
/* styles.css */
.SliderRoot {
  position: relative;
  display: flex;
  align-items: center;
}
.SliderRoot[data-orientation="vertical"] {
  flex-direction: column;
  width: 20px;
  height: 100px;
}

.SliderTrack {
  position: relative;
  flex-grow: 1;
  background-color: grey;
}
.SliderTrack[data-orientation="vertical"] {
  width: 3px;
}

.SliderRange {
  position: absolute;
  background-color: black;
}
.SliderRange[data-orientation="vertical"] {
  width: 100%;
}

.SliderThumb {
  display: block;
  width: 20px;
  height: 20px;
  background-color: black;
}
```

### Create a range

Add multiple thumbs and values to create a range slider.

```vue line=7,11-12
// index.vue
<script setup>
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
</script>

<template>
  <SliderRoot :default-value="[25, 75]">
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
    <SliderThumb />
  </SliderRoot>
</template>
```

### Define step size

Use the `step` prop to increase the stepping interval.

```vue line=7
// index.vue
<script setup>
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
</script>

<template>
  <SliderRoot :default-value="[50]" :step="10">
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
</template>
```

### Prevent thumb overlap

Use `minStepsBetweenThumbs` to avoid thumbs with equal values.

```vue line=10
// index.vue
<script setup>
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
</script>

<template>
  <SliderRoot
    :default-value="[25, 75]"
    :step="10"
    :min-steps-between-thumbs="1"
  >
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
    <SliderThumb />
  </SliderRoot>
</template>
```

## Accessibility

Adheres to the [Slider WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slidertwothumb).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['ArrowRight'],
      description: '<span> Increments/decrements by the <Code>step</Code> value depending on <Code>orientation</Code>. </span>',
    },
    {
      keys: ['ArrowLeft'],
      description: '<span> Increments/decrements by the <Code>step</Code> value depending on <Code>orientation</Code>. </span>',
    },
    {
      keys: ['ArrowUp'],
      description: '<span> Increases the value by the <Code>step</Code> amount. </span>',
    },
    {
      keys: ['ArrowDown'],
      description: '<span> Decreases the value by the <Code>step</Code> amount. </span>',
    },
    {
      keys: ['PageUp'],
      description: '<span> Increases the value by a larger <Code>step</Code>. </span>',
    },
    {
      keys: ['PageDown'],
      description: '<span> Decreases the value by a larger <Code>step</Code>. </span>',
    },
    {
      keys: ['Shift + ArrowUp'],
      description: '<span> Increases the value by a larger <Code>step</Code>. </span>',
    },
    {
      keys: ['Shift + ArrowDown'],
      description: '<span> Decreases the value by a larger <Code>step</Code>. </span>',
    },
    {
      keys: ['Home'],
      description: 'Sets the value to its minimum.',
    },
    {
      keys: ['End'],
      description: 'Sets the value to its maximum.',
    },
  ]"
/>
 
## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract all parts

This example abstracts all of the `Slider` parts so it can be used as a self closing element.

#### Usage

```vue
<script setup lang="ts">
import { Slider } from './your-slider'
</script>

<template>
  <Slider :default-value="[25]" />
</template>
```

#### Implementation

 ```ts
// your-slider.ts
export { default as Slider } from 'Slider.vue'
```

```vue
 <!-- Slider.vue -->
<script setup lang="ts">
import { SlideRoot, SliderRange, type SliderRootEmits, type SliderRootProps, SliderThumb, SliderTrack, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<SliderRootProps>()
const emits = defineEmits<SliderRootEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <SliderRoot v-bind="forward">
    <SliderTrack>
      <SliderRange />
    </SliderTrack>

    <SliderThumb v-for="(_, i) in value" :key="i" />
  </SliderRoot>
</template>
```

## Caveats

### Mouse events are not fired

Because of [a limitation](https://github.com/radix-vue/radix-vue/blob/main/packages/radix-vue/src/Slider/SliderImpl.vue#L48-L49) we faced during implementation, the following example won't work as expected and the `@mousedown` and `@mousedown` event handlers won't be fired:

```vue
<SliderRoot
  @mousedown="() => { console.log('onMouseDown')  }"
  @mouseup="() => { console.log('onMouseUp')  }"
>
  …
</SliderRoot>
```

We recommend using pointer events instead (eg. `@pointerdown`, `@pointerup`). Regardless of the above limitation, these events are better suited for cross-platform/device handling as they are fired for all pointer input types (mouse, touch, pen, etc.).
 