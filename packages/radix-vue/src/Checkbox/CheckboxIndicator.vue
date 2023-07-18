<script lang="ts">
export interface CheckboxIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  CHECKBOX_INJECTION_KEY,
  type CheckboxProvideValue,
} from "./CheckboxRoot.vue";
import { PrimitiveSpan, type PrimitiveProps } from "@/Primitive";

const injectedValue = inject<CheckboxProvideValue>(CHECKBOX_INJECTION_KEY);

const props = defineProps<CheckboxIndicatorProps>();
</script>

<template>
  <PrimitiveSpan
    v-if="injectedValue?.modelValue.value"
    style="pointer-events: none"
    :as-child="props.asChild"
    :data-disabled="injectedValue.disabled ? '' : undefined"
    :data-state="injectedValue.modelValue.value ? 'checked' : 'unchecked'"
  >
    <slot />
  </PrimitiveSpan>
</template>
