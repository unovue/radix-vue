<script setup lang="ts">
import {
  MenuSubContent,
  type MenuSubContentEmits,
  type MenuSubContentProps,
} from "@/Menu";
import { PopperContentPropsDefaultValue } from "@/Popper";

export interface DropdownMenuSubContentProps extends MenuSubContentProps {}
export type DropdownMenuSubContentEmits = MenuSubContentEmits;

const props = withDefaults(defineProps<DropdownMenuSubContentProps>(), {
  ...PopperContentPropsDefaultValue,
});
const emits = defineEmits<DropdownMenuSubContentEmits>();
</script>

<template>
  <MenuSubContent
    v-bind="{ ...props, ...emits }"
    :style="{
      '--radix-dropdown-menu-content-transform-origin':
        'var(--radix-popper-transform-origin)',
      '--radix-dropdown-menu-content-available-width':
        'var(--radix-popper-available-width)',
      '--radix-dropdown-menu-content-available-height':
        'var(--radix-popper-available-height)',
      '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
      '--radix-dropdown-menu-trigger-height':
        'var(--radix-popper-anchor-height)',
    }"
  >
    <slot></slot>
  </MenuSubContent>
</template>
