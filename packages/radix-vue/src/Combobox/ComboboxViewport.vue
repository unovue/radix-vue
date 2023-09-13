<script setup lang="ts">
import {
  Primitive,
  type PrimitiveProps,
} from '@/Primitive'

export interface SelectViewportProps extends PrimitiveProps {}
const props = defineProps<SelectViewportProps>()
</script>

<template>
  <Primitive as="style">
    /* Hide scrollbars cross-browser and enable momentum scroll for touch
    devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch; }
    [data-radix-select-viewport]::-webkit-scrollbar { display: none; }
  </Primitive>
  <Primitive
    data-radix-combobox-viewport
    role="presentation"
    v-bind="{ ...$attrs, ...props }"
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
</template>
