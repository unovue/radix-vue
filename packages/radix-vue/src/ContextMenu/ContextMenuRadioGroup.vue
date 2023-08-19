<script setup lang="ts">
import {
  MenuRadioGroup,
  type MenuRadioGroupProps,
  type MenuRadioGroupEmits,
} from "@/Menu";
import { useEmitAsProps } from "@/shared";

export interface ContextMenuRadioGroupProps extends MenuRadioGroupProps {}
export type ContextMenuRadioGroupEmits = MenuRadioGroupEmits;

const props = defineProps<ContextMenuRadioGroupProps>();
const emits = defineEmits<ContextMenuRadioGroupEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuRadioGroup v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuRadioGroup>
</template>
