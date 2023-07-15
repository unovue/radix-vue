<script lang="ts">
export interface DialogTriggerProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./DialogRoot.vue";
import { PrimitiveButton, usePrimitiveElement } from "../Primitive";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const triggerElement = ref<HTMLElement>();

onMounted(() => {
  injectedValue.triggerButton.value = triggerElement.value;
});

withDefaults(defineProps<DialogTriggerProps>(),{
  asChild: false,
})
</script>

<template>
  <PrimitiveButton
    :asChild="asChild"
    type="button"
    ref="primitiveElement"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.openModal"
  >
    <slot />
  </PrimitiveButton>
</template>
