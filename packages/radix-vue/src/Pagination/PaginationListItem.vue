<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export interface PaginationListItemProps extends PrimitiveProps {
  value: number
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { computed } from 'vue'
import { injectPaginationRootContext } from './PaginationRoot.vue'

const props = withDefaults(defineProps<PaginationListItemProps>(), { as: 'button' })
const { forwardRef } = useForwardRef()

const rootContext = injectPaginationRootContext()
const isSelected = computed(() => rootContext.page.value === props.value)
</script>

<template>
  <Primitive
    v-bind="props"
    :ref="forwardRef"
    data-type="page"
    :aria-label="`Page ${value}`"
    :aria-current="isSelected ? 'page' : undefined"
    :data-selected="isSelected ? 'true' : undefined"
    :disabled="rootContext.disabled.value"
    :type="as === 'button' ? 'button' : undefined"
    @click="rootContext.onPageChange(value)"
  >
    <slot>{{ value }}</slot>
  </Primitive>
</template>
