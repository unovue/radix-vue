---
outline: deep
metaTitle: Combobox
metaDescription: Choose from a list of suggested values with full keyboard support.
name: combobox
badge: alpha
aria: https://www.w3.org/WAI/ARIA/apg/patterns/listbox
---

<script setup> 
import DemoCombobox from '../../components/demo/Combobox/index.vue' 
</script>


# Combobox


<Description class="mb-4">
Choose from a list of suggested values with full keyboard support.
</Description>

<Badge class="mb-4">Alpha</Badge>

<HeroContainer folder="Combobox">
<DemoCombobox />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Combobox/index.vue

</div>
<div filename="tailwind.config.js">

<<< ../../components/demo/Combobox/tailwind.config.js

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Offers 2 positioning modes.',
    'Supports items, labels, groups of items.',
    'Focus is fully managed.',
    'Full keyboard navigation.',
    'Supports custom placeholder.',
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
<script setup lang="ts">
import {
  ComboboxCancel,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxHeader,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxViewport,
} from 'radix-vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxHeader>
      <ComboboxInput />
      <ComboboxTrigger />
      <ComboboxCancel />
    </ComboboxHeader>

    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxViewport>
          <ComboboxEmpty />

          <ComboboxItem>
            <ComboboxItemIndicator />
          </ComboboxItem>

          <ComboboxGroup>
            <ComboboxLabel />
            <ComboboxItem>
              <ComboboxItemIndicator />
            </ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a Combobox

<PropsTable
  :data="[
    {
      name: 'defaultValue',
      required: false,
      type: 'string | string[] | object | object[]',
      description: 'The value of the combobox when initially rendered. Use when you do not need to control the state of the Combobox',
    },
    {
      name: 'modelValue',
      required: false,
      type: 'string | string[] | object | object[]',
      description: '<span> The controlled value of the Combobox Should be binded-with with <Code>v-model</Code>. </span>',
    },
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: 'The open state of the combobox when it is initially rendered. Use when you do not need to control its open state.',
    },
    {
      name: 'open',
      type: 'boolean',
      description: '<span> The controlled open state of the Combobox Must be binded-with with <Code>v-model</Code>. </span>',
    },
    {
      name: 'searchTerm',
      type: 'string',
      description: '<span> The controlled search term of the Combobox Should be binded-with with <Code>v-model:searchTerm</Code>. </span>',
    },
    // {
    //   name: 'dir',
    //   required: false,
    //   type: '&quot;ltr&quot; | &quot;rtl&quot;',
    //   typeSimple: 'enum',
    //   description: '<span> The reading direction of the combobox when applicable. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode. </span>',
    // },
    // {
    //   name: 'name',
    //   type: 'string',
    //   description:
    //     'The name of the Combobox Submitted with its owning form as part of a name/value pair.',
    // },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with Combobox </span>',
    },
    // {
    //   name: 'required',
    //   type: 'boolean',
    //   description: '<span> When <Code>true</Code>, indicates that the user must combobox a value before the owning form can be submitted. </span>',
    // },
  ]"
/>

<EmitsTable 
  :data="[
    {
      name: '@update:modelValue',
      required: false,
      type: '(value: string) => void',
      description: 'Event handler called when the value changes.',
    },
    {
      name: '@update:open',
      type: '(open: boolean) => void',
      description: 'Event handler called when the open state of the combobox changes.'
    },
    {
      name: '@update:searchTerm',
      type: '(value: string) => void',
      description: 'Event handler called when the searchTerm state of the combobox changes.'
    },
  ]" 
/>


### Header

The header section of Combobox. Used as an anchor if you set `ComboboxContent`'s position to `popper`.

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


### Input 

The input component to search through the combobox items.


### Trigger

The button that toggles the Combobox Content.

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

<!-- <DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
    {
      attribute: '[data-placeholder]',
      values: 'Present when has placeholder',
    },
  ]"
/> -->
  
### Cancel

The button that clears the search term.

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


### Portal

When used, portals the content part into the `body`.

<PropsTable
  :data="[
    {
      name: 'to',
      type:  'string | HTMLElement',
      default: 'body',
      description: 'Vue native teleport component props. (to)',
    },
  ]"
/>

### Content

The component that pops out when the combobox is open.
 
<PropsTable
  :data="[
    {
      name: 'position',
      type: '&quot;inline&quot; | &quot;popper&quot;',
      typeSimple: 'enum',
      default: '&quot;inline&quot;',
      description: '<span> The positioning mode to use, <Code>inline</Code> is the default and behaves similarly to a native MacOS menu by positioning content relative to the active item. <Code>popper</Code> positions content in the same way as our other primitives, for example <Code>Popover</Code> or <Code>DropdownMenu</Code>. </span>',
    },
    {
      name: 'bodyLock',
      type: 'boolean',
      default: 'false',
      description: 'The document.body will be lock, and scrolling will be disabled.',
    },
    {
      name: 'disableOutsidePointerEvents',
      type: 'boolean',
      default: 'false',
      description: 'The hover/focus/click interactions will be disabled on elements outside the Content',
    },
    {
      name: 'side',
      type: '&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;',
      typeSimple: 'enum',
      default: '&quot;bottom&quot;',
      description: '<span> The preferred side of the anchor to render against when open. Will be reversed when collisions occur and <Code>avoidCollisions</Code> is enabled. Only available when <Code>position</Code> is set to <Code>popper</Code>. </span>',
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '0',
      description: '<span> The distance in pixels from the anchor. Only available when <Code>position</Code> is set to <Code>popper</Code>. </span>',
    },
    {
      name: 'align',
      type: '&quot;start&quot; | &quot;center&quot; | &quot;end&quot;',
      typeSimple: 'enum',
      default: '&quot;start&quot;',
      description: '<span> The preferred alignment against the anchor. May change when collisions occur. Only available when <Code>position</Code> is set to <Code>popper</Code>. </span>',
    },
    {
      name: 'alignOffset',
      type: 'number',
      default: '0',
      description: '<span> An offset in pixels from the <Code>&quot;start&quot;</Code> or <Code>&quot;end&quot;</Code> alignment options. Only available when <Code>position</Code> is set to <Code>popper</Code>. </span>',
    },
    {
      name: 'avoidCollisions',
      type: 'boolean',
      default: 'true',
      description: '<span> When <Code>true</Code>, overrides the <Code>side</Code> and <Code>align</Code> preferences to prevent collisions with boundary edges. Only available when <Code>position</Code> is set to <Code>   popper </Code>. </span>',
    },
    {
      name: 'collisionBoundary',
      type: 'Element | null | Array<Element | null>',
      typeSimple: 'Boundary',
      default: '[]',
      description: '<span> The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check. Only available when <Code>position</Code> is set to <Code>popper</Code>. </span>',
    },
    {
      name: 'collisionPadding',
      type: 'number | Partial<Record<Side, number>>',
      typeSimple: 'number | Padding',
      default: '10',
      description: '<span> The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: <Code>top: 20, left: 20x</Code> . Only available when <Code>position</Code> is set to <Code>   popper </Code>. </span>',
    },
    {
      name: 'arrowPadding',
      type: 'number',
      default: '0',
      description: '<span> The padding between the arrow and the edges of the content. If your content has <Code>border-radius</Code>, this will prevent it from overflowing the corners. Only available when <Code>position</Code> is set to <Code>popper</Code>. </span>',
    },
    {
      name: 'sticky',
      type: '&quot;partial&quot; | &quot;always&quot;',
      typeSimple: 'enum',
      default: '&quot;partial&quot;',
      description: '<span> The sticky behavior on the align axis. <Code>&quot;partial&quot;</Code> will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst <Code>&quot;always&quot;</Code> will keep the content in the boundary regardless. Only available when <Code>position</Code> is set to <Code>popper</Code>. </span>',
    },
    {
      name: 'hideWhenDetached',
      type: 'boolean',
      default: 'false',
      description: '<span> Whether to hide the content when the trigger becomes fully occluded. Only available when <Code>position</Code> is set to <Code>popper</Code>. </span>',
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
      name: '@closeAutoFocus',
      type: '(event: Event) => void',
      description: '<span> Event handler called when focus moves to the trigger after closing. It can be prevented by calling <Code>event.preventDefault</Code>. </span>',
    },
    {
      name: '@escapeKeyDown',
      type: '(event: KeyboardEvent) => void',
      description: '<span> Event handler called when the escape key is down. It can be prevented by calling <Code>event.preventDefault</Code>. </span>',
    },
    {
      name: '@pointerDownOutside',
      type: '(event: PointerDownOutsideEvent) => void',
      description: '<span> Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>. </span>',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-side]',
      values: ['left', 'right', 'bottom', 'top'],
    },
    {
      attribute: '[data-align]',
      values: ['start', 'end', 'center'],
    },
  ]"
/>

<CssVariablesTable
  :data="[
    {
      cssVariable: '--radix-combobox-content-transform-origin',
      description: 'The <Code>transform-origin</Code> computed from the content and arrow positions/offsets. Only present when <Code>position=&quot;popper&quot;</Code>.',
    },
    {
      cssVariable: '--radix-combobox-content-available-width',
      description: 'The remaining width between the trigger and the boundary edge. Only present when <Code>position=&quot;popper&quot;</Code>.',
    },
    {
      cssVariable: '--radix-combobox-content-available-height',
      description: 'The remaining height between the trigger and the boundary edge. Only present when <Code>position=&quot;popper&quot;</Code>.',
    },
    {
      cssVariable: '--radix-combobox-trigger-width',
      description: 'The width of the trigger. Only present when <Code>position=&quot;popper&quot;</Code>.',
    },
    {
      cssVariable: '--radix-combobox-trigger-height',
      description: 'The height of the trigger. Only present when <Code>position=&quot;popper&quot;</Code>.',
    },
  ]"
/>

### Viewport

The scrolling viewport that contains all of the items.

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

### Item

The component that contains the combobox items.

<PropsTable
  :data="[
    {
      name: 'value',
      required: true,
      type: 'string',
      description: '<span> The value given as data when submitted with a <Code>name</Code>. </span>',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: '<span> When <Code>true</Code>, prevents the user from interacting with the item. </span>',
    },
    // {
    //   name: 'textValue',
    //   type: 'string',
    //   description: '<span> Optional text used for typeahead purposes. By default the typeahead behavior will use the <Code>.textContent</Code> of the <Code>SelectItemText</Code> part. Use this when the content is complex, or you have non-textual content inside. </span>',
    // },
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
      values: ['checked', 'unchecked'],
    },
    {
      attribute: '[data-highlighted]',
      values: 'Present when highlighted',
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>


### ItemIndicator

Renders when the item is selected. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

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

### Group

Used to group multiple items. use in conjunction with `ComboboxLabel` to ensure good accessibility via automatic labelling.

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

### Label

Used to render the label of a group. It won't be focusable using arrow keys.

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

### Separator

Used to visually separate items in the Select

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

<!-- ### Arrow

An optional arrow element to render alongside the content. This can be used to help visually link the trigger with the `SelectContent`. Must be rendered inside `SelectContent`. Only available when `position` is set to `popper`.

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
      name: 'width',
      type: 'number',
      default: 10,
      description: '<span>The width of the arrow in pixels.</span>',
    },
    {
      name: 'height',
      type: 'number',
      default: 5,
      description: '<span>The height of the arrow in pixels.</span>',
    },
  ]"
/> -->

<!-- ## Accessibility

Adheres to the [Combobox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox).

See the W3C [Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/) example for more information.

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Enter'],
      description: '<span> When focus is on <Code>SelectTrigger</Code>, opens the select and focuses the first item. <br /> When focus is on an item, selects the focused item. </span>',
    },
    {
      keys: ['ArrowDown'],
      description: '<span> When focus is on <Code>SelectTrigger</Code>, opens the Select <br /> When focus is on an item, moves focus to the next item. </span>',
    },
    {
      keys: ['ArrowUp'],
      description: '<span> When focus is on <Code>SelectTrigger</Code>, opens the Select <br /> When focus is on an item, moves focus to the previous item. </span>',
    },
    {
      keys: ['Esc'],
      description: '<span> Closes the select and moves focus to <Code>SelectTrigger</Code>. </span>',
    },
  ]"
/> -->
