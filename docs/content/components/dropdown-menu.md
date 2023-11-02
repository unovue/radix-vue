---

title: Dropdown Menu
description: Displays a menu to the user—such as a set of actions or functions—triggered by a button.
name: dropdown-menu
aria: https://www.w3.org/WAI/ARIA/apg/patterns/menubutton
---



# DropdownMenu

<Description>
Displays a menu to the user—such as a set of actions or functions—triggered by a button.
</Description>

<ComponentPreview name="DropdownMenu" />


## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Supports submenus with configurable reading direction.',
    'Supports items, labels, groups of items.',
    'Supports checkable items (single or multiple) with optional indeterminate state.',
    'Supports modal and non-modal modes.',
    'Customize side, alignment, offsets, collision handling.',
    'Optionally render a pointing arrow.',
    'Focus is fully managed.',
    'Full keyboard navigation.',
    'Typeahead support.',
    'Dismissing and layering behavior is highly customizable.',
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
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from 'radix-vue'
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger />

    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuLabel />
        <DropdownMenuItem />

        <DropdownMenuGroup>
          <DropdownMenuItem />
        </DropdownMenuGroup>

        <DropdownMenuCheckboxItem>
          <DropdownMenuItemIndicator />
        </DropdownMenuCheckboxItem>

        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem>
            <DropdownMenuItemIndicator />
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger />
          <DropdownMenuPortal>
            <DropdownMenuSubContent />
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />
        <DropdownMenuArrow />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a dropdown menu.

<PropsTable
  :data="[
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: 'The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.'
    },
    {
      name: 'open',
      type: 'boolean',
      description: 'The controlled open state of the dropdown menu. Must be used in conjunction with <Code>onOpenChange</Code>.'
    },
    {
      name: 'modal',
      required: false,
      type: 'boolean',
      default: 'true',
      description: 'The modality of the dropdown menu. When set to <Code>true</Code>, interaction with outside elements will be disabled and only menu content will be visible to screen readers.'
    },
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      description: 'The reading direction of submenus when applicable. If omitted, inherits globally from <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading mode.'
    },
  ]"
/>

<EmitsTable 
  :data="[
    {
      name: '@update:open',
      type: '(open: boolean) => void',
      description: 'Event handler called when the open state of the dropdown menu changes.'
    },
  ]" 
/>

### Trigger

The button that toggles the dropdown menu. By default, the `DropdownMenuContent` will position itself against the trigger.

<PropsTable
  :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'button',
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
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
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

The component that pops out when the dropdown menu is open.

<PropsTable
  :data="[
    {
      name: 'loop',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'When <Code>true</Code>, keyboard navigation will loop from last item to first, and vice versa.'
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description: 'Used to force mounting when more control is needed. Useful when controlling animation with Vue.js animation libraries. It inherits from <Code>DropdownMenuPortal</Code>.'
    },
    {
      name: 'side',
      type: '&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;',
      typeSimple: 'enum',
      default: '&quot;bottom&quot;',
      description: 'The preferred side of the trigger to render against when open. Will be reversed when collisions occur and <Code>avoidCollisions</Code> is enabled.'
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '0',
      description: 'The distance in pixels from the trigger.'
    },
    {
      name: 'align',
      type: '&quot;start&quot; | &quot;center&quot; | &quot;end&quot;',
      typeSimple: 'enum',
      default: '&quot;center&quot;',
      description: 'The preferred alignment against the trigger. May change when collisions occur.'
    },
    {
      name: 'alignOffset',
      type: 'number',
      default: '0',
      description: 'An offset in pixels from the <Code>&quot;start&quot;</Code> or <Code>&quot;end&quot;</Code> alignment options.'
    },
    {
      name: 'avoidCollisions',
      type: 'boolean',
      default: 'true',
      description: 'When <Code>true</Code>, overrides the <Code>side</Code> and <Code>align</Code> preferences to prevent collisions with boundary edges.'
    },
    {
      name: 'collisionBoundary',
      type: 'Element | null | Array<Element | null>',
      typeSimple: 'Boundary',
      default: '[]',
      description: 'The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.'
    },
    {
      name: 'collisionPadding',
      type: 'number | Partial<Record<Side, number>>',
      typeSimple: 'number | Padding',
      default: '0',
      description: 'The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: <Code>{ top: 20, left: 20 }</Code>.'
    },
    {
      name: 'arrowPadding',
      type: 'number',
      default: '0',
      description: 'The padding between the arrow and the edges of the content. If your content has <Code>border-radius</Code>, this will prevent it from overflowing the corners.'
    },
    {
      name: 'sticky',
      type: '&quot;partial&quot; | &quot;always&quot;',
      typeSimple: 'enum',
      default: '&quot;partial&quot;',
      description: 'The sticky behavior on the align axis. <Code>&quot;partial&quot;</Code> will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst <Code>&quot;always&quot;</Code> will keep the content in the boundary regardless.'
    },
    {
      name: 'hideWhenDetached',
      type: 'boolean',
      default: 'false',
      description: 'Whether to hide the content when the trigger becomes fully occluded.'
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
      name: '@closeAutoFocus',
      type: '(event: Event) => void',
      description: 'Event handler called when focus moves to the trigger after closing. It can be prevented by calling <Code>event.preventDefault</Code>.'
    }, 
    {
    name: '@escapeKeyDown',
    type: '(event: KeyboardEvent) => void',
      description: `
        <span>
          Event handler called when the escape key is down. It can be prevented by calling <Code>event.preventDefault</Code>.
        </span>
      `,
    },
    {
      name: '@pointerDownOutside',
      type: '(event: PointerDownOutsideEvent) => void',
      description: `
        <span>
          Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.
        </span>
      `,
    },
    {
      name: '@focusOutside',
      type: '(event: FocusOutsideEvent) => void',
      description: `
        <span>
          Event handler called when focus moves outside the bounds of the
          component. It can be prevented by calling <Code>event.preventDefault</Code>.
        </span>
      `,
    },
    {
      name: '@interactOutside',
      type: '(event: FocusEvent | MouseEvent | TouchEvent) => void',
      description: `
        <span>
          Event handler called when an interaction (pointer or focus event)
          happens outside the bounds of the component. It can be prevented by
          calling <Code>event.preventDefault</Code>.
        </span>
      `,
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
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

<CssVariablesTable
  :data="[
    {
      cssVariable: '--radix-dropdown-menu-content-transform-origin',
      description: 'The <Code>transform-origin</Code> computed from the content and arrow positions/offsets'
    },
    {
      cssVariable: '--radix-dropdown-menu-content-available-width',
      description: 'The remaining width between the trigger and the boundary edge'
    },
    {
      cssVariable: '--radix-dropdown-menu-content-available-height',
      description: 'The remaining height between the trigger and the boundary edge'
    },
    {
      cssVariable: '--radix-dropdown-menu-trigger-width',
      description: 'The width of the trigger',
    },
    {
      cssVariable: '--radix-dropdown-menu-trigger-height',
      description: 'The height of the trigger',
    },
  ]"
/>

### Arrow

An optional arrow element to render alongside the dropdown menu. This can be used to help visually link the trigger with the `DropdownMenuContent`. Must be rendered inside `DropdownMenuContent`.

<PropsTable
  :data="[
    {
      name: 'width',
      type: 'number',
      default: 10,
      description: 'The width of the arrow in pixels.',
    },
    {
      name: 'height',
      type: 'number',
      default: 5,
      description: 'The height of the arrow in pixels.',
    },
    {
      name: 'as',
      type: 'string | Component',
      default: 'svg',
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

### Item

The component that contains the dropdown menu items.

<PropsTable
  :data="[
    {
      name: 'disabled',
      type: 'boolean',
      description: 'When <Code>true</Code>, prevents the user from interacting with the item.',
    },
    {
      name: 'textValue',
      type: 'string',
      description: 'Optional text used for typeahead purposes. By default the typeahead behavior will use the <Code>.textContent</Code> of the item. Use this when the content is complex, or you have non-textual content inside.',
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
      name: '@select',
      type: '(event: Event) => void',
      description: 'Event handler called when the user selects an item (via mouse or keyboard). Calling <Code>event.preventDefault</Code> in this handler will prevent the dropdown menu from closing when selecting that item.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
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

### Group

Used to group multiple `DropdownMenuItem`s.

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

### Label

Used to render a label. It won't be focusable using arrow keys.

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

### CheckboxItem

An item that can be controlled and rendered like a checkbox.

<PropsTable
  :data="[
    {
      name: 'checked',
      type: `boolean | 'indeterminate'`,
      description: 'The controlled checked state of the item. Must be used in conjunction with <Code>onCheckedChange</Code>.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'When <Code>true</Code>, prevents the user from interacting with the item.',
    }, 
    {
      name: 'textValue',
      type: 'string',
      description: 'Optional text used for typeahead purposes. By default the typeahead behavior will use the <Code>.textContent</Code> of the item. Use this when the content is complex, or you have non-textual content inside.',
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
      name: '@update:checked',
      type: `(checked: boolean) => void`,
      description: 'Event handler called when the checked state changes.',
    },
    {
      name: '@select',
      type: '(event: Event) => void',
      description: 'Event handler called when the user selects an item (via mouse or keyboard). Calling <Code>event.preventDefault</Code> in this handler will prevent the dropdown menu from closing when selecting that item.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['checked', 'unchecked', 'indeterminate'],
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

### RadioGroup

Used to group multiple `DropdownMenuRadioItem`s.

<PropsTable
  :data="[
    {
      name: 'modelValue',
      type: 'string',
      description: 'The value of the selected item in the group.',
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
      type: '(value: string) => void',
      description: 'Event handler called when the value changes.',
    },
  ]"
/>

### RadioItem

An item that can be controlled and rendered like a radio.

<PropsTable
  :data="[
    {
      name: 'value',
      type: 'string',
      required: true,
      description: 'The unique value of the item.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'When <Code>true</Code>, prevents the user from interacting with the item.',
    },
    {
      name: 'textValue',
      type: 'string',
      description: 'Optional text used for typeahead purposes. By default the typeahead behavior will use the <Code>.textContent</Code> of the item. Use this when the content is complex, or you have non-textual content inside.',
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
      name: '@select',
      type: '(event: Event) => void',
      description: 'Event handler called when the user selects an item (via mouse or keyboard). Calling <Code>event.preventDefault</Code> in this handler will prevent the dropdown menu from closing when selecting that item.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['checked', 'unchecked', 'indeterminate'],
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

Renders when the parent `DropdownMenuCheckboxItem` or `DropdownMenuRadioItem` is checked. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

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
    {
      name: 'forceMount',
      type: 'boolean',
      description: 'Used to force mounting when more control is needed. Useful when controlling animation with Vue.js animation libraries.',
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['checked', 'unchecked', 'indeterminate'],
    },
  ]"
/>

### Separator

Used to visually separate items in the dropdown menu.

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

### Sub

Contains all the parts of a submenu.

<PropsTable
  :data="[
    {
      name: 'open',
      type: 'boolean',
      description: 'The controlled open state of the submenu. Must be used in conjunction with <Code>onOpenChange</Code>.',
    },
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: 'The open state of the submenu when it is initially rendered. Use when you do not need to control its open state.',
    },
  ]"
/>

<EmitsTable
  :data="[
    {
      name: '@update:open',
      type: '(open: boolean) => void',
      description: 'Event handler called when the open state of the submenu changes.',
    },
  ]"
/>

### SubTrigger

An item that opens a submenu. Must be rendered inside `DropdownMenuSub`.

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
    {
      name: 'disabled',
      type: 'boolean',
      description: `
        <span>
          When <Code>true</Code>, prevents the user from interacting with the
          item.
        </span>
      `,
    },
    {
      name: 'textValue',
      type: 'string',
      description: `
        <span>
          Optional text used for typeahead purposes. By default the typeahead
          behavior will use the <Code>.textContent</Code> of the item. Use this
          when the content is complex, or you have non-textual content inside.
        </span>
      `,
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
      attribute: '[data-highlighted]',
      values: 'Present when highlighted',
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

<CssVariablesTable
  :data="[
    {
      cssVariable: '--radix-dropdown-menu-content-transform-origin',
      description: 'The <Code>transform-origin</Code> computed from the content and arrow positions/offsets',
    },
    {
      cssVariable: '--radix-dropdown-menu-content-available-width',
      description: `
        The remaining width between the trigger and the boundary edge
      `,
    },
    {
      cssVariable: '--radix-dropdown-menu-content-available-height',
      description: 'The remaining height between the trigger and the boundary edge',
    },
    {
      cssVariable: '--radix-dropdown-menu-trigger-width',
      description: 'The width of the trigger',
    },
    {
      cssVariable: '--radix-dropdown-menu-trigger-height',
      description: 'The height of the trigger'
    },
  ]"
/>

### SubContent

The component that pops out when a submenu is open. Must be rendered inside `DropdownMenuSub`.

<PropsTable
  :data="[
    {
      name: 'loop',
      required: false,
      type: 'boolean',
      default: 'false',
      description: `
        <span>
          When <Code>true</Code>, keyboard navigation will loop from last item
          to first, and vice versa.
        </span>
      `,
    }, 
    {
      name: 'forceMount',
      type: 'boolean',
      description: `
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with Vue.js animation libraries. It inherits from{' '}
          <Code>DropdownMenuPortal</Code>.
        </span>
      `,
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '0',
      description: `
        <span>The distance in pixels from the trigger.</span>
      `,
    },
    {
      name: 'alignOffset',
      type: 'number',
      default: '0',
      description: `
        <span>
          An offset in pixels from the <Code>&quot;start&quot;</Code> or <Code>&quot;end&quot;</Code> alignment options.
        </span>
      `,
    },
    {
      name: 'avoidCollisions',
      type: 'boolean',
      default: 'true',
      description: `
        <span>
          When <Code>true</Code>, overrides the <Code>side</Code> and
          <Code>align</Code> preferences to prevent collisions with boundary edges.
        </span>
      `,
    },
    {
      name: 'collisionBoundary',
      type: 'Element | null | Array<Element | null>',
      typeSimple: 'Boundary',
      default: '[]',
      description: `
        <span>
          The element used as the collision boundary. By default this is the
          viewport, though you can provide additional element(s) to be included
          in this check.
        </span>
      `,
    },
    {
      name: 'collisionPadding',
      type: 'number | Partial<Record<Side, number>>',
      typeSimple: 'number | Padding',
      default: '0',
      description: `
        <span>
          The distance in pixels from the boundary edges where collision
          detection should occur. Accepts a number (same for all sides), or a
          partial padding object, for example: <Code>{ top: 20, left: 20 }</Code>
          .
        </span>
      `,
    },
    {
      name: 'arrowPadding',
      type: 'number',
      default: '0',
      description: `
        <span>
          The padding between the arrow and the edges of the content. If your
          content has <Code>border-radius</Code>, this will prevent it from
          overflowing the corners.
        </span>
      `,
    },
    {
      name: 'sticky',
      type: '&quot;partial&quot; | &quot;always&quot;',
      typeSimple: 'enum',
      default: '&quot;partial&quot;',
      description: `
        <span>
          The sticky behavior on the align axis. <Code>&quot;partial&quot;</Code> will
          keep the content in the boundary as long as the trigger is at least
          partially in the boundary whilst <Code>&quot;always&quot;</Code> will keep the
          content in the boundary regardless.
        </span>
      `,
    },
    {
      name: 'hideWhenDetached',
      type: 'boolean',
      default: 'false',
      description: `
        <span>
          Whether to hide the content when the trigger becomes fully occluded.
        </span>
      `,
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
    name: '@escapeKeyDown',
    type: '(event: KeyboardEvent) => void',
      description: `
        <span>
          Event handler called when the escape key is down. It can be prevented by calling <Code>event.preventDefault</Code>.
        </span>
      `,
    },
    {
      name: '@pointerDownOutside',
      type: '(event: PointerDownOutsideEvent) => void',
      description: `
        <span>
          Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.
        </span>
      `,
    },
    {
      name: '@focusOutside',
      type: '(event: FocusOutsideEvent) => void',
      description: `
        <span>
          Event handler called when focus moves outside the bounds of the
          component. It can be prevented by calling <Code>event.preventDefault</Code>.
        </span>
      `,
    },
    {
      name: '@interactOutside',
      type: '(event: FocusEvent | MouseEvent | TouchEvent) => void',
      description: `
        <span>
          Event handler called when an interaction (pointer or focus event)
          happens outside the bounds of the component. It can be prevented by
          calling <Code>event.preventDefault</Code>.
        </span>
      `,
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
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

## Examples

### With submenus

You can create submenus by using `DropdownMenuSub` in combination with its parts.

```vue line=9-11,24-33
<script setup lang="ts">
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from 'radix-vue'
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>…</DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuItem>…</DropdownMenuItem>
        <DropdownMenuItem>…</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Sub menu →</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub menu item</DropdownMenuItem>
              <DropdownMenuItem>Sub menu item</DropdownMenuItem>
              <DropdownMenuArrow />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>…</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

### With disabled items

You can add special styles to disabled items via the `data-disabled` attribute.

```vue line=16
<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>…</DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuItem class="DropdownMenuItem" disabled>
          …
        </DropdownMenuItem>
        <DropdownMenuItem class="DropdownMenuItem">
          …
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

```css line=2
/* styles.css */
.DropdownMenuItem[data-disabled] {
  color: gainsboro;
}
```

### With separators

Use the `Separator` part to add a separator between items.

```vue line=7 ,18,20
<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'radix-vue'
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>…</DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuItem>…</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>…</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>…</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

### With labels

Use the `Label` part to help label a section.

```vue line=5,17
<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>…</DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuLabel>Label</DropdownMenuLabel>
        <DropdownMenuItem>…</DropdownMenuItem>
        <DropdownMenuItem>…</DropdownMenuItem>
        <DropdownMenuItem>…</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

### With checkbox items

Use the `CheckboxItem` part to add an item that can be checked.

```vue line=5 ,26-31
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'radix-vue'

const checked = ref(false)
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>…</DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuItem>…</DropdownMenuItem>
        <DropdownMenuItem>…</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem v-model:checked="checked">
          <DropdownMenuItemIndicator>
            <Icon icon="radix-icons:check" />
          </DropdownMenuItemIndicator>
          Checkbox item
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

### With radio items

Use the `RadioGroup` and `RadioItem` parts to add an item that can be checked amongst others.

```vue line=8-9,22-41
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  DropdownMenuContent,
  DropdownMenuItemIndicator,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'

const color = ref(false)
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>…</DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup v-model="color">
          <DropdownMenuRadioItem value="red">
            <DropdownMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </DropdownMenuItemIndicator>
            Red
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="blue">
            <DropdownMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </DropdownMenuItemIndicator>
            Blue
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="green">
            <DropdownMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </DropdownMenuItemIndicator>
            Green
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

### With complex items

You can add extra decorative elements in the `Item` parts, such as images.

```vue line=17,21
<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>…</DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <img src="…">
          Adolfo Hess
        </DropdownMenuItem>
        <DropdownMenuItem>
          <img src="…">
          Miyah Myles
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

### Constrain the content/sub-content size

You may want to constrain the width of the content (or sub-content) so that it matches the trigger (or sub-trigger) width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-dropdown-menu-trigger-width` and `--radix-dropdown-menu-content-available-height` to support this. Use them to constrain the content dimensions.

```vue line=9
<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'radix-vue'
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>…</DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent class="DropdownMenuContent" :side-offset="5">
        …
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

```css line=3-4
/* styles.css */
.DropdownMenuContent {
  width: var(--radix-dropdown-menu-trigger-width);
  max-height: var(--radix-dropdown-menu-content-available-height);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-dropdown-menu-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```vue line=9
<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'radix-vue'
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>…</DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent class="DropdownMenuContent">
        …
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

```css line=3
/* styles.css */
.DropdownMenuContent {
  transform-origin: var(--radix-dropdown-menu-content-transform-origin);
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Collision-aware animations

We expose `data-side` and `data-align` attributes. Their values will change at runtime to reflect collisions. Use them to create collision and direction-aware animations.

```vue line=9
<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'radix-vue'
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>…</DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent class="DropdownMenuContent">
        …
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
```

```css line=6-11
/* styles.css */
.DropdownMenuContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.DropdownMenuContent[data-side="top"] {
  animation-name: slideUp;
}
.DropdownMenuContent[data-side="bottom"] {
  animation-name: slideDown;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Accessibility

Adheres to the [Menu Button WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubutton) and uses [roving tabindex](https://www.w3.org/WAI/ARIA/apg/patterns/kbd_roving_tabindex) to manage focus movement among menu items.

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Space'],
      description: `
        <span>
          When focus is on <Code>DropdownMenuTrigger</Code>, opens the dropdown
          menu and focuses the first item.
          <br />
          When focus is on an item, activates the focused item.
        </span>
      `,
    },
    {
      keys: ['Enter'],
      description: `
        <span>
          When focus is on <Code>DropdownMenuTrigger</Code>, opens the dropdown
          menu and focuses the first item.
          <br />
          When focus is on an item, activates the focused item.
        </span>
      `,
    },
    {
      keys: ['ArrowDown'],
      description: `
        <span>
          When focus is on <Code>DropdownMenuTrigger</Code>, opens the dropdown
          menu.
          <br />
          When focus is on an item, moves focus to the next item.
        </span>
      `,
    },
    {
      keys: ['ArrowUp'],
      description: `
        <span>When focus is on an item, moves focus to the previous item.</span>
      `,
    },
    {
      keys: ['ArrowRight', 'ArrowLeft'],
      description: `
        <span>
          When focus is on <Code>DropdownMenuSubTrigger</Code>, opens or closes
          the submenu depending on reading direction.
        </span>
      `,
    },
    {
      keys: ['Esc'],
      description: `
        <span>
          Closes the dropdown menu and moves focus to{' '}
          <Code>DropdownMenuTrigger</Code>.
        </span>
      `,
    },
  ]"
/>
 

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract the arrow and item indicators

This example abstracts the `DropdownMenuArrow` and `DropdownMenuItemIndicator` parts. It also wraps implementation details for `CheckboxItem` and `RadioItem`.

#### Usage

```vue
<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './your-dropdown-menu'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>DropdownMenu trigger</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Item</DropdownMenuItem>
      <DropdownMenuLabel>Label</DropdownMenuLabel>
      <DropdownMenuGroup>Group</DropdownMenuGroup>
      <DropdownMenuCheckboxItem>CheckboxItem</DropdownMenuCheckboxItem>
      <DropdownMenuSeparator>Separator</DropdownMenuSeparator>
      <DropdownMenuRadioGroup>
        <DropdownMenuRadioItem>RadioItem</DropdownMenuRadioItem>
        <DropdownMenuRadioItem>RadioItem</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

#### Implementation


```ts
// your-dropdown-menu.ts
export { default as DropdownMenuContent } from 'DropdownMenuContent.vue'
export { default as DropdownMenuCheckboxItem } from 'DropdownMenuCheckboxItem.vue'
export { default as DropdownMenuRadioItem } from 'DropdownMenuRadioItem.vue'

export {
  DropdownMenuRoot as DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator
} from 'radix-vue'
```



```vue
<!-- DropdownMenuContent.vue -->
<script setup lang="ts">
import { DropdownMenuContent, type DropdownMenuContentEmits, type DropdownMenuContentProps, DropdownMenuPortal, useForwardPropsEmits, } from 'radix-vue'

const props = defineProps<DropdownMenuContentProps>()
const emits = defineEmits<DropdownMenuContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent v-bind="forwarded">
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
```


```vue
<!-- DropdownMenuCheckboxItem.vue -->
<script setup lang="ts">
import { DropdownMenuCheckboxItem, type DropdownMenuCheckboxItemEmits, type DropdownMenuCheckboxItemProps, DropdownMenuItemIndicator, useForwardPropsEmits } from 'radix-vue'
import { CheckIcon } from '@radix-icons/vue'

const props = defineProps<DropdownMenuCheckboxItemProps>()
const emits = defineEmits<DropdownMenuCheckboxItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuCheckboxItem v-bind="forwarded">
    <span>
      <DropdownMenuItemIndicator>
        <CheckIcon />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItem>
</template>
```
 
```vue
<!-- DropdownMenuRadioItem.vue -->
<script setup lang="ts">
import { DropdownMenuItemIndicator, DropdownMenuRadioItem, type DropdownMenuRadioItemEmits, type DropdownMenuRadioItemProps, useForwardPropsEmits, } from 'radix-vue'
import { DotFilledIcon } from '@radix-icons/vue'

const props = defineProps<DropdownMenuRadioItemProps>()
const emits = defineEmits<DropdownMenuRadioItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRadioItem v-bind="forwarded">
    <span>
      <DropdownMenuItemIndicator>
        <DotFilledIcon />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
```
