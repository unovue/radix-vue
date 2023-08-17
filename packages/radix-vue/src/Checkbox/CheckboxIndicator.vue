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
import { Primitive, type PrimitiveProps } from "@/Primitive";

const injectedValue = inject<CheckboxProvideValue>(CHECKBOX_INJECTION_KEY);

const props = withDefaults(defineProps<CheckboxIndicatorProps>(), {
  as: "span",
});
</script>

<template>
  <Primitive
    v-if="injectedValue?.modelValue.value"
    style="pointer-events: none"
    :as-child="props.asChild"
    :as="as"
    :data-disabled="injectedValue.disabled ? '' : undefined"
    :data-state="injectedValue.modelValue.value ? 'checked' : 'unchecked'"
  >
    <slot />
  </Primitive>
</template>
