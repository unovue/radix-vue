<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

type TypeEnum = "single" | "multiple";

export interface ToolbarToggleGroupProps extends PrimitiveProps {
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
export interface ToolbarToggleGroupEmits {
  (e: "update:modelValue", payload: string | string[] | undefined): void;
}

export const TOOLBAR_TOGGLE_GROUP_INJECTION_KEY =
  Symbol() as InjectionKey<ToolbarToggleGroupProvideValue>;

export interface ToolbarToggleGroupProvideValue {
  type: TypeEnum;
  modelValue?: Readonly<Ref<string | string[] | undefined>>;
  changeModelValue: (value: string | undefined) => void;
  parentElement: Ref<HTMLElement | undefined>;
  orientation: DataOrientation;
}
</script>

<script setup lang="ts">
import { toRef, provide } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";

const props = withDefaults(defineProps<ToolbarToggleGroupProps>(), {
  type: "single",
});

const emits = defineEmits<ToolbarToggleGroupEmits>();

const { primitiveElement, currentElement: parentElement } =
  usePrimitiveElement();

provide(TOOLBAR_TOGGLE_GROUP_INJECTION_KEY, {
  type: props.type,
  modelValue: toRef(() => props.modelValue),
  changeModelValue: (value: string | undefined) => {
    if (props.type === "single") {
      emits("update:modelValue", value);
    } else {
      if (!value) return;
      let modelValueArray = props.modelValue as string[];
      if (modelValueArray.includes(value)) {
        let index = modelValueArray.findIndex((i) => i === value);
        modelValueArray.splice(index, 1);
      } else {
        modelValueArray.push(value);
      }
      emits("update:modelValue", modelValueArray);
    }
  },
  orientation: props.orientation ? props.orientation : "horizontal",
  parentElement,
});
</script>

<template>
  <Primitive
    ref="primitiveElement"
    role="group"
    :dir="props.dir"
    :as-child="props.asChild"
    :as="as"
    aria-label="Text alignment"
  >
    <slot />
  </Primitive>
</template>
