<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface HoverCardRootProps {
  defaultOpen: false;
  open?: boolean;
  //onOpenChange?: void;
  openDelay?: number;
  closeDelay?: number;
}

export const HOVER_CARD_INJECTION_KEY =
  Symbol() as InjectionKey<HoverCardProvideValue>;

export type HoverCardProvideValue = {
  open: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  floatingElement: Ref<HTMLElement | undefined>;
  arrowElement: Ref<HTMLElement | undefined>;
  openDelay: number;
  closeDelay: number;
  isHover: boolean;
};
</script>

<script setup lang="ts">
import { provide, ref } from "vue";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<HoverCardRootProps>(), {
  defaultOpen: false,
  open: undefined,
  openDelay: 700,
  closeDelay: 300,
});

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const triggerElement = ref<HTMLElement>();
const floatingElement = ref<HTMLElement>();
const arrowElement = ref<HTMLElement>();

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true,
});

provide<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY, {
  open,
  showTooltip: () => {
    open.value = true;
  },
  hideTooltip: () => {
    open.value = false;
  },
  triggerElement: triggerElement,
  floatingElement: floatingElement,
  arrowElement: arrowElement,
  openDelay: props.openDelay,
  closeDelay: props.closeDelay,
  isHover: false,
});
</script>

<template>
  <slot />
</template>
