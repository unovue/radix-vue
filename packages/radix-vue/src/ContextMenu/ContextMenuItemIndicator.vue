<script setup lang="ts">
import { MenuItemIndicator, type MenuItemIndicatorProps } from "@/Menu";

export interface ContextMenuItemIndicatorProps extends MenuItemIndicatorProps {}
const props = defineProps<ContextMenuItemIndicatorProps>();
</script>

<template>
  <MenuItemIndicator v-bind="props">
    <slot></slot>
  </MenuItemIndicator>
</template>
