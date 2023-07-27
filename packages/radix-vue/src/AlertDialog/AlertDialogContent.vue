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
    document.body.style.pointerEvents = "";

    window.removeEventListener("wheel", lockScroll);
    window.removeEventListener("keydown", lockKeydown);
    window.removeEventListener("keydown", handleKeydown);

    if (props.isCloseAutoFocus) {
      injectedValue?.triggerButton.value?.focus();
    }

    emit("close");
  });

  if (!currentElement.value) {
    return;
  }

  if (injectedValue?.open.value) {
    if (props.isOpenAutoFocus) {
      trapFocus(currentElement.value);
    }
    document.body.style.pointerEvents = "none";

    window.addEventListener("wheel", lockScroll, { passive: false });
    window.addEventListener("keydown", lockKeydown);
    window.addEventListener("keydown", handleKeydown);
    emit("open");
  }
});

const lockScroll = (e: WheelEvent) => e.preventDefault();

const lockKeydown = (e: KeyboardEvent) => {
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

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    if (props.isEscapeKeyDownDefault) {
      e.preventDefault();
      injectedValue?.closeModal();
      if (props.isCloseAutoFocus) {
        injectedValue?.triggerButton.value?.focus();
      }
    }
    emit("escapeKeyDown");
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
