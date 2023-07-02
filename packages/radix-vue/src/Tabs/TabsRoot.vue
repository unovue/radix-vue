<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface TabsRootProps {
  asChild?: boolean;
  defaultValue?: string;
  orientation?: DataOrientation;
  dir?: Direction;
  activationMode?: "automatic" | "manual";
  modelValue?: string;
}

export const TABS_INJECTION_KEY = Symbol() as InjectionKey<TabsProvideValue>;

export interface TabsProvideValue {
  modelValue?: Readonly<Ref<string | undefined>>;
  changeModelValue: (value: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
  orientation: DataOrientation;
  dir?: Direction;
}
</script>

<script setup lang="ts">
import { ref, provide } from "vue";
import { PrimitiveDiv } from "@/Primitive";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<TabsRootProps>(), {
  asChild: false,
  orientation: "horizontal",
  dir: "ltr",
  activationMode: "automatic",
});

const emits = defineEmits(["update:modelValue"]);

const parentElementRef = ref<HTMLElement>();

const modelValue = useVModel(props, "modelValue", emits, {
  defaultValue: props.defaultValue,
  passive: true,
});

provide<TabsProvideValue>(TABS_INJECTION_KEY, {
  modelValue,
  changeModelValue: (value: string) => {
    modelValue.value = value;
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
