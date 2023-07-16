---
outline: deep
metaTitle: Alert Dialog
metaDescription: A modal dialog that interrupts the user with important content and expects a response.
name: alert-dialog
aria: https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog
---

<script setup>
import Description from '../../components/Description.vue'
import HeroContainer from '../../components/HeroContainer.vue'
import DemoAlertDialog from '../../components/demo/AlertDialog/index.vue'
import PropsTable from '../../components/tables/PropsTable.vue'
import EmitsTable from '../../components/tables/EmitsTable.vue'
import DataAttributesTable from '../../components/tables/DataAttributesTable.vue'
import KeyboardTable from '../../components/tables/KeyboardTable.vue'
import Highlights from '../../components/Highlights.vue'
import HeroCodeGroup from '../../components/HeroCodeGroup.vue'
</script>

# Alert Dialog

<Description>
A modal dialog that interrupts the user with important content and expects a
response.
</Description>

<HeroContainer>
<DemoAlertDialog />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/AlertDialog/index.vue

</div>
<div filename="tailwind.config.js">

<<< ../../components/demo/AlertDialog/tailwind.config.js

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Focus is automatically trapped.',
    'Can be controlled or uncontrolled.',
    'Manages screen reader announcements with <code>Title</code> and <code>Description</code> components.',
    'Esc closes the component automatically.'
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
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogOverlay,
	AlertDialogPortal,
	AlertDialogRoot,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "radix-vue";
</script>

<template>
	<AlertDialogRoot>
		<AlertDialogTrigger />
		<AlertDialogPortal>
			<AlertDialogOverlay />
			<AlertDialogContent>
				<AlertDialogTitle />
				<AlertDialogDescription />
				<AlertDialogCancel />
				<AlertDialogAction />
			</AlertDialogContent>
		</AlertDialogPortal>
	</AlertDialogRoot>
</template>
```

## API Reference

### Root

Contains all the parts of an alert dialog.

<PropsTable :data="[{
name: 'defaultOpen',
type: 'boolean',
description: 'The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.',
},
{
name: 'open',
type: 'boolean',
description: 'The controlled open state of the dialog. Must be binded with `v-model`.',
}]" />

### Trigger

A button that opens the dialog.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.'
}]" />

<DataAttributesTable :data="[{
attribute: '[data-state]',
values: ['open', 'closed'],
}]" />

### Portal

When used, portals your overlay and content parts into the <code>body</code>.

<PropsTable :data="[
{
name: 'container',
type: 'HTMLElement',
default: 'document.body',
description: 'Specify a container element to portal the content into.',
}]" />

### Overlay

A layer that covers the inert portion of the view when the dialog is open.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
}]" />

<DataAttributesTable :data="[{
attribute: '[data-state]',
values: ['open', 'closed'],
}]" />

### Content

Contains content to be rendered when the dialog is open.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
},
{
name: 'onOpenAutoFocus',
required: false,
type: 'boolean',
default: 'true',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
},
{
name: 'onCloseAutoFocus',
required: false,
type: 'boolean',
default: 'true',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
},
{
name: 'onEscapeKeyDown',
required: false,
type: 'boolean',
default: 'true',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
}]" />

<EmitsTable :data="[
{
name: '@open',
type: '(event: Event) => void',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
},
{
name: '@close',
type: '(event: Event) => void',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
},
{
name: '@escape-key-down',
type: '(event: KeyboardEvent) => void',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
}]" />

<DataAttributesTable :data="[{
attribute: '[data-state]',
values: ['open', 'closed'],
}]" />

### Cancel

A button that closes the dialog. This button should be distinguished visually from `AlertDialogAction` buttons.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
}]" />

### Action

A button that closes the dialog. These buttons should be distinguished visually from the `AlertDialogCancel` button.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
}]" />

### Title

An accessible name to be announced when the dialog is opened. Alternatively, you can provide `aria-label` or `aria-labelledby` to `AlertDialogContent` and exclude this component.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
}]" />

### Description

An accessible description to be announced when the dialog is opened. Alternatively, you can provide `aria-describedby` to `AlertDialogContent` and exclude this component.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
}]" />

## Examples

### Close after asynchronous form submission

Use the controlled props to programmatically close the Alert Dialog after an async operation has completed.

```vue line=14,15,18,23-29,32
<script setup>
import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogOverlay,
	AlertDialogPortal,
	AlertDialogRoot,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "radix-vue";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
const open = ref(false);
</script>
<template>
	<AlertDialogRoot v-model:open="open">
		<AlertDialogTrigger>Open</AlertDialogTrigger>
		<AlertDialogPortal>
			<AlertDialogOverlay />
			<AlertDialogContent>
				<form
					@submit="
						(event) => {
							wait().then(() => setOpen(false));
							event.preventDefault();
						}
					"
				>
				    <!-- some inputs -->
					<button type="submit">Submit</button>
				</form>
			</AlertDialogContent>
		</AlertDialogPortal>
	</AlertDialogRoot>
</template>
```

<br />

### Custom portal container

Customise the element that your alert dialog portals into.

```vue line=4,17
<script setup>
import { ref } from "vue";

const container = ref(null);
</script>

<template>
	<div>
		<AlertDialogRoot>
			<AlertDialogTrigger />
			<AlertDialogPortal :container="container">
				<AlertDialogOverlay />
				<AlertDialogContent>...</AlertDialogContent>
			</AlertDialogPortal>
		</AlertDialogRoot>

		<div ref="Container" />
	</div>
</template>
```

## Accessibility

Adheres to the [Alert and Message Dialogs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog).

### Keyboard Interactions

<KeyboardTable :data="[{
keys: ['Space'],
description: 'Opens/closes the dialog.',
}]" />
