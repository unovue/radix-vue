<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation } from "@/shared/types";

export interface DropdownMenuSubRootProps {
  modelValue?: boolean;
  delayDuration?: number;
  disableHoverableContent?: boolean;
  orientation?: DataOrientation;
}

export const DROPDOWN_MENU_SUB_INJECTION_KEY =
  Symbol() as InjectionKey<DropdownMenuSubProvideValue>;

export type DropdownMenuSubProvideValue = {
  selectedElement: Ref<HTMLElement | undefined>;
  changeSelected: (value: HTMLElement) => void;
  modelValue: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  floatingElement: Ref<HTMLElement | undefined>;
  arrowElement: Ref<HTMLElement | undefined>;
  floatingStyles: any;
  middlewareData: any;
  itemsArray: HTMLElement[];
  orientation: DataOrientation;
};
</script>

<script setup lang="ts">
import { provide, toRef, ref } from "vue";

const props = withDefaults(defineProps<DropdownMenuSubRootProps>(), {
  delayDuration: 700,
  orientation: "vertical",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const selectedElement = ref<HTMLElement>();
const triggerElement = ref<HTMLElement>();
const floatingElement = ref<HTMLElement>();
const arrowElement = ref<HTMLElement>();

provide<DropdownMenuSubProvideValue>(DROPDOWN_MENU_SUB_INJECTION_KEY, {
  selectedElement: selectedElement,
  changeSelected: (value: HTMLElement) => {
    selectedElement.value = value;
  },
  modelValue: toRef(() => props.modelValue),
  showTooltip: () => {
    emit("update:modelValue", true);
  },
  hideTooltip: () => {
    emit("update:modelValue", false);
  },
  triggerElement: triggerElement,
  floatingElement: floatingElement,
  arrowElement: arrowElement,
  floatingStyles: "",
  middlewareData: "",
  itemsArray: [],
  orientation: props.orientation,
});
</script>

<template>
  <slot />
</template>
