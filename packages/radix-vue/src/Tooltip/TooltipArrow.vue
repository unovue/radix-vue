<script lang="ts">
export interface TooltipArrowProps extends PrimitiveProps {
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
import { PopperArrow } from '@/Popper'
import type { PrimitiveProps } from '@/Primitive'

const props = withDefaults(defineProps<TooltipArrowProps>(), {
  asChild: false,
  width: 10,
  height: 5,
})
</script>

<template>
  <PopperArrow
    :as-child="props.asChild"
    :as="as"
    :height="props.height"
    :width="props.width"
  />
</template>
