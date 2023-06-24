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
import { ref, toRef, provide, computed } from "vue";

const props = defineProps<ProgressRootProps>();

const emits = defineEmits(["update:modelValue"]);

const rootProgressElement = ref<HTMLElement>();

provide<ProgressProvideValue>(PROGRESS_INJECTION_KEY, {
  modelValue: toRef(() => props.modelValue),
  changeModelValue: (value: any) => {
    emits("update:modelValue", value);
  },
  max: props.max,
});

const dataState = computed(() => {
  return "progress";
});
</script>

<template>
  <div
    role="progressbar"
    tabindex="0"
    :data-state="dataState"
    :aria-valuenow="injectedValue?.modelValue?.value"
    :aria-valuemin="0"
    :aria-valuemax="injectedValue?.max"
    :aria-orientation="injectedValue?.orientation"
  >
    <slot />
  </div>
</template>
