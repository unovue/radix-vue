<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '../useForwardExpose'

export interface ArrowProps extends PrimitiveProps {
  /**
   * The width of the arrow in pixels.
   *
   * @defaultValue 10
   */
  width?: number
  /**
   * The height of the arrow in pixels.
   *
   * @defaultValue 5
   */
  height?: number
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<ArrowProps>(), {
  width: 10,
  height: 5,
  as: 'svg',
})

useForwardExpose()
</script>

<template>
  <Primitive
    v-bind="props"
    :width="width"
    :height="height"
    :viewBox="asChild ? undefined : '0 0 30 10'"
    :preserveAspectRatio="asChild ? undefined : 'none'"
  >
    <slot><polygon points="0,0 30,0 15,10" /></slot>
  </Primitive>
</template>
