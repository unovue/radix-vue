<script setup lang="ts">
import { MenuItemIndicator, type MenuItemIndicatorProps } from "@/Menu";

export interface DropdownMenuItemIndicatorProps
  extends MenuItemIndicatorProps {}
const props = defineProps<DropdownMenuItemIndicatorProps>();
</script>

<template>
  <MenuItemIndicator v-bind="props">
    <slot></slot>
  </MenuItemIndicator>
</template>
