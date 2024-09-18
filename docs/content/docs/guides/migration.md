---
title: Migration - Radix Vue to Reka UI
description: This guide provides step-by-step instructions for developers transitioning their projects from Radix Vue to Reka UI.
---

# Migration - Radix Vue to Reka UI

<Description>
This guide provides step-by-step instructions for developers transitioning their projects from Radix Vue to Reka UI.
</Description>

## Installation

First and foremost, you need to install the latest `reka-ui`.

<InstallationTabs value="reka-ui" />

Congratulation! 🎉 Now that you've installed the above package, let's perform the migration! The first 2 steps are relatively simple. Just do a global search and replace for the following changes.

#### Codemods

To assist with the upgrade from Radix Vue to Reka UI, we collaborated with the [Codemod](https://github.com/codemod-com/codemod) team to automatically update your code to many of the new updates and patterns with [open-source codemods](https://go.codemod.com/reka-codemods). You can run the following command to automatically migrate to Reka UI:

<Callout type="tip" title="Migration recipe">

```bash
npx codemod reka-ui/migration-recipe
```

</Callout>

The [migration recipe](https://go.codemod.com/reka-recipe) will run the following codemods from the radix-vue Codemod repository:

- [`reka-ui/import-update`](https://go.codemod.com/reka-import-update)
- [`reka-ui/update-css-and-data-attributes`](https://go.codemod.com/reka-update-css-data)
- [`reka-ui/update-combobox-filter`](https://go.codemod.com/update-combobox-filter)
- [`reka-ui/rename-controlled-state`](https://go.codemod.com/rename-controlled-state)
- [`reka-ui/remove-calendar-step-prop`](https://go.codemod.com/remove-calendar-step-prop)

## Import Statement Changes

The primary change in imports is replacing `radix-vue` with `reka-ui`.

```vue
<script setup lang="ts">
import { TooltipPortal, TooltipRoot, TooltipTrigger } from 'radix-vue' // [!code --]
import { TooltipPortal, TooltipRoot, TooltipTrigger } from 'reka-ui' // [!code ++]
</script>
```

  <Callout type="tip" title="Codemod available">

  ```bash
  npx codemod reka-ui/import-update
  ```

  </Callout>

## Naming Convention Changes

CSS variable and data attributes names have been updated to use the `reka` prefix instead of `radix`.

```
  --radix-accordion-content-width: 300px; // [!code --]
  --reka-accordion-content-width: 300px;  // [!code ++]

  [data-radix-collection-item] {} // [!code --]
  [data-reka-collection-item] {}  // [!code ++]
```

<Callout type="tip" title="Codemod available">

```bash
npx codemod reka-ui/update-css-and-data-attributes
```

</Callout>

## Component Breaking Changes

### Combobox

- [Remove `filter-function` props](https://github.com/radix-vue/radix-vue/commit/ee8a3f2366a5c27c2bf1cc0a1ecbb0fea559a9f7) - `Combobox` has been refactored and improve to support better custom filtering. Read more.

  ```vue
  <template>
    <ComboboxRoot :filter-function="customFilter" /> // [!code --]
  </template>
  ```

  <Callout type="tip" title="Codemod available">

  ```bash
  npx codemod reka-ui/update-combobox-filter
  ```

  </Callout>

- [Replace `searchTerm` props of Root to Input's `v-model`](https://github.com/radix-vue/radix-vue/commit/e1bab6598c3533dfbf6a86ad26b471ab826df069#diff-833593a5ce28a8c3fabc7d77462b116405e25df2b93bcab449798b5799e73474)
- [Move `displayValue` props from Root to Input](https://github.com/radix-vue/radix-vue/commit/e1bab6598c3533dfbf6a86ad26b471ab826df069#diff-833593a5ce28a8c3fabc7d77462b116405e25df2b93bcab449798b5799e73474)

  ```vue
  <template>
    <ComboboxRoot v-model:searchTerm="search" :display-value="(v) => v.name" /> // [!code --]
    <ComboboxRoot>
      <ComboboxInput v-model="search" :display-value="(v) => v.name" /> // [!code ++]
    </ComboboxRoot>
  </template>
  ```

### Arrow

- [Improve arrow polygon](https://github.com/radix-vue/radix-vue/commit/ac8f3c34760f4c9c0f952ecd027b32951b9c416c) - Change the svg polygon to allow better styling.

### Form component

- [Rename controlled state to `v-model`](https://github.com/radix-vue/radix-vue/commit/87aa5ba6016fa7a98f02ea43062212906b2633a0) - Replace `v-model:checked`, `v-model:pressed` with more familiar API for form component.

  ```vue
  <template>
    <CheckboxRoot v-model:checked="value" /> // [!code --]
    <CheckboxRoot v-model="value" /> // [!code ++]
  </template>
  ```

  <Callout type="tip" title="Codemod available">

  ```bash
  npx codemod reka-ui/rename-controlled-state
  ```

  </Callout>

- [Reposition `VisuallyHidden`](https://github.com/radix-vue/radix-vue/commit/107389a9c230d2c94232887b9cbe2710222564aa) - Previously `VisuallyHidden` were position at the root node, causing style scoped to not be applied.

### Pagination

- [Required `itemsPerPage` prop](https://github.com/radix-vue/radix-vue/commit/37bba0c26a3cbe7e7e3e4ac36770be3ef5224f0c) - Instead of default `itemsPerPage` value, now it is required as to provide a more explicit hint about the page size.

  ```vue
  <template>
    <PaginationRoot :items-per-page="10" />   // [!code ++]
  </template>
  ```

### Calendar

- [Remove deprecated step prop](https://github.com/radix-vue/radix-vue/commit/ec146dd8fa0f95f64baf0b29c3424ee31cfb9666) - Use `prevPage/nextPage` props for greater control.

  ```vue
  <script setup lang="ts">
  function pagingFunc(date: DateValue, sign: -1 | 1) { // [!code ++]
    if (sign === -1) // [!code ++]
      return date.subtract({ years: 1 }) // [!code ++]
    return date.add({ years: 1 }) // [!code ++]
  } // [!code ++]
  </script>

  <template>
    <CalendarPrev step="year" /> // [!code --]
    <CalendarPrev :prev-page="(date: DateValue) => pagingFunc(date, -1)" /> // [!code ++]

    <CalendarNext step="year" /> // [!code --]
    <CalendarNext :next-page="(date: DateValue) => pagingFunc(date, 1)" /> // [!code ++]
  </template>
  ```

  <Callout type="tip" title="Codemod available">

  ```bash
  npx codemod reka-ui/remove-calendar-step-prop
  ```

  </Callout>

### Select

- [`SelectValue` no longer render teleported element](https://github.com/radix-vue/radix-vue/commit/6a623484d610cc3b7c1a23a77c253c8e95cef518) - Previous implmenentation of `SelectValue` will render the selected `SelectItem` via teleporting fragment. This causes SSR flickering, and it is unnecessarily computation.

  ```vue
  <template>
    <SelectValue>
      <!-- render the content similar to `SelectItem` --> // [!code ++]
    </SelectValue>
  </template>
  ```
