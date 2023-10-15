<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { injectPaginationRootContext } from './PaginationRoot.vue'

export interface PaginationLastProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PaginationLastProps>(), { as: 'button' })

const rootContext = injectPaginationRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="Last Page"
    :type="as === 'button' ? 'button' : undefined"
    :disabled="rootContext.page.value === rootContext.pageCount.value || rootContext.disabled.value"
    @click="rootContext.onPageChange(rootContext.pageCount.value)"
  >
    <slot>Last page</slot>
  </Primitive>
</template>
