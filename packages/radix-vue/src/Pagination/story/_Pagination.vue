<script setup lang="ts">
import { computed } from 'vue'
import { PaginationEllipsis, type PaginationEllipsisProps, PaginationFirst, type PaginationFirstProps, PaginationLast, type PaginationLastProps, PaginationList, PaginationListItem, type PaginationListItemProps, type PaginationListProps, PaginationNext, type PaginationNextProps, PaginationPrev, type PaginationPrevProps, PaginationRoot, type PaginationRootProps } from '..'

const props = defineProps<{
  root?: PaginationRootProps
  list?: PaginationListProps

  first?: PaginationFirstProps
  prev?: PaginationPrevProps

  listItem?: Partial<PaginationListItemProps>
  ellipsis?: PaginationEllipsisProps

  next?: PaginationNextProps
  last?: PaginationLastProps
}>()

const rootProps = computed(() => ({ total: 100, ...props.root }))
</script>

<template>
  <PaginationRoot v-bind="rootProps">
    <PaginationList
      v-slot="{ items }"
      v-bind="props.list"
      class="flex items-center gap-2 "
    >
      <PaginationFirst v-bind="props.first" />
      <PaginationPrev v-bind="props.prev" />
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
          class="border rounded px-4 py-2 data-[selected]:bg-grass8"
          :value="page.value"
          v-bind="props.listItem"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
          class="border rounded px-4 py-2 "
          v-bind="props.ellipsis"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext v-bind="props.next" />
      <PaginationLast v-bind="props.last" />
    </PaginationList>
  </PaginationRoot>
</template>
