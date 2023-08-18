<script setup lang="ts">
import { MenuSeparator, type MenuSeparatorProps } from "@/Menu";

export interface DropdownMenuSeparatorProps extends MenuSeparatorProps {}
const props = defineProps<DropdownMenuSeparatorProps>();
</script>

<template>
  <MenuSeparator v-bind="props">
    <slot></slot>
  </MenuSeparator>
</template>
