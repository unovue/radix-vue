<script lang="ts">
export interface DialogTriggerProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import { PrimitiveButton, usePrimitiveElement } from "../Primitive";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const props = withDefaults(defineProps<DialogTriggerProps>(), {
  asChild: false,
});

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();

onMounted(() => {
  if (injectedValue) {
    injectedValue.triggerButton = triggerElement;
  }
});
</script>

<template>
  <PrimitiveButton
    :asChild="props.asChild"
    type="button"
    ref="primitiveElement"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.openModal"
  >
    <slot />
  </PrimitiveButton>
</template>
