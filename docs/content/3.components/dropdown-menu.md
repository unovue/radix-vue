---
metaTitle: Dropdown Menu
metaDescription: Displays a menu to the user—such as a set of actions or functions—triggered by a button.
name: dropdown-menu
aria: https://www.w3.org/WAI/ARIA/apg/patterns/menubutton
---

# Dropdown Menu

<Description>
  Displays a menu to the user—such as a set of actions or functions—triggered by
  a button.
</Description>

<HeroContainer>
  <DropdownMenuDemo />
</HeroContainer>

<HeroCodeBlock folder="DropdownMenu" />

<Highlights
  features={[
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
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-dropdown-menu
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger />

    <DropdownMenu.Portal>
      <DropdownMenu.Content>
        <DropdownMenu.Label />
        <DropdownMenu.Item />

        <DropdownMenu.Group>
          <DropdownMenu.Item />
        </DropdownMenu.Group>

        <DropdownMenu.CheckboxItem>
          <DropdownMenu.ItemIndicator />
        </DropdownMenu.CheckboxItem>

        <DropdownMenu.RadioGroup>
          <DropdownMenu.RadioItem>
            <DropdownMenu.ItemIndicator />
          </DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger />
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent />
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>

        <DropdownMenu.Separator />
        <DropdownMenu.Arrow />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
```

## API Reference

### Root

Contains all the parts of a dropdown menu.

<PropsTable
  data={[
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: (
        <span>
          The open state of the dropdown menu when it is initially rendered. Use
          when you do not need to control its open state.
        </span>
      ),
    },
    {
      name: 'open',
      type: 'boolean',
      description: (
        <span>
          The controlled open state of the dropdown menu. Must be used in
          conjunction with <Code>onOpenChange</Code>.
        </span>
      ),
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the open state of the dropdown menu changes.
        </span>
      ),
    },
    {
      name: 'modal',
      required: false,
      type: 'boolean',
      default: 'true',
      description: (
        <span>
          The modality of the dropdown menu. When set to <Code>true</Code>,
          interaction with outside elements will be disabled and only menu
          content will be visible to screen readers.
        </span>
      ),
    },
    {
      name: 'dir',
      required: false,
      type: '"ltr" | "rtl"',
      typeSimple: 'enum',
      description: (
        <span>
          The reading direction of submenus when applicable. If omitted,
          inherits globally from <Code>DirectionProvider</Code> or assumes LTR
          (left-to-right) reading mode.
        </span>
      ),
    },
  ]}
/>

### Trigger

The button that toggles the dropdown menu. By default, the `DropdownMenu.Content` will position itself against the trigger.

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
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

### Portal

When used, portals the content part into the `body`.

<PropsTable
  data={[
    {
      name: 'forceMount',
      type: 'boolean',
      description: (
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with React animation libraries. If used on this
          part, it will be inherited by <Code>DropdownMenu.Content</Code> and{' '}
          <Code>DropdownMenu.SubContent</Code> respectively.
        </span>
      ),
    },
    {
      name: 'container',
      type: 'HTMLElement',
      default: 'document.body',
      description: 'Specify a container element to portal the content into.',
    },
  ]}
/>

### Content

The component that pops out when the dropdown menu is open.

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
      default: 'false',
      description: (
        <span>
          When <Code>true</Code>, keyboard navigation will loop from last item
          to first, and vice versa.
        </span>
      ),
    },
    {
      name: 'onCloseAutoFocus',
      type: '(event: Event) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when focus moves to the trigger after closing. It
          can be prevented by calling <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'onEscapeKeyDown',
      type: '(event: KeyboardEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the escape key is down. It can be prevented
          by calling <Code>event.preventDefault</Code>
        </span>
      ),
    },
    {
      name: 'onPointerDownOutside',
      type: '(event: PointerDownOutsideEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when a pointer event occurs outside the bounds of
          the component. It can be prevented by calling{' '}
          <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'onFocusOutside',
      type: '(event: FocusOutsideEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when focus moves outside the bounds of the
          component. It can be prevented by calling{' '}
          <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'onInteractOutside',
      type: '(event: PointerDownOutsideEvent | FocusOutsideEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when an interaction (pointer or focus event)
          happens outside the bounds of the component. It can be prevented by
          calling <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description: (
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with React animation libraries. It inherits from{' '}
          <Code>DropdownMenu.Portal</Code>.
        </span>
      ),
    },
    {
      name: 'side',
      type: '"top" | "right" | "bottom" | "left"',
      typeSimple: 'enum',
      default: '"bottom"',
      description: (
        <span>
          The preferred side of the trigger to render against when open. Will be
          reversed when collisions occur and <Code>avoidCollisions</Code> is
          enabled.
        </span>
      ),
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '0',
      description: <span>The distance in pixels from the trigger.</span>,
    },
    {
      name: 'align',
      type: '"start" | "center" | "end"',
      typeSimple: 'enum',
      default: '"center"',
      description: (
        <span>
          The preferred alignment against the trigger. May change when
          collisions occur.
        </span>
      ),
    },
    {
      name: 'alignOffset',
      type: 'number',
      default: '0',
      description: (
        <span>
          An offset in pixels from the <Code>"start"</Code> or{' '}
          <Code>"end"</Code> alignment options.
        </span>
      ),
    },
    {
      name: 'avoidCollisions',
      type: 'boolean',
      default: 'true',
      description: (
        <span>
          When <Code>true</Code>, overrides the <Code>side</Code> and
          <Code>align</Code> preferences to prevent collisions with boundary edges.
        </span>
      ),
    },
    {
      name: 'collisionBoundary',
      type: 'Element | null | Array<Element | null>',
      typeSimple: 'Boundary',
      default: '[]',
      description: (
        <span>
          The element used as the collision boundary. By default this is the
          viewport, though you can provide additional element(s) to be included
          in this check.
        </span>
      ),
    },
    {
      name: 'collisionPadding',
      type: 'number | Partial<Record<Side, number>>',
      typeSimple: 'number | Padding',
      default: '0',
      description: (
        <span>
          The distance in pixels from the boundary edges where collision
          detection should occur. Accepts a number (same for all sides), or a
          partial padding object, for example: <Code>{`{ top: 20, left: 20 }`}</Code>
          .
        </span>
      ),
    },
    {
      name: 'arrowPadding',
      type: 'number',
      default: '0',
      description: (
        <span>
          The padding between the arrow and the edges of the content. If your
          content has <Code>border-radius</Code>, this will prevent it from
          overflowing the corners.
        </span>
      ),
    },
    {
      name: 'sticky',
      type: '"partial" | "always"',
      typeSimple: 'enum',
      default: '"partial"',
      description: (
        <span>
          The sticky behavior on the align axis. <Code>"partial"</Code> will
          keep the content in the boundary as long as the trigger is at least
          partially in the boundary whilst <Code>"always"</Code> will keep the
          content in the boundary regardless.
        </span>
      ),
    },
    {
      name: 'hideWhenDetached',
      type: 'boolean',
      default: 'false',
      description: (
        <span>
          Whether to hide the content when the trigger becomes fully occluded.
        </span>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
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
  ]}
/>

<CssVariablesTable
  data={[
    {
      cssVariable: '--radix-dropdown-menu-content-transform-origin',
      description: (
        <>
          The <Code>transform-origin</Code> computed from the content and arrow
          positions/offsets
        </>
      ),
    },
    {
      cssVariable: '--radix-dropdown-menu-content-available-width',
      description: (
        <>The remaining width between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-dropdown-menu-content-available-height',
      description: (
        <>The remaining height between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-dropdown-menu-trigger-width',
      description: <>The width of the trigger</>,
    },
    {
      cssVariable: '--radix-dropdown-menu-trigger-height',
      description: <>The height of the trigger</>,
    },
  ]}
/>

### Arrow

An optional arrow element to render alongside the dropdown menu. This can be used to help visually link the trigger with the `DropdownMenu.Content`. Must be rendered inside `DropdownMenu.Content`.

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
      name: 'width',
      type: 'number',
      default: 10,
      description: <span>The width of the arrow in pixels.</span>,
    },
    {
      name: 'height',
      type: 'number',
      default: 5,
      description: <span>The height of the arrow in pixels.</span>,
    },
  ]}
/>

### Item

The component that contains the dropdown menu items.

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
      name: 'disabled',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, prevents the user from interacting with the
          item.
        </span>
      ),
    },
    {
      name: 'onSelect',
      type: '(event: Event) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the user selects an item (via mouse or
          keyboard). Calling <Code>event.preventDefault</Code> in this handler
          will prevent the dropdown menu from closing when selecting that item.
        </span>
      ),
    },
    {
      name: 'textValue',
      type: 'string',
      description: (
        <span>
          Optional text used for typeahead purposes. By default the typeahead
          behavior will use the <Code>.textContent</Code> of the item. Use this
          when the content is complex, or you have non-textual content inside.
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
    {
      attribute: '[data-highlighted]',
      values: 'Present when highlighted',
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

### Group

Used to group multiple `DropdownMenu.Item`s.

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

### Label

Used to render a label. It won't be focusable using arrow keys.

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

### CheckboxItem

An item that can be controlled and rendered like a checkbox.

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
      name: 'checked',
      type: `boolean | 'indeterminate'`,
      description: (
        <span>
          The controlled checked state of the item. Must be used in conjunction
          with <Code>onCheckedChange</Code>.
        </span>
      ),
    },
    {
      name: 'onCheckedChange',
      type: `(checked: boolean) => void`,
      typeSimple: 'function',
      description: (
        <span>Event handler called when the checked state changes.</span>
      ),
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
    {
      name: 'onSelect',
      type: '(event: Event) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the user selects an item (via mouse or
          keyboard). Calling <Code>event.preventDefault</Code> in this handler
          will prevent the dropdown menu from closing when selecting that item.
        </span>
      ),
    },
    {
      name: 'textValue',
      type: 'string',
      description: (
        <span>
          Optional text used for typeahead purposes. By default the typeahead
          behavior will use the <Code>.textContent</Code> of the item. Use this
          when the content is complex, or you have non-textual content inside.
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
      attribute: '[data-highlighted]',
      values: 'Present when highlighted',
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

### RadioGroup

Used to group multiple `DropdownMenu.RadioItem`s.

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
      type: 'string',
      description: 'The value of the selected item in the group.',
    },
    {
      name: 'onValueChange',
      type: '(value: string) => void',
      typeSimple: 'function',
      description: 'Event handler called when the value changes.',
    },
  ]}
/>

### RadioItem

An item that can be controlled and rendered like a radio.

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
      type: 'string',
      required: true,
      description: 'The unique value of the item.',
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
    {
      name: 'onSelect',
      type: '(event: Event) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the user selects an item (via mouse or
          keyboard). Calling <Code>event.preventDefault</Code> in this handler
          will prevent the dropdown menu from closing when selecting that item.
        </span>
      ),
    },
    {
      name: 'textValue',
      type: 'string',
      description: (
        <span>
          Optional text used for typeahead purposes. By default the typeahead
          behavior will use the <Code>.textContent</Code> of the item. Use this
          when the content is complex, or you have non-textual content inside.
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
      attribute: '[data-highlighted]',
      values: 'Present when highlighted',
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]}
/>

### ItemIndicator

Renders when the parent `DropdownMenu.CheckboxItem` or `DropdownMenu.RadioItem` is checked. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

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
      values: ['checked', 'unchecked', 'indeterminate'],
    },
  ]}
/>

### Separator

Used to visually separate items in the dropdown menu.

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

### Sub

Contains all the parts of a submenu.

<PropsTable
  data={[
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: (
        <span>
          The open state of the submenu when it is initially rendered. Use when
          you do not need to control its open state.
        </span>
      ),
    },
    {
      name: 'open',
      type: 'boolean',
      description: (
        <span>
          The controlled open state of the submenu. Must be used in conjunction
          with <Code>onOpenChange</Code>.
        </span>
      ),
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the open state of the submenu changes.
        </span>
      ),
    },
  ]}
/>

### SubTrigger

An item that opens a submenu. Must be rendered inside `DropdownMenu.Sub`.

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
      name: 'disabled',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, prevents the user from interacting with the
          item.
        </span>
      ),
    },
    {
      name: 'textValue',
      type: 'string',
      description: (
        <span>
          Optional text used for typeahead purposes. By default the typeahead
          behavior will use the <Code>.textContent</Code> of the item. Use this
          when the content is complex, or you have non-textual content inside.
        </span>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
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
  ]}
/>

<CssVariablesTable
  data={[
    {
      cssVariable: '--radix-dropdown-menu-content-transform-origin',
      description: (
        <>
          The <Code>transform-origin</Code> computed from the content and arrow
          positions/offsets
        </>
      ),
    },
    {
      cssVariable: '--radix-dropdown-menu-content-available-width',
      description: (
        <>The remaining width between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-dropdown-menu-content-available-height',
      description: (
        <>The remaining height between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-dropdown-menu-trigger-width',
      description: <>The width of the trigger</>,
    },
    {
      cssVariable: '--radix-dropdown-menu-trigger-height',
      description: <>The height of the trigger</>,
    },
  ]}
/>

### SubContent

The component that pops out when a submenu is open. Must be rendered inside `DropdownMenu.Sub`.

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
      default: 'false',
      description: (
        <span>
          When <Code>true</Code>, keyboard navigation will loop from last item
          to first, and vice versa.
        </span>
      ),
    },
    {
      name: 'onEscapeKeyDown',
      type: '(event: KeyboardEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the escape key is down. It can be prevented
          by calling <Code>event.preventDefault</Code>
        </span>
      ),
    },
    {
      name: 'onPointerDownOutside',
      type: '(event: PointerDownOutsideEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when a pointer event occurs outside the bounds of
          the component. It can be prevented by calling{' '}
          <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'onFocusOutside',
      type: '(event: FocusOutsideEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when focus moves outside the bounds of the
          component. It can be prevented by calling{' '}
          <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'onInteractOutside',
      type: '(event: PointerDownOutsideEvent | FocusOutsideEvent) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when an interaction (pointer or focus event)
          happens outside the bounds of the component. It can be prevented by
          calling <Code>event.preventDefault</Code>.
        </span>
      ),
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description: (
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with React animation libraries. It inherits from{' '}
          <Code>DropdownMenu.Portal</Code>.
        </span>
      ),
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '0',
      description: <span>The distance in pixels from the trigger.</span>,
    },
    {
      name: 'alignOffset',
      type: 'number',
      default: '0',
      description: (
        <span>
          An offset in pixels from the <Code>"start"</Code> or{' '}
          <Code>"end"</Code> alignment options.
        </span>
      ),
    },
    {
      name: 'avoidCollisions',
      type: 'boolean',
      default: 'true',
      description: (
        <span>
          When <Code>true</Code>, overrides the <Code>side</Code> and
          <Code>align</Code> preferences to prevent collisions with boundary edges.
        </span>
      ),
    },
    {
      name: 'collisionBoundary',
      type: 'Element | null | Array<Element | null>',
      typeSimple: 'Boundary',
      default: '[]',
      description: (
        <span>
          The element used as the collision boundary. By default this is the
          viewport, though you can provide additional element(s) to be included
          in this check.
        </span>
      ),
    },
    {
      name: 'collisionPadding',
      type: 'number | Partial<Record<Side, number>>',
      typeSimple: 'number | Padding',
      default: '0',
      description: (
        <span>
          The distance in pixels from the boundary edges where collision
          detection should occur. Accepts a number (same for all sides), or a
          partial padding object, for example: <Code>{`{ top: 20, left: 20 }`}</Code>
          .
        </span>
      ),
    },
    {
      name: 'arrowPadding',
      type: 'number',
      default: '0',
      description: (
        <span>
          The padding between the arrow and the edges of the content. If your
          content has <Code>border-radius</Code>, this will prevent it from
          overflowing the corners.
        </span>
      ),
    },
    {
      name: 'sticky',
      type: '"partial" | "always"',
      typeSimple: 'enum',
      default: '"partial"',
      description: (
        <span>
          The sticky behavior on the align axis. <Code>"partial"</Code> will
          keep the content in the boundary as long as the trigger is at least
          partially in the boundary whilst <Code>"always"</Code> will keep the
          content in the boundary regardless.
        </span>
      ),
    },
    {
      name: 'hideWhenDetached',
      type: 'boolean',
      default: 'false',
      description: (
        <span>
          Whether to hide the content when the trigger becomes fully occluded.
        </span>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
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
  ]}
/>

## Examples

### With submenus

You can create submenus by using `DropdownMenu.Sub` in combination with its parts.

```jsx line=8-17
<DropdownMenu.Root>
  <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content>
      <DropdownMenu.Item>…</DropdownMenu.Item>
      <DropdownMenu.Item>…</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>Sub menu →</DropdownMenu.SubTrigger>
        <DropdownMenu.Portal>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
            <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
            <DropdownMenu.Arrow />
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>…</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>
```

### With disabled items

You can add special styles to disabled items via the `data-disabled` attribute.

```jsx line=10
// index.jsx
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './styles.css';

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content>
        <DropdownMenu.Item __className__="DropdownMenuItem" __disabled__>
          …
        </DropdownMenu.Item>
        <DropdownMenu.Item className="DropdownMenuItem">…</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
```

```css line=2
/* styles.css */
.DropdownMenuItem[__data-disabled__] {
  color: gainsboro;
}
```

### With separators

Use the `Separator` part to add a separator between items.

```jsx line=6,8
<DropdownMenu.Root>
  <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content>
      <DropdownMenu.Item>…</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>…</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>…</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>
```

### With labels

Use the `Label` part to help label a section.

```jsx line=5
<DropdownMenu.Root>
  <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content>
      <DropdownMenu.Label>Label</DropdownMenu.Label>
      <DropdownMenu.Item>…</DropdownMenu.Item>
      <DropdownMenu.Item>…</DropdownMenu.Item>
      <DropdownMenu.Item>…</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>
```

### With checkbox items

Use the `CheckboxItem` part to add an item that can be checked.

```jsx line=6,16-21
import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>…</DropdownMenu.Item>
          <DropdownMenu.Item>…</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.CheckboxItem
            checked={checked}
            onCheckedChange={setChecked}
          >
            <DropdownMenu.ItemIndicator>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Checkbox item
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
```

### With radio items

Use the `RadioGroup` and `RadioItem` parts to add an item that can be checked amongst others.

```jsx line=6,13-32
import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default () => {
  const [color, setColor] = React.useState('blue');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.RadioGroup value={color} onValueChange={setColor}>
            <DropdownMenu.RadioItem value="red">
              <DropdownMenu.ItemIndicator>
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              Red
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="blue">
              <DropdownMenu.ItemIndicator>
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              Blue
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="green">
              <DropdownMenu.ItemIndicator>
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              Green
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
```

### With complex items

You can add extra decorative elements in the `Item` parts, such as images.

```jsx line=9,13
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <img src="…" />
          Adolfo Hess
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <img src="…" />
          Miyah Myles
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
```

### Constrain the content/sub-content size

You may want to constrain the width of the content (or sub-content) so that it matches the trigger (or sub-trigger) width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-dropdown-menu-trigger-width` and `--radix-dropdown-menu-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './styles.css';

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content __className__="DropdownMenuContent" sideOffset={5}>
        …
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
```

```css
/* styles.css */
.DropdownMenuContent {
  width: var(__--radix-dropdown-menu-trigger-width__);
  max-height: var(__--radix-dropdown-menu-content-available-height__);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-dropdown-menu-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```jsx line=9
// index.jsx
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './styles.css';

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content __className__="DropdownMenuContent">
        …
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
```

```css line=3
/* styles.css */
.DropdownMenuContent {
  transform-origin: var(__--radix-dropdown-menu-content-transform-origin__);
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

```jsx line=9
// index.jsx
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './styles.css';

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>…</DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content __className__="DropdownMenuContent">
        …
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
```

```css line=6-11
/* styles.css */
.DropdownMenuContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.DropdownMenuContent[__data-side='top'__] {
  animation-name: slideUp;
}
.DropdownMenuContent[__data-side='bottom'__] {
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
  data={[
    {
      keys: ['Space'],
      description: (
        <span>
          When focus is on <Code>DropdownMenu.Trigger</Code>, opens the dropdown
          menu and focuses the first item.
          <br />
          When focus is on an item, activates the focused item.
        </span>
      ),
    },
    {
      keys: ['Enter'],
      description: (
        <span>
          When focus is on <Code>DropdownMenu.Trigger</Code>, opens the dropdown
          menu and focuses the first item.
          <br />
          When focus is on an item, activates the focused item.
        </span>
      ),
    },
    {
      keys: ['ArrowDown'],
      description: (
        <span>
          When focus is on <Code>DropdownMenu.Trigger</Code>, opens the dropdown
          menu.
          <br />
          When focus is on an item, moves focus to the next item.
        </span>
      ),
    },
    {
      keys: ['ArrowUp'],
      description: (
        <span>When focus is on an item, moves focus to the previous item.</span>
      ),
    },
    {
      keys: ['ArrowRight', 'ArrowLeft'],
      description: (
        <span>
          When focus is on <Code>DropdownMenu.SubTrigger</Code>, opens or closes
          the submenu depending on reading direction.
        </span>
      ),
    },
    {
      keys: ['Esc'],
      description: (
        <span>
          Closes the dropdown menu and moves focus to{' '}
          <Code>DropdownMenu.Trigger</Code>.
        </span>
      ),
    },
  ]}
/>

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract the arrow and item indicators

This example abstracts the `DropdownMenu.Arrow` and `DropdownMenu.ItemIndicator` parts. It also wraps implementation details for `CheckboxItem` and `RadioItem`.

#### Usage

```jsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from './your-dropdown-menu';

export default () => (
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
);
```

#### Implementation

```jsx
// your-dropdown-menu.jsx
import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content {...props} ref={forwardedRef}>
          {children}
          <DropdownMenuPrimitive.Arrow />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    );
  }
);

export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuCheckboxItem = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
        {children}
        <DropdownMenuPrimitive.ItemIndicator>
          {props.checked === 'indeterminate' && <DividerHorizontalIcon />}
          {props.checked === true && <CheckIcon />}
        </DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.CheckboxItem>
    );
  }
);

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuRadioItem = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
        {children}
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.RadioItem>
    );
  }
);

export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
```