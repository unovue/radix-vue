--- 
metaTitle: Pagination
metaDescription: Displays data in paged format and provides navigation between pages.
name: pagination 
---

<script setup> 
import DemoPagination from '../../components/demo/Pagination/index.vue' 
</script>


# Pagination

<Badge>New</Badge>

<Description>
Displays data in paged format and provides navigation between pages.
</Description>

<HeroContainer folder="Pagination" overflow>
<DemoPagination />
<template v-slot:codeSlot>
<HeroCodeGroup>
<div filename="index.vue">

<<< ../../components/demo/Pagination/index.vue

</div>
<div filename="tailwind.config.js">

<<< ../../components/demo/Pagination/tailwind.config.js

</div>
</HeroCodeGroup>
</template>
</HeroContainer>

## Features

<Highlights
  :features="[
    'Enable quick access to first, or last page',
    'Enable to show edges constantly, or not',
  ]"
/>

## Installation

Install the component from your command line.

```bash
npm install radix-vue
```

### Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'radix-vue'
</script>

<template>
  <PaginationRoot>
    <PaginationList v-slot="{ items }">
      <PaginationFirst />
      <PaginationPrev />
      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index" />
        <PaginationEllipsis v-else :key="page.type" :index="index">
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </PaginationRoot>
</template>
```

## API Reference

### Root

Contains all of the paginations parts.

<PropsTable
  :data="[
    {
      name: 'page',
      type: 'number',
      description: 'The controlled value of the current page. Can be binded with <Code>v-model</Code>.',
    },
    {
      name: 'defaultPage',
      type: 'number',  
      default: 1,
      description: 'The default page value',
    },
    {
      name: 'total',
      type: 'number',
      default: 10,
      description: 'Number of items in your list',
    },
    {
      name: 'itemsPerPage',
      type: 'number',
      default: 10,
      description: 'How many items per page',
    },
    {
      name: 'siblingCount',
      type: 'number',
      default: 3,
      description: 'How many sibling should be shown around the current page',
    },
    {
      name: 'showEdges',
      type: 'boolean',
      default: false,
      description: '<Code>true</Code> if it should always show first page, last page, and ellipsis',
    },
  ]"
/>

<EmitsTable 
  :data="[
    {
      name: '@update:page',
      type: '(value: number) => void',
      description: 'Event handler called when the page value changes'
    },
  ]" 
/>

### List

Used to show the list of pages. It also makes pagination accessible to assistive technologies.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>


### Item

Used to render the button that changes the current page.

<PropsTable
  :data="[
    {
      name: 'value',
      type: 'number',
      description: 'Value for the page',
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


<DataAttributesTable
  :data="[
    {
      attribute: '[data-selected]',
      values: ['true' , ''],
    },
    {
      attribute: '[data-type]',
      values: ['page'],
    }
  ]"
/>


### Ellipsis

Placeholder element when the list is long, and only a small amount of `siblingCount` was set and `showEdges` was set to `true`.

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>


<DataAttributesTable
  :data="[ 
    {
      attribute: '[data-type]',
      values: ['ellipsis'],
    }
  ]"
/>

### First

Triggers that set the page value to 1

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>



### Prev

Triggers that set the page value to the previous page

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>


### Next

Triggers that set the page value to the next page

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>


### Last

Triggers that set the page value to the last page

<PropsTable
  :data="[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href=&quot;/guides/composition&quot;>Composition</a> guide for more details.',
    },
  ]"
/>






### Keyboard Interactions

<KeyboardTable
  :data="[ 
    {
      keys: ['Tab'],
      description: 'Moves focus to the next focusable element.',
    }, 
    {
      keys: ['Space'],
      description: `
        <span>
          When focus is on a any trigger, trigger selected page or arrow navigation
        </span>`
    },
    {
      keys: ['Enter'],
      description:  `
        <span>
          When focus is on a any trigger, trigger selected page or arrow navigation
        </span>` 
    }, 
  ]"
/>
