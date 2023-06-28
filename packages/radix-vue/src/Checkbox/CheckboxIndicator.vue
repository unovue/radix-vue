<script lang="ts">
export interface CheckboxIndicatorProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  CHECKBOX_INJECTION_KEY,
  type CheckboxProvideValue,
} from "./CheckboxRoot.vue";
import { PrimitiveSpan } from "@/Primitive";

const injectedValue = inject<CheckboxProvideValue>(CHECKBOX_INJECTION_KEY);

const props = withDefaults(defineProps<CheckboxIndicatorProps>(), {
  asChild: false,
});
</script>

<template>
  <PrimitiveSpan
    :asChild="props.asChild ? '' : undefined"
    v-if="injectedValue?.modelValue.value"
    style="pointer-events: none"
    :data-disabled="injectedValue.disabled ? '' : undefined"
    :data-state="injectedValue.modelValue.value ? 'checked' : 'unchecked'"
  >
    <slot />
  </PrimitiveSpan>
</template>
