<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { inject } from 'vue'
import { PAGINATION_CONTEXT_VALUE } from './PaginationRoot.vue'

export interface PaginationPrevProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PaginationPrevProps>(), { as: 'button' })

const context = inject(PAGINATION_CONTEXT_VALUE)
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="Previous Page"
    :type="as === 'button' ? 'button' : undefined"
    :disabled="context?.page.value === 1 || context?.disabled?.value"
    @click="context?.onPageChange(context.page.value - 1)"
  >
    <slot>Prev page</slot>
  </Primitive>
</template>
