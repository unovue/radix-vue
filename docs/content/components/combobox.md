---

title: Combobox
description: Choose from a list of suggested values with full keyboard support.
name: combobox 
aria: https://www.w3.org/WAI/ARIA/apg/patterns/listbox
---


# Combobox

<Description>
Choose from a list of suggested values with full keyboard support.
</Description>


<ComponentPreview name="Combobox" />


## Features

<Highlights
  :features="[
    'Can be controlled or uncontrolled.',
    'Offers 2 positioning modes.',
    'Supports items, labels, groups of items.',
    'Focus is fully managed.',
    'Full keyboard navigation.',
    'Supports custom placeholder.',
    'Supports Right to Left direction.',
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
<script setup lang="ts">
import {
  ComboboxAnchor,
  ComboboxArrow,
  ComboboxCancel,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxViewport,
} from 'radix-vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxAnchor>
      <ComboboxInput />
      <ComboboxTrigger />
      <ComboboxCancel />
    </ComboboxAnchor>

    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxViewport>
          <ComboboxEmpty />

          <ComboboxItem>
            <ComboboxItemIndicator />
          </ComboboxItem>

          <ComboboxGroup>
            <ComboboxLabel />
            <ComboboxItem>
              <ComboboxItemIndicator />
            </ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
        </ComboboxViewport>

        <ComboboxArrow />
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

## API Reference

### Root

Contains all the parts of a Combobox

<!-- @include: @/meta/ComboboxRoot.md -->

### Anchor

Used as an anchor if you set `ComboboxContent`'s position to `popper`.

<!-- @include: @/meta/ComboboxAnchor.md -->

### Input 

The input component to search through the combobox items.

<!-- @include: @/meta/ComboboxInput.md -->

### Trigger

The button that toggles the Combobox Content.

<!-- @include: @/meta/ComboboxTrigger.md -->

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>
  
### Cancel

The button that clears the search term.

<!-- @include: @/meta/ComboboxCancel.md -->


### Portal

When used, portals the content part into the `body`.  

You need to set `position="popper"` for `ComboboxContent` to make sure the position was automatically computed similar to `Popover` or `DropdownMenu`.

<!-- @include: @/meta/ComboboxPortal.md -->

### Content

The component that pops out when the combobox is open.

<!-- @include: @/meta/ComboboxContent.md -->

<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['open', 'closed'],
    },
    {
      attribute: '[data-side]',
      values: ['left', 'right', 'bottom', 'top'],
    },
    {
      attribute: '[data-align]',
      values: ['start', 'end', 'center'],
    },
  ]"
/>

<CssVariablesTable
  :data="[
    {
      cssVariable: '--radix-combobox-content-transform-origin',
      description: 'The <Code>transform-origin</Code> computed from the content and arrow positions/offsets. Only present when <Code>position=&quot;popper&quot;</Code>.',
    },
    {
      cssVariable: '--radix-combobox-content-available-width',
      description: 'The remaining width between the trigger and the boundary edge. Only present when <Code>position=&quot;popper&quot;</Code>.',
    },
    {
      cssVariable: '--radix-combobox-content-available-height',
      description: 'The remaining height between the trigger and the boundary edge. Only present when <Code>position=&quot;popper&quot;</Code>.',
    },
    {
      cssVariable: '--radix-combobox-trigger-width',
      description: 'The width of the trigger. Only present when <Code>position=&quot;popper&quot;</Code>.',
    },
    {
      cssVariable: '--radix-combobox-trigger-height',
      description: 'The height of the trigger. Only present when <Code>position=&quot;popper&quot;</Code>.',
    },
  ]"
/>

### Viewport

The scrolling viewport that contains all of the items.

<!-- @include: @/meta/ComboboxViewport.md -->

### Item

The component that contains the combobox items.

<!-- @include: @/meta/ComboboxItem.md -->


<DataAttributesTable
  :data="[
    {
      attribute: '[data-state]',
      values: ['checked', 'unchecked'],
    },
    {
      attribute: '[data-highlighted]',
      values: 'Present when highlighted',
    },
    {
      attribute: '[data-disabled]',
      values: 'Present when disabled',
    },
  ]"
/>


### ItemIndicator

Renders when the item is selected. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.

<!-- @include: @/meta/ComboboxItemIndicator.md -->

### Group

Used to group multiple items. use in conjunction with `ComboboxLabel` to ensure good accessibility via automatic labelling.

<!-- @include: @/meta/ComboboxGroup.md -->

### Label

Used to render the label of a group. It won't be focusable using arrow keys.

<!-- @include: @/meta/ComboboxLabel.md -->

### Separator

Used to visually separate items in the Combobox

<!-- @include: @/meta/ComboboxSeparator.md -->

### Arrow

An optional arrow element to render alongside the content. This can be used to help visually link the trigger with the `ComboboxContent`. Must be rendered inside `ComboboxContent`. Only available when `position` is set to `popper`.

<!-- @include: @/meta/ComboboxArrow.md -->

## Examples

### Binding objects as values

Unlike native HTML form controls which only allow you to provide strings as values, `radix-vue` supports binding complex objects as well.


```vue line=12,23
<script setup lang="ts">
import { ref } from 'vue'
import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot } from 'radix-vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]
const selectedPeople = ref(people[0])
</script>

<template>
  <ComboboxRoot v-model="selectedPeople">
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem
          v-for="person in people"
          :key="person.id"
          :value="person"
          :disabled="person.unavailable"
        >
          {{ person.name }}
        </ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```


### Selecting multiple values


The `Combobox` component allows you to select multiple values. You can enable this by providing an array of values instead of a single value.

```vue line=12,16
<script setup lang="ts">
import { ref } from 'vue'
import { ComboboxRoot } from 'radix-vue'

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
  <ComboboxRoot v-model="selectedPeople" multiple>
    ...
  </ComboboxRoot>
</template>
```


### Custom filtering

Internally, `ComboboxRoot` would apply default [filter function](https://github.com/radix-vue/radix-vue/blob/main/packages/radix-vue/src/Combobox/ComboboxRoot.vue#L128) to filter relevant `ComboboxItem` (only apply when `modelValue` is type `string`). 

However this behavior can be replaced using 2 different method.

#### 1. Provide `filter-function` props.

```vue line=14-18,24
<script setup lang="ts">
import { ref } from 'vue'
import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot } from 'radix-vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]
const selectedPeople = ref(people[0])

function filterFunction(list: typeof people[number], searchTerm: string) {
  return list.filter((person) => {
    return person.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
}
</script>

<template>
  <ComboboxRoot
    v-model="selectedPeople"
    :filter-function="filterFunction"
  >
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem
          v-for="person in people"
          :key="person.id"
          :value="person"
          :disabled="person.unavailable"
        >
          {{ person.name }}
        </ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```


#### 2. Filtered `v-for` options


```vue line=13,15-21,27,33
<script setup lang="ts">
import { ref } from 'vue'
import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot } from 'radix-vue'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]
const selectedPeople = ref(people[0])
const searchTerm = ref('')

const filteredPeople = computed(() =>
  searchTerm.value === ''
    ? people
    : people.filter((person) => {
      return person.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    })
)
</script>

<template>
  <ComboboxRoot
    v-model="selectedPeople"
    v-model:searchTerm="searchTerm"
  >
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem
          v-for="person in filteredPeople"
          :key="person.id"
          :value="person"
          :disabled="person.unavailable"
        >
          {{ person.name }}
        </ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```



### Custom label

By default the `Combobox` will use the input contents as the label for screenreaders. If you'd like more control over what is announced to assistive technologies, use the [Label](/components/label) component.

```vue line=8,9
<script setup lang="ts">
import { ref } from 'vue'
import { ComboboxInput, ComboboxRoot, Label } from 'radix-vue'
</script>

<template>
  <ComboboxRoot v-model="selectedPeople">
    <Label for="person">Person: </Label>
    <ComboboxInput id="person" placeholder="Select a person" />
    ...
  </ComboboxRoot>
</template>
```

 

### With disabled items

 You can add special styles to disabled items via the `data-disabled` attribute.


```vue line=17
<script setup lang="ts">
import { ref } from 'vue'
import {
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxPortal,
  ComboboxRoot,
} from 'radix-vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem class="ComboboxItem" disabled>
          ...
        </ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

```css line=2
/* styles.css */
.ComboboxItem[data-disabled] {
  color: "gainsboro";
}
```

### With separators 

Use the `Separator` part to add a separator between items.


```vue line=21
<script setup lang="ts">
import { ref } from 'vue'
import {
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxSeparator
} from 'radix-vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxSeparator />
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
        <ComboboxItem>…</ComboboxItem>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### With grouped items

Use the `Group` and `Label` parts to group items in a section.

```vue line=19,20,24
<script setup lang="ts">
import { ref } from 'vue'
import {
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot
} from 'radix-vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxGroup>
          <ComboboxLabel>Label</ComboboxLabel>
          <ComboboxItem>…</ComboboxItem>
          <ComboboxItem>…</ComboboxItem>
          <ComboboxItem>…</ComboboxItem>
        </ComboboxGroup>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### With complex items

You can use custom content in your items.

```vue line=21
<script setup lang="ts">
import { ref } from 'vue'
import {
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot
} from 'radix-vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem>
          <img src="…">
          Adolfo Hess
          <ComboboxItemIndicator />
        </ComboboxItem>
        …
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

### Prevent select behavior

By default, selecting `ComboboxItem` would close the content, and update the `modelValue` with the provided value. 
You can prevent this behavior by preventing default `@select.prevent`.
 

```vue line=11
<script setup lang="ts">
import { ref } from 'vue'
import { ComboboxContent, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxPortal, ComboboxRoot } from 'radix-vue'
</script>

<template>
  <ComboboxRoot>
    <ComboboxInput />
    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxItem @select.prevent>
          Item A
        </ComboboxItem>
        …
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

## Accessibility

Adheres to the [Combobox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).

See the W3C [Combobox Autocomplete List](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/) example for more information.

### Keyboard Interactions

<KeyboardTable
  :data="[
    {
      keys: ['Enter'],
      description: '<span>When focus is on <Code>ComboboxItem</Code>, selects the focused item. </span>',
    },
    {
      keys: ['ArrowDown'],
      description: '<span> When focus is on <Code>ComboboxInput</Code>, opens the combobox content. <br /> When focus is on an item, moves focus to the next item. </span>',
    },
    {
      keys: ['ArrowUp'],
      description: '<span> When focus is on <Code>ComboboxInput</Code>, opens the combobox content. <br /> When focus is on an item, moves focus to the previous item. </span>',
    },
    {
      keys: ['Esc'],
      description: '<span> Closes combobox and restores the selected item in the <Code>ComboboxInput</Code> field. </span>',
    },
  ]"
/>


## Custom APIs

Create your own API by abstracting the primitive parts into your own component.

### Command Menu

Combobox can be use to build your own Command Menu.

#### Usage

```vue
<script setup lang="ts">
import { Command, CommandItem } from './your-command'
</script>

<template>
  <Command>
    <CommandItem value="1">
      Item 1
    </CommandItem>
    <CommandItem value="2">
      Item 2
    </CommandItem>
    <CommandItem value="3">
      Item 3
    </CommandItem>
  </Command>
</template>
```

#### Implementation

```ts
// your-command.ts
export { default as Command } from 'Command.vue'
export { default as CommandItem } from 'CommandItem.vue'
```

```vue
<!-- Command.vue -->
<script setup lang="ts">
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, } from '@radix-icons/vue'
import { ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxPortal, ComboboxRoot, useForwardPropsEmits } from 'radix-vue'
import type { ComboboxRootEmits, ComboboxRootProps } from 'radix-vue'

const props = defineProps<ComboboxRootProps>()
const emits = defineEmits<ComboboxRootEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxRoot v-bind="forward" :open="true" model-value="">
    <ComboboxInput placeholder="Type a command or search..." />

    <ComboboxPortal>
      <ComboboxContent>
        <ComboboxEmpty />
        <ComboboxViewport>
          <slot />
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
```

```vue
<!-- ComboboxItem.vue -->
<script setup lang="ts">
import { CheckIcon } from '@radix-icons/vue'
import { ComboboxItem, type ComboboxItemProps } from 'radix-vue'

const props = defineProps<ComboboxItemProps>()
</script>

<template>
  <ComboboxItem v-bind="props" @select.prevent>
    <slot />
  </ComboboxItem>
</template>
```