<script lang="ts">
export interface AlertDialogContentProps extends PrimitiveProps {
  isOpenAutoFocus?: boolean;
  isCloseAutoFocus?: boolean;
  isEscapeKeyDownDefault?: boolean;
}

export interface AlertDialogContentEmit {
  (e: "open"): void;
  (e: "close"): void;
  (e: "escapeKeyDown"): void;
}
</script>

<script setup lang="ts">
import { inject, watchEffect } from "vue";
import { trapFocus } from "@/shared";
import {
  ALERT_DIALOG_INJECTION_KEY,
  type AlertDialogProvideValue,
} from "./AlertDialogRoot.vue";
import {
  PrimitiveDiv,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { vOnClickOutside } from "@vueuse/components";

const injectedValue = inject<AlertDialogProvideValue>(
  ALERT_DIALOG_INJECTION_KEY
);

const props = withDefaults(defineProps<AlertDialogContentProps>(), {
  isOpenAutoFocus: true,
  isCloseAutoFocus: undefined,
  isEscapeKeyDownDefault: true,
});

const emit = defineEmits<AlertDialogContentEmit>();

const { primitiveElement, currentElement } = usePrimitiveElement();

const validCloseAutoFocus = () => {
  return props.isCloseAutoFocus;
};
watchEffect(() => {
  if (!currentElement.value) {
    return;
  }
  if (injectedValue?.open.value) {
    if (props.isOpenAutoFocus) {
      trapFocus(currentElement.value);
    }
    setBodyUninteractive();
    window.addEventListener("wheel", lockScroll, { passive: false });
    window.addEventListener("keydown", lockKeydown);
    window.addEventListener("keydown", handleKeydown);
    emit("open");
  } else {
    setBodyInteractive();
    window.removeEventListener("wheel", lockScroll);
    window.removeEventListener("keydown", lockKeydown);
    window.removeEventListener("keydown", handleKeydown);

    if (validCloseAutoFocus()) {
      injectedValue?.triggerButton.value?.focus();
    }

    emit("close");
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

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    if (props.isEscapeKeyDownDefault) {
      e.preventDefault();
      injectedValue?.closeModal();
      if (validCloseAutoFocus()) {
        injectedValue?.triggerButton.value?.focus();
      }
    }
    emit("escapeKeyDown");
  }
}
</script>

<template>
  <PrimitiveDiv
    v-if="injectedValue?.open.value"
    ref="primitiveElement"
    v-on-click-outside="handleOnClickOutside"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    role="dialog"
    tabindex="-1"
    style="pointer-events: auto"
  >
    <slot />
  </PrimitiveDiv>
</template>
