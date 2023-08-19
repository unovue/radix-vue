<script setup lang="ts">
import { MenuItem, type MenuItemProps, type MenuItemEmits } from "@/Menu";
import { useEmitAsProps } from "@/shared";

export interface DropdownMenuItemProps extends MenuItemProps {}
export type DropdownMenuItemEmits = MenuItemEmits;

const props = defineProps<DropdownMenuItemProps>();
const emits = defineEmits<DropdownMenuItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuItem v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuItem>
</template>
