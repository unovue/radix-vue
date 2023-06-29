<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

type TypeEnum = "single" | "multiple";

export interface ContextMenuGroupProps {
  type?: TypeEnum;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  rovingFocus?: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
  loop?: boolean;
  modelValue?: string | string[];
}

export const CONTEXT_MENU_GROUP_INJECTION_KEY =
  Symbol() as InjectionKey<ContextMenuGroupProvideValue>;

export interface ContextMenuGroupProvideValue {
  type: TypeEnum;
  modelValue?: Readonly<Ref<string | string[] | undefined>>;
  changeModelValue: (value: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
}
</script>

<script setup lang="ts">
import { toRef, provide } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

const props = withDefaults(defineProps<ContextMenuGroupProps>(), {
  type: "single",
});

const emits = defineEmits(["update:modelValue"]);

const { primitiveElement, currentElement: parentElementRef } =
  usePrimitiveElement();

provide<ContextMenuGroupProvideValue>(CONTEXT_MENU_GROUP_INJECTION_KEY, {
  type: props.type,
  modelValue: toRef(() => props.modelValue),
  changeModelValue: (value: string) => {
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
  },
  parentElement: parentElementRef,
});
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    role="group"
    :dir="props.dir"
    aria-label="Text alignment"
  >
    <slot />
  </PrimitiveDiv>
</template>
