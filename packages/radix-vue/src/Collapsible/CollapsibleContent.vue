<script setup lang="ts">
import { inject } from "vue";

import { COLLAPSIBLE_INJECTION_KEY } from "./CollapsibleRoot.vue";
import type { CollapsibleProvideValue } from "./CollapsibleRoot.vue";

const injectedValue = inject<CollapsibleProvideValue>(
  COLLAPSIBLE_INJECTION_KEY
);

// const height = ref<number | undefined>(0);
// const width = ref<number | undefined>(0);
</script>

<template>
  <div
    v-if="injectedValue?.open.value"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    :data-disabled="injectedValue?.disabled?.value ? 'true' : undefined"
    :id="injectedValue?.contentId"
    :hidden="!injectedValue?.open?.value"
  >
    <slot />
  </div>
  <!-- :style="{
        [`--radix-collapsible-content-height` as any]: height ? `${height}px` : undefined,
        [`--radix-collapsible-content-width` as any]: width ? `${width}px` : undefined,
      }" -->
</template>
