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
  modelValue: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  floatingElement: Ref<HTMLElement | undefined>;
  arrowElement: Ref<HTMLElement | undefined>;
  subTrigger: HTMLElement | undefined;
  floatingStyles: any;
  middlewareData: any;
  itemsArray: HTMLElement[];
  orientation: DataOrientation;
};
</script>

<script setup lang="ts">
import { provide, toRef, ref, watch } from "vue";

const props = withDefaults(defineProps<DropdownMenuSubRootProps>(), {
  delayDuration: 700,
  orientation: "vertical",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const modelValue = ref(props.modelValue ?? false);

watch(modelValue, (newValue) => {
  emit("update:modelValue", newValue);
});

const triggerElement = ref<HTMLElement>();
const floatingElement = ref<HTMLElement>();
const arrowElement = ref<HTMLElement>();

provide<DropdownMenuSubProvideValue>(DROPDOWN_MENU_SUB_INJECTION_KEY, {
  modelValue: toRef(() => modelValue.value),
  showTooltip: () => {
    modelValue.value = true;
  },
  hideTooltip: () => {
    modelValue.value = false;
  },
  triggerElement: triggerElement,
  floatingElement: floatingElement,
  arrowElement: arrowElement,
  subTrigger: undefined,
  floatingStyles: "",
  middlewareData: "",
  itemsArray: [],
  orientation: props.orientation,
});
</script>

<template>
  <slot />
</template>
