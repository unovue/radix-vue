<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface SelectIconProps extends PrimitiveProps {}

withDefaults(defineProps<SelectIconProps>(), {
  as: 'span',
})
</script>

<template>
  <Primitive aria-hidden :as="as" :as-child="asChild">
    <slot>▼</slot>
  </Primitive>
</template>
