<script lang="ts">
export interface DialogContentProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject, watchEffect } from "vue";
import { trapFocus } from "../shared";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import { onClickOutside } from "@vueuse/core";
import { PrimitiveDiv, usePrimitiveElement } from "../Primitive";

const props = withDefaults(defineProps<DialogContentProps>(), {
  asChild: false,
});

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const { primitiveElement, currentElement: dialogContentElement } =
  usePrimitiveElement();

onClickOutside(dialogContentElement, onPointerDownOutside);

function onPointerDownOutside() {
  alert("click outside!");
}

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
    :asChild="props.asChild"
    ref="primitiveElement"
    v-if="injectedValue?.open.value"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    role="dialog"
    tabindex="-1"
    style="pointer-events: auto"
  >
    <slot />
  </PrimitiveDiv>
</template>
