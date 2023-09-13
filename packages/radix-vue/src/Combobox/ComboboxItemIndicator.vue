<script setup lang="ts">
import { inject } from 'vue'
import { COMBOBOX_ITEM_INJECTION_KEY } from './ComboboxItem.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface SelectItemIndicatorProps extends PrimitiveProps {}
const props = withDefaults(defineProps<SelectItemIndicatorProps>(), {
  as: 'span',
})

const itemContext = inject(COMBOBOX_ITEM_INJECTION_KEY)
</script>

<template>
  <Primitive v-if="itemContext?.isSelected.value" aria-hidden v-bind="props">
    <slot />
  </Primitive>
</template>
