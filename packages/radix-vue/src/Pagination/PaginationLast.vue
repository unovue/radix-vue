<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export interface PaginationLastProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectPaginationRootContext } from './PaginationRoot.vue'

const props = withDefaults(defineProps<PaginationLastProps>(), { as: 'button' })

const rootContext = injectPaginationRootContext()
const { forwardRef } = useForwardRef()
</script>

<template>
  <Primitive
    v-bind="props"
    :ref="forwardRef"
    aria-label="Last Page"
    :type="as === 'button' ? 'button' : undefined"
    :disabled="rootContext.page.value === rootContext.pageCount.value || rootContext.disabled.value"
    @click="rootContext.onPageChange(rootContext.pageCount.value)"
  >
    <slot>Last page</slot>
  </Primitive>
</template>
