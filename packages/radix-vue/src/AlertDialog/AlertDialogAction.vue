<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./AlertDialogRoot.vue";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);
</script>

<template>
  <button
    type="button"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    @click="injectedValue?.closeModal"
  >
    <slot />
  </button>
</template>
