<script lang="ts">
import type { PopperContentProps } from "@/Popper";
import type { PrimitiveProps } from "@/Primitive";

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
  > { }

export interface PopoverContentEmit {
  /**
   * Event handler called when focus moves into the component after opening.
   */
  (e: "open"): void;

  /**
   * Event handler called when focus moves to the trigger after closing.
   */
  (e: "close"): void;

  /**
   * Event handler called when the escape key is down.
   */
  (e: "escape-key-down", event: KeyboardEvent): void;

  /**
   * Event handler called when a pointer event occurs outside the bounds of the component.
   */
  (e: "pointer-down-outside", event: PointerEvent): void;

  /**
   * Event handler called when focus moves outside the bounds of the component.
   */
  (e: "interact-outside", event: Event): void;
}
</script>

<script setup lang="ts">
import { PopperContent } from "@/Popper";
import { Primitive, usePrimitiveElement } from "@/Primitive";
import {
  useEventListener,
  useFocusGuards,
  useInjected,
  useModalInteraction,
} from "@/shared";
import { useEmitCancelableEvent } from "@/shared/useEmitCancelableEvent";
import { computed, onMounted } from "vue";
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

const { primitiveElement } = usePrimitiveElement();

const { open, triggerElement, hidePopover, dataState, contentId } = useInjected(
  POPOVER_INJECTION_KEY
);

const emit = defineEmits<PopoverContentEmit>();

useModalInteraction(primitiveElement, { open, triggerElement }, emit);

const disabled = computed(() => !open.value);

useEventListener(
  document.documentElement,
  "click",
  (e) => {
    useEmitCancelableEvent(emit, "pointer-down-outside", hidePopover, e);
    useEmitCancelableEvent(emit, "interact-outside", hidePopover, e);
  },
  { disabled, exclude: [primitiveElement, triggerElement] }
);

useEventListener(
  document.documentElement,
  "focus",
  (e) => {
    console.log("focus");
    useEmitCancelableEvent(emit, "interact-outside", hidePopover, e);
  },
  { disabled, exclude: [primitiveElement, triggerElement] }
);

useEventListener(
  document.documentElement,
  "keydown",
  (e) => {
    if (e.key !== "Escape") return;
    useEmitCancelableEvent(emit, "escape-key-down", hidePopover, e);
  },
  { disabled }
);

onMounted(() => useFocusGuards());
</script>

<template>
  <PopperContent v-if="open" ref="primitiveElement" :side="props.side" :sideOffset="props.sideOffset" :align="props.align"
    :alignOffset="props.alignOffset" :avoidCollisions="props.avoidCollisions" :collisionBoundary="props.collisionBoundary"
    :collisionPadding="props.collisionPadding" :arrowPadding="props.arrowPadding" :sticky="props.sticky"
    :hideWhenDetached="props.hideWhenDetached" style="
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
    ">
    <Primitive :data-state="dataState" :data-side="props.side" :data-align="props.align" :as-child="props.asChild"
      role="tooltip" tabindex="-1" :id="contentId" :as="props.as">
      >>>>>>> ce75f2a ([ModalComposables]: Added composables for modals)
      <slot />
    </Primitive>
  </PopperContent>
</template>
