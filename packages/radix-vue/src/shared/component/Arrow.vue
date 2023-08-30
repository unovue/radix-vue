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
  usePrimitiveElement,
} from '@/Primitive'

const props = withDefaults(defineProps<ArrowProps>(), {
  width: 10,
  height: 5,
  as: 'svg',
})

const { primitiveElement } = usePrimitiveElement()
</script>

<template>
  <Primitive
    ref="primitiveElement"
    v-bind="props"
    :width="width"
    :height="height"
    viewBox="0 0 30 10"
    preserveAspectRatio="none"
    :as-child="props.asChild"
    :as="as"
  >
    <slot><polygon points="0,0 30,0 15,10" /></slot>
  </Primitive>
</template>
