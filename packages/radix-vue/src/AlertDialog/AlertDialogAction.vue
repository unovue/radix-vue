<script lang="ts">
export interface AlertDialogActionProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  ALERT_DIALOG_INJECTION_KEY,
  type AlertDialogProvideValue,
} from "./AlertDialogRoot.vue";

const injectedValue = inject<AlertDialogProvideValue>(
  ALERT_DIALOG_INJECTION_KEY
);
</script>

<template>
  <button
    type="button"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.closeModal"
  >
    <slot />
  </button>
</template>
