# Namespaced components
 
Radix Vue design pattern is to create primitives for each component, and allow user to construct or [compose](./composition) components however they want.

However, importing all of the neccessary component 1-by-1 can be quite an effort, and user might some time accidentally left out any important components.

In order to solve this painpoint, we've introduced [Namespaced components](https://vuejs.org/api/sfc-script-setup.html#namespaced-components) since [v.1.2.0](https://github.com/radix-vue/radix-vue/releases/tag/v1.2.0).


## How to use?

First, you need import components via `radix-vue/namespaced` in your Vue component.
 
```vue line=2
<script setup lang="ts">
import { Dialog, DropdownMenu } from 'radix-vue/namespaced'
</script>
```

Then, you can just the imported namespaced component and it will contains all the relevant components.

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

