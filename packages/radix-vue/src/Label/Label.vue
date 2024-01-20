<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export interface LabelProps extends PrimitiveProps {
  for?: string
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<LabelProps>(), {
  as: 'label',
})

const { forwardRef } = useForwardRef()
</script>

<template>
  <Primitive
    v-bind="props"
    :ref="forwardRef"
    @mousedown="(event) => {
      // prevent text selection when double clicking label
      if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
    }"
  >
    <slot />
  </Primitive>
</template>
