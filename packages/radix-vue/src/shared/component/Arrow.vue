<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

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

  /**
   * The viewBox of the arrow in pixels.
   *
   * @default '0 0 30 10'
   */
  viewBox?: string
}
</script>

<script setup lang="ts">
import {
  Primitive,
  usePrimitiveElement,
} from '@/Primitive'

const props = withDefaults(defineProps<ArrowProps>(), {
  width: 10,
  height: 5,
  as: 'svg',
  viewBox: '0 0 30 10',
})

const { primitiveElement } = usePrimitiveElement()
</script>

<template>
  <Primitive
    ref="primitiveElement"
    v-bind="props"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    preserveAspectRatio="none"
  >
    <slot><polygon points="0,0 30,0 15,10" /></slot>
  </Primitive>
</template>
