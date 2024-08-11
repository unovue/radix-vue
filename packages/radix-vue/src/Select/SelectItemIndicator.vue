<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface SelectItemIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectSelectItemContext } from './SelectItem.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<SelectItemIndicatorProps>(), {
  as: 'span',
})

const itemContext = injectSelectItemContext()
</script>

<template>
  <Primitive
    v-if="itemContext.isSelected.value"
    aria-hidden="true"
    v-bind="props"
  >
    <slot />
  </Primitive>
</template>
