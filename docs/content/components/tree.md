---

title: Tree
description: A tree view widget presents a hierarchical list
name: tree
aria: https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
---

# Tree

<Badge>Alpha</Badge>

<Description>
A tree view widget presents a hierarchical list
</Description>

<ComponentPreview name="Tree" />

## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Focus is fully managed.',
    'Full keyboard navigation.',
    'Supports Right to Left direction.',
    'Different selection behavior.',
  ]"
/>

## Installation

Install the component from your command line.

<InstallationTabs value="radix-vue" />

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { TreeItem, TreeRoot, TreeVirtualizer } from 'radix-vue'
</script>

<template>
  <TreeRoot>
    <TreeItem />

    <!-- or with virtual -->
    <TreeVirtualizer>
      <TreeItem />
    </TreeVirtualizer>
  </TreeRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a tree.

<!-- @include: @/meta/TreeRoot.md -->

### Item

The item component.

<!-- @include: @/meta/TreeItem.md -->

<DataAttributesTable
  :data="[
    {
      attribute: '[data-indent]',
      values: 'Number',
    },
    {
      attribute: '[data-expanded]',
      values: 'Present when expanded',
    },
    {
      attribute: '[data-selected]',
      values: 'Present when selected',
    },
  ]"
/>

### Virtualizer

Virtual container to achieve list virtualization.

<!-- @include: @/meta/TreeVirtualizer.md -->

## Examples

### Selecting multiple items

The `Tree` component allows you to select multiple items. You can enable this by providing an array of values instead of a single value.

```vue line=12,16
<script setup lang="ts">
import { ref } from 'vue'
import { TreeRoot } from 'radix-vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]
const selectedPeople = ref([people[0], people[1]])
</script>

<template>
  <TreeRoot v-model="selectedPeople" multiple>
    ...
  </TreeRoot>
</template>
```

### Virtual List

Rendering a long list of item can slow down the app, thus using virtualization would significantly improve the performance.

```vue line=9-16
<script setup lang="ts">
import { ref } from 'vue'
import { TreeItem, TreeRoot, TreeVirtualizer } from 'radix-vue'
</script>

<template>
  <TreeRoot :items>
    <!-- checkout https://radix-vue.com/components/tree.html#virtualizer -->
    <TreeVirtualizer
      v-slot="{ item }"
      :text-content="(opt) => opt.name"
    >
      <TreeItem v-bind="item.bind">
        {{ person.name }}
      </TreeItem>
    </TreeVirtualizer>
  </TreeRoot>
</template>
```

### With Checkbox

Some `Tree` component might want to show `toggled/indeterminate` checkbox. We can change the behavior of the `Tree` component by using a few props and `preventDefault` event.

We set `propagateSelect` to `true` because we want the parent checkbox to select/deselect it's descendants. Then, we add a checkbox that triggers `select` event.

```vue line=10-11,17-25,29-33
<script setup lang="ts">
import { ref } from 'vue'
import { TreeItem, TreeRoot } from 'radix-vue'
</script>

<template>
  <TreeRoot
    v-slot="{ flattenItems }"
    :items
    multiple
    propagate-select
  >
    <TreeItem
      v-for="item in flattenItems"
      :key="item._id"
      v-bind="item.bind"
      v-slot="{ handleSelect, isSelected, isIndeterminate }"
      @select="(event) => {
        if (event.detail.originalEvent.type === 'click')
          event.preventDefault()
      }"
      @toggle="(event) => {
        if (event.detail.originalEvent.type === 'keydown')
          event.preventDefault()
      }"
    >
      <Icon v-if="item.hasChildren" icon="radix-icons:chevron-down" />

      <button tabindex="-1" @click.stop @change="handleSelect">
        <Icon v-if="isSelected" icon="radix-icons:check" />
        <Icon v-else-if="isIndeterminate" icon="radix-icons:dash" />
        <Icon v-else icon="radix-icons:box" />
      </button>

      <div class="pl-2">
        {{ item.value.title }}
      </div>
    </TreeItem>
  </TreeRoot>
</template>
```

### Draggable/Sortable Tree

For more complex draggable `Tree` component, in this example we will be using [pragmatic-drag-and-drop](https://github.com/atlassian/pragmatic-drag-and-drop), as the core package for handling dnd.

[Stackblitz Demo](https://stackblitz.com/edit/github-8f3fzs?file=src%2FTreeDND.vue)

## Accessibility

Adheres to the [Tree WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/).

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Enter'],
      description: '<span>When highlight on <code>TreeItem</code>, selects the focused item. </span>',
    },
    {
      keys: ['ArrowDown'],
      description: 'When focus is on <code>TreeItem</code>, moves focus to the next item. </span>',
    },
    {
      keys: ['ArrowUp'],
      description: 'When focus is on <code>TreeItem</code>, moves focus to the previous item. </span>',
    },
    {
      keys: ['Home'],
      description: '<span>Moves focus and highlight to the first item.</span>',
    },
    {
      keys: ['End'],
      description: '<span>Moves focus and highlight to the last item.</span>',
    },
    {
      keys: ['Ctrl/Cmd + A'],
      description: '<span>Select all the items.</span>',
    }
  ]"
/>
