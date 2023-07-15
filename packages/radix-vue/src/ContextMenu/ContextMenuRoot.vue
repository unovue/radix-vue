<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface ContextMenuRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  //onOpenChange?: void;
  modelValue?: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
}

export const CONTEXT_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<ContextMenuProvideValue>;

export type ContextMenuProvideValue = {
  selectedElement: Ref<HTMLElement | undefined>;
  changeSelected: (value: HTMLElement) => void;
  modelValue: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  itemsArray: HTMLElement[];
  orientation: DataOrientation;
  clientX: Ref<number>;
  clientY: Ref<number>;
};
</script>

<script setup lang="ts">
import { provide, ref } from "vue";
import { PopperRoot } from "@/Popper";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<ContextMenuRootProps>(), {
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
const clientX = ref(0);
const clientY = ref(0);

provide<ContextMenuProvideValue>(CONTEXT_MENU_INJECTION_KEY, {
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
  clientX,
  clientY,
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
