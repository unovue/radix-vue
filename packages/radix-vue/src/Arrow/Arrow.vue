<script lang="ts">
export interface ArrowProps extends PrimitiveProps {
  /**
   * The width of the arrow in pixels.
   *
   * @default 10
   */
  width?: number
  /**
   * The height of the arrow in pixels.
   *
   * @default 5
   */
  height?: number
}
</script>

<script setup lang="ts">
import {
  Primitive,
  type PrimitiveProps,
} from '@/Primitive'

const props = withDefaults(defineProps<ArrowProps>(), {
  width: 10,
  height: 5,
  as: 'svg',
})
</script>

<template>
  <Primitive
    v-bind="props"
    viewBox="0 0 30 10"
    preserveAspectRatio="none"
  >
    <slot><polygon points="0,0 30,0 15,10" /></slot>
  </Primitive>
</template>
