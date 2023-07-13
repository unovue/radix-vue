<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation } from "../shared/types";

export interface ContextMenuRootProps {
  modelValue?: boolean;
  delayDuration?: number;
  disableHoverableContent?: boolean;
  orientation?: DataOrientation;
}

export const CONTEXT_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<ContextMenuProvideValue>;

export type ContextMenuProvideValue = {
  selectedElement: Ref<HTMLElement | undefined>;
  changeSelected: (value: HTMLElement | undefined) => void;
  modelValue: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  itemsArray: HTMLElement[];
  orientation: DataOrientation;
  positionPortalLeft?: number;
  positionPortalTop?: number;
  clientX: Ref<number>;
  clientY: Ref<number>;
};
</script>

<script setup lang="ts">
import { provide, toRef, ref } from "vue";
import { PopperRoot } from "@/Popper";

const props = withDefaults(defineProps<ContextMenuRootProps>(), {
  delayDuration: 700,
  orientation: "vertical",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const selectedElement = ref<HTMLElement>();
const clientX = ref(0);
const clientY = ref(0);

provide<ContextMenuProvideValue>(CONTEXT_MENU_INJECTION_KEY, {
  selectedElement: selectedElement,
  changeSelected: (value: HTMLElement | undefined) => {
    selectedElement.value = value;
  },
  modelValue: toRef(() => props.modelValue),
  showTooltip: () => {
    emit("update:modelValue", true);
  },
  hideTooltip: () => {
    emit("update:modelValue", false);
  },
  itemsArray: [],
  orientation: props.orientation,
  positionPortalLeft: 0,
  positionPortalTop: 0,
  clientX: clientX,
  clientY: clientY,
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
