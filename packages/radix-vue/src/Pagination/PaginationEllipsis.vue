<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface PaginationEllipsisProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = defineProps<PaginationEllipsisProps>()
</script>

<template>
  <Primitive
    data-type="ellipsis"
    v-bind="props"
  >
    <slot>&#8230;</slot>
  </Primitive>
</template>
