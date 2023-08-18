<script setup lang="ts">
import { MenuArrow, type MenuArrowProps } from "@/Menu";

export interface DropdownMenuArrowProps extends MenuArrowProps {}
const props = withDefaults(defineProps<DropdownMenuArrowProps>(), {
  width: 10,
  height: 5,
});
</script>

<template>
  <MenuArrow v-bind="props">
    <slot></slot>
  </MenuArrow>
</template>
