<script setup lang="ts">
import { injectSelectItemContext } from './SelectItem.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface SelectItemIndicatorProps extends PrimitiveProps {}
const props = withDefaults(defineProps<SelectItemIndicatorProps>(), {
  as: 'span',
})

const itemContext = injectSelectItemContext()
</script>

<template>
  <Primitive v-if="itemContext.isSelected.value" aria-hidden v-bind="props">
    <slot />
  </Primitive>
</template>
