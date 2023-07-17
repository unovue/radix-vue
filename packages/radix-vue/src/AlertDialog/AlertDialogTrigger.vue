<script setup lang="ts">
import { inject, onMounted } from "vue";
import {
  ALERT_DIALOG_INJECTION_KEY,
  type AlertDialogProvideValue,
} from "./AlertDialogRoot.vue";
import {
  PrimitiveButton,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";

export interface AlertDialogTriggerProps extends PrimitiveProps {}

const injectedValue = inject<AlertDialogProvideValue>(
  ALERT_DIALOG_INJECTION_KEY
);
const { primitiveElement, currentElement } = usePrimitiveElement();

function showErrorInjectedValueNotExist() {
  console.error(
    "Injected value not found, AlertDialogTrigger possibly not wrapped with AlertDialogRoot. Component may not be working properly."
  );
}

onMounted(() => {
  if (injectedValue) {
    injectedValue.triggerButton.value = currentElement.value;
  } else {
    showErrorInjectedValueNotExist();
  }
});

const props = defineProps<AlertDialogTriggerProps>();
</script>

<template>
  <PrimitiveButton
    v-bind="props"
    type="button"
    ref="primitiveElement"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.openModal"
  >
    <slot />
  </PrimitiveButton>
</template>
