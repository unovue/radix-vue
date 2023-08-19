<script setup lang="ts">
import { MenuSubTrigger, type MenuSubTriggerProps } from "@/Menu";

export interface DropdownMenuSubTriggerProps extends MenuSubTriggerProps {}
const props = defineProps<DropdownMenuSubTriggerProps>();
</script>

<template>
  <MenuSubTrigger v-bind="props">
    <slot></slot>
  </MenuSubTrigger>
</template>
