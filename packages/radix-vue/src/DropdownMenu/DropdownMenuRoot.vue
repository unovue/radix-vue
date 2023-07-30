<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

import { Components } from "./constants";

export interface DropdownMenuRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  //onOpenChange?: void;
  modelValue?: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
}

export const DROPDOWN_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<DropdownMenuProvideValue>;

export type DropdownMenuProvideValue = {
  selectedElement: Ref<HTMLElement | undefined>;
  changeSelected: (value: HTMLElement) => void;
  modelValue: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  itemsArray: HTMLElement[];
  orientation: DataOrientation;
};
</script>

<script setup lang="ts">
import { provide, ref } from "vue";
import { PopperRoot } from "@/Popper";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<DropdownMenuRootProps>(), {
  orientation: "vertical",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const modelValue = useVModel(props, "modelValue", emit, {
  passive: true,
});

const selectedElement = ref<HTMLElement>();
const triggerElement = ref<HTMLElement>();

defineExpose({ providerName: Components.ROOT });

provide<DropdownMenuProvideValue>(DROPDOWN_MENU_INJECTION_KEY, {
  selectedElement: selectedElement,
  changeSelected: (value: HTMLElement) => {
    selectedElement.value = value;
    selectedElement.value!.focus();
  },
  modelValue,
  showTooltip: () => {
    modelValue.value = true;
  },
  hideTooltip: () => {
    modelValue.value = false;
  },
  triggerElement,
  itemsArray: [],
  orientation: props.orientation,
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
