<script setup lang="ts">
import {
  type PrimitiveProps,
  PrimitiveDiv,
  usePrimitiveElement,
} from "@/Primitive";
import {
  type PointerDownOutsideEvent,
  type FocusOutsideEvent,
  usePointerDownOutside,
  useFocusOutside,
} from "./utils";
import { computed, nextTick, watchEffect } from "vue";
import { onKeyStroke } from "@vueuse/core";

export interface DismissableLayerProps extends PrimitiveProps {
  /**
   * When `true`, hover/focus/click interactions will be disabled on elements outside
   * the `DismissableLayer`. Users will need to click twice on outside elements to
   * interact with them: once to close the `DismissableLayer`, and again to trigger the element.
   */
  disableOutsidePointerEvents?: boolean;
}

export interface DismissableLayerEmits {
  /**
   * Event handler called when the escape key is down.
   * Can be prevented.
   */
  (e: "escapeKeyDown", event: KeyboardEvent): void;
  /**
   * Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.
   * Can be prevented.
   */
  (e: "pointerDownOutside", event: PointerDownOutsideEvent): void;
  /**
   * Event handler called when the focus moves outside of the `DismissableLayer`.
   * Can be prevented.
   */
  (e: "focusOutside", event: FocusOutsideEvent): void;
  /**
   * Event handler called when an interaction happens outside the `DismissableLayer`.
   * Specifically, when a `pointerdown` event happens outside or focus moves outside of it.
   * Can be prevented.
   */
  (
    e: "interactOutside",
    event: PointerDownOutsideEvent | FocusOutsideEvent
  ): void;
  /**
   * Handler called when the `DismissableLayer` should be dismissed
   */
  (e: "dismiss"): void;
}

const props = withDefaults(defineProps<DismissableLayerProps>(), {
  disableOutsidePointerEvents: false,
});

const emits = defineEmits<DismissableLayerEmits>();

const { primitiveElement, currentElement: layerElement } =
  usePrimitiveElement();
const ownerDocument = computed(
  () => layerElement.value?.ownerDocument ?? globalThis.document
);

const pointerDownOutside = usePointerDownOutside(async (event) => {
  emits("pointerDownOutside", event);
  emits("interactOutside", event);
  await nextTick();
  if (!event.defaultPrevented) emits("dismiss");
}, ownerDocument.value);

const focusOutside = useFocusOutside((event) => {
  emits("focusOutside", event);
  emits("interactOutside", event);
  if (!event.defaultPrevented) emits("dismiss");
}, ownerDocument.value);

onKeyStroke("Escape", (event) => {
  emits("escapeKeyDown", event);
  if (!event.defaultPrevented) {
    event.preventDefault();
    emits("dismiss");
  }
});

watchEffect((cleanupFn) => {
  let originalBodyPointerEvents: string;
  if (props.disableOutsidePointerEvents) {
    originalBodyPointerEvents = ownerDocument.value.body.style.pointerEvents;
    ownerDocument.value.body.style.pointerEvents = "none";
  }
  cleanupFn(() => {
    if (props.disableOutsidePointerEvents) {
      ownerDocument.value.body.style.pointerEvents = originalBodyPointerEvents;
    }
  });
});
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    @focus.capture="focusOutside.onFocusCapture"
    @blur.capture="focusOutside.onBlurCapture"
    @pointerdown.capture="pointerDownOutside.onPointerDownCapture"
  >
    <slot></slot>
  </PrimitiveDiv>
</template>
