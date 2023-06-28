<script lang="ts">
export interface AlertDialogCancelProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./AlertDialogRoot.vue";
import { PrimitiveButton } from "../Primitive";

const props = withDefaults(defineProps<AlertDialogCancelProps>(), {
  asChild: false,
});

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);
</script>

<template>
  <PrimitiveButton
    :asChild="props.asChild ? '' : undefined"
    type="button"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.closeModal"
  >
    <slot />
  </PrimitiveButton>
</template>
