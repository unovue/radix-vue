<script lang="ts">
export interface AlertDialogCancelProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  ALERT_DIALOG_INJECTION_KEY,
  type AlertDialogProvideValue,
} from "./AlertDialogRoot.vue";
import { PrimitiveButton } from "../Primitive";

const props = withDefaults(defineProps<AlertDialogCancelProps>(), {
  asChild: false,
});

const injectedValue = inject<AlertDialogProvideValue>(
  ALERT_DIALOG_INJECTION_KEY
);
</script>

<template>
  <PrimitiveButton
    :asChild="props.asChild"
    type="button"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.closeModal"
  >
    <slot />
  </PrimitiveButton>
</template>
