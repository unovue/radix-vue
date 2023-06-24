<script setup lang="ts">
import { inject } from "vue";
import { COLLAPSIBLE_INJECTION_KEY } from "./CollapsibleRoot.vue";
import type { CollapsibleProvideValue } from "./CollapsibleRoot.vue";

const injectedValue = inject<CollapsibleProvideValue>(
  COLLAPSIBLE_INJECTION_KEY
);
</script>

<template>
  <button
    type="button"
    :aria-controls="injectedValue?.contentId"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    :data-disabled="injectedValue?.disabled?.value ? 'true' : undefined"
    :disabled="injectedValue?.disabled?.value"
    @click="injectedValue?.onOpenToggle"
  >
    <slot />
  </button>
</template>
