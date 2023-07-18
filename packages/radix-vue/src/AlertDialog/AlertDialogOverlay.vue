<script setup lang="ts">
import { inject } from "vue";
import {
  ALERT_DIALOG_INJECTION_KEY,
  type AlertDialogProvideValue,
} from "./AlertDialogRoot.vue";
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";

export interface AlertDialogOverlayProps extends PrimitiveProps {}
const props = defineProps<AlertDialogOverlayProps>();

const injectedValue = inject<AlertDialogProvideValue>(
  ALERT_DIALOG_INJECTION_KEY
);
</script>

<template>
  <PrimitiveDiv
    v-bind="props"
    v-if="injectedValue?.open.value"
    :as-child="props.asChild"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    style="pointer-events: auto"
    data-aria-hidden="true"
    aria-hidden="true"
  >
    <slot />
  </PrimitiveDiv>
</template>
