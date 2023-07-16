<script setup lang="ts">
import { inject, onMounted } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import {
  PrimitiveButton,
  type PrimitiveProps,
  usePrimitiveElement,
} from "@/Primitive";

export interface DialogTriggerProps extends PrimitiveProps {}
const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const { primitiveElement, currentElement } = usePrimitiveElement();

onMounted(() => {
  if (injectedValue) {
    injectedValue.triggerButton.value = currentElement.value;
  }
});

const props = defineProps<DialogTriggerProps>();
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
