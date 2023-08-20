<script setup lang="ts">
import {
  MenuRadioItem,
  type MenuRadioItemProps,
  type MenuRadioItemEmits,
} from "@/Menu";

export interface DropdownMenuRadioItemProps extends MenuRadioItemProps {}
export type DropdownMenuRadioItemEmits = MenuRadioItemEmits;

const props = defineProps<DropdownMenuRadioItemProps>();
const emits = defineEmits<DropdownMenuRadioItemEmits>();
</script>

<template>
  <MenuRadioItem v-bind="{ ...props, ...emits }">
    <slot></slot>
  </MenuRadioItem>
</template>
