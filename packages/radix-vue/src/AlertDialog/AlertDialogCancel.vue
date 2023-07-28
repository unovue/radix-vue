<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveButton, type PrimitiveProps } from "@/Primitive";
import { ALERT_DIALOG_INJECTION_KEY } from "./AlertDialogRoot.vue";

export interface AlertDialogCancelProps extends PrimitiveProps {}
const props = defineProps<AlertDialogCancelProps>();

const injectedValue = inject(ALERT_DIALOG_INJECTION_KEY);
</script>

<template>
  <PrimitiveButton
    v-bind="props"
    type="button"
    @click="injectedValue?.closeModal()"
  >
    <slot />
  </PrimitiveButton>
</template>
