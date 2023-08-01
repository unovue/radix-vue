<script setup lang="ts">
import { ALERT_DIALOG_INJECTION_KEY } from "./AlertDialogRoot.vue";
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";
import { inject } from "vue";

export interface AlertDialogOverlayProps extends PrimitiveProps {}
const props = defineProps<AlertDialogOverlayProps>();

const injectedValue = inject(ALERT_DIALOG_INJECTION_KEY);
</script>

<template>
  <PrimitiveDiv
    v-if="injectedValue?.open.value"
    v-bind="props"
    :as-child="props.asChild"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    style="pointer-events: auto"
    data-aria-hidden="true"
    aria-hidden="true"
  >
    <slot />
  </PrimitiveDiv>
</template>
