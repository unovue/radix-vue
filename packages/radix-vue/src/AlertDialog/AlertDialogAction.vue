<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveButton, type PrimitiveProps } from "@/Primitive";
import {
  ALERT_DIALOG_INJECTION_KEY,
  type AlertDialogProvideValue,
} from "./AlertDialogRoot.vue";

export interface AlertDialogActionProps extends PrimitiveProps {}
const props = defineProps<AlertDialogActionProps>();

const injectedValue = inject<AlertDialogProvideValue>(
  ALERT_DIALOG_INJECTION_KEY
);

function handleClick() {
  injectedValue?.closeModal();
  injectedValue?.triggerButton.value?.focus();
}
</script>

<template>
  <PrimitiveButton v-bind="props" type="button" @click="handleClick">
    <slot />
  </PrimitiveButton>
</template>
