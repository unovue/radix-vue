<script setup lang="ts">
import { MenuItem, type MenuItemProps, type MenuItemEmits } from "@/Menu";
import { useEmitAsProps } from "@/shared";

export interface MenubarItemProps extends MenuItemProps {}
export type MenubarItemEmits = MenuItemEmits;

const props = defineProps<MenubarItemProps>();
const emits = defineEmits<MenubarItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuItem v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuItem>
</template>
