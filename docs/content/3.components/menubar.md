---
metaTitle: Menubar
metaDescription:
  A visually persistent menu common in desktop applications that provides quick
  access to a consistent set of commands.
name: menubar
aria: https://www.w3.org/WAI/ARIA/apg/patterns/menu/
---

# Menu Bar

<Description>
  A visually persistent menu common in desktop applications that provides quick
  access to a consistent set of commands.
</Description>

<HeroContainer>
  <MenubarDemo />
</HeroContainer>

<HeroCodeBlock folder="Menubar" />

<Highlights
  features={[
    'Can be controlled or uncontrolled.',
    'Supports submenus with configurable reading direction.',
    'Supports items, labels, groups of items.',
    'Supports checkable items (single or multiple).',
    'Customize side, alignment, offsets, collision handling.',
    'Optionally render a pointing arrow.',
    'Focus is fully managed.',
    'Full keyboard navigation.',
    'Typeahead support.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-menubar
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Menubar from '@radix-ui/react-menubar';

export default () => (
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger />
      <Menubar.Portal>
        <Menubar.Content>
          <Menubar.Label />
          <Menubar.Item />

          <Menubar.Group>
            <Menubar.Item />
          </Menubar.Group>

          <Menubar.CheckboxItem>
            <Menubar.ItemIndicator />
          </Menubar.CheckboxItem>

          <Menubar.RadioGroup>
            <Menubar.RadioItem>
              <Menubar.ItemIndicator />
            </Menubar.RadioItem>
          </Menubar.RadioGroup>

          <Menubar.Sub>
            <Menubar.SubTrigger />
            <Menubar.Portal>
              <Menubar.SubContent />
            </Menubar.Portal>
          </Menubar.Sub>

          <Menubar.Separator />
          <Menubar.Arrow />
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
);
```

## API Reference

### Root

Contains all the parts of a menubar.

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
      name: 'defaultValue',
      required: false,
      type: 'string',
      description: (
        <span>
          The value of the menu that should be open when initially rendered. Use
          when you do not need to control the value state.
        </span>
      ),
    },
    {
      name: 'value',
      required: false,
      type: 'string',
      description: (
        <span>
          The controlled value of the menu to open. Should be used in
          conjunction with <Code>onValueChange</Code>.
        </span>
      ),
    },
    {
      name: 'onValueChange',
      required: false,
      type: '(value: string) => void',
      typeSimple: 'function',
      description: 'Event handler called when the value changes.',
    },
    {
      name: 'dir',
      required: false,
      type: '"ltr" | "rtl"',
      typeSimple: 'enum',
      description: (
        <span>
          The reading direction. If omitted, inherits globally from{' '}
          <Code>DirectionProvider</Code> or assumes LTR (left-to-right) reading
          mode.
        </span>
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
  ]}
/>

### Menu

A top level menu item, contains a trigger with content combination.

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
      required: false,
      type: 'string',
      description: (
        <span>
          A unique value that associates the item with an active value when the
          navigation menu is controlled. This prop is managed automatically when
          uncontrolled.
        </span>
      ),
    },
  ]}
/>

### Trigger

The button that toggles the content. By default, the `Menubar.Content` will position itself against the trigger.

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
      attribute: '[data-highlighted]',
      values: 'Present when highlighted',
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
          part, it will be inherited by <Code>Menubar.Content</Code> and{' '}
          <Code>Menubar.SubContent</Code> respectively.
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

The component that pops out when a menu is open.

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
          <Code>Menubar.Portal</Code>.
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
  ]}
/>

<CssVariablesTable
  data={[
    {
      cssVariable: '--radix-menubar-content-transform-origin',
      description: (
        <>
          The <Code>transform-origin</Code> computed from the content and arrow
          positions/offsets
        </>
      ),
    },
    {
      cssVariable: '--radix-menubar-content-available-width',
      description: (
        <>The remaining width between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-menubar-content-available-height',
      description: (
        <>The remaining height between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-menubar-trigger-width',
      description: <>The width of the trigger</>,
    },
    {
      cssVariable: '--radix-menubar-trigger-height',
      description: <>The height of the trigger</>,
    },
  ]}
/>

### Arrow

An optional arrow element to render alongside a menubar menu. This can be used to help visually link the trigger with the `Menubar.Content`. Must be rendered inside `Menubar.Content`.

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

The component that contains the menubar items.

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
          will prevent the menubar from closing when selecting that item.
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

Used to group multiple `Menubar.Item`s.

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
      type: '(checked: boolean) => void',
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
          will prevent the menubar from closing when selecting that item.
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
  ]}
/>

### RadioGroup

Used to group multiple `Menubar.RadioItem`s.

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
          will prevent the menubar from closing when selecting that item.
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
  ]}
/>

### ItemIndicator

Renders when the parent `Menubar.CheckboxItem` or `Menubar.RadioItem` is checked. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

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
      values: ['checked', 'unchecked'],
    },
  ]}
/>

### Separator

Used to visually separate items in a menubar menu.

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

An item that opens a submenu. Must be rendered inside `Menubar.Sub`.

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

The component that pops out when a submenu is open. Must be rendered inside `Menubar.Sub`.

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
          <Code>Menubar.Portal</Code>.
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

<CssVariablesTable
  data={[
    {
      cssVariable: '--radix-menubar-content-transform-origin',
      description: (
        <>
          The <Code>transform-origin</Code> computed from the content and arrow
          positions/offsets
        </>
      ),
    },
    {
      cssVariable: '--radix-menubar-content-available-width',
      description: (
        <>The remaining width between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-menubar-content-available-height',
      description: (
        <>The remaining height between the trigger and the boundary edge</>
      ),
    },
    {
      cssVariable: '--radix-menubar-trigger-width',
      description: <>The width of the trigger</>,
    },
    {
      cssVariable: '--radix-menubar-trigger-height',
      description: <>The height of the trigger</>,
    },
  ]}
/>

## Examples

### With submenus

You can create submenus by using `Menubar.Sub` in combination with its parts.

```jsx line=9-18
<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger>…</Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Content>
        <Menubar.Item>…</Menubar.Item>
        <Menubar.Item>…</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Sub>
          <Menubar.SubTrigger>Sub menu →</Menubar.SubTrigger>
          <Menubar.Portal>
            <Menubar.SubContent>
              <Menubar.Item>Sub menu item</Menubar.Item>
              <Menubar.Item>Sub menu item</Menubar.Item>
              <Menubar.Arrow />
            </Menubar.SubContent>
          </Menubar.Portal>
        </Menubar.Sub>
        <Menubar.Separator />
        <Menubar.Item>…</Menubar.Item>
      </Menubar.Content>
    </Menubar.Portal>
  </Menubar.Menu>
</Menubar.Root>
```

### With disabled items

You can add special styles to disabled items via the `data-disabled` attribute.

```jsx line=11
// index.jsx
import * as Menubar from '@radix-ui/react-menubar';
import './styles.css';

export default () => (
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger>…</Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content>
          <Menubar.Item __className__="MenubarItem" __disabled__>
            …
          </Menubar.Item>
          <Menubar.Item className="MenubarItem">…</Menubar.Item>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
);
```

```css line=2
/* styles.css */
.MenubarItem[__data-disabled__] {
  color: gainsboro;
}
```

### With separators

Use the `Separator` part to add a separator between items.

```jsx line=7,9
<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger>…</Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Content>
        <Menubar.Item>…</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>…</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>…</Menubar.Item>
      </Menubar.Content>
    </Menubar.Portal>
  </Menubar.Menu>
</Menubar.Root>
```

### With labels

Use the `Label` part to help label a section.

```jsx line=6
<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger>…</Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Content>
        <Menubar.Label>Label</Menubar.Label>
        <Menubar.Item>…</Menubar.Item>
        <Menubar.Item>…</Menubar.Item>
        <Menubar.Item>…</Menubar.Item>
      </Menubar.Content>
    </Menubar.Portal>
  </Menubar.Menu>
</Menubar.Root>
```

### With checkbox items

Use the `CheckboxItem` part to add an item that can be checked.

```jsx line=6,17-22
import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as Menubar from '@radix-ui/react-menubar';

export default () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>…</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.Item>…</Menubar.Item>
            <Menubar.Item>…</Menubar.Item>
            <Menubar.Separator />
            <Menubar.CheckboxItem
              checked={checked}
              onCheckedChange={setChecked}
            >
              <Menubar.ItemIndicator>
                <CheckIcon />
              </Menubar.ItemIndicator>
              Checkbox item
            </Menubar.CheckboxItem>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};
```

### With radio items

Use the `RadioGroup` and `RadioItem` parts to add an item that can be checked amongst others.

```jsx line=6,14-27
import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as Menubar from '@radix-ui/react-menubar';

export default () => {
  const [color, setColor] = React.useState('blue');

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>…</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.RadioGroup value={color} onValueChange={setColor}>
              <Menubar.RadioItem value="red">
                <Menubar.ItemIndicator>
                  <CheckIcon />
                </Menubar.ItemIndicator>
                Red
              </Menubar.RadioItem>
              <Menubar.RadioItem value="blue">
                <Menubar.ItemIndicator>
                  <CheckIcon />
                </Menubar.ItemIndicator>
                Blue
              </Menubar.RadioItem>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};
```

### With complex items

You can add extra decorative elements in the `Item` parts, such as images.

```jsx line=10,14
import * as Menubar from '@radix-ui/react-menubar';

export default () => (
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger>…</Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content>
          <Menubar.Item>
            <img src="…" />
            Adolfo Hess
          </Menubar.Item>
          <Menubar.Item>
            <img src="…" />
            Miyah Myles
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
);
```

### Constrain the content/sub-content size

You may want to constrain the width of the content (or sub-content) so that it matches the trigger (or sub-trigger) width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-menubar-trigger-width` and `--radix-menubar-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import * as Menubar from '@radix-ui/react-menubar';
import './styles.css';

export default () => (
  <Menubar.Root>
    <Menubar.Trigger>…</Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Content __className__="MenubarContent" sideOffset={5}>
        …
      </Menubar.Content>
    </Menubar.Portal>
  </Menubar.Root>
);
```

```css
/* styles.css */
.MenubarContent {
  width: var(__--radix-menubar-trigger-width__);
  max-height: var(__--radix-menubar-content-available-height__);
}
```

### Origin-aware animations

We expose a CSS custom property `--radix-menubar-content-transform-origin`. Use it to animate the content from its computed origin based on `side`, `sideOffset`, `align`, `alignOffset` and any collisions.

```jsx line=10
// index.jsx
import * as Menubar from '@radix-ui/react-menubar';
import './styles.css';

export default () => (
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger>…</Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content __className__="MenubarContent">…</Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
);
```

```css line=3
/* styles.css */
.MenubarContent {
  transform-origin: var(__--radix-menubar-content-transform-origin__);
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

```jsx line=10
// index.jsx
import * as Menubar from '@radix-ui/react-menubar';
import './styles.css';

export default () => (
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger>…</Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content __className__="MenubarContent">…</Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
);
```

```css line=6-11
/* styles.css */
.MenubarContent {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
.MenubarContent[__data-side='top'__] {
  animation-name: slideUp;
}
.MenubarContent[__data-side='bottom'__] {
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
          When focus is on <Code>Menubar.Trigger</Code>, opens the menubar and
          focuses the first item.
          <br />
          When focus is on an item, activates the focused item.
        </span>
      ),
    },
    {
      keys: ['Enter'],
      description: (
        <span>
          When focus is on <Code>Menubar.Trigger</Code>, opens the associated
          menu.
          <br />
          When focus is on an item, activates the focused item.
        </span>
      ),
    },
    {
      keys: ['ArrowDown'],
      description: (
        <span>
          When focus is on <Code>Menubar.Trigger</Code>, opens the associated
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
          When focus is on a <Code>Menubar.Trigger</Code>, moves focus to the
          next or previous item. <br />
          When focus is on a <Code>Menubar.SubTrigger</Code>, opens or closes the
          submenu depending on reading direction. <br />
          When focus is within a <Code>Menubar.Content</Code>, opens the next
          menu in the menubar.
        </span>
      ),
    },
    {
      keys: ['Esc'],
      description: (
        <span>
          Closes the currently open menu and moves focus to its{' '}
          <Code>Menubar.Trigger</Code>.
        </span>
      ),
    },
  ]}
/>