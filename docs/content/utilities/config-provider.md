---
title: Config Provider
description: Wraps your app to provide global configurations. 
---

# Config Provider

<Description>
Wraps your app to provide global configurations.
</Description>

<Highlights
  :features="[
    'Enables all primitives to inherit global reading direction.',
    'Enables changing the behavior of scroll body when setting body lock.',
    'Much more controls to prevent layout shifts.',
  ]"
/>

 
## Anatomy

Import the component. 

```vue
<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
</script>

<template>
  <ConfigProvider>
    <slot />
  </ConfigProvider>
</template>
```
 

## API Reference

### Config Provider

When creating localized apps that require right-to-left (RTL) reading direction, you need to wrap your application with the `ConfigProvider` component to ensure all of the primitives adjust their behavior based on the `dir` prop.

You can also change the global behavior of `bodylock` for components such as `Alert`, `DropdownMenu` and etc to fit your layout to prevent any [content shifts](https://github.com/radix-vue/radix-vue/issues/385).


<PropsTable
  :data="[
    {
      name: 'dir',
      required: false,
      type: '&quot;ltr&quot; | &quot;rtl&quot;',
      default: '&quot;ltr&quot;',
      description:  `The global reading direction of your application. This will be inherited by all primitives.`
    },
    {
      name: 'scrollBody',
      required: false,
      type: 'boolean | ScrollBodyOption',
      default: true,
      description:  `The global scroll body behavior of your application. This will be inherited by the related primitives.`
    },
  ]"
/>

## Example 

Use the config provider.

Set global direction to `rtl`, and scroll body behavior to `false` (will not set any padding/margin).

```vue
<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
</script>

<template>
  <ConfigProvider dir="rtl" :scroll-body="false">
    <slot />
  </ConfigProvider>
</template>
```
 