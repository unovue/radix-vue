<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface TabsRootProps {
  asChild?: boolean;
  defaultValue?: string;
  orientation?: DataOrientation;
  dir?: Direction;
  activationMode?: "automatic" | "manual";
  modelValue?: string;
  onValueChange?: (value: string) => void;
}

export const TABS_INJECTION_KEY = Symbol() as InjectionKey<TabsProvideValue>;

export interface TabsProvideValue {
  modelValue?: Readonly<Ref<string | undefined>>;
  changeModelValue: (value: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
  orientation: DataOrientation;
  dir: Direction;
  activationMode: "automatic" | "manual";
  loop: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveDiv } from "@/Primitive";
import { useVModel } from "@vueuse/core";
import { provide, ref } from "vue";

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
    if (value && props.onValueChange) {
      props.onValueChange(value);
    }
  },
  parentElement: parentElementRef,
  orientation: props.orientation,
  dir: props.dir,
  loop: true,
  activationMode: props.activationMode,
});
</script>

<template>
  <PrimitiveDiv
    :asChild="asChild"
    :dir="props.dir"
    :data-orientation="props.orientation"
  >
    <slot />
  </PrimitiveDiv>
</template>
