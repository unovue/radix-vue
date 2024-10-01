<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'radix-vue'
</script>

<template>
  <PaginationRoot
    :total="100"
    :sibling-count="1"
    show-edges
    :default-page="2"
  >
    <PaginationList
      v-slot="{ items }"
      class="flex items-center gap-1 text-white"
    >
      <PaginationFirst class="w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:double-arrow-left" />
      </PaginationFirst>
      <PaginationPrev class="w-9 h-9 flex items-center justify-center mr-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
          class="w-9 h-9 border rounded data-[selected]:bg-white data-[selected]:text-blackA11 hover:bg-white/10 transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1"
          :value="page.value"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
          class="w-9 h-9 flex items-center justify-center"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext class="w-9 h-9 flex items-center justify-center ml-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
      <PaginationLast class="w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded">
        <Icon icon="radix-icons:double-arrow-right" />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>
