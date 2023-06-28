<script lang="ts">
export interface CollapsibleContentProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  COLLAPSIBLE_INJECTION_KEY,
  type CollapsibleProvideValue,
} from "./CollapsibleRoot.vue";

const injectedValue = inject<CollapsibleProvideValue>(
  COLLAPSIBLE_INJECTION_KEY
);
</script>

<template>
  <div
    v-if="injectedValue?.open.value"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    :data-disabled="injectedValue?.disabled?.value ? 'true' : undefined"
    :id="injectedValue?.contentId"
    :hidden="!injectedValue?.open.value"
  >
    <slot />
  </div>
</template>
