<script setup lang="ts">
import { inject, onMounted } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from "@/Primitive";

export interface DialogTriggerProps extends PrimitiveProps {}

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);
const { primitiveElement, currentElement } = usePrimitiveElement();

function showErrorInjectedValueNotExist() {
  console.error(
    "Injected value not found, DialogTrigger possibly not wrapped with DialogRoot. Component may not be working properly."
  );
}

onMounted(() => {
  if (injectedValue) {
    injectedValue.triggerButton.value = currentElement.value;
  } else {
    showErrorInjectedValueNotExist();
  }
});

const props = withDefaults(defineProps<DialogTriggerProps>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    ref="primitiveElement"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.openModal"
  >
    <slot />
  </Primitive>
</template>
