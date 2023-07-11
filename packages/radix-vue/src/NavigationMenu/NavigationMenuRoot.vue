<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface NavigationMenuRootProps {
  modelValue?: string;
  defaultValue?: string;
  orientation?: DataOrientation;
  dir?: Direction;
}

export const NAVIGATION_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<NavigationMenuProvideValue>;

export type NavigationMenuProvideValue = {
  selectedElement: Ref<HTMLElement | undefined>;
  changeSelected: (value: HTMLElement) => void;
  modelValue: Ref<string | undefined>;
  changeValue(value?: string): void;
  triggerElement: Ref<HTMLElement | undefined>;
  triggerItemsArray: HTMLElement[];
  itemsArray: HTMLElement[];
  orientation: DataOrientation;
};

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { provide, ref, watch } from "vue";
import { PopperRoot } from "@/Popper";
import { useVModel, useActiveElement } from "@vueuse/core";

const props = withDefaults(defineProps<NavigationMenuRootProps>(), {
  orientation: "horizontal",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "update:open", value: boolean): void;
}>();

const modelValue = useVModel(props, "modelValue", emit, {
  passive: true,
  defaultValue: props.defaultValue,
});

const selectedElement = ref<HTMLElement>();
const triggerElement = ref<HTMLElement>();
const triggerItemsArray: HTMLElement[] = [];
const NavigationMenuContainerElement = ref<HTMLElement>();
const activeElement = useActiveElement();

provide<NavigationMenuProvideValue>(NAVIGATION_MENU_INJECTION_KEY, {
  selectedElement: selectedElement,
  changeSelected: (value: HTMLElement) => {
    selectedElement.value = value;
    selectedElement.value?.focus();
  },
  modelValue,
  changeValue: (value?: string) => {
    modelValue.value = value;
  },
  triggerElement,
  triggerItemsArray,
  itemsArray: [],
  orientation: props.orientation,
});

watch(
  activeElement,
  () => {
    if (activeElement.value === NavigationMenuContainerElement.value) {
      if (triggerElement.value) {
        triggerElement.value.focus();
      } else if (triggerItemsArray.length) {
        triggerItemsArray[0].focus();
      }
    }
  },
  { immediate: true }
);
</script>

<template>
  <PopperRoot>
    <div
      role="NavigationMenu"
      v-bind="$attrs"
      ref="NavigationMenuContainerElement"
      tabindex="0"
    >
      <slot />
    </div>
  </PopperRoot>
</template>
