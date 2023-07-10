<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface SelectRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  //onOpenChange?: void;
  defaultValue?: string;
  modelValue?: string;
  orientation?: DataOrientation;
  dir?: Direction;
}

export const SELECT_INJECTION_KEY =
  Symbol() as InjectionKey<SelectProvideValue>;

export type SelectProvideValue = {
  selectedElement: Ref<HTMLElement | undefined>;
  changeSelected: (value: HTMLElement) => void;
  modelValue: Readonly<Ref<string | undefined>>;
  setValue: (value: string) => void;
  isOpen: Readonly<Ref<boolean>>;
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

const props = withDefaults(defineProps<SelectRootProps>(), {
  orientation: "vertical",
  defaultValue: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const modelValue = useVModel(props, "modelValue", emit, {
  defaultValue: props.defaultValue,
  passive: true,
});

const selectedElement = ref<HTMLElement>();
const triggerElement = ref<HTMLElement>();
const isOpen = ref(false);

provide<SelectProvideValue>(SELECT_INJECTION_KEY, {
  selectedElement: selectedElement,
  changeSelected: (value: HTMLElement) => {
    selectedElement.value = value;
    selectedElement.value!.focus();
  },
  modelValue,
  setValue: (value) => {
    modelValue.value = value;
  },
  isOpen,
  showTooltip: () => {
    isOpen.value = true;
  },
  hideTooltip: () => {
    isOpen.value = false;
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
