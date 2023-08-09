<script setup lang="ts">
import { inject, ref } from "vue";
import { CONTEXT_MENU_INJECTION_KEY } from "./ContextMenuRoot.vue";
import {
  MenuContent,
  type MenuContentEmits,
  type MenuContentProps,
} from "@/Menu";

export interface ContextMenuContentProps
  extends Omit<MenuContentProps, "side" | "sideOffset" | "align"> {}
export interface ContextMenuContentEmits extends MenuContentEmits {}

const props = withDefaults(defineProps<ContextMenuContentProps>(), {
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  updatePositionStrategy: "optimized",
  prioritizePosition: false,
});
const emits = defineEmits<ContextMenuContentEmits>();

const context = inject(CONTEXT_MENU_INJECTION_KEY);
const hasInteractedOutside = ref(false);
</script>

<template>
  <MenuContent
    v-bind="props"
    :side="'right'"
    :sideOffset="2"
    :align="'start'"
    @closeAutoFocus="
      (event) => {
        emits('closeAutoFocus', event);

        if (!event.defaultPrevented && hasInteractedOutside) {
          event.preventDefault();
        }
        hasInteractedOutside = false;
      }
    "
    @interactOutside="
      (event) => {
        emits('interactOutside', event);
        if (!event.defaultPrevented && !context?.modal.value)
          hasInteractedOutside = true;
      }
    "
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
  </MenuContent>
</template>
