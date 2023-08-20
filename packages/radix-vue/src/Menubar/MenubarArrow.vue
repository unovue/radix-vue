<script setup lang="ts">
import { MenuArrow, type MenuArrowProps } from "@/Menu";

export interface MenubarArrowProps extends MenuArrowProps {}
const props = withDefaults(defineProps<MenubarArrowProps>(), {
  width: 10,
  height: 5,
});
</script>

<template>
  <MenuArrow v-bind="props">
    <slot></slot>
  </MenuArrow>
</template>
