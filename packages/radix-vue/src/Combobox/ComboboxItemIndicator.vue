<script setup lang="ts">
import { inject } from 'vue'
import { COMBOBOX_ITEM_INJECTION_KEY } from './ComboboxItem.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface ComboboxItemIndicatorProps extends PrimitiveProps {}
const props = withDefaults(defineProps<ComboboxItemIndicatorProps>(), {
  as: 'span',
})

const itemContext = inject(COMBOBOX_ITEM_INJECTION_KEY)
</script>

<template>
  <Primitive v-if="itemContext?.isSelected.value" aria-hidden v-bind="props">
    <slot />
  </Primitive>
</template>
