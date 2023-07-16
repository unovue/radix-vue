<script lang="ts">
export interface DialogContentProps {
  asChild?: boolean;
  forceMount?: boolean;
  //onOpenAutoFocus?: void;
  //onCloseAutoFocus?: void;
  //onEscapeKeyDown?: void;
}
</script>

<script setup lang="ts">
import { inject, watchEffect } from "vue";
import { trapFocus } from "@/shared";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { vOnClickOutside } from "@vueuse/components";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const props = withDefaults(defineProps<DialogContentProps>(), {
  asChild: false,
});

const { primitiveElement, currentElement } = usePrimitiveElement();

watchEffect(() => {
  if (currentElement.value) {
    if (injectedValue?.open.value) {
      trapFocus(currentElement.value);
      if (injectedValue?.modal) {
        setBodyUninteractive();
        window.addEventListener("wheel", lockScroll, { passive: false });
        window.addEventListener("keydown", lockKeydown);
      }
      window.addEventListener("keydown", closeOnEscape);
    } else {
      setBodyInteractive();
      window.removeEventListener("wheel", lockScroll);
      window.removeEventListener("keydown", lockKeydown);
      window.removeEventListener("keydown", closeOnEscape);

      if (injectedValue?.triggerButton.value && injectedValue?.modal) {
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
}

function setBodyUninteractive() {
  document.querySelector("body")!.style.pointerEvents = "none";
}

function setBodyInteractive() {
  document.querySelector("body")!.style.pointerEvents = "";
}

function handleOnClickOutside() {
  injectedValue?.closeModal();
}

function closeOnEscape(e: KeyboardEvent) {
  if (e.key === "Escape") {
    e.preventDefault();
    injectedValue?.closeModal();
    if (injectedValue?.triggerButton.value) {
      injectedValue?.triggerButton.value.focus();
    }
  }
}
</script>

<template>
  <PrimitiveDiv
    :asChild="props.asChild"
    ref="primitiveElement"
    v-if="injectedValue?.open.value"
    v-on-click-outside="handleOnClickOutside"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    role="dialog"
    tabindex="-1"
    style="pointer-events: auto"
  >
    <slot />
  </PrimitiveDiv>
</template>
