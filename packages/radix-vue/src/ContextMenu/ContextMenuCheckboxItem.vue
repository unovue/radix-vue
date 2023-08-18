<script setup lang="ts">
import {
  MenuCheckboxItem,
  type MenuCheckboxItemProps,
  type MenuCheckboxItemEmits,
} from "@/Menu";
import { useEmitAsProps } from "@/shared";

export interface ContextMenuCheckboxItemProps extends MenuCheckboxItemProps {}
export type ContextMenuCheckboxItemEmits = MenuCheckboxItemEmits;

const props = defineProps<ContextMenuCheckboxItemProps>();
const emits = defineEmits<ContextMenuCheckboxItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuCheckboxItem v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuCheckboxItem>
</template>
