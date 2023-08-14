<script lang="ts">
import type { PopperContentProps } from "@/Popper";

export interface PopoverContentProps
  extends PrimitiveProps,
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
  > {
  /**
   * Whether or not prevent default be called on the pointerDownOutside event.
   *
   * @default true
   */
  onOpenAutoFocus?: MaybeRef<boolean>;

  /**
   * Whether or not prevent default be called on the focusOutside event.
   */
  onCloseAutoFocus?: MaybeRef<boolean>;

  /**
   * Whether or not prevent default be called on the escapeKeyDown event.
   */
  onEscapeKeyDown?: MaybeRef<boolean>;

  /**
   * Whether or not prevent default be called on the pointerDownOutside event.
   */
  onPointerDownOutside?: MaybeRef<boolean>;

  /**
   * Whether or not prevent default be called on the focusOutside event.
   */
  onInteractOutside?: MaybeRef<boolean>;
}

export interface PopoverContentEmit {
  /**
   * Event handler called when focus moves into the component after opening.
   */
  (e: "openAutoFocus", event: Event): void;

  /**
   * Event handler called when focus moves to the trigger after closing.
   */
  (e: "closeAutoFocus", event: Event): void;

  /**
   * Event handler called when the escape key is down.
   */
  (e: "escapeKeyDown", event: KeyboardEvent): void;

  /**
   * Event handler called when a pointer event occurs outside the bounds of the component.
   */
  (e: "pointerDownOutside", event: PointerEvent): void;

  /**
   * Event handler called when focus moves outside the bounds of the component.
   */
  (e: "focusOutside", event: Event): void;

  /**
   * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component.
   */
  (e: "interactOutside", event: Event): void;
}
</script>

<script setup lang="ts">
import { PopperContent } from "@/Popper";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { trapFocus } from "@/shared";
import { onClickOutside } from "@vueuse/core";
import { inject, watch, watchEffect, type MaybeRef } from "vue";
import { POPOVER_INJECTION_KEY } from "./PopoverRoot.vue";

const injectedValue = inject(POPOVER_INJECTION_KEY);

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
  onOpenAutoFocus: true,
  onCloseAutoFocus: false,
  onEscapeKeyDown: false,
  onPointerDownOutside: true,
  onInteractOutside: false,
});

const { primitiveElement, currentElement: popoverContentElement } =
  usePrimitiveElement();

watchEffect(() => {
  if (!props.onOpenAutoFocus) return;

  if (popoverContentElement.value && injectedValue?.open.value) {
    trapFocus(popoverContentElement.value!);
  } else if (injectedValue?.triggerElement.value) {
    injectedValue?.triggerElement.value.focus();
  }
});

const emit = defineEmits<PopoverContentEmit>();

let onClickOutsideCleanup: (() => void) | undefined;

watch(
  () => props.onPointerDownOutside,
  () => {
    if (props.onPointerDownOutside) {
      onClickOutsideCleanup = onClickOutside(popoverContentElement, (e) => {
        emit("pointerDownOutside", e);
      });
    } else {
      onClickOutsideCleanup?.();
    }
  },
  {
    immediate: true,
    flush: "post",
  }
);

function onEscapeKeyDownFn(event: KeyboardEvent) {
  injectedValue?.hidePopover();
  emit("escapeKeyDown", event);
}
</script>

<template>
  <PopperContent v-if="injectedValue?.open.value" ref="primitiveElement" v-bind="props" style="
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
    " @keydown.esc="props.onEscapeKeyDown && onEscapeKeyDownFn($event)">
    <Primitive :data-state="injectedValue?.dataState.value" :data-side="props.side" :data-align="props.align"
      :as-child="props.asChild" role="tooltip" tabindex="-1" :id="injectedValue?.contentId" :as="props.as">
      <slot />
    </Primitive>
  </PopperContent>
</template>
