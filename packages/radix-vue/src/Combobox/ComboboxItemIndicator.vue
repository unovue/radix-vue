<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface ComboboxItemIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectComboboxItemContext } from './ComboboxItem.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<ComboboxItemIndicatorProps>(), {
  as: 'span',
})

useForwardExpose()
const itemContext = injectComboboxItemContext()
</script>

<template>
  <Primitive
    v-if="itemContext.isSelected.value"
    aria-hidden
    v-bind="props"
  >
    <slot />
  </Primitive>
</template>
