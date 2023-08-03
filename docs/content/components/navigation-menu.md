---
metaTitle: Navigation Menu
metaDescription: A collection of links for navigating websites.
name: navigation-menu
aria: https://www.w3.org/TR/wai-aria/#navigation
---

<script setup>
import DemoNavigationMenu from '../../components/demo/NavigationMenu/index.vue'
</script>

# Navigation Menu

<Description>
A collection of links for navigating websites.
</Description>

<HeroContainer folder="NavigationMenu">
<DemoNavigationMenu />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/NavigationMenu/index.vue

</div>
<div filename="NavigationMenuListItem.vue">

<<< ../../components/demo/NavigationMenu/NavigationMenuListItem.vue

</div>
<div filename="tailwind.config.js">

<<< ../../components/demo/NavigationMenu/tailwind.config.js

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Flexible layout structure with managed tab focus.',
    'Supports submenus.',
    'Optional active item indicator.',
    'Full keyboard navigation.',
    'Exposes CSS variables for advanced animation.',
    'Supports custom timings.',
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
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationMenuSub,
} from "radix-vue";
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger />
        <NavigationMenuContent>
          <NavigationMenuLink />
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink />
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger />
        <NavigationMenuContent>
          <NavigationMenuSub>
            <NavigationMenuList />
            <NavigationMenuViewport />
          </NavigationMenuSub>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuIndicator />
    </NavigationMenuList>

    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a navigation menu.

<PropsTable
  :data="[
    {
      name: 'modelValue',
      required: false,
      type: 'string',
      description: `
        <span>
          The controlled value of the menu item to activate. Should be used in
          conjunction with <Code>onValueChange</Code>.
        </span>
      `,
    },
    {
      name: 'defaultValue',
      required: false,
      type: 'string',
      description: 'The value of the menu item that should be active when initially rendered. Use when you do not need to control the value state.',
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
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      typeSimple: 'enum',
      description: `
        <span>
          The reading direction of the menu when applicable. If omitted,
          inherits globally from <Code>DirectionProvider</Code> or assumes LTR
          (left-to-right) reading mode.
        </span>
      `,
    },
    {
      name: 'orientation',
      required: false,
      type: '&quot;horizontal&quot; | &quot;vertical&quot;',
      typeSimple: 'enum',
      default: '&quot;horizontal&quot;',
      description: 'The orientation of the menu.',
    },
  ]"
/>

<EmitsTable
  :data="[
    {
    name: '@update:modelValue',
    type: '(payload: string) => void',
    description: 'Event handler called when the value changes.',
    }
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Sub

Signifies a submenu. Use it in place of the root part when nested to create a submenu.

<PropsTable
  :data="[
    {
      name: 'modelValue',
      required: false,
      type: 'string',
      description: `
        <span>
          The controlled value of the sub menu item to activate. Should be used
          in conjunction with <Code>onValueChange</Code>.
        </span>
      `,
    },
    {
      name: 'defaultValue',
      required: false,
      type: 'string',
      description: 'The value of the menu item that should be active when initially rendered. Use when you do not need to control the value state.',
    }, 
    {
      name: 'orientation',
      required: false,
      type: '&quot;horizontal&quot; | &quot;vertical&quot;',
      typeSimple: 'enum',
      default: '&quot;horizontal&quot;',
      description: 'The orientation of the menu.',
    },
  ]"
/>

<EmitsTable
  :data="[
    {
    name: '@update:modelValue',
    type: '(payload: string) => void',
    description: 'Event handler called when the value changes.',
    }
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### List

Contains the top level menu items.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: `
        Change the default rendered element for the one passed as a child, merging their props and behavior.
        <br />
        <br />
        Read our <a href=&quot;../guides/composition&quot;>Composition</a> guide for more details.
      `,
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Item

A top level menu item, contains a link or trigger with content combination.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: `
        Change the default rendered element for the one passed as a child, merging their props and behavior.
        <br />
        <br />
        Read our <a href=&quot;../guides/composition&quot;>Composition</a> guide for more details.
      `,
    },
    {
      name: 'value',
      required: false,
      type: 'string',
      description: `
        <span>
          A unique value that associates the item with an active value when the
          navigation menu is controlled. This prop is managed automatically when
          uncontrolled.
        </span>
      `,
    },
  ]"
/>

### Trigger

The button that toggles the content.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: `
        Change the default rendered element for the one passed as a child, merging their props and behavior.
        <br />
        <br />
        Read our <a href=&quot;../guides/composition&quot;>Composition</a> guide for more details.
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
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>

### Content

Contains the content associated with each trigger.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: `
        Change the default rendered element for the one passed as a child, merging their props and behavior.
        <br />
        <br />
        Read our <a href=&quot;../guides/composition&quot;>Composition</a> guide for more details.
      `,
    },
    {
      name: 'disableOutsidePointerEvents',
      type: 'boolean',
      default: 'false',
      description: `
        <span>
          When <Code>true</Code>, hover/focus/click interactions will be
          disabled on elements outside the bounds of the component. Users will
          need to click twice on outside elements to interact with them: Once to
          close the navigation menu, and again to activate the element.
        </span>
      `,
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description: `
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with Vue.js animation libraries.
        </span>
      `,
    },
  ]"
/>

<EmitsTable
  :data="[
    {
    name: '@escapeKeyDown',
    type: '(event: KeyboardEvent) => void',
      typeSimple: 'function',
      description: `
        <span>
          Event handler called when the escape key is down. It can be prevented by calling <Code>event.preventDefault</Code>.
        </span>
      `,
    },
    {
      name: '@pointerDownOutside',
      type: '(event: PointerDownOutsideEvent) => void',
      typeSimple: 'function',
      description: `
        <span>
          Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <Code>event.preventDefault</Code>.
        </span>
      `,
    },
    {
      name: '@focusOutside',
      type: '(event: FocusOutsideEvent) => void',
      typeSimple: 'function',
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
      typeSimple: 'function',
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
      attribute: '[data-motion]',
      values: ['to-start', 'to-end', 'from-start', 'from-end'],
    },
    {
      attribute: '[data-orientation]',
      values: ['vertical', 'horizontal'],
    },
  ]"
/>

### Link

A navigational link.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: `
        Change the default rendered element for the one passed as a child, merging their props and behavior.
        <br />
        <br />
        Read our <a href=&quot;../guides/composition&quot;>Composition</a> guide for more details.
      `,
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
      description: `
        <span>
          Event handler called when the user selects a link (via mouse or
          keyboard). Calling <Code>event.preventDefault</Code> in this handler
          will prevent the navigation menu from closing when selecting that
          link.
        </span>
      `,
    },
  ]"
/>

<DataAttributesTable
  :data="[
    {
      attribute: '[data-active]',
      values: 'Present when active',
    },
  ]"
/>

### Indicator

An optional indicator element that renders below the list, is used to highlight the currently active trigger.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: `
        <>
        Change the default rendered element for the one passed as a child, merging their props and behavior.
        <br />
        <br />
        Read our <a href=&quot;../guides/composition&quot;>Composition</a> guide for more details.
        </>
      `,
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description: `
          Used to force mounting when more control is needed. Useful when
          controlling animation with Vue.js animation libraries.
      `,
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

### Viewport

An optional viewport element that is used to render active content outside of the list.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: `
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href=&quot;../guides/composition&quot;>Composition</a> guide for more
          details.
        </>
      `,
    },
    {
      name: 'forceMount',
      type: 'boolean',
      description: `
        <span>
          Used to force mounting when more control is needed. Useful when
          controlling animation with Vue.js animation libraries.
        </span>
      `,
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

<CssVariablesTable
  :data="[
    {
      cssVariable: '--radix-navigation-menu-viewport-width',
      description: 'The width of the viewport when visible/hidden, computed from the active content',
    },
    {
      cssVariable: '--radix-navigation-menu-viewport-height',
      description: 'The height of the viewport when visible/hidden, computed from the active content',
    },
  ]"
/>

## Examples

### Vertical

You can create a vertical menu by using the `orientation` prop.

```vue line=16
<script setup lang="ts">
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationMenuSub,
} from "radix-vue";
</script>

<template>
  <NavigationMenuRoot orientation="vertical">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent>Item one content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>Item Two content</NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
```

### Flexible layouts

Use the `Viewport` part when you need extra control over where `Content` is rendered. This can be helpful when your design
requires an adjusted DOM structure or if you need flexibility to achieve [advanced animation](/components/navigation-menu#advanced-animation).
Tab focus will be maintained automatically.

```vue line=7,17,21
<script setup lang="ts">
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from "radix-vue";
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent>Item one content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>Item two content</NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>

    {/* NavigationMenuContent will be rendered here when active */}
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
```

### With indicator

You can use the optional `Indicator` part to highlight the currently active `Trigger`, this is useful when you want to provide
an animated visual cue such as an arrow or highlight to accompany the `Viewport`.

```vue line=24
<script setup lang="ts">
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from "radix-vue";
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent>Item one content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>Item two content</NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuIndicator class="NavigationMenuIndicator" />
    </NavigationMenuList>

    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
```

```css
/* styles.css */
.NavigationMenuIndicator {
  background-color: grey;
}
.NavigationMenuIndicator[data-orientation="horizontal"] {
  height: 3px;
  transition: width, transform, 250ms ease;
}
```

### With submenus

Create a submenu by nesting your `NavigationMenu` and using the `Sub` part in place of its `Root`.
Submenus work differently to `Root` navigation menus and are similar to [`Tabs`](/components/tabs) in that one item should always be active, so be
sure to assign and set a `defaultValue`.

```vue line=9,23-38
<script setup lang="ts">
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuSub,
} from "radix-vue";
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent>Item one content</NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuSub defaultValue="sub1">
            <NavigationMenuList>
              <NavigationMenuItem value="sub1">
                <NavigationMenuTrigger>Sub item one</NavigationMenuTrigger>
                <NavigationMenuContent> Sub item one content </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem value="sub2">
                <NavigationMenuTrigger>Sub item two</NavigationMenuTrigger>
                <NavigationMenuContent> Sub item two content </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuSub>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
```

### With client side routing

If you need to use the `RouterLink` component provided by your routing package then we recommend adding `asChild="true"` to `NavigationMenuLink`.
This will ensure accessibility and consistent keyboard control is maintained. Here's an example using Next.js:

```vue line=10-12,15-17
<script setup lang="ts">
import { NavigationMenuRoot, NavigationMenuList, NavigationMenuItem } from "radix-vue";
// RouterLink should be injected by default if using `vue-router`
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <RouterLink to="/">Home</RouterLink>
        <NavigationMenuLink/>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <RouterLink to="/about">About</RouterLink>
        <NavigationMenuLink/>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
```

### Advanced animation

We expose `--radix-navigation-menu-viewport-[width|height]` and `data-motion['from-start'|'to-start'|'from-end'|'to-end']` attributes to allow you to animate `Viewport` size and `Content` position based on the enter/exit direction.

Combining these with `position: absolute;` allows you to create smooth overlapping animation effects when moving between items.

```vue line=17,23,29
<script setup lang="ts">
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from "radix-vue";
</script>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
        <NavigationMenuContent class="NavigationMenuContent"> Item one content </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
        <NavigationMenuContent class="NavigationMenuContent"> Item two content </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuViewport class="NavigationMenuViewport" />
  </NavigationMenuRoot>
</template>
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
.NavigationMenuContent[data-motion="from-start"] {
  animation-name: enterFromLeft;
}
.NavigationMenuContent[data-motion="from-end"] {
  animation-name: enterFromRight;
}
.NavigationMenuContent[data-motion="to-start"] {
  animation-name: exitToLeft;
}
.NavigationMenuContent[data-motion="to-end"] {
  animation-name: exitToRight;
}

.NavigationMenuViewport {
  position: relative;
  width: var(--radix-navigation-menu-viewport-width);
  height: var(--radix-navigation-menu-viewport-height);
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

It's important to use `NavigationMenuLink` for all navigational links within a menu, this not only applies to the main list
but also within any content rendered via `NavigationMenuContent`. This will ensure consistent keyboard interactions and accessibility
while also giving access to the `active` prop for setting `aria-current` and the active styles.
See [this example](/components/navigation-menu#with-client-side-routing) for more information on usage with third party routing components.

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Space', 'Enter'],
      description: `
        <span>
          When focus is on <Code>NavigationMenuTrigger</Code>, opens the content.
        </span>
      `,
    },
    {
      keys: ['Tab'],
      description: 'Moves focus to the next focusable element.',
    },
    {
      keys: ['ArrowDown'],
      description: `
        <span>
          When <Code>horizontal</Code> and focus is on an open
          <Code>NavigationMenuTrigger</Code>, moves focus into
          <Code>NavigationMenuContent</Code>.
          <br />
          Moves focus to the next <Code>NavigationMenuTrigger</Code> or
          <Code>NavigationMenuLink</Code>.
        </span>
      `,
    },
    {
      keys: ['ArrowUp'],
      description: `
        <span>
          Moves focus to the previous <Code>NavigationMenuTrigger</Code> or
          <Code>NavigationMenuLink</Code>.
        </span>
      `,
    },
    {
      keys: ['ArrowRight', 'ArrowLeft'],
      description: `
        <span>
          When <Code>vertical</Code> and focus is on an open
          <Code>NavigationMenuTrigger</Code>, moves focus into its
          <Code>NavigationMenuContent</Code>.
          <br />
          Moves focus to the next / previous <Code> NavigationMenuTrigger </Code> or <Code>NavigationMenuLink</Code>.
        </span>
      `,
    },
    {
      keys: ['Home', 'End'],
      description: `
        <span>
          Moves focus to the first/last <Code>NavigationMenu.Trigger</Code> or
          <Code>NavigationMenu.Link</Code>.
        </span>
      `,
    },
    {
      keys: ['Esc'],
      description: `
        <span>
          Closes open <Code>NavigationMenu.Content</Code> and moves focus to its
          <Code>NavigationMenu.Trigger</Code>.
        </span>
      `,
    },
  ]"
/>
