<script lang="ts">
import type { PopperContentProps } from '@/Popper'

export interface SelectPopperPositionProps extends PopperContentProps {}
</script>

<script setup lang="ts">
import { useForwardProps } from '..'
import { CONTENT_MARGIN } from './utils'
import { PopperContent } from '@/Popper'

const props = withDefaults(defineProps<SelectPopperPositionProps>(), {
  align: 'start',
  collisionPadding: CONTENT_MARGIN,
})
const forwarded = useForwardProps(props)
</script>

<template>
  <PopperContent
    v-bind="forwarded"
    :style="{
      // Ensure border-box for floating-ui calculations
      'boxSizing': 'border-box',
      '--radix-select-content-transform-origin':
        'var(--radix-popper-transform-origin)',
      '--radix-select-content-available-width':
        'var(--radix-popper-available-width)',
      '--radix-select-content-available-height':
        'var(--radix-popper-available-height)',
      '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
      '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
    }"
  >
    <slot />
  </PopperContent>
</template>
