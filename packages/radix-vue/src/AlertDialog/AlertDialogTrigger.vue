<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./AlertDialogRoot.vue";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);

const triggerElement = ref<HTMLElement>();
onMounted(() => {
  if (injectedValue) {
    injectedValue.triggerButton = triggerElement;
  }
});
</script>

<template>
  <button
    type="button"
    ref="triggerElement"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.openModal"
  >
    <slot />
  </button>
</template>
