<script setup lang="ts">
import { PopperArrow, type PopperArrowProps } from "@/Popper";

export interface HoverCardArrowProps extends PopperArrowProps {}
const props = defineProps<HoverCardArrowProps>();
</script>

<template>
  <PopperArrow v-bind="props">
    <slot></slot>
  </PopperArrow>
</template>
