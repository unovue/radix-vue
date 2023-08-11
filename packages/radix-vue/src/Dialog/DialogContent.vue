<script lang="ts">
export interface DialogContentProps extends PrimitiveProps {
  isOpenAutoFocus?: boolean;
  isCloseAutoFocus?: boolean;
  isEscapeKeyDownDefault?: boolean;
  isPointerDownOutsideDefault?: boolean;
  isDisableInteractOutside?: boolean;
}

export interface DialogContentEmit {
  (e: "open"): void;
  (e: "close"): void;
  (e: "escapeKeyDown"): void;
  (e: "pointerDownOutside"): void;
}
</script>

<script setup lang="ts">
import { inject, watchEffect } from "vue";
import { trapFocus } from "@/shared";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { vOnClickOutside } from "@vueuse/components";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const props = withDefaults(defineProps<DialogContentProps>(), {
  isOpenAutoFocus: true,
  isCloseAutoFocus: undefined,
  isEscapeKeyDownDefault: true,
  isPointerDownOutsideDefault: true,
  isDisableInteractOutside: undefined,
});

const emit = defineEmits<DialogContentEmit>();

const { primitiveElement, currentElement } = usePrimitiveElement();

const validDisableInteractOutside = () => {
  return (
    props.isDisableInteractOutside ||
    (injectedValue!.modal && props.isDisableInteractOutside === undefined)
  );
};

const validCloseAutoFocus = () => {
  return (
    props.isCloseAutoFocus ||
    (injectedValue!.modal && props.isCloseAutoFocus === undefined)
  );
};
watchEffect(() => {
  if (!currentElement.value) {
    return;
  }
  if (injectedValue?.open.value) {
    if (props.isOpenAutoFocus) {
      trapFocus(currentElement.value);
    }
    if (validDisableInteractOutside()) {
      setBodyUninteractive();
    }
    if (injectedValue?.modal) {
      window.addEventListener("keydown", lockKeydown);
    }
    window.addEventListener("keydown", handleKeydown);
    emit("open");
  } else {
    setBodyInteractive();
    window.removeEventListener("keydown", lockKeydown);
    window.removeEventListener("keydown", handleKeydown);

    if (validCloseAutoFocus()) {
      injectedValue?.triggerButton.value?.focus();
    }

    emit("close");
  }
});

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
  if (props.isPointerDownOutsideDefault) {
    injectedValue?.closeModal();
  }
  emit("pointerDownOutside");
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
  <Primitive
    :as="as"
    :as-child="props.asChild"
    ref="primitiveElement"
    v-if="injectedValue?.open.value"
    v-on-click-outside="handleOnClickOutside"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    role="dialog"
    tabindex="-1"
    style="pointer-events: auto"
  >
    <slot />
  </Primitive>
</template>
