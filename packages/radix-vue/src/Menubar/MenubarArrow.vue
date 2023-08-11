<script setup lang="ts">
import { MenuArrow, type MenuArrowProps } from "@/Menu";

const props = withDefaults(defineProps<MenuArrowProps>(), {
  width: 10,
  height: 5,
});
</script>

<template>
  <MenuArrow v-bind="props">
    <slot></slot>
  </MenuArrow>
</template>
