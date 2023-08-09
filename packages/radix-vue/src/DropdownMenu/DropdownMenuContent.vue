<script setup lang="ts">
import { inject, ref } from "vue";
import {
  MenuContent,
  type MenuContentEmits,
  type MenuContentProps,
} from "@/Menu";
import { DROPDOWN_MENU_INJECTION_KEY } from "./DropdownMenuRoot.vue";
import { useEmitAsProps } from "@/shared";

export interface DropdownMenuContentProps extends MenuContentProps {}
export type DropdownMenuContentEmits = MenuContentEmits;

const props = defineProps<DropdownMenuContentProps>();
const emits = defineEmits<DropdownMenuContentEmits>();

const context = inject(DROPDOWN_MENU_INJECTION_KEY);

const hasInteractedOutsideRef = ref(false);

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuContent
    v-bind="{ ...props, ...emitsAsProps }"
    :id="context?.contentId"
    :aria-labelledby="context?.triggerId"
    @close-auto-focus="
      (event) => {
        emits('closeAutoFocus', event);
        if (event.defaultPrevented) return;
        if (!hasInteractedOutsideRef) context?.triggerElement.value?.focus();
        hasInteractedOutsideRef = false;

        // Always prevent auto focus because we either focus manually or want user agent focus
        event.preventDefault();
      }
    "
    @interact-outside="(event) => {
      emits('interactOutside', event)
      if(event.defaultPrevented)  return
      
      const originalEvent = event.detail.originalEvent as PointerEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!context?.modal.value || isRightClick) hasInteractedOutsideRef = true;
    }"
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
  </MenuContent>
</template>
