<script setup lang="ts">
import { MenuItemIndicator, type MenuItemIndicatorProps } from "@/Menu";

const props = defineProps<MenuItemIndicatorProps>();
</script>

<template>
  <MenuItemIndicator v-bind="props">
    <slot></slot>
  </MenuItemIndicator>
</template>
