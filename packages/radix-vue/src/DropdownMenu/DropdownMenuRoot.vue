<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface DropdownMenuRootProps {
  modelValue?: boolean;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}

export const DROPDOWN_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<DropdownMenuProvideValue>;

export type DropdownMenuProvideValue = {
  modelValue: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  floatingElement: Ref<HTMLElement | undefined>;
  arrowElement: Ref<HTMLElement | undefined>;
  floatingStyles: any;
  middlewareData: any;
};
</script>

<script setup lang="ts">
import { provide, toRef, ref } from "vue";

const props = withDefaults(defineProps<DropdownMenuRootProps>(), {
  delayDuration: 700,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const triggerElement = ref<HTMLElement>();
const floatingElement = ref<HTMLElement>();
const arrowElement = ref<HTMLElement>();

provide<DropdownMenuProvideValue>(DROPDOWN_MENU_INJECTION_KEY, {
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
});
</script>

<template>
  <slot />
</template>
