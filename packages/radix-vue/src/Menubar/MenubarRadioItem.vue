<script setup lang="ts">
import {
  MenuRadioItem,
  type MenuRadioItemProps,
  type MenuRadioItemEmits,
} from "@/Menu";

export interface MenubarRadioItemProps extends MenuRadioItemProps {}
export type MenubarRadioItemEmits = MenuRadioItemEmits;

const props = defineProps<MenuRadioItemProps>();
const emits = defineEmits<MenuRadioItemEmits>();
</script>

<template>
  <MenuRadioItem v-bind="{ ...props, ...emits }">
    <slot></slot>
  </MenuRadioItem>
</template>
