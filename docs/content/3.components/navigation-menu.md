---
metaTitle: Navigation Menu
metaDescription: A collection of links for navigating websites.
name: navigation-menu
aria: https://www.w3.org/TR/wai-aria/#navigation
---

# Navigation Menu

<Description>A collection of links for navigating websites.</Description>

<HeroContainer>
  <NavigationMenuDemo />
</HeroContainer>

<HeroCodeBlock folder="NavigationMenu" />

<Highlights
  features={[
    'Can be controlled or uncontrolled.',
    'Flexible layout structure with managed tab focus.',
    'Supports submenus.',
    'Optional active item indicator.',
    'Full keyboard navigation.',
    'Exposes CSS variables for advanced animation.',
    'Supports custom timings.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-navigation-menu
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default () => (
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger />
        <NavigationMenu.Content>
          <NavigationMenu.Link />
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Link />
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger />
        <NavigationMenu.Content>
          <NavigationMenu.Sub>
            <NavigationMenu.List />
            <NavigationMenu.Viewport />
          </NavigationMenu.Sub>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator />
    </NavigationMenu.List>

    <NavigationMenu.Viewport />
  </NavigationMenu.Root>
);
```

## API Reference

### Root

Contains all the parts of a navigation menu.

<PropsTable
  data={[
    {
      name: 'defaultValue',
      required: false,
      type: 'string',
      description:
        'The value of the menu item that should be active when initially rendered. Use when you do not need to control the value state.',
    },
    {
      name: 'value',
      required: false,
      type: 'string',
      description: (
        <span>
          The controlled value of the menu item to activate. Should be used in
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
      name: 'delayDuration',
      type: 'number',
      default: 200,
      description:
        'The duration from when the mouse enters a trigger until the content opens.',
    },
    {
      name: 'skipDelayDuration',
      type: 'number',
      default: 300,
      description:
        'How much time a user has to enter another trigger without incurring a delay again.',
    },
    {
      name: 'dir',
      required: false,
      type: '"ltr" | "rtl"',
      typeSimple: 'enum',
      description: (
        <span>
          The reading direction of the menu when applicable. If omitted,
          inherits globally from <Code>DirectionProvider</Code> or assumes LTR
          (left-to-right) reading mode.
        </span>
      ),
    },
    {
      name: 'orientation',
      required: false,
      type: '"horizontal" | "vertical"',
      typeSimple: 'enum',
      default: '"horizontal"',
      description: 'The orientation of the menu.',
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

### Sub

Signifies a submenu. Use it in place of the root part when nested to create a submenu.

<PropsTable
  data={[
    {
      name: 'defaultValue',
      required: false,
      type: 'string',
      description:
        'The value of the menu item that should be active when initially rendered. Use when you do not need to control the value state.',
    },
    {
      name: 'value',
      required: false,
      type: 'string',
      description: (
        <span>
          The controlled value of the sub menu item to activate. Should be used
          in conjunction with <Code>onValueChange</Code>.
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
      name: 'orientation',
      required: false,
      type: '"horizontal" | "vertical"',
      typeSimple: 'enum',
      default: '"horizontal"',
      description: 'The orientation of the menu.',
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

### List

Contains the top level menu items.

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
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]}
/>

### Item

A top level menu item, contains a link or trigger with content combination.

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

The button that toggles the content.

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

### Content

Contains the content associated with each trigger.

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
      name: 'disableOutsidePointerEvents',
      type: 'boolean',
      default: 'false',
      description: (
        <span>
          When <Code>true</Code>, hover/focus/click interactions will be
          disabled on elements outside the bounds of the component. Users will
          need to click twice on outside elements to interact with them: Once to
          close the navigation menu, and again to activate the element.
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
      type: '(event: React.FocusEvent | MouseEvent | TouchEvent) => void',
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
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-motion]',
      values: ['to-start', 'to-end', 'from-start', 'from-end'],
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]}
/>

### Link

A navigational link.

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
      name: 'active',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Used to identify the link as the currently active page.',
    },
    {
      name: 'onSelect',
      type: '(event: Event) => void',
      typeSimple: 'function',
      description: (
        <span>
          Event handler called when the user selects a link (via mouse or
          keyboard). Calling <Code>event.preventDefault</Code> in this handler
          will prevent the navigation menu from closing when selecting that
          link.
        </span>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-active]',
      values: 'Present when active',
    },
  ]}
/>

### Indicator

An optional indicator element that renders below the list, is used to highlight the currently active trigger.

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
      values: ['visible', 'hidden'],
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]}
/>

### Viewport

An optional viewport element that is used to render active content outside of the list.

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
      values: ['visible', 'hidden'],
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
      cssVariable: '--radix-navigation-menu-viewport-width',
      description:
        'The width of the viewport when visible/hidden, computed from the active content',
    },
    {
      cssVariable: '--radix-navigation-menu-viewport-height',
      description:
        'The height of the viewport when visible/hidden, computed from the active content',
    },
  ]}
/>

## Examples

### Vertical

You can create a vertical menu by using the `orientation` prop.

```jsx line=1
<NavigationMenu.Root __orientation__="vertical">
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
      <NavigationMenu.Content>Item one content</NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
      <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
```

### Flexible layouts

Use the `Viewport` part when you need extra control over where `Content` is rendered. This can be helpful when your design
requires an adjusted DOM structure or if you need flexibility to achieve [advanced animation](/docs/primitives/components/navigation-menu#advanced-animation).
Tab focus will be maintained automatically.

```jsx line=14
<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
      <NavigationMenu.Content>Item one content</NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
      <NavigationMenu.Content>Item two content</NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>

  {/* NavigationMenu.Content will be rendered here when active */}
  <NavigationMenu.Viewport />
</NavigationMenu.Root>
```

### With indicator

You can use the optional `Indicator` part to highlight the currently active `Trigger`, this is useful when you want to provide
an animated visual cue such as an arrow or highlight to accompany the `Viewport`.

```jsx line=17
// index.jsx
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import './styles.css';

export default () => (
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
        <NavigationMenu.Content>Item one content</NavigationMenu.Content>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
        <NavigationMenu.Content>Item two content</NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator __className__="NavigationMenuIndicator" />
    </NavigationMenu.List>

    <NavigationMenu.Viewport />
  </NavigationMenu.Root>
);
```

```css
/* styles.css */
.NavigationMenuIndicator {
  background-color: grey;
}
.NavigationMenuIndicator[data-orientation='horizontal'] {
  height: 3px;
  transition: width, transform, 250ms ease;
}
```

### With submenus

Create a submenu by nesting your `NavigationMenu` and using the `Sub` part in place of its `Root`.
Submenus work differently to `Root` navigation menus and are similar to [`Tabs`](/docs/primitives/components/tabs) in that one item should always be active, so be
sure to assign and set a `defaultValue`.

```jsx line=10,25
<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
      <NavigationMenu.Content>Item one content</NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <NavigationMenu.__Sub__ __defaultValue__="sub1">
          <NavigationMenu.List>
            <NavigationMenu.Item value="sub1">
              <NavigationMenu.Trigger>Sub item one</NavigationMenu.Trigger>
              <NavigationMenu.Content>
                Sub item one content
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item value="sub2">
              <NavigationMenu.Trigger>Sub item two</NavigationMenu.Trigger>
              <NavigationMenu.Content>
                Sub item two content
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.__Sub__>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
```

### With client side routing

If you need to use the `Link` component provided by your routing package then we recommend composing with `NavigationMenu.Link` via a custom component.
This will ensure accessibility and consistent keyboard control is maintained. Here's an example using Next.js:

```jsx line=7-16,22,25
// index.jsx
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import './styles.css';

const Link = ({ href, ...props }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <NavigationMenu.Link
        className="NavigationMenuLink"
        active={isActive}
        {...props}
      />
    </NextLink>
  );
};

export default () => (
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <Link href="/">Home</Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <Link href="/about">About</Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
);
```

```css
/* styles.css */
.NavigationMenuLink {
  text-decoration: none;
}
.NavigationMenuLink[data-active] {
  text-decoration: 'underline';
}
```

### Advanced animation

We expose `--radix-navigation-menu-viewport-[width|height]` and `data-motion['from-start'|'to-start'|'from-end'|'to-end']` attributes
to allow you to animate `Viewport` size and `Content` position based on the enter/exit direction.

Combining these with `position: absolute;` allows you to create smooth overlapping animation effects when moving between items.

```jsx line=10-12,16-18,22
// index.jsx
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import './styles.css';

export default () => (
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
        <NavigationMenu.Content __className__="NavigationMenuContent">
          Item one content
        </NavigationMenu.Content>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
        <NavigationMenu.Content __className__="NavigationMenuContent">
          Item two content
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationMenu.List>

    <NavigationMenu.Viewport __className__="NavigationMenuViewport" />
  </NavigationMenu.Root>
);
```

```css line=9-20,24,25
/* styles.css */
.NavigationMenuContent {
  position: absolute;
  top: 0;
  left: 0;
  animation-duration: 250ms;
  animation-timing-function: ease;
}
.NavigationMenuContent[__data-motion__='from-start'] {
  animation-name: enterFromLeft;
}
.NavigationMenuContent[__data-motion__='from-end'] {
  animation-name: enterFromRight;
}
.NavigationMenuContent[__data-motion__='to-start'] {
  animation-name: exitToLeft;
}
.NavigationMenuContent[__data-motion__='to-end'] {
  animation-name: exitToRight;
}

.NavigationMenuViewport {
  position: relative;
  width: var(__--radix-navigation-menu-viewport-width__);
  height: var(__--radix-navigation-menu-viewport-height__);
  transition: width, height, 250ms ease;
}

@keyframes enterFromRight {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes enterFromLeft {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes exitToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
}

@keyframes exitToLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }
}
```

## Accessibility

Adheres to the [`navigation` role requirements](https://www.w3.org/TR/wai-aria-1.2/#navigation).

### Differences to menubar

`NavigationMenu` should not be confused with `menubar`, although this primitive shares the name `menu` in the colloquial sense to refer to a set of navigation links, it does not use the WAI-ARIA `menu` role.
This is because `menu` and `menubars` behave like native operating system menus most commonly found in desktop application windows, as such they feature complex functionality like composite focus management and first-character navigation.

These features are often considered [unnecessary for website navigation](https://github.com/w3c/aria-practices/issues/353) and at worst can confuse users who are familiar with established website patterns.

See the W3C [Disclosure Navigation Menu](https://w3c.github.io/aria-practices/examples/disclosure/disclosure-navigation.html) example for more information.

### Link usage and aria-current

It's important to use `NavigationMenu.Link` for all navigational links within a menu, this not only applies to the main list
but also within any content rendered via `NavigationMenu.Content`. This will ensure consistent keyboard interactions and accessibility
while also giving access to the `active` prop for setting `aria-current` and the active styles.
See [this example](/docs/primitives/components/navigation-menu#with-client-side-routing) for more information on usage with third party routing components.

### Keyboard Interactions

<KeyboardTable
  data={[
    {
      keys: ['Space', 'Enter'],
      description: (
        <span>
          When focus is on <Code>NavigationMenu.Trigger</Code>, opens the
          content.
        </span>
      ),
    },
    {
      keys: ['Tab'],
      description: 'Moves focus to the next focusable element.',
    },
    {
      keys: ['ArrowDown'],
      description: (
        <span>
          When <Code>horizontal</Code> and focus is on an open{' '}
          <Code>NavigationMenu.Trigger</Code>, moves focus into{' '}
          <Code>NavigationMenu.Content</Code>.
          <br />
          Moves focus to the next <Code>NavigationMenu.Trigger</Code> or{' '}
          <Code>NavigationMenu.Link</Code>.
        </span>
      ),
    },
    {
      keys: ['ArrowUp'],
      description: (
        <span>
          Moves focus to the previous <Code>NavigationMenu.Trigger</Code> or{' '}
          <Code>NavigationMenu.Link</Code>.
        </span>
      ),
    },
    {
      keys: ['ArrowRight', 'ArrowLeft'],
      description: (
        <span>
          When <Code>vertical</Code> and focus is on an open{' '}
          <Code>NavigationMenu.Trigger</Code>, moves focus into its{' '}
          <Code>NavigationMenu.Content</Code>.
          <br />
          Moves focus to the next / previous <Code>
            NavigationMenu.Trigger
          </Code>{' '}
          or <Code>NavigationMenu.Link</Code>.
        </span>
      ),
    },
    {
      keys: ['Home', 'End'],
      description: (
        <span>
          Moves focus to the first/last <Code>NavigationMenu.Trigger</Code> or{' '}
          <Code>NavigationMenu.Link</Code>.
        </span>
      ),
    },
    {
      keys: ['Esc'],
      description: (
        <span>
          Closes open <Code>NavigationMenu.Content</Code> and moves focus to its{' '}
          <Code>NavigationMenu.Trigger</Code>.
        </span>
      ),
    },
  ]}
/>