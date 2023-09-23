<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { inject } from 'vue'
import { PAGINATION_CONTEXT_VALUE } from './PaginationRoot.vue'

export interface PaginationNextProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PaginationNextProps>(), { as: 'button' })

const context = inject(PAGINATION_CONTEXT_VALUE)
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="Next Page"
    :type="as === 'button' ? 'button' : undefined"
    :disabled="context?.page.value === context?.pageCount.value || context?.disabled?.value"
    @click="context?.onPageChange(context.page.value + 1)"
  >
    <slot>Next page</slot>
  </Primitive>
</template>
