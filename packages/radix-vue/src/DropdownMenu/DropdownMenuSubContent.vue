<script setup lang="ts">
import {
  MenuSubContent,
  type MenuSubContentEmits,
  type MenuSubContentProps,
} from "@/Menu";

interface DropdownMenuSubContentProps extends MenuSubContentProps {}
interface DropdownMenuSubContentEmits extends MenuSubContentEmits {}

const props = defineProps<DropdownMenuSubContentProps>();
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
