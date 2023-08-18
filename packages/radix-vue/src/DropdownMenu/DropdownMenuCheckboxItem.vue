<script setup lang="ts">
import {
  MenuCheckboxItem,
  type MenuCheckboxItemProps,
  type MenuCheckboxItemEmits,
} from "@/Menu";
import { useEmitAsProps } from "@/shared";

export interface DropdownMenuCheckboxItemProps extends MenuCheckboxItemProps {}
export type DropdownMenuCheckboxItemEmits = MenuCheckboxItemEmits;

const props = defineProps<DropdownMenuCheckboxItemProps>();
const emits = defineEmits<DropdownMenuCheckboxItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuCheckboxItem v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuCheckboxItem>
</template>
