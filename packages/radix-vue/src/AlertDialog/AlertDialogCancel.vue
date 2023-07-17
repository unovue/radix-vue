<script lang="ts">
export interface AlertDialogCancelProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./AlertDialogRoot.vue";
import { PrimitiveButton, type PrimitiveProps } from "../Primitive";

const props = defineProps<AlertDialogCancelProps>();

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);
</script>

<template>
  <PrimitiveButton
    :as-child="props.asChild"
    type="button"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.closeModal"
  >
    <slot />
  </PrimitiveButton>
</template>
