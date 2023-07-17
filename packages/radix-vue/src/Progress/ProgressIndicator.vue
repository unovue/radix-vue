<script lang="ts">
export interface ProgressIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";
import { PROGRESS_INJECTION_KEY } from "./ProgressRoot.vue";
import type { ProgressProvideValue } from "./ProgressRoot.vue";

const injectedValue = inject<ProgressProvideValue>(PROGRESS_INJECTION_KEY);

const props = defineProps<ProgressIndicatorProps>();
</script>

<template>
  <PrimitiveDiv
    v-bind="props"
    :data-state="injectedValue?.progressState.value"
    :data-value="injectedValue?.modelValue?.value ?? undefined"
    :data-max="injectedValue?.max.value"
  >
    <slot />
  </PrimitiveDiv>
</template>
