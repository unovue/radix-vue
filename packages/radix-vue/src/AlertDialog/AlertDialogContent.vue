<script lang="ts">
export interface AlertDialogContentProps extends PrimitiveProps {
  isOpenAutoFocus?: boolean;
  isCloseAutoFocus?: boolean;
  isEscapeKeyDownDefault?: boolean;
}

export interface AlertDialogContentEmits {
  (e: "open"): void;
  (e: "close"): void;
  (e: "escapeKeyDown"): void;
}
</script>

<script setup lang="ts">
import { inject, watchEffect } from "vue";
import { trapFocus } from "@/shared";
import { ALERT_DIALOG_INJECTION_KEY } from "./AlertDialogRoot.vue";
import {
  PrimitiveDiv,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";

const injectedValue = inject(ALERT_DIALOG_INJECTION_KEY);

const props = withDefaults(defineProps<AlertDialogContentProps>(), {
  isOpenAutoFocus: true,
  isCloseAutoFocus: undefined,
  isEscapeKeyDownDefault: true,
});

const emit = defineEmits<AlertDialogContentEmits>();

const { primitiveElement, currentElement } = usePrimitiveElement();

watchEffect((onCleanup) => {
  onCleanup(() => {
    if (props.isCloseAutoFocus) {
      injectedValue?.triggerButton.value?.focus();
    }

    window.removeEventListener("keydown", handleKeydown);
    emit("close");
  });

  if (!currentElement.value) {
    return;
  }

  if (injectedValue?.open.value) {
    if (props.isOpenAutoFocus) {
      trapFocus(currentElement.value);
    }

    window.addEventListener("keydown", handleKeydown);
    emit("open");
  }
});

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    if (props.isEscapeKeyDownDefault) {
      e.preventDefault();
      injectedValue?.closeModal();
      if (props.isCloseAutoFocus) {
        injectedValue?.triggerButton.value?.focus();
      }
    }
    return emit("escapeKeyDown");
  }

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
};
</script>

<template>
  <PrimitiveDiv
    v-if="injectedValue?.open.value"
    ref="primitiveElement"
    :id="injectedValue?.contentId"
    :aria-labelledby="injectedValue?.titleId"
    :aria-describedby="injectedValue?.descriptionId"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    role="alertdialog"
    tabindex="-1"
    style="pointer-events: auto"
  >
    <slot />
  </PrimitiveDiv>
</template>
