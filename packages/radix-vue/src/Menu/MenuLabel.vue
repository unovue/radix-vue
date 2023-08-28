<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface MenuLabelProps extends PrimitiveProps {}
const props = withDefaults(defineProps<MenuLabelProps>(), {
  as: 'label',
})
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
