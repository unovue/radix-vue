<script lang="ts">
export interface AlertDialogContentProps extends PrimitiveProps {
  forceMount?: boolean;
  //onOpenAutoFocus?: void;
  //onCloseAutoFocus?: void;
  //onEscapeKeyDown?: void;
}
</script>

<script setup lang="ts">
import { inject, watchEffect } from "vue";
import { trapFocus } from "../shared";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./AlertDialogRoot.vue";
import {
  PrimitiveDiv,
  usePrimitiveElement,
  type PrimitiveProps,
} from "../Primitive";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const props = defineProps<AlertDialogContentProps>();

const { primitiveElement, currentElement: dialogContentElement } =
  usePrimitiveElement();

watchEffect(() => {
  if (dialogContentElement.value) {
    if (injectedValue?.open.value) {
      trapFocus(dialogContentElement.value);
      document.querySelector("body")!.style.pointerEvents = "none";
      window.addEventListener("wheel", lockScroll, { passive: false });
      window.addEventListener("keydown", lockKeydown);
    } else {
      document.querySelector("body")!.style.pointerEvents = "";
      window.removeEventListener("wheel", lockScroll);
      window.removeEventListener("keydown", lockKeydown);

      if (injectedValue?.triggerButton.value) {
        injectedValue?.triggerButton.value.focus();
      }
    }
  }
});

function lockScroll(e: WheelEvent) {
  e.preventDefault();
}

function lockKeydown(e: KeyboardEvent) {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    const activeElement = document.activeElement;
    const inputs = ["input", "select", "textarea"];

    if (
      activeElement &&
      inputs.indexOf(activeElement.tagName.toLowerCase()) === -1
    ) {
      e.preventDefault();
    }
  }
  if (e.key === "Escape") {
    injectedValue?.closeModal();
  }
}
</script>

<template>
  <PrimitiveDiv
    v-if="injectedValue?.open.value"
    ref="primitiveElement"
    :as-child="props.asChild"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    role="dialog"
    tabindex="-1"
    style="pointer-events: auto"
  >
    <slot />
  </PrimitiveDiv>
</template>
