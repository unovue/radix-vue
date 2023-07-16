<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveButton, type PrimitiveProps } from "@/Primitive";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";

export interface DialogCloseProps extends PrimitiveProps {}
const props = defineProps<DialogCloseProps>();

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

function handleClick() {
  injectedValue?.closeModal();
  injectedValue?.triggerButton.value?.focus();
}
</script>

<template>
  <PrimitiveButton
    v-bind="props"
    type="button"
    aria-label="Close"
    @click="handleClick"
  >
    <slot />
  </PrimitiveButton>
</template>
