<script lang="ts">
import type { PopperArrowProps } from '@/Popper'
import { useForwardExpose } from '@/shared'

export interface PopoverArrowProps extends PopperArrowProps {}
</script>

<script setup lang="ts">
import { PopperArrow } from '@/Popper'

const props = defineProps<PopoverArrowProps>()
useForwardExpose()
</script>

<template>
  <PopperArrow v-bind="props">
    <slot />
  </PopperArrow>
</template>
