<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface TooltipRootProps {
  modelValue?: boolean;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}

export const TOOLTIP_INJECTION_KEY =
  Symbol() as InjectionKey<TooltipProvideValue>;

export type TooltipProvideValue = {
  modelValue: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  floatingElement: Ref<HTMLElement | undefined>;
  arrowElement: Ref<HTMLElement | undefined>;
};
</script>

<script setup lang="ts">
import { provide, toRef, ref } from "vue";

const props = withDefaults(defineProps<TooltipRootProps>(), {
  delayDuration: 700,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const triggerElement = ref<HTMLElement>();
const floatingElement = ref<HTMLElement>();
const arrowElement = ref<HTMLElement>();

provide<TooltipProvideValue>(TOOLTIP_INJECTION_KEY, {
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
});
</script>

<template>
  <slot />
</template>
