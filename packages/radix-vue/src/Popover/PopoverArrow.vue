<script lang="ts">
import type { PopperArrowProps } from '@/Popper'
import { useForwardRef } from '@/shared'

export interface PopoverArrowProps extends PopperArrowProps {}
</script>

<script setup lang="ts">
import { PopperArrow } from '@/Popper'

const props = defineProps<PopoverArrowProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <PopperArrow v-bind="props" :ref="forwardRef">
    <slot />
  </PopperArrow>
</template>
