<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { computed } from 'vue'
import { injectPaginationRootContext } from './PaginationRoot.vue'
import { getRange, transform } from './utils'

export interface PaginationListProps extends PrimitiveProps { }
const props = defineProps<PaginationListProps>()

const rootContext = injectPaginationRootContext()

const transformedRange = computed(() => {
  return transform(
    getRange(
      rootContext.page.value, rootContext.pageCount.value, rootContext.siblingCount.value, rootContext.showEdges.value,
    ),
  )
})
</script>

<template>
  <Primitive v-bind="props">
    <slot :items="transformedRange" />
  </Primitive>
</template>
