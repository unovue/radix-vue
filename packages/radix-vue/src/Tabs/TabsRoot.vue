<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface TabsRootProps {
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
  dir?: Direction;
}
</script>

<script setup lang="ts">
import { ref, toRef, provide } from "vue";
import { PrimitiveDiv } from "@/Primitive";

const props = withDefaults(defineProps<TabsRootProps>(), {
  orientation: "horizontal",
  dir: "ltr",
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
  dir: props.dir,
});
</script>

<template>
  <PrimitiveDiv :dir="props.dir" :data-orientation="props.orientation">
    <slot />
  </PrimitiveDiv>
</template>
