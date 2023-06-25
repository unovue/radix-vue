<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

type TypeEnum = "single" | "multiple";

export interface DropdownMenuGroupProps {
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

export const DROPDOWN_MENU_GROUP_INJECTION_KEY =
  Symbol() as InjectionKey<DropdownMenuGroupProvideValue>;

export interface DropdownMenuGroupProvideValue {
  type: TypeEnum;
  modelValue?: Readonly<Ref<string | string[] | undefined>>;
  changeModelValue(): (value: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
}
</script>

<script setup lang="ts">
import { ref, toRef, provide } from "vue";

const props = withDefaults(defineProps<DropdownMenuGroupProps>(), {
  type: "single",
});

const emits = defineEmits(["update:modelValue"]);

const parentElementRef = ref<HTMLElement | undefined>();

provide<DropdownMenuGroupProvideValue>(DROPDOWN_MENU_GROUP_INJECTION_KEY, {
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
