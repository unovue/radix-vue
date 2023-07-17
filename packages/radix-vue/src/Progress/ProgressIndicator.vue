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
    :data-state="
      injectedValue?.modelValue === injectedValue?.max ? 'complete' : 'loading'
    "
    :data-value="injectedValue?.modelValue"
    :data-max="injectedValue?.max"
    :as-child="props.asChild"
    :style="`left: 0%; right: ${
      (injectedValue?.max ?? 100) - (injectedValue?.modelValue?.value ?? 0)
    }%`"
  >
    <slot />
  </PrimitiveDiv>
</template>
