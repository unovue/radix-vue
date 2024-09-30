---
title: useId
description: Generate random id
---

# useId

::: warning Deprecated
[Vue 3.5](https://blog.vuejs.org/posts/vue-3-5#useid) released an official client-server stable solution for `useId`.
:::

<Description>
Generate random id
</Description>

## Usage

```ts
import { useId } from 'radix-vue'

const buttonId = useId() // radix-1
```

```ts
import { useId } from 'radix-vue'

const buttonId = useId('test-id') // test-id
```
