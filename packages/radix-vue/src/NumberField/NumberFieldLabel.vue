<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface NumberFieldLabelProps extends PrimitiveProps {
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<NumberFieldLabelProps>(), {
  as: 'label',
})
</script>

<template>
  <Primitive
    v-bind="props"
  >
    <slot />
  </Primitive>
</template>
