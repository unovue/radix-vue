---
metaTitle: Select
metaDescription: Displays a list of options for the user to pick from—triggered by a button.
name: select
aria: https://www.w3.org/WAI/ARIA/apg/patterns/listbox
---

# Select

<Description>
  Displays a list of options for the user to pick from—triggered by a button.
</Description>

<HeroContainer>
  <SelectDemo />
</HeroContainer>

<HeroCodeBlock folder="Select" />

<Highlights
  features={[
    'Can be controlled or uncontrolled.',
    'Offers 2 positioning modes.',
    'Supports items, labels, groups of items.',
    'Focus is fully managed.',
    'Full keyboard navigation.',
    'Supports custom placeholder.',
    'Typeahead support.',
    'Supports Right to Left direction.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-select
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Select from '@radix-ui/react-select';

export default () => (
  <Select.Root>
    <Select.Trigger>
      <Select.Value />
      <Select.Icon />
    </Select.Trigger>

    <Select.Portal>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
          <Select.Item>
            <Select.ItemText />
            <Select.ItemIndicator />
          </Select.Item>

          <Select.Group>
            <Select.Label />
            <Select.Item>
              <Select.ItemText />
              <Select.ItemIndicator />
            </Select.Item>
          </Select.Group>

          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
        <Select.Arrow />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
```

## API Reference

### Root

Contains all the parts of a select.

<PropsTable
  data={[
    {
      name: 'defaultValue',
      required: false,
      type: 'string',
      description:
        'The value of the select when initially rendered. Use when you do not need to control the state of the select.',
    },
    {
      name: 'value',
      required: false,
      type: 'string',
      description: (
        <span>
          The controlled value of the select. Should be used in conjunction with{' '}
          <Code>onValueChange</Code>.
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
      name: 'defaultOpen',
      type: 'boolean',
      description:
        'The open state of the select when it is initially rendered. Use when you do not need to control its open state.',
    },
    {
      name: 'open',
      type: 'boolean',
      description: (
        <span>
          The controlled open state of the select. Must be used in conjunction
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
          Event handler called when the open state of the select changes.
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
          The reading direction of the select when applicable. If omitted,
          inherits globally from <Code>DirectionProvider</Code> or assumes LTR
          (left-to-right) reading mode.
        </span>
      ),
    },
    {
      name: 'name',
      type: 'string',
      description:
        'The name of the select. Submitted with its owning form as part of a name/value pair.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, prevents the user from interacting with
          select.
        </span>
      ),
    },
    {
      name: 'required',
      type: 'boolean',
      description: (
        <span>
          When <Code>true</Code>, indicates that the user must select a value
          before the owning form can be submitted.
        </span>
      ),
    },
  ]}
/>

### Trigger

The button that toggles the select. The `Select.Content` will position itself by aligning over the trigger.

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
    {
      attribute: '[data-placeholder]',
      values: 'Present when has placeholder',
    },
  ]}
/>

### Value

The part that reflects the selected value. By default the selected item's text will be rendered. if you require more control, you can instead control the select and pass your own `children`. It should not be styled to ensure correct positioning. An optional `placeholder` prop is also available for when the select has no value.

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
      name: 'placeholder',
      required: false,
      type: 'ReactNode',
      description: (
        <>
          The content that will be rendered inside the <Code>Select.Value</Code>{' '}
          when no <Code>value</Code> or <Code>defaultValue</Code> is set.
        </>
      ),
    },
  ]}
/>

### Icon

A small icon often displayed next to the value as a visual affordance for the fact it can be open. By default renders ▼ but you can use your own icon via `asChild` or use `children`.

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

### Portal

When used, portals the content part into the `body`.

<PropsTable
  data={[
    {
      name: 'container',
      type: 'HTMLElement',
      default: 'document.body',
      description: 'Specify a container element to portal the content into.',
    },
  ]}
/>

### Content

The component that pops out when the select is open.

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
      name: 'position',
      type: '"item-aligned" | "popper"',
      typeSimple: 'enum',
      default: '"item-aligned"',
      description: (
        <span>
          The positioning mode to use, <Code>item-aligned</Code> is the default
          and behaves similarly to a native MacOS menu by positioning content
          relative to the active item. <Code>popper</Code> positions content in
          the same way as our other primitives, for example <Code>Popover</Code>{' '}
          or <Code>DropdownMenu</Code>.
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
          The preferred side of the anchor to render against when open. Will be
          reversed when collisions occur and <Code>avoidCollisions</Code> is
          enabled. Only available when <Code>position</Code> is set to{' '}
          <Code>popper</Code>.
        </span>
      ),
    },
    {
      name: 'sideOffset',
      type: 'number',
      default: '0',
      description: (
        <span>
          The distance in pixels from the anchor. Only available when{' '}
          <Code>position</Code> is set to <Code>popper</Code>.
        </span>
      ),
    },
    {
      name: 'align',
      type: '"start" | "center" | "end"',
      typeSimple: 'enum',
      default: '"start"',
      description: (
        <span>
          The preferred alignment against the anchor. May change when collisions
          occur. Only available when <Code>position</Code> is set to{' '}
          <Code>popper</Code>.
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
          <Code>"end"</Code> alignment options. Only available when{' '}
          <Code>position</Code> is set to <Code>popper</Code>.
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
          Only available when <Code>position</Code> is set to <Code>
            popper
          </Code>.
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
          in this check. Only available when <Code>position</Code> is set to{' '}
          <Code>popper</Code>.
        </span>
      ),
    },
    {
      name: 'collisionPadding',
      type: 'number | Partial<Record<Side, number>>',
      typeSimple: 'number | Padding',
      default: '10',
      description: (
        <span>
          The distance in pixels from the boundary edges where collision
          detection should occur. Accepts a number (same for all sides), or a
          partial padding object, for example: <Code>{`{ top: 20, left: 20 }`}</Code>
          . Only available when <Code>position</Code> is set to <Code>
            popper
          </Code>.
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
          overflowing the corners. Only available when <Code>position</Code> is
          set to <Code>popper</Code>.
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
          content in the boundary regardless. Only available when{' '}
          <Code>position</Code> is set to <Code>popper</Code>.
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
          Only available when <Code>position</Code> is set to{' '}
          <Code>popper</Code>.
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
      cssVariable: '--radix-select-content-transform-origin',
      description: (
        <>
          The <Code>transform-origin</Code> computed from the content and arrow
          positions/offsets. Only present when <Code>position="popper"</Code>.
        </>
      ),
    },
    {
      cssVariable: '--radix-select-content-available-width',
      description: (
        <>
          The remaining width between the trigger and the boundary edge. Only
          present when <Code>position="popper"</Code>.
        </>
      ),
    },
    {
      cssVariable: '--radix-select-content-available-height',
      description: (
        <>
          The remaining height between the trigger and the boundary edge. Only
          present when <Code>position="popper"</Code>.
        </>
      ),
    },
    {
      cssVariable: '--radix-select-trigger-width',
      description: (
        <>
          The width of the trigger. Only present when{' '}
          <Code>position="popper"</Code>.
        </>
      ),
    },
    {
      cssVariable: '--radix-select-trigger-height',
      description: (
        <>
          The height of the trigger. Only present when{' '}
          <Code>position="popper"</Code>.
        </>
      ),
    },
  ]}
/>

### Viewport

The scrolling viewport that contains all of the items.

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

### Item

The component that contains the select items.

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
      required: true,
      type: 'string',
      description: (
        <span>
          The value given as data when submitted with a <Code>name</Code>.
        </span>
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
          behavior will use the <Code>.textContent</Code> of the{' '}
          <Code>Select.ItemText</Code> part. Use this when the content is
          complex, or you have non-textual content inside.
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

### ItemText

The textual part of the item. It should only contain the text you want to see in the trigger when that item is selected. It should not be styled to ensure correct positioning.

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

### ItemIndicator

Renders when the item is selected. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

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

### ScrollUpButton

An optional button used as an affordance to show the viewport overflow as well as functionaly enable scrolling upwards.

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

### ScrollDownButton

An optional button used as an affordance to show the viewport overflow as well as functionaly enable scrolling downwards.

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

### Group

Used to group multiple items. use in conjunction with `Select.Label` to ensure good accessibility via automatic labelling.

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

Used to render the label of a group. It won't be focusable using arrow keys.

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

### Separator

Used to visually separate items in the select.

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

### Arrow

An optional arrow element to render alongside the content. This can be used to help visually link the trigger with the `Select.Content`. Must be rendered inside `Select.Content`. Only available when `position` is set to `popper`.

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

## Examples

### Change the positioning mode

By default, `Select` will behave similarly to a native MacOS menu by positioning `Select.Content` relative to the active item. If you would prefer an alternative positioning approach similar to `Popover` or `DropdownMenu` then you can set `position` to `popper` and make use of additional alignment options such as `side`, `sideOffset` and more.

```jsx line=8
// index.jsx
import * as Select from '@radix-ui/react-select';

export default () => (
  <Select.Root>
    <Select.Trigger>…</Select.Trigger>
    <Select.Portal>
      <Select.Content __position__="popper" __sideOffset__={5}>
        …
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
```

### Constrain the content size

When using `position="popper"` on `Select.Content`, you may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.

We expose several CSS custom properties such as `--radix-select-trigger-width` and `--radix-select-content-available-height` to support this. Use them to constrain the content dimensions.

```jsx line=9
// index.jsx
import * as Select from '@radix-ui/react-select';
import './styles.css';

export default () => (
  <Select.Root>
    <Select.Trigger>…</Select.Trigger>
    <Select.Portal>
      <Select.Content
        __className__="SelectContent"
        position="popper"
        sideOffset={5}
      >
        …
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
```

```css
/* styles.css */
.SelectContent {
  width: var(__--radix-select-trigger-width__);
  max-height: var(__--radix-select-content-available-height__);
}
```

### With disabled items

You can add special styles to disabled items via the `data-disabled` attribute.

```jsx line=11
// index.jsx
import * as Select from '@radix-ui/react-select';
import './styles.css';

export default () => (
  <Select.Root>
    <Select.Trigger>…</Select.Trigger>
    <Select.Portal>
      <Select.Content>
        <Select.Viewport>
          <Select.Item __className__="SelectItem" __disabled__>
            …
          </Select.Item>
          <Select.Item>…</Select.Item>
          <Select.Item>…</Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
```

```css line=2
/* styles.css */
.SelectItem[__data-disabled__] {
  color: 'gainsboro';
}
```

### With a placeholder

You can use the `placeholder` prop on `Value` for when the select has no value. There's also a `data-placeholder` attribute on `Trigger` to help with styling.

```jsx line=7,8
// index.jsx
import * as Select from '@radix-ui/react-select';
import './styles.css';

export default () => (
  <Select.Root>
    <Select.Trigger __className__="SelectTrigger">
      <Select.Value __placeholder__="Pick an option" />
      <Select.Icon />
    </Select.Trigger>
    <Select.Portal>
      <Select.Content>…</Select.Content>
    </Select.Portal>
  </Select.Root>
);
```

```css line=2
/* styles.css */
.SelectTrigger[__data-placeholder__] {
  color: 'gainsboro';
}
```

### With separators

Use the `Separator` part to add a separator between items.

```jsx line=9
<Select.Root>
  <Select.Trigger>…</Select.Trigger>
  <Select.Portal>
    <Select.Content>
      <Select.Viewport>
        <Select.Item>…</Select.Item>
        <Select.Item>…</Select.Item>
        <Select.Item>…</Select.Item>
        <Select.Separator />
        <Select.Item>…</Select.Item>
        <Select.Item>…</Select.Item>
      </Select.Viewport>
    </Select.Content>
  </Select.Portal>
</Select.Root>
```

### With grouped items

Use the `Group` and `Label` parts to group items in a section.

```jsx line=6-7,11
<Select.Root>
  <Select.Trigger>…</Select.Trigger>
  <Select.Portal>
    <Select.Content>
      <Select.Viewport>
        <Select.Group>
          <Select.Label>Label</Select.Label>
          <Select.Item>…</Select.Item>
          <Select.Item>…</Select.Item>
          <Select.Item>…</Select.Item>
        </Select.Group>
      </Select.Viewport>
    </Select.Content>
  </Select.Portal>
</Select.Root>
```

### With complex items

You can use custom content in your items.

```jsx line=11
import * as Select from '@radix-ui/react-select';

export default () => (
  <Select.Root>
    <Select.Trigger>…</Select.Trigger>
    <Select.Portal>
      <Select.Content>
        <Select.Viewport>
          <Select.Item>
            <Select.ItemText>
              <img src="…" />
              Adolfo Hess
            </Select.ItemText>
            <Select.ItemIndicator>…</Select.ItemIndicator>
          </Select.Item>
          <Select.Item>…</Select.Item>
          <Select.Item>…</Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
```

### Controlling the value displayed in the trigger

By default the trigger will automatically display the selected item `ItemText`'s content. You can control what appears by chosing to put things inside/outside the `ItemText` part.

If you need more flexibility, you can control the component using `value`/`onValueChange` props and passing `children` to `SelectValue`. Remember to make sure what you put in there is accessible.

```jsx line=1,4,6
const countries = { france: '🇫🇷', 'united-kingdom': '🇬🇧', spain: '🇪🇸' };

export default () => {
  const [value, setValue] = React.useState('france');
  return (
    <Select.Root __value__={value} __onValueChange__={setValue}>
      <Select.Trigger>
        <Select.Value __aria-label__={value}>
          {__countries[value]__}
        </Select.Value>
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
      <Select.Content>
        <Select.Viewport>
          <Select.Item value="france">
            <Select.ItemText>France</Select.ItemText>
            <Select.ItemIndicator>…</Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="united-kingdom">
            <Select.ItemText>United Kingdom</Select.ItemText>
            <Select.ItemIndicator>…</Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="spain">
            <Select.ItemText>Spain</Select.ItemText>
            <Select.ItemIndicator>…</Select.ItemIndicator>
          </Select.Item>
        </Select.Viewport>
      </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
```

### With custom scrollbar

The native scrollbar is hidden by default as we recommend using the `ScrollUpButton` and `ScrollDownButton` parts for the best UX. If you do not want to use these parts, compose your select with our [Scroll Area](scroll-area) primitive.

```jsx line=11,13,19-21
// index.jsx
import * as Select from '@radix-ui/react-select';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import './styles.css';

export default () => (
  <Select.Root>
    <Select.Trigger>…</Select.Trigger>
    <Select.Portal>
      <Select.Content>
        <ScrollArea.Root __className__="ScrollAreaRoot" type="auto">
          <Select.Viewport __asChild__>
            <ScrollArea.Viewport __className__="ScrollAreaViewport">
              <StyledItem>…</StyledItem>
              <StyledItem>…</StyledItem>
              <StyledItem>…</StyledItem>
            </ScrollArea.Viewport>
          </Select.Viewport>
          <ScrollArea.Scrollbar
            __className__="ScrollAreaScrollbar"
            orientation="vertical"
          >
            <ScrollArea.Thumb __className__="ScrollAreaThumb" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
```

```css
/* styles.css */
.ScrollAreaRoot {
  width: 100%;
  height: 100%;
}

.ScrollAreaViewport {
  width: 100%;
  height: 100%;
}

.ScrollAreaScrollbar {
  width: 4px;
  padding: 5px 2px;
}

.ScrollAreaThumb {
  background: rgba(0, 0, 0, 0.3);
  borderradius: 3px;
}
```

## Accessibility

Adheres to the [ListBox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox).

See the W3C [Select-Only Combobox](https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html) example for more information.

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Space'],
      description: (
        <span>
          When focus is on <Code>Select.Trigger</Code>, opens the select and
          focuses the selected item.
          <br />
          When focus is on an item, selects the focused item.
        </span>
      ),
    },
    {
      keys: ['Enter'],
      description: (
        <span>
          When focus is on <Code>Select.Trigger</Code>, opens the select and
          focuses the first item.
          <br />
          When focus is on an item, selects the focused item.
        </span>
      ),
    },
    {
      keys: ['ArrowDown'],
      description: (
        <span>
          When focus is on <Code>Select.Trigger</Code>, opens the select.
          <br />
          When focus is on an item, moves focus to the next item.
        </span>
      ),
    },
    {
      keys: ['ArrowUp'],
      description: (
        <span>
          When focus is on <Code>Select.Trigger</Code>, opens the select.
          <br />
          When focus is on an item, moves focus to the previous item.
        </span>
      ),
    },
    {
      keys: ['Esc'],
      description: (
        <span>
          Closes the select and moves focus to <Code>Select.Trigger</Code>.
        </span>
      ),
    },
  ]}
/>

### Labelling

Use our [Label](label) component in order to offer a visual and accessible label for the select.

```jsx line=6,9,13
import * as Select from '@radix-ui/react-select';
import { Label } from '@radix-ui/react-label';

export default () => (
  <>
    <Label>
      Country
      <Select.Root>…</Select.Root>
    </Label>

    {/* or */}

    <Label htmlFor="country">Country</Label>
    <Select.Root>
      <Select.Trigger __id__="country">…</Select.Trigger>
      <Select.Portal>
        <Select.Content>…</Select.Content>
      </Select.Portal>
    </Select.Root>
  </>
);
```

## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract down to `Select` and `SelectItem`

This example abstracts most of the parts.

#### Usage

```jsx
import { Select, SelectItem } from './your-select';

export default () => (
  <Select defaultValue="2">
    <SelectItem value="1">Item 1</SelectItem>
    <SelectItem value="2">Item 2</SelectItem>
    <SelectItem value="3">Item 3</SelectItem>
  </Select>
);
```

#### Implementation

```jsx
// your-select.jsx
import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

export const Select = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger ref={forwardedRef}>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon>
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content>
            <SelectPrimitive.ScrollUpButton>
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton>
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

export const SelectItem = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item {...props} ref={forwardedRef}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    );
  }
);
```