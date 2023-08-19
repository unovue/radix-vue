<script lang="ts">
export interface ProgressIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { PROGRESS_INJECTION_KEY } from "./ProgressRoot.vue";

const injectedValue = inject(PROGRESS_INJECTION_KEY);

const props = defineProps<ProgressIndicatorProps>();
</script>

<template>
  <Primitive
    v-bind="props"
    :data-state="injectedValue?.progressState.value"
    :data-value="injectedValue?.modelValue?.value ?? undefined"
    :data-max="injectedValue?.max.value"
  >
    <slot />
  </Primitive>
</template>
