<script lang="ts">
import type { PopperArrowProps } from '@/Popper'

export interface HoverCardArrowProps extends PopperArrowProps {}
</script>

<script setup lang="ts">
import { PopperArrow } from '@/Popper'

const props = defineProps<HoverCardArrowProps>()
</script>

<template>
  <PopperArrow v-bind="props">
    <slot />
  </PopperArrow>
</template>
