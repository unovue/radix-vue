<script setup lang="ts">
import {
  MenuCheckboxItem,
  type MenuCheckboxItemProps,
  type MenuCheckboxItemEmits,
} from "@/Menu";
import { useEmitAsProps } from "@/shared";

export interface MenubarCheckboxItemProps extends MenuCheckboxItemProps {}
export type MenubarCheckboxItemEmits = MenuCheckboxItemEmits;

const props = defineProps<MenubarCheckboxItemProps>();
const emits = defineEmits<MenubarCheckboxItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuCheckboxItem v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuCheckboxItem>
</template>
