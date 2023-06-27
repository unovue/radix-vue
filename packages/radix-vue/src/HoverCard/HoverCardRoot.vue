<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface HoverCardRootProps {
  modelValue?: boolean;
  openDelay?: number;
  closeDelay?: number;
}

export const HOVER_CARD_INJECTION_KEY =
  Symbol() as InjectionKey<HoverCardProvideValue>;

export type HoverCardProvideValue = {
  modelValue: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  floatingElement: Ref<HTMLElement | undefined>;
  arrowElement: Ref<HTMLElement | undefined>;
  openDelay: number;
  closeDelay: number;
};
</script>

<script setup lang="ts">
import { provide, toRef, ref, watch } from "vue";

const props = withDefaults(defineProps<HoverCardRootProps>(), {
  openDelay: 700,
  closeDelay: 300,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const triggerElement = ref<HTMLElement>();
const floatingElement = ref<HTMLElement>();
const arrowElement = ref<HTMLElement>();

const modelValue = ref(props.modelValue ?? false);

watch(modelValue, (newValue) => {
  emit("update:modelValue", newValue);
});

provide<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY, {
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
  openDelay: props.openDelay,
  closeDelay: props.closeDelay,
});
</script>

<template>
  <slot />
</template>
