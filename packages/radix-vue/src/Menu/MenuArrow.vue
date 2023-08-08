<script setup lang="ts">
import { PopperArrow, type PopperArrowProps } from "@/Popper";

interface MenuArrowProps extends PopperArrowProps {}

const props = defineProps<MenuArrowProps>();
</script>

<template>
  <PopperArrow v-bind="props">
    <slot></slot>
  </PopperArrow>
</template>
