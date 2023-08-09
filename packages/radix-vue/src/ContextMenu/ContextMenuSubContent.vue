<script setup lang="ts">
import {
  MenuSubContent,
  type MenuSubContentEmits,
  type MenuSubContentProps,
} from "@/Menu";

interface ContextMenuSubContentProps extends MenuSubContentProps {}
interface ContextMenuSubContentEmits extends MenuSubContentEmits {}

const props = defineProps<ContextMenuSubContentProps>();
const emits = defineEmits<ContextMenuSubContentEmits>();
</script>

<template>
  <MenuSubContent
    v-bind="{ ...props, ...emits }"
    :style="{
      '--radix-context-menu-content-transform-origin':
        'var(--radix-popper-transform-origin)',
      '--radix-context-menu-content-available-width':
        'var(--radix-popper-available-width)',
      '--radix-context-menu-content-available-height':
        'var(--radix-popper-available-height)',
      '--radix-context-menu-trigger-width': 'var(--radix-popper-anchor-width)',
      '--radix-context-menu-trigger-height':
        'var(--radix-popper-anchor-height)',
    }"
  >
    <slot></slot>
  </MenuSubContent>
</template>
