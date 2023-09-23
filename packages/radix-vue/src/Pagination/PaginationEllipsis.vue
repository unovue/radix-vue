<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface PaginationEllipsisProps extends PrimitiveProps {}
const props = defineProps<PaginationEllipsisProps>()
</script>

<template>
  <Primitive
    v-bind="props"
  >
    <slot>&#8230;</slot>
  </Primitive>
</template>
