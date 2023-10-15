<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { injectPaginationRootContext } from './PaginationRoot.vue'

export interface PaginationFirstProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PaginationFirstProps>(), { as: 'button' })

const rootContext = injectPaginationRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="First Page"
    :type="as === 'button' ? 'button' : undefined"
    :disabled="rootContext.page.value === 1 || rootContext.disabled.value"
    @click="rootContext.onPageChange(1)"
  >
    <slot>First page</slot>
  </Primitive>
</template>
