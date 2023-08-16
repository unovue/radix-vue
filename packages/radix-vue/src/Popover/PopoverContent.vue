<script lang="ts">
import type {
  DismissableLayerEmits,
  DismissableLayerProps,
} from "@/DismissableLayer";
import type { PopperContentProps } from "@/Popper";
import type { PrimitiveProps } from "@/Primitive";

export interface PopoverContentProps
  extends PrimitiveProps,
    DismissableLayerProps,
    Pick<
      PopperContentProps,
      | "side"
      | "sideOffset"
      | "align"
      | "alignOffset"
      | "avoidCollisions"
      | "collisionBoundary"
      | "collisionPadding"
      | "arrowPadding"
      | "sticky"
      | "hideWhenDetached"
    > {}

export type PopoverContentEmit = DismissableLayerEmits & {
  (e: "openAutoFocus", event: Event): void;
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  (e: "closeAutoFocus", event: Event): void;
};
</script>

<script setup lang="ts">
import { DismissableLayer } from "@/DismissableLayer";
import { FocusScope } from "@/FocusScope";
import { PopperContent } from "@/Popper";
import { usePrimitiveElement } from "@/Primitive";
import { useFocusGuards, useInjected } from "@/shared";
import { POPOVER_INJECTION_KEY } from "./PopoverRoot.vue";

const props = withDefaults(defineProps<PopoverContentProps>(), {
  asChild: false,
  side: "bottom",
  sideOffset: 0,
  align: "center",
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  arrowPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
});

const emits = defineEmits<PopoverContentEmit>();

const { primitiveElement, currentElement } = usePrimitiveElement();

const { open, dataState, contentId } = useInjected(POPOVER_INJECTION_KEY);

useFocusGuards();

const handleMountAutoFocus = async (event: Event) => {
  emits("openAutoFocus", event);

  setTimeout(() => {
    currentElement.value?.focus();

    // only focus first item when using keyboard
    // if (isUsingKeyboardRef.value && !event.defaultPrevented) {
    //   event.preventDefault();
    // }
  }, 0);
};
</script>

<template>
  <FocusScope
    v-if="open"
    as-child
    @mountAutoFocus="handleMountAutoFocus"
    @unmountAutoFocus="emits('closeAutoFocus', $event)"
  >
    <DismissableLayer
      as-child
      :disableOutsidePointerEvents="disableOutsidePointerEvents"
      @escapeKeyDown="emits('escapeKeyDown', $event)"
      @pointerDownOutside="emits('pointerDownOutside', $event)"
      @focusOutside="emits('focusOutside', $event)"
      @interactOutside="emits('interactOutside', $event)"
      @dismiss="emits('dismiss')"
    >
      <PopperContent
        ref="primitiveElement"
        :data-state="dataState"
        :data-side="props.side"
        :data-align="props.align"
        tabindex="-1"
        :side="props.side"
        :sideOffset="props.sideOffset"
        :id="contentId"
        :align="props.align"
        :alignOffset="props.alignOffset"
        :avoidCollisions="props.avoidCollisions"
        :collisionBoundary="props.collisionBoundary"
        :collisionPadding="props.collisionPadding"
        :arrowPadding="props.arrowPadding"
        role="tooltip"
        :as="as"
        :as-child="props.asChild"
        aria-orientation="vertical"
        data-radix-menu-content
        :sticky="props.sticky"
        :hideWhenDetached="props.hideWhenDetached"
        style="
          --radix-popover-content-transform-origin: var(
            --radix-popper-transform-origin
          );
          --radix-popover-content-available-width: var(
            --radix-popper-available-width
          );
          --radix-popover-content-available-height: var(
            --radix-popper-available-height
          );
          --radix-popover-trigger-width: var(--radix-popper-anchor-width);
          --radix-popover-trigger-height: var(--radix-popper-anchor-height);
        "
      >
        <slot />
      </PopperContent>
    </DismissableLayer>
  </FocusScope>
</template>
