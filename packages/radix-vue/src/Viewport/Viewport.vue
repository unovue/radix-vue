<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface ViewportProps extends PrimitiveProps {
  nonce?: string
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = defineProps<ViewportProps>()
const { forwardRef } = useForwardExpose()
</script>

<template>
  <Primitive
    v-bind="{ ...$attrs, ...props }"
    :ref="forwardRef"
    data-radix-viewport
    role="presentation"
    :style="{
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: 'relative',
      flex: 1,
      overflow: 'auto',
    }"
  >
    <slot />
  </Primitive>
  <Primitive as="style" :nonce="nonce">
    /* Hide scrollbars cross-browser and enable momentum scroll for touch
    devices */ [data-radix-viewport] { scrollbar-width:none; -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch; }
    [data-radix-viewport]::-webkit-scrollbar { display: none; }
  </Primitive>
</template>
