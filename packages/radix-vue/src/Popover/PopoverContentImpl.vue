<script setup lang="ts">
import { PopperContent, type PopperContentProps } from "@/Popper";
import {
  DismissableLayer,
  type DismissableLayerEmits,
  type DismissableLayerProps,
} from "@/DismissableLayer";
import { FocusScope, type FocusScopeProps } from "@/FocusScope";
import { useFocusGuards } from "@/shared";
import { inject } from "vue";
import { POPOVER_INJECTION_KEY } from "./PopoverRoot.vue";

export interface PopoverContentImplProps
  extends PopperContentProps,
    DismissableLayerProps {
  /**
   * Whether focus should be trapped within the `MenuContent`
   * (default: false)
   */
  trapFocus?: FocusScopeProps["trapped"];
}

export type PopoverContentImplEmits = DismissableLayerEmits & {
  /**
   * Event handler called when auto-focusing on open.
   * Can be prevented.
   */
  (e: "openAutoFocus", event: Event): void;
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  (e: "closeAutoFocus", event: Event): void;
};

defineProps<PopoverContentImplProps>();
const emits = defineEmits<PopoverContentImplEmits>();

const context = inject(POPOVER_INJECTION_KEY);
useFocusGuards();
</script>

<template>
  <FocusScope
    asChild
    loop
    :trapped="trapFocus"
    @mount-auto-focus="emits('openAutoFocus', $event)"
    @unmount-auto-focus="emits('closeAutoFocus', $event)"
  >
    <DismissableLayer
      asChild
      :disable-outside-pointer-events="disableOutsidePointerEvents"
      @pointer-down-outside="emits('pointerDownOutside', $event)"
      @interact-outside="emits('interactOutside', $event)"
      @escape-key-down="emits('escapeKeyDown', $event)"
      @focus-outside="emits('focusOutside', $event)"
      @dismiss="context?.onOpenChange(false)"
    >
      <PopperContent
        :data-state="context?.open.value ? 'open' : 'closed'"
        role="dialog"
        :id="context?.contentId"
        :style="{
          '--radix-popover-content-transform-origin':
            'var(--radix-popper-transform-origin)',
          '--radix-popover-content-available-width':
            'var(--radix-popper-available-width)',
          '--radix-popover-content-available-height':
            'var(--radix-popper-available-height)',
          '--radix-popover-trigger-width': 'var(--radix-popper-anchor-width)',
          '--radix-popover-trigger-height': 'var(--radix-popper-anchor-height)',
        }"
      >
        <slot></slot>
      </PopperContent>
    </DismissableLayer>
  </FocusScope>
</template>
