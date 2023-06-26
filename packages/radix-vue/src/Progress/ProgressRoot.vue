<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface ProgressRootProps {
  modelValue?: number;
  max?: number;
}

export const PROGRESS_INJECTION_KEY =
  Symbol() as InjectionKey<ProgressProvideValue>;

export interface ProgressProvideValue {
  modelValue?: Readonly<Ref<number | undefined>>;
  max?: number;
}
</script>

<script setup lang="ts">
import { toRef, provide } from "vue";

const props = defineProps<ProgressRootProps>();

provide<ProgressProvideValue>(PROGRESS_INJECTION_KEY, {
  modelValue: toRef(() => props.modelValue),
  max: props.max,
});
</script>

<template>
  <div
    role="progressbar"
    :data-state="props.modelValue === props.max ? 'complete' : 'loading'"
    :aria-valuenow="props.modelValue"
    :aria-valuemin="0"
    :aria-valuemax="props.max"
  >
    <slot />
  </div>
</template>
