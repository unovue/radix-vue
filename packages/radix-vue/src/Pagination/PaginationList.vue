<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { computed, inject } from 'vue'
import { PAGINATION_CONTEXT_VALUE } from './PaginationRoot.vue'
import { getRange, transform } from './utils'

export interface PaginationListProps extends PrimitiveProps { }
const props = withDefaults(defineProps<PaginationListProps>(), {
  as: 'ul',
})

const context = inject(PAGINATION_CONTEXT_VALUE)

const transformedRange = computed(() => {
  return transform(
    getRange(
      context!.page.value, context!.pageCount.value, context!.siblingCount.value, context!.showEdges.value,
    ),
  )
})
</script>

<template>
  <Primitive v-bind="props">
    <slot :items="transformedRange" />
  </Primitive>
</template>
