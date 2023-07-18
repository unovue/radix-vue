<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

type TypeEnum = "single" | "multiple";

export interface ToggleGroupRootProps extends PrimitiveProps {
  type?: TypeEnum;
  value?: string;
  defaultValue?: string;
  //onValueChange?: void;
  disabled?: boolean;
  rovingFocus?: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
  loop: boolean;
  modelValue?: string | string[];
}

export const TOGGLE_GROUP_INJECTION_KEY =
  Symbol() as InjectionKey<ToggleGroupProvideValue>;

export interface ToggleGroupProvideValue {
  type: TypeEnum;
  modelValue?: Readonly<Ref<string | string[] | undefined>>;
  changeModelValue: (value: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
  currentFocusedElement: Ref<HTMLElement | undefined>;
  activeValue?: Readonly<Ref<string>>;
  dir?: Direction;
  orientation?: DataOrientation;
  loop: boolean;
  itemsArray: Ref<HTMLElement[] | undefined>;
  rovingFocus: boolean;
  rootDisabled?: boolean;
}
</script>

<script setup lang="ts">
import { ref, provide, watch } from "vue";
import { useVModel, useActiveElement } from "@vueuse/core";
import {
  PrimitiveDiv,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";

const props = withDefaults(defineProps<ToggleGroupRootProps>(), {
  type: "single",
  loop: false,
  dir: "ltr",
  orientation: "horizontal",
  rovingFocus: true,
  disabled: false,
});

const emits = defineEmits(["update:modelValue"]);

const { primitiveElement, currentElement: parentElement } =
  usePrimitiveElement();

const activeValue = ref();
const currentFocusedElementRef = ref<HTMLElement>();
const activeElement = useActiveElement();
const itemsArray = ref<HTMLElement[]>([]);

const modelValue = useVModel(props, "modelValue", emits, {
  defaultValue: props.defaultValue,
  passive: true,
});

provide<ToggleGroupProvideValue>(TOGGLE_GROUP_INJECTION_KEY, {
  type: props.type,
  modelValue,
  changeModelValue: changeModelValue,
  parentElement,
  activeValue: activeValue,
  currentFocusedElement: currentFocusedElementRef,
  dir: props.dir,
  orientation: props.orientation,
  loop: props.loop,
  itemsArray,
  rovingFocus: props.rovingFocus,
  rootDisabled: props.disabled,
});

function changeModelValue(value: string) {
  if (props.type === "single") {
    modelValue.value = value;
  } else {
    let modelValueArray = props.modelValue as string[];
    if (modelValueArray.includes(value)) {
      let index = modelValueArray.findIndex((i) => i === value);
      modelValueArray.splice(index, 1);
    } else {
      modelValueArray.push(value);
    }
    modelValue.value = modelValueArray;
  }
}

watch(
  activeElement,
  () => {
    if (activeElement.value === parentElement.value && !props.disabled) {
      if (!itemsArray.value.length) {
        return;
      }
      if (!currentFocusedElementRef.value) {
        let filteredItemsArray = itemsArray.value.filter(
          (i) => !i.hasAttribute("disabled") && !i.hasAttribute("data-disabled")
        );
        filteredItemsArray[0].focus();
        currentFocusedElementRef.value = filteredItemsArray[0];
      } else {
        currentFocusedElementRef.value.focus();
      }
    }
  },
  { immediate: true }
);
</script>

<template>
  <PrimitiveDiv
    :as-child="props.asChild"
    ref="primitiveElement"
    role="group"
    :dir="props.dir"
    tabindex="0"
    aria-label="Text alignment"
    :data-orientation="props.orientation"
  >
    <slot />
  </PrimitiveDiv>
</template>
