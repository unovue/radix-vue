<script setup lang="ts">
import { injectComboboxItemContext } from './ComboboxItem.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface ComboboxItemIndicatorProps extends PrimitiveProps {}
const props = withDefaults(defineProps<ComboboxItemIndicatorProps>(), {
  as: 'span',
})

const itemContext = injectComboboxItemContext()
</script>

<template>
  <Primitive v-if="itemContext.isSelected.value" aria-hidden v-bind="props">
    <slot />
  </Primitive>
</template>
