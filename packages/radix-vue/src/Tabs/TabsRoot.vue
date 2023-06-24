<script lang="ts">
import { InjectionKey } from "vue";
import type { Ref } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface TabsRootProps {
  // defaultValue?: string;
  // value?: string;
  orientation?: DataOrientation;
  dir?: Direction;
  activationMode?: "automatic" | "manual";
  modelValue?: string | string[];
}

export const TABS_INJECTION_KEY = Symbol() as InjectionKey<TabsProvideValue>;

export interface TabsProvideValue {
  modelValue?: Readonly<Ref<string | string[] | undefined>>;
  changeModelValue: (value: any) => void;
  parentElement: Ref<HTMLElement | undefined>;
  orientation: DataOrientation;
}
</script>

<script setup lang="ts">
import { ref, toRef, provide } from "vue";

const props = withDefaults(defineProps<TabsRootProps>(), {
  orientation: "ltr",
  activationMode: "automatic",
});

const emits = defineEmits(["update:modelValue"]);

const parentElementRef = ref<HTMLElement>();

provide<TabsProvideValue>(TABS_INJECTION_KEY, {
  modelValue: toRef(() => props.modelValue),
  changeModelValue: (value: any) => {
    emits("update:modelValue", value);
  },
  parentElement: parentElementRef,
  orientation: props.orientation,
});
</script>

<template>
  <div
    ref="parentElementRef"
    :dir="props.dir"
    :data-orientation="props.orientation"
  >
    <slot />
  </div>
</template>
