---

title: Avatar
description: An image element with a fallback for representing the user.
name: avatar
---
 
# Avatar

<Description>
An image element with a fallback for representing the user.
</Description>

<ComponentPreview name="Avatar" />

## Features

<Highlights
  :features="[
    'Automatic and manual control over when the image renders.',
    'Fallback part accepts any children.',
    'Optionally delay fallback rendering to avoid content flashing.',
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
import { AvatarImage, AvatarRoot } from 'radix-vue'
</script>

<template>
  <AvatarRoot>
    <AvatarImage />
    <AvatarFallback />
  </AvatarRoot>
</template>
```

## API Reference

### Root

Contains all the parts of an avatar

<PropsTable :data="[
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
  ]"
/>

### Image

The image to render. By default it will only render when it has loaded. You can use the `@loadingStatusChange` handler if you need more control.

<PropsTable :data="[
    {
      name: 'as',
      type: 'string | Component',
      default: 'img',
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
      name: '@loadingStatusChange',
      type: '(status: &quot;idle&quot; | &quot;loading&quot; | &quot;loaded&quot; | &quot;error&quot;) => void',
      description:
        'A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading.',
    },
  ]" 
/>

### Fallback

An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error. If you notice a flash during loading, you can provide a `delayMs` prop to delay its rendering so it only renders for those with slower connections. For more control, use the `@loadingStatusChange` emit on `AvatarImage`.

<PropsTable :data="[
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
      name: 'delayMs',
      type: 'number',
      description:
        'Useful for delaying rendering so it only appears for those with slower connections.',
    },
  ]"
/>

## Examples

### Clickable Avatar with tooltip

You can compose the Avatar with a [Tooltip](/components/tooltip) to display extra information.

```vue line=6-7,9,11-15
<script setup>
import { AvatarImage, AvatarRoot, TooltipArrow, TooltipRoot, TooltipTrigger } from 'radix-vue'
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger>
      <AvatarRoot>…</AvatarRoot>
    </TooltipTrigger>

    <TooltipContent side="top">
      Tooltip content
      <TooltipArrow />
    </TooltipContent>
  </TooltipRoot>
</template>
```
