<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface PaginationNextProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectPaginationRootContext } from './PaginationRoot.vue'

const props = withDefaults(defineProps<PaginationNextProps>(), { as: 'button' })

useForwardExpose()
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
