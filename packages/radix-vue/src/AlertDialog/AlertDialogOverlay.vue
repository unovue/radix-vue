<script setup lang="ts">
import { inject } from "vue";
import {
  DIALOG_INJECTION_KEY,
  type DialogProvideValue,
} from "./AlertDialogRoot.vue";

const injectedValue = inject<DialogProvideValue>(DIALOG_INJECTION_KEY);
</script>

<template>
  <div
    v-if="injectedValue?.open.value"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    style="pointer-events: auto"
    data-aria-hidden="true"
    aria-hidden="true"
    @click="injectedValue?.closeModal"
  >
    <slot />
  </div>
</template>
