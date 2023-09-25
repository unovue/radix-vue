<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { inject } from 'vue'
import { PAGINATION_CONTEXT_VALUE } from './PaginationRoot.vue'

export interface PaginationFirstProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PaginationFirstProps>(), { as: 'button' })

const context = inject(PAGINATION_CONTEXT_VALUE)
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="First Page"
    :type="as === 'button' ? 'button' : undefined"
    :disabled="context?.page.value === 1 || context?.disabled?.value"
    @click="context?.onPageChange(1)"
  >
    <slot>First page</slot>
  </Primitive>
</template>
