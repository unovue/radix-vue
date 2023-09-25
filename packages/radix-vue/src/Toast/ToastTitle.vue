<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface ToastTitleProps extends PrimitiveProps {}
const props = defineProps<ToastTitleProps>()
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
