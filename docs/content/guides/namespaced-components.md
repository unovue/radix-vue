# Namespaced components

Radix Vue design pattern is to create primitives for each component, and allow user to construct or [compose](./composition) components however they want.

However, importing all the necessary components 1-by-1 can be quite an effort, and the user might sometimes accidentally leave out an important component.

In order to solve this pain point, we've introduced [Namespaced components](https://vuejs.org/api/sfc-script-setup.html#namespaced-components) starting from [v.1.2.0](https://github.com/unovue/radix-vue/releases/tag/v1.2.0).

## How to use?

First, you need to import the namespaced components via `radix-vue/namespaced` in your Vue component.

```vue line=2
<script setup lang="ts">
import { Dialog, DropdownMenu } from 'radix-vue/namespaced'
</script>
```

Then, you can use all the relevant components within the namespace.

```vue line=6-17
<script setup lang="ts">
import { Dialog } from 'radix-vue/namespaced'
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger>
      Trigger
    </Dialog.Trigger>
  </Dialog.Root>

  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      …
    </Dialog.Content>
  </Dialog.Portal>
</template>
```
