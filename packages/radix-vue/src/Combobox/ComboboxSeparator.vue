<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface ComboboxSeparatorProps extends PrimitiveProps {}
const props = defineProps<ComboboxSeparatorProps>()
</script>

<template>
  <Primitive aria-hidden v-bind="props">
    <slot />
  </Primitive>
</template>
