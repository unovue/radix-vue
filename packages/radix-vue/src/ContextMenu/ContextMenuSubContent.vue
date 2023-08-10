<script setup lang="ts">
import {
  MenuSubContent,
  type MenuSubContentEmits,
  type MenuSubContentProps,
} from "@/Menu";
import { PopperContentPropsDefaultValue } from "@/Popper";
import { useEmitAsProps } from "@/shared";

interface ContextMenuSubContentProps extends MenuSubContentProps {}
type ContextMenuSubContentEmits = MenuSubContentEmits;

const props = withDefaults(defineProps<ContextMenuSubContentProps>(), {
  ...PopperContentPropsDefaultValue,
});

const emits = defineEmits<ContextMenuSubContentEmits>();
const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuSubContent
    v-bind="{ ...props, ...emitsAsProps }"
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
