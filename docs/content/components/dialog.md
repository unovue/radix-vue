---

title: Dialog
description: A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
name: dialog
aria: https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal
---

<script setup> 
import DemoDialog from '../../components/demo/Dialog/index.vue' 
</script>

# Dialog

<Description>
A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
</Description>

<HeroContainer folder="Dialog">
<DemoDialog />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Dialog/index.vue

</div>
<div filename="tailwind.config.js">

<<< ../../components/demo/Dialog/tailwind.config.js

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Supports modal and non-modal modes.',
    'Focus is automatically trapped when modal.',
    'Can be controlled or uncontrolled.',
    '<span> Manages screen reader announcements with <Code>Title</Code> and<Code>Description</Code> components.</span>',
    'Esc closes the component automatically.',
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
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'
</script>

<template>
  <DialogRoot>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle />
        <DialogDescription />
        <DialogClose />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a dialog

<PropsTable
  :data="[
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: '<span>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</span>',
    },
    {
      name: 'open',
      type: 'boolean',
      description: '<span>The controlled open state of the dialog Can be binded with <Code>v-model</Code>.</span>',
    },
    {
      name: 'modal',
      required: false,
      type: 'boolean',
      default: 'true',
      description: '<span>The modality of the dialog When set to <Code>true</Code>, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.</span>',
    },
  ]"
/>

<EmitsTable 
  :data="[
    {
      name: '@update:open',
      type: '(open: boolean) => void',
      description: 'Event handler called when the open state of the dialog changes.'
    },
  ]" 
/>

### Trigger

The button that opens the dialog

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
      values: ['open', 'closed'],
    },
  ]"
/>

### Portal

When used, portals your overlay and content parts into the `body`.

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

### Overlay

A layer that covers the inert portion of the view when the dialog is open.

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
      values: ['open', 'closed'],
    },
  ]"
/>

### Content

Contains content to be rendered in the open dialog

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    }
  ]" 
/>

<EmitsTable
  :data="[
    {
      name: '@openAutoFocus',
      type: '(event: Event) => void',
      description: 'Event handler called when focus moves into the component after opening. It can be prevented by  calling<Code>event.preventDefault</Code>.'
    }, 
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
      typeSimple: 'function',
      description: `
        <span>
          Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <code>event.preventDefault</code>.
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
          calling <code>event.preventDefault</code>.
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
  ]"
/>

### Close

The button that closes the dialog

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

### Title

An accessible title to be announced when the dialog is opened.

If you want to hide the title, wrap it inside our Visually Hidden utility like this `<VisuallyHidden asChild>`.

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

### Description

An optional accessible description to be announced when the dialog is opened.

If you want to hide the description, wrap it inside our Visually Hidden utility like this `<VisuallyHidden asChild>`. If you want to remove the description entirely, remove this part and pass `aria-describedby="undefined}` to `DialogContent`.

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

## Examples

### Close after asynchronous form submission

Use the controlled props to programmatically close the Dialog after an async operation has completed.

```vue line=4,5,15-19,22-24
<script setup>
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'radix-vue'

const wait = () => new Promise(resolve => setTimeout(resolve, 1000))
const open = ref(false)
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger>Open</DialogTrigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <form
          @submit.prevent="
            (event) => {
              wait().then(() => (open = false));
            }
          "
        >
          <!-- some inputs -->
          <button type="submit">
            Submit
          </button>
        </form>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
```

### Scrollable overlay

Move the content inside the overlay to render a dialog with overflow.

```vue
// index.vue
<script setup>
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'radix-vue'
import './styles.css'
</script>

<template>
  <DialogRoot>
    <DialogTrigger />
    <DialogPortal>
      <DialogOverlay class="DialogOverlay">
        <DialogContent class="DialogContent">
          ...
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>
```

```css
/* styles.css */
.DialogOverlay {
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
}

.DialogContent {
  min-width: 300px;
  background: white;
  padding: 30px;
  border-radius: 4px;
}
```

### Custom portal container

Customise the element that your dialog portals into.

```vue line=4,11,17
<script setup>
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'radix-vue'

const container = ref(null)
</script>

<template>
  <div>
    <DialogRoot>
      <DialogTrigger />
      <DialogPortal to="container">
        <DialogOverlay />
        <DialogContent>...</DialogContent>
      </DialogPortal>
    </DialogRoot>

    <div ref="container" />
  </div>
</template>
```

## Accessibility

Adheres to the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Space'],
      description: 'Opens/closes the dialog',
    },
    {
      keys: ['Enter'],
      description: 'Opens/closes the dialog',
    },
    {
      keys: ['Tab'],
      description: 'Moves focus to the next focusable element.',
    },
    {
      keys: ['Shift + Tab'],
      description: 'Moves focus to the previous focusable element.',
    },
    {
      keys: ['Esc'],
      description: '<span>Closes the dialog and moves focus to <Code>DialogTrigger</Code>.</span>',
    },
  ]"
/>
 
## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Abstract the overlay and the close button

This example abstracts the `DialogOverlay` and `DialogClose` parts.

#### Usage

```vue
<script setup>
import { Dialog, DialogContent, DialogTrigger } from './your-dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger>Dialog trigger</DialogTrigger>
    <DialogContent>Dialog Content</DialogContent>
  </Dialog>
</template>
```

#### Implementation

```ts
// your-dialog.ts
export { default as DialogContent } from 'DialogContent.vue'
export { DialogRoot as Dialog, DialogTrigger } from 'radix-vue'
``` 

```vue
<!-- DialogContent.vue -->
<script setup lang="ts">
import { DialogClose, DialogContent, type DialogContentEmits, type DialogContentProps, DialogOverlay, DialogPortal, useEmitAsProps, } from 'radix-vue'
import { Cross2Icon } from '@radix-icons/vue'

const props = defineProps<DialogContentProps>()
const emits = defineEmits<DialogContentEmits>()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent v-bind="{ ...props, ...emitsAsProps }">
      <slot />

      <DialogClose>
        <Cross2Icon />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
```
 