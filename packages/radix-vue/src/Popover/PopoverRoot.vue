<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface PopoverRootProps {
  defaultOpen?: boolean;
  open?: boolean;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}

export const POPOVER_INJECTION_KEY =
  Symbol() as InjectionKey<PopoverProvideValue>;

export type PopoverProvideValue = {
  open: Readonly<Ref<boolean>>;
  showPopover(): void;
  hidePopover(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  floatingElement: Ref<HTMLElement | undefined>;
  arrowElement: Ref<HTMLElement | undefined>;
  floatingStyles: any;
  middlewareData: any;
};
</script>

<script setup lang="ts">
import { provide, ref } from "vue";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<PopoverRootProps>(), {
  defaultOpen: false,
  open: undefined,
  delayDuration: 700,
});

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true,
});

const triggerElement = ref<HTMLElement>();
const floatingElement = ref<HTMLElement>();
const arrowElement = ref<HTMLElement>();

provide<PopoverProvideValue>(POPOVER_INJECTION_KEY, {
  open,
  showPopover: () => {
    open.value = true;
  },
  hidePopover: () => {
    open.value = false;
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
