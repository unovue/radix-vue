<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export interface ComboboxItemIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectComboboxItemContext } from './ComboboxItem.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<ComboboxItemIndicatorProps>(), {
  as: 'span',
})

const { forwardRef } = useForwardRef()
const itemContext = injectComboboxItemContext()
</script>

<template>
  <Primitive
    v-if="itemContext.isSelected.value"
    :ref="forwardRef"
    aria-hidden
    v-bind="props"
  >
    <slot />
  </Primitive>
</template>
