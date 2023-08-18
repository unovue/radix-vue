<script setup lang="ts">
import {
  MenuRadioGroup,
  type MenuRadioGroupProps,
  type MenuRadioGroupEmits,
} from "@/Menu";
import { useEmitAsProps } from "@/shared";

export interface DropdownMenuRadioGroupProps extends MenuRadioGroupProps {}
export type DropdownMenuRadioGroupEmits = MenuRadioGroupEmits;

const props = defineProps<MenuRadioGroupProps>();
const emits = defineEmits<MenuRadioGroupEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuRadioGroup v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuRadioGroup>
</template>
