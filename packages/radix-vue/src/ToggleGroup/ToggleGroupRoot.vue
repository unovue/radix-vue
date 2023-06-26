<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

type TypeEnum = "single" | "multiple";

export interface ToggleGroupRootProps {
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

export const TOGGLE_GROUP_INJECTION_KEY =
  Symbol() as InjectionKey<ToggleGroupProvideValue>;

export interface ToggleGroupProvideValue {
  type: TypeEnum;
  modelValue?: Readonly<Ref<string | string[] | undefined>>;
  changeModelValue: (value: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
}
</script>

<script setup lang="ts">
import { ref, toRef, provide } from "vue";

const props = withDefaults(defineProps<ToggleGroupRootProps>(), {
  type: "single",
});

const emits = defineEmits(["update:modelValue"]);

const parentElementRef: Ref<HTMLElement | undefined> = ref();

provide<ToggleGroupProvideValue>(TOGGLE_GROUP_INJECTION_KEY, {
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
  <div
    ref="parentElementRef"
    role="group"
    :dir="props.dir"
    aria-label="Text alignment"
  >
    <slot />
  </div>
</template>
