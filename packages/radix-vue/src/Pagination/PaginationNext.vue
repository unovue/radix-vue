<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { injectPaginationRootContext } from './PaginationRoot.vue'

export interface PaginationNextProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PaginationNextProps>(), { as: 'button' })

const rootContext = injectPaginationRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="Next Page"
    :type="as === 'button' ? 'button' : undefined"
    :disabled="rootContext.page.value === rootContext.pageCount.value || rootContext.disabled.value"
    @click="rootContext.onPageChange(rootContext.page.value + 1)"
  >
    <slot>Next page</slot>
  </Primitive>
</template>
