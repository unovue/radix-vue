<script setup lang="ts">
import { inject, onMounted } from "vue";
import { ALERT_DIALOG_INJECTION_KEY } from "./AlertDialogRoot.vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";

export interface AlertDialogTriggerProps extends PrimitiveProps {}

const injectedValue = inject(ALERT_DIALOG_INJECTION_KEY);
const { primitiveElement, currentElement } = usePrimitiveElement();

onMounted(() => {
  if (injectedValue) {
    injectedValue.triggerButton.value = currentElement.value;
  } else {
    console.error(
      "Injected value not found, AlertDialogTrigger possibly not wrapped with AlertDialogRoot. Component may not be working properly."
    );
  }
});

const props = withDefaults(defineProps<AlertDialogTriggerProps>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    v-bind="props"
    :type="props.as === 'button' ? 'button' : undefined"
    ref="primitiveElement"
    aria-haspopup="dialog"
    :aria-controls="injectedValue?.contentId"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.openModal"
  >
    <slot />
  </Primitive>
</template>
