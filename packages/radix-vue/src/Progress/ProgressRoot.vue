<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import { PrimitiveDiv } from "@/Primitive";

export interface ProgressRootProps {
  asChild?: boolean;
  value?: number | null;
  modelValue?: number;
  max?: number;
  //getValueLabel?: void;
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
  <PrimitiveDiv
    role="progressbar"
    :data-state="props.modelValue === props.max ? 'complete' : 'loading'"
    :data-value="props.modelValue"
    :data-max="props.max"
    :aria-valuenow="props.modelValue"
    :aria-valuemin="0"
    :aria-valuemax="props.max"
  >
    <slot />
  </PrimitiveDiv>
</template>
