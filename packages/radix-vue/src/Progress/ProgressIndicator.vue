<script lang="ts">
export interface ProgressIndicatorProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveDiv } from "@/Primitive";
import { PROGRESS_INJECTION_KEY } from "./ProgressRoot.vue";
import type { ProgressProvideValue } from "./ProgressRoot.vue";

const injectedValue = inject<ProgressProvideValue>(PROGRESS_INJECTION_KEY);
</script>

<template>
  <PrimitiveDiv
    :data-state="injectedValue?.progressState.value"
    :data-value="injectedValue?.modelValue?.value"
    :data-max="injectedValue?.max.value"
  >
    <slot />
  </PrimitiveDiv>
</template>
