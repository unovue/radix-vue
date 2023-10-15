<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { injectPaginationRootContext } from './PaginationRoot.vue'

export interface PaginationPrevProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PaginationPrevProps>(), { as: 'button' })

const rootContext = injectPaginationRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="Previous Page"
    :type="as === 'button' ? 'button' : undefined"
    :disabled="rootContext.page.value === 1 || rootContext.disabled?.value"
    @click="rootContext.onPageChange(rootContext.page.value - 1)"
  >
    <slot>Prev page</slot>
  </Primitive>
</template>
