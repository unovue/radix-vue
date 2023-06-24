---
metaTitle: Context Menu
metaDescription: Displays a menu located at the pointer, triggered by a right-click or a long-press.
name: context-menu
aria: https://www.w3.org/WAI/ARIA/apg/patterns/menu
---

# Context Menu

<Description>
  Displays a menu located at the pointer, triggered by a right-click or a
  long-press.
</Description>

<HeroContainer>
  <ContextMenuDemo />
</HeroContainer>

<HeroCodeBlock folder="ContextMenu" />

<Highlights
  features={[
    'Supports submenus with configurable reading direction.',
    'Supports items, labels, groups of items.',
    'Supports checkable items (single or multiple) with optional indeterminate state.',
    'Supports modal and non-modal modes.',
    'Customize side, alignment, offsets, collision handling.',
    'Focus is fully managed.',
    'Full keyboard navigation.',
    'Typeahead support.',
    'Dismissing and layering behavior is highly customizable.',
    'Triggers with a long-press on touch devices',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-context-menu
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as ContextMenu from '@radix-ui/react-context-menu';

export default () => (
  <ContextMenu.Root>
    <ContextMenu.Trigger />

    <ContextMenu.Portal>
      <ContextMenu.Content>
        <ContextMenu.Label />
        <ContextMenu.Item />

        <ContextMenu.Group>
          <ContextMenu.Item />
        </ContextMenu.Group>

        <ContextMenu.CheckboxItem>
          <ContextMenu.ItemIndicator />
        </ContextMenu.CheckboxItem>

        <ContextMenu.RadioGroup>
          <ContextMenu.RadioItem>
            <ContextMenu.ItemIndicator />
          </ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger />
          <ContextMenu.Portal>
            <ContextMenu.SubContent />
          </ContextMenu.Portal>
        </ContextMenu.Sub>

        <ContextMenu.Separator />
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
);
```

## API Reference

Adheres to the [Menu WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu) and uses [roving tabindex](https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-actions.html) to manage focus movement among menu items.

### Root

Contains all the parts of a context menu.

<PropsTable
  data={[
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
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      typeSimple: 'function',
      description:
        'Event handler called when the open state of the context menu changes.',
    },
    {
      name: 'modal',
      required: false,
      type: 'boolean',
      default: 'true',
      description: (
        <span>
          The modality of the context menu. When set to <Code>true</Code>,
          interaction with outside elements will be disabled and only menu
          content will be visible to screen readers.
        </span>
      ),
    },
  ]}
/>

### Trigger

The area that opens the context menu. Wrap it around the target you want the context menu to open from when right-clicking (or using the relevant keyboard shortcuts).

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
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <span>
          When <Code>true</Code>, the context menu won't open when
          right-clicking. Note that this will also restore the native context
          menu.
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
          part, it will be inherited by <Code>ContextMenu.Content</Code> and{' '}
          <Code>ContextMenu.SubContent</Code> respectively.
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

The component that pops out in an open context menu.

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
          Event handler called when focus moves back after closing. It can be
          prevented by calling <Code>event.preventDefault</Code>.
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
          by calling <Code>event.preventDefault</Code>.
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
          <Code>ContextMenu.Portal</Code>.
        </span>
      ),
    },
    {
      name: 'alignOffset',
      type: 'number',
      default: '0',
      description: (
        <span>The vertical distance in pixels from the anchor.</span>
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
  ]}
/>

<CssVariablesTable
  data={[
    {
      cssVariable: '--radix-context-menu-content-transform-origin',
      description: (
        <>
          The <Code>transform-origin</Code> computed from the content and arrow
          positions/offsets
        </>
      ),
    },
    {
      cssVariable: '--radix-context-menu-content-available-width',
      description: (
        <>The remaining width between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-context-menu-content-available-height',
      description: (
        <>The remaining height between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-context-menu-trigger-width',
      description: <>The width of the trigger</>,
    },
    {
      cssVariable: '--radix-context-menu-trigger-height',
      description: <>The height of the trigger</>,
    },
  ]}
/>

### Arrow

An optional arrow element to render alongside a submenu. This can be used to help visually link the trigger item with the `ContextMenu.Content`. Must be rendered inside `ContextMenu.Content`.

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

The component that contains the context menu items.

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
          will prevent the context menu from closing when selecting that item.
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

Used to group multiple `ContextMenu.Item`s.

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
          will prevent the context menu from closing when selecting that item.
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

Used to group multiple `ContextMenu.RadioItem`s.

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
          will prevent the context menu from closing when selecting that item.
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

Renders when the parent `ContextMenu.CheckboxItem` or `ContextMenu.RadioItem` is checked. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

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

Used to visually separate items in the context menu.

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

An item that opens a submenu. Must be rendered inside `ContextMenu.Sub`.

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

### SubContent

The component that pops out when a submenu is open. Must be rendered inside `ContextMenu.Sub`.

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
          <Code>ContextMenu.Portal</Code>.
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
  ]}
/>

<CssVariablesTable
  data={[
    {
      cssVariable: '--radix-context-menu-content-transform-origin',
      description: (
        <>
          The <Code>transform-origin</Code> computed from the content and arrow
          positions/offsets
        </>
      ),
    },
    {
      cssVariable: '--radix-context-menu-content-available-width',
      description: (
        <>The remaining width between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-context-menu-content-available-height',
      description: (
        <>The remaining height between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-context-menu-trigger-width',
      description: <>The width of the trigger</>,
    },
    {
      cssVariable: '--radix-context-menu-trigger-height',
      description: <>The height of the trigger</>,
    },
  ]}
/>

## Examples

### With submenus

You can create submenus by using `ContextMenu.Sub` in combination with its parts.

```jsx line=8-17
<ContextMenu.Root>
  <ContextMenu.Trigger>…</ContextMenu.Trigger>
  <ContextMenu.Portal>
    <ContextMenu.Content>
      <ContextMenu.Item>…</ContextMenu.Item>
      <ContextMenu.Item>…</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Sub>
        <ContextMenu.SubTrigger>Sub menu →</ContextMenu.SubTrigger>
        <ContextMenu.Portal>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Sub menu item</ContextMenu.Item>
            <ContextMenu.Item>Sub menu item</ContextMenu.Item>
            <ContextMenu.Arrow />
          </ContextMenu.SubContent>
        </ContextMenu.Portal>
      </ContextMenu.Sub>
      <ContextMenu.Separator />
      <ContextMenu.Item>…</ContextMenu.Item>
    </ContextMenu.Content>
  </ContextMenu.Portal>
</ContextMenu.Root>
```

### With disabled items

You can add special styles to disabled items via the `data-disabled` attribute.

```jsx line=10
// index.jsx
import * as ContextMenu from '@radix-ui/react-context-menu';
import './styles.css';

export default () => (
  <ContextMenu.Root>
    <ContextMenu.Trigger>…</ContextMenu.Trigger>
    <ContextMenu.Portal>
      <ContextMenu.Content>
        <ContextMenu.Item __className__="ContextMenuItem" __disabled__>
          …
        </ContextMenu.Item>
        <ContextMenu.Item className="ContextMenuItem">…</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
);
```

```css line=2
/* styles.css */
.ContextMenuItem[__data-disabled__] {
  color: gainsboro;
}
```

### With separators

Use the `Separator` part to add a separator between items.

```jsx line=6,8
<ContextMenu.Root>
  <ContextMenu.Trigger>…</ContextMenu.Trigger>
  <ContextMenu.Portal>
    <ContextMenu.Content>
      <ContextMenu.Item>…</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item>…</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item>…</ContextMenu.Item>
    </ContextMenu.Content>
  </ContextMenu.Portal>
</ContextMenu.Root>
```

### With labels

Use the `Label` part to help label a section.

```jsx line=5
<ContextMenu.Root>
  <ContextMenu.Trigger>…</ContextMenu.Trigger>
  <ContextMenu.Portal>
    <ContextMenu.Content>
      <ContextMenu.Label>Label</ContextMenu.Label>
      <ContextMenu.Item>…</ContextMenu.Item>
      <ContextMenu.Item>…</ContextMenu.Item>
      <ContextMenu.Item>…</ContextMenu.Item>
    </ContextMenu.Content>
  </ContextMenu.Portal>
</ContextMenu.Root>
```

### With checkbox items

Use the `CheckboxItem` part to add an item that can be checked.

```jsx line=6,16-21
import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as ContextMenu from '@radix-ui/react-context-menu';

export default () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>…</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content>
          <ContextMenu.Item>…</ContextMenu.Item>
          <ContextMenu.Item>…</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.CheckboxItem
            checked={checked}
            onCheckedChange={setChecked}
          >
            <ContextMenu.ItemIndicator>
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Checkbox item
          </ContextMenu.CheckboxItem>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};
```

### With radio items

Use the `RadioGroup` and `RadioItem` parts to add an item that can be checked amongst others.

```jsx line=6,13-32
import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as ContextMenu from '@radix-ui/react-context-menu';

export default () => {
  const [color, setColor] = React.useState('blue');

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>…</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content>
          <ContextMenu.RadioGroup value={color} onValueChange={setColor}>
            <ContextMenu.RadioItem value="red">
              <ContextMenu.ItemIndicator>
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              Red
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="blue">
              <ContextMenu.ItemIndicator>
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              Blue
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="green">
              <ContextMenu.ItemIndicator>
                <CheckIcon />
              </ContextMenu.ItemIndicator>
              Green
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};
```

### With complex items

You can add extra decorative elements in the `Item` parts, such as images.

```jsx line=9,13
import * as ContextMenu from '@radix-ui/react-context-menu';

export default () => (
  <ContextMenu.Root>
    <ContextMenu.Trigger>…</ContextMenu.Trigger>
    <ContextMenu.Portal>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <img src="…" />
          Adolfo Hess
        </ContextMenu.Item>
        <ContextMenu.Item>
          <img src="…" />
          Miyah Myles
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
);
```

### Constrain the content/sub-content size

You may want to constrain the width of the content (or sub-content) so that it matches the trigger (or sub-trigger) width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-context-menu-trigger-width` and `--radix-context-menu-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import * as ContextMenu from '@radix-ui/react-context-menu';
import './styles.css';

export default () => (
  <ContextMenu.Root>
    <ContextMenu.Trigger>…</ContextMenu.Trigger>
    <ContextMenu.Portal>
      <ContextMenu.Content __className__="ContextMenuContent">
        …
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
);
```

```css
/* styles.css */
.ContextMenuContent {
  width: var(__--radix-context-menu-trigger-width__);
  max-height: var(__--radix-context-menu-content-available-height__);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-context-menu-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```jsx line=9
// index.jsx
import * as ContextMenu from '@radix-ui/react-context-menu';
import './styles.css';

export default () => (
  <ContextMenu.Root>
    <ContextMenu.Trigger>…</ContextMenu.Trigger>
    <ContextMenu.Portal>
      <ContextMenu.Content __className__="ContextMenuContent">
        …
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
);
```

```css line=3
/* styles.css */
.ContextMenuContent {
  transform-origin: var(__--radix-context-menu-content-transform-origin__);
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
import * as ContextMenu from '@radix-ui/react-context-menu';
import './styles.css';

export default () => (
  <ContextMenu.Root>
    <ContextMenu.Trigger>…</ContextMenu.Trigger>
    <ContextMenu.Portal>
      <ContextMenu.Content __className__="ContextMenuContent">
        …
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
);
```

```css line=6-11
/* styles.css */
.ContextMenuContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.ContextMenuContent[__data-side='top'__] {
  animation-name: slideUp;
}
.ContextMenuContent[__data-side='bottom'__] {
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

Uses [roving tabindex](https://www.w3.org/WAI/ARIA/apg/patterns/kbd_roving_tabindex) to manage focus movement among menu items.

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Space'],
      description: <span>Activates the focused item.</span>,
    },
    {
      keys: ['Enter'],
      description: <span>Activates the focused item.</span>,
    },
    {
      keys: ['ArrowDown'],
      description: <span>Moves focus to the next item.</span>,
    },
    {
      keys: ['ArrowUp'],
      description: <span>Moves focus to the previous item.</span>,
    },
    {
      keys: ['ArrowRight', 'ArrowLeft'],
      description: (
        <span>
          When focus is on <Code>ContextMenu.SubTrigger</Code>, opens or closes
          the submenu depending on reading direction.
        </span>
      ),
    },
    {
      keys: ['Esc'],
      description: 'Closes the context menu',
    },
  ]}
/>