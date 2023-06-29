<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

type TypeEnum = "single" | "multiple";

export interface ToggleGroupRootProps {
  asChild?: boolean;
  type?: TypeEnum;
  value?: string;
  defaultValue?: string;
  //onValueChange?: void;
  disabled?: boolean;
  rovingFocus?: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
  loop?: boolean;
  modelValue?: string | string[];
}

export const TOGGLE_GROUP_INJECTION_KEY =
  Symbol() as InjectionKey<ToggleGroupProvideValue>;

export interface ToggleGroupProvideValue {
  type: TypeEnum;
  modelValue?: Readonly<Ref<string | string[] | undefined>>;
  changeModelValue: (value: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
  activeValue?: Readonly<Ref<string>>;
  orientation?: DataOrientation;
}
</script>

<script setup lang="ts">
import { ref, toRef, provide } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

const props = withDefaults(defineProps<ToggleGroupRootProps>(), {
  type: "single",
});

const emits = defineEmits(["update:modelValue"]);

const { primitiveElement, currentElement: parentElement } =
  usePrimitiveElement();

const activeValue = ref();

provide<ToggleGroupProvideValue>(TOGGLE_GROUP_INJECTION_KEY, {
  type: props.type,
  modelValue: toRef(() => props.modelValue),
  changeModelValue: changeModelValue,
  parentElement,
  activeValue: activeValue,
  orientation: props.orientation,
});

function changeModelValue(value: string) {
  if (props.type === "single") {
    emits("update:modelValue", value);
  } else {
    let modelValueArray = props.modelValue as string[];
    if (modelValueArray.includes(value)) {
      let index = modelValueArray.findIndex((i) => i === value);
      modelValueArray.splice(index, 1);
    } else {
      modelValueArray.push(value);
    }
    emits("update:modelValue", modelValueArray);
  }
}
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    role="group"
    :dir="props.dir"
    aria-label="Text alignment"
    :data-orientation="props.orientation"
  >
    <slot />
  </PrimitiveDiv>
</template>
