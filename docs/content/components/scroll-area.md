---
outline: deep
metaTitle: Scroll Area
metaDescription: Augments native scroll functionality for custom, cross-browser styling.
name: scroll-area
---

<script setup> 
import DemoScrollArea from '../../components/demo/ScrollArea/index.vue' 
</script>

# ScrollArea

<Description>
Augments native scroll functionality for custom, cross-browser styling.
</Description>

<HeroContainer>
<DemoScrollArea />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/ScrollArea/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Scrollbar sits on top of the scrollable content, taking up no space.',
    'Scrolling is native; no underlying position movements via CSS transformations.',
    'Shims pointer behaviors only when interacting with the controls, so keyboard controls are unaffected.',
    'Supports Right to Left direction.',
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
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb } from "radix-vue";
</script>

<template>
  <ScrollAreaRoot>
    <ScrollAreaViewport />
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a scroll area.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
    {
      name: 'type',
      type: '&quot;auto&quot; | &quot;always&quot; | &quot;scroll&quot; | &quot;hover&quot;',
      typeSimple: 'enum',
      default: '&quot;hover&quot;',
      description: '<span> Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars. <br /> <br /> <Code>&quot;auto&quot;</Code> means that scrollbars are visible when content is overflowing on the corresponding orientation. <br /> <Code>&quot;always&quot;</Code> means that scrollbars are always visible regardless of whether the content is overflowing. <br /> <Code>&quot;scroll&quot;</Code> means that scrollbars are visible when the user is scrolling along its corresponding orientation. <br /> <Code>&quot;hover&quot;</Code> when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.</span>',
    },
    {
      name: 'scrollHideDelay',
      type: 'number',
      default: '600',
      description: '<span> If <Code>type</Code> is set to either <Code>&quot;scroll&quot;</Code> or <Code>&quot;hover&quot;</Code>, this prop determines the length of time, in milliseconds, before the scrollbars are hidden after the user stops interacting with scrollbars.</span>',
    },
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      description: '<span> The reading direction of the scroll area. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.</span>',
    },
  ]"
/>

### Viewport

The viewport area of the scroll area.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

### Scrollbar

The vertical scrollbar. Add a second `Scrollbar` with an `orientation` prop to enable horizontal scrolling.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
    {
      name: 'orientation',
      required: false,
      type: '&quot;horizontal&quot; | &quot;vertical&quot;',
      typeSimple: 'enum',
      default: 'vertical',
      description: 'The orientation of the scrollbar',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['visible', 'hidden'],
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Thumb

The thumb to be used in `ScrollAreaScrollbar`.

<PropsTable
  :data="[
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
      attribute: '[data-state]',
      values: ['visible', 'hidden'],
    },
  ]"
/>

### Corner

The corner where both vertical and horizontal scrollbars meet.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

## Accessibility

In most cases, it's best to rely on native scrolling and work with the customization options available in CSS. When that isn't enough, `ScrollArea` provides additional customizability while maintaining the browser's native scroll behavior (as well as accessibility features, like keyboard scrolling).

### Keyboard Interactions

Scrolling via keyboard is supported by default because the component relies on native scrolling. Specific keyboard interactions may differ between platforms, so we do not specify them here or add specific event listeners to handle scrolling via key events.
