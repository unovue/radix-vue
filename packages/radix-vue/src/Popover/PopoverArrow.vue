<script setup lang="ts">
import { PopperArrow, type PopperArrowProps } from "@/Popper";

export interface PopoverArrowProps extends PopperArrowProps {}
const props = defineProps<PopoverArrowProps>();
</script>

<template>
  <PopperArrow v-bind="props">
    <slot></slot>
  </PopperArrow>
</template>
