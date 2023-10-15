<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { computed } from 'vue'
import { injectPaginationRootContext } from './PaginationRoot.vue'

export interface PaginationListItemProps extends PrimitiveProps {
  value: number
}
const props = withDefaults(defineProps<PaginationListItemProps>(), { as: 'button' })

const rootContext = injectPaginationRootContext()
const isSelected = computed(() => rootContext.page.value === props.value)
</script>

<template>
  <Primitive
    v-bind="props"
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
