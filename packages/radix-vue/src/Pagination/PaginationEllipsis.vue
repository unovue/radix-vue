<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export interface PaginationEllipsisProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = defineProps<PaginationEllipsisProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <Primitive
    v-bind="props"
    :ref="forwardRef"
    data-type="ellipsis"
  >
    <slot>&#8230;</slot>
  </Primitive>
</template>
