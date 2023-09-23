<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { computed, inject } from 'vue'
import { PAGINATION_CONTEXT_VALUE } from './PaginationRoot.vue'

export interface PaginationListItemProps extends PrimitiveProps {
  value: number
}
const props = withDefaults(defineProps<PaginationListItemProps>(), { as: 'button' })

const context = inject(PAGINATION_CONTEXT_VALUE)
const isSelected = computed(() => context?.page.value === props.value)
</script>

<template>
  <Primitive
    v-bind="props"
    :aria-label="`Page ${value}`"
    :aria-current="isSelected ? 'page' : undefined"
    :aria-selected="isSelected"
    :data-selected="isSelected ? 'true' : undefined"
    :disabled="context?.disabled?.value"
    :type="as === 'button' ? 'button' : undefined"
    @click="context?.onPageChange(value)"
  >
    <slot>{{ value }}</slot>
  </Primitive>
</template>
