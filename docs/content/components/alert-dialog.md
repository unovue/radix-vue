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
npm install @radix-ui/react-alert-dialog
```

## Anatomy

Import all parts and piece them together.

```vue
<script setup lang="ts">
import * as AlertDialog from "@radix-ui/react-alert-dialog";
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
	<template />
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
description: 'The controlled open state of the dialog. Must be used in conjunction with `onOpenChange`.',
},
{
name: 'onOpenChange',
type: '(open: boolean) => void',
typeSimple: 'function',
description: 'Event handler called when the open state of the dialog changes.',
}]" />

### Trigger
A button that opens the dialog.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.'
}]" />

<DataAttributesTable :data="[{
attribute: '[data-state]',
values: ['open', 'closed'],
}]" />

### Portal
When used, portals your overlay and content parts into the <code>body</code>.

<PropsTable :data="[{
name: 'forceMount',
type: 'boolean',
description: 'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by',
},
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
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
},
{
name: 'forceMount',
type: 'boolean',
description: 'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `AlertDialog.Portal`.',
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
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
},
{
name: 'forceMount',
type: 'boolean',
description: 'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `AlertDialog.Portal`',
},
{
name: 'onOpenAutoFocus',
type: '(event: Event) => void',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
},
{
name: 'onCloseAutoFocus',
type: '(event: Event) => void',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
},
{
name: 'onEscapeKeyDown',
type: '(event: KeyboardEvent) => void',
description: 'Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`',
}]" />

<DataAttributesTable :data="[{
attribute: '[data-state]',
values: ['open', 'closed'],
}]" />

### Cancel
A button that closes the dialog. This button should be distinguished visually from `AlertDialog.Action` buttons.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
}]" />

### Action
A button that closes the dialog. These buttons should be distinguished visually from the `AlertDialog.Cancel` button.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
}]" />

### Title
An accessible name to be announced when the dialog is opened. Alternatively, you can provide `aria-label` or `aria-labelledby` to `AlertDialog.Content` and exclude this component.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
}]" />

### Description
An accessible description to be announced when the dialog is opened. Alternatively, you can provide `aria-describedby` to `AlertDialog.Content` and exclude this component.

<PropsTable :data="[{
name: 'asChild',
required: false,
type: 'boolean',
default: 'false',
description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.',
}]" />

## Examples

### Close after asynchronous form submission
Use the controlled props to programmatically close the Alert Dialog after an async operation has completed.

```jsx line=4,7,10,15,17
import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default () => {
	const [open, setOpen] = React.useState(false);

	return (
		<AlertDialog.Root __open__={open} __onOpenChange__={setOpen}>
			<AlertDialog.Trigger>Open</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialog.Overlay />
				<AlertDialog.Content>
					<form
						onSubmit={(event) => {
							wait().then(() => setOpen(false));
							event.preventDefault();
						}}
					>
						{/** some inputs */}
						<button type="submit">Submit</button>
					</form>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
};
```
<br />

### Custom portal container
Customise the element that your alert dialog portals into.

```jsx line=2,13
export default () => {
	const [container, setContainer] = React.useState(null);
	return (
		<div>
			<AlertDialog.Root>
				<AlertDialog.Trigger />
				<AlertDialog.Portal __container__={container}>
					<AlertDialog.Overlay />
					<AlertDialog.Content>...</AlertDialog.Content>
				</AlertDialog.Portal>
			</AlertDialog.Root>

			<div ref={setContainer} />
		</div>
	);
};
```

## Accessibility

Adheres to the [Alert and Message Dialogs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog).

### Keyboard Interactions

<KeyboardTable :data="[{
keys: ['Space'],
description: 'Opens/closes the dialog.',
}]" />
