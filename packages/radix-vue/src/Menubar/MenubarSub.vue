<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation } from "@/shared/types";
import { useVModel } from "@vueuse/core";

export interface MenubarSubRootProps {
  modelValue?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  //onOpenChange?: void;
  delayDuration?: number;
  disableHoverableContent?: boolean;
  orientation?: DataOrientation;
}

export const MENUBAR_SUB_INJECTION_KEY =
  Symbol() as InjectionKey<MenubarSubProvideValue>;

export type MenubarSubProvideValue = {
  modelValue: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  itemsArray: HTMLElement[];
  orientation: DataOrientation;
  triggerId: string;
  contentId: string;
  parentContext?: MenubarSubProvideValue;
};
</script>

<script setup lang="ts">
import { inject, provide, ref } from "vue";
import { PopperRoot } from "@/Popper";
import { useId } from "@/shared";

const props = withDefaults(defineProps<MenubarSubRootProps>(), {
  delayDuration: 700,
  orientation: "vertical",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const modelValue = useVModel(props, "modelValue", emit, {
  passive: true,
});

const triggerElement = ref<HTMLElement>();

const parentContext = inject(MENUBAR_SUB_INJECTION_KEY);

provide<MenubarSubProvideValue>(MENUBAR_SUB_INJECTION_KEY, {
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
  triggerId: useId(),
  contentId: useId(),
  parentContext,
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
