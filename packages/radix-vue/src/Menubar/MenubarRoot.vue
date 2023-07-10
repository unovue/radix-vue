<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface MenubarRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  //onOpenChange?: void;
  modelValue?: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
  class?: string;
}

export const MENUBAR_INJECTION_KEY =
  Symbol() as InjectionKey<MenubarProvideValue>;

export type MenubarProvideValue = {
  selectedElement: Ref<HTMLElement | undefined>;
  isOpen: Readonly<Ref<boolean>>;
  setIsOpen: (val: boolean) => void;
  toggleIsOpen: () => void;
  changeSelected: (value: HTMLElement) => void;
  modelValue: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  triggerItemsArray: HTMLElement[];
  itemsArray: HTMLElement[];
  orientation: DataOrientation;
};
</script>

<script setup lang="ts">
import { provide, ref } from "vue";
import { PopperRoot } from "@/Popper";
import { useVModel, onClickOutside } from "@vueuse/core";

const props = withDefaults(defineProps<MenubarRootProps>(), {
  orientation: "vertical",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const modelValue = useVModel(props, "modelValue", emit, {
  passive: true,
});

const isOpen = ref(false);
const selectedElement = ref<HTMLElement>();
const triggerElement = ref<HTMLElement>();
const menubarContainerElement = ref<HTMLElement>();

provide<MenubarProvideValue>(MENUBAR_INJECTION_KEY, {
  selectedElement: selectedElement,
  isOpen,
  setIsOpen: (val) => {
    isOpen.value = val;
  },
  toggleIsOpen: () => {
    isOpen.value = !isOpen.value;
  },
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
  triggerItemsArray: [],
  itemsArray: [],
  orientation: props.orientation,
});

onClickOutside(menubarContainerElement, () => {
  if (isOpen.value === false) {
    triggerElement.value = undefined;
    selectedElement.value = undefined;
  }
});
</script>

<template>
  <PopperRoot>
    <div role="menubar" :class="props.class" ref="menubarContainerElement">
      <slot />
    </div>
  </PopperRoot>
</template>
