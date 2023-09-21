<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface ToastDescriptionProps extends PrimitiveProps {}
const props = defineProps<ToastDescriptionProps>()
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
