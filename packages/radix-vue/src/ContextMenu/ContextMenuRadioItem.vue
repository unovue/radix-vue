<script setup lang="ts">
import {
  MenuRadioItem,
  type MenuRadioItemProps,
  type MenuItemEmits,
} from "@/Menu";
import { useEmitAsProps } from "@/shared";

export interface ContextMenuRadioItemProps extends MenuRadioItemProps {}
export type ContextMenuRadioItemEmits = MenuItemEmits;

const props = defineProps<ContextMenuRadioItemProps>();
const emits = defineEmits<ContextMenuRadioItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuRadioItem v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuRadioItem>
</template>
