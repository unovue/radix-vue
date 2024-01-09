<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ComboboxViewportProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = defineProps<ComboboxViewportProps>()
</script>

<template>
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
  <Primitive as="style">
    /* Hide scrollbars cross-browser and enable momentum scroll for touch
    devices */ [data-radix-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch; }
    [data-radix-combobox-viewport]::-webkit-scrollbar { display: none; }
  </Primitive>
</template>
