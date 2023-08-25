<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface LabelProps extends PrimitiveProps {
  for?: string
}

const props = withDefaults(defineProps<LabelProps>(), {
  as: 'label',
})
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
