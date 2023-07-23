---
outline: deep
metaTitle: Avatar
metaDescription: An image element with a fallback for representing the user.
name: avatar
---

<script setup>
import DemoAvatar from '../../components/demo/Avatar/index.vue'
</script>

# Avatar

<Description>
An image element with a fallback for representing the user.
</Description>

<HeroContainer>
<DemoAvatar />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Avatar/index.vue

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

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
import { AvatarRoot, AvatarImage } from "radix-vue";
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
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>

### Image

The image to render. By default it will only render when it has loaded. You can use the `onLoadingStatusChange` handler if you need more control.

<PropsTable :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
    {
      name: 'onLoadingStatusChange',
      type: '(status: &quot;idle&quot; | &quot;loading&quot; | &quot;loaded&quot; | &quot;error&quot;) => void',
      typeSimple: 'function',
      description:
        'A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading.',
    },
  ]"
/>

### Fallback

An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error. If you notice a flash during loading, you can provide a `delayMs` prop to delay its rendering so it only renders for those with slower connections. For more control, use the `onLoadingStatusChange` handler on `AvatarImage`.

<PropsTable :data="[
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

```vue line=5,6,7,12,13,15,17-21
<script setup>
import {
  AvatarRoot,
  AvatarImage,
  TooltipRoot,
  TooltipTrigger,
  TooltipArrow
} from "radix-vue";
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
