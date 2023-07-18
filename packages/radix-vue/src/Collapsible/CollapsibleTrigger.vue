<script lang="ts">
export interface CollapsibleTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveButton, type PrimitiveProps } from "../Primitive";
import {
  COLLAPSIBLE_INJECTION_KEY,
  type CollapsibleProvideValue,
} from "./CollapsibleRoot.vue";

const injectedValue = inject<CollapsibleProvideValue>(
  COLLAPSIBLE_INJECTION_KEY
);

const props = defineProps<CollapsibleTriggerProps>();
</script>

<template>
  <PrimitiveButton
    type="button"
    :as-child="props.asChild"
    :aria-controls="injectedValue?.contentId"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    :data-disabled="injectedValue?.disabled?.value ? '' : undefined"
    :disabled="injectedValue?.disabled?.value"
    @click="injectedValue?.onOpenToggle"
  >
    <slot />
  </PrimitiveButton>
</template>
