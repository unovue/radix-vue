# radix-vue

This is a short description about your library.

## Installation

Install the package:

```sh
npm install radix-vue
# or
pnpm install radix-vue
# or
yarn add radix-vue
```

Import the components directly:

<!-- prettier-ignore -->
```vue
<script setup lang="ts">
import { CoolCounter, CoolButton } from "radix-vue";
</script>

<template>
  <CoolCounter :startingCount="10" />
  <CoolButton backgroundColor="blue">
    Hello, I'm a cool button!
  </CoolButton>
</template>

<style>
@import "radix-vue/index.css";
</style>
```

## Development

```sh
pnpm install

cd packages/radix-vue/
pnpm dev

pnpm build
cd ../demo/
pnpm dev
```

## Credits

MIT License

Copyright (c) 2023 Radix Vue Contributors <<https://github.com/radix-vue>>
