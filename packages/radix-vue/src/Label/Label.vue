<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface LabelProps extends PrimitiveProps {
  for?: string
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<LabelProps>(), {
  as: 'label',
})

useForwardExpose()
</script>

<template>
  <Primitive
    v-bind="props"
    @mousedown="(event) => {
      // prevent text selection when double clicking label
      if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
    }"
  >
    <slot />
  </Primitive>
</template>
