<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { inject } from 'vue'
import { PAGINATION_CONTEXT_VALUE } from './PaginationRoot.vue'

export interface PaginationLastProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PaginationLastProps>(), { as: 'button' })

const context = inject(PAGINATION_CONTEXT_VALUE)
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="Last Page"
    :type="as === 'button' ? 'button' : undefined"
    :disabled="context?.page.value === context?.pageCount.value || context?.disabled?.value"
    @click="context?.onPageChange(context.pageCount.value)"
  >
    <slot>Last page</slot>
  </Primitive>
</template>
