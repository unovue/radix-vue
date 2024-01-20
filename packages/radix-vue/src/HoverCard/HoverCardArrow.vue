<script lang="ts">
import type { PopperArrowProps } from '@/Popper'
import { useForwardRef } from '@/shared'

export interface HoverCardArrowProps extends PopperArrowProps {}
</script>

<script setup lang="ts">
import { PopperArrow } from '@/Popper'

const props = defineProps<HoverCardArrowProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <PopperArrow v-bind="props" :ref="forwardRef">
    <slot />
  </PopperArrow>
</template>
