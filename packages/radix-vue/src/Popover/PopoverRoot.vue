<script lang="ts">
import type { Ref, InjectionKey, ComputedRef } from "vue";
import { useId } from "@/shared";

type PopoverState = "open" | "closed";

export interface PopoverRootProps {
  /**
   * The open state of the popover when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the popover.
   */
  open?: boolean;

  /**
   * The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.
   *
   * @default false
   */
  modal?: boolean;
}

export const POPOVER_INJECTION_KEY =
  Symbol() as InjectionKey<PopoverProvideValue>;

export type PopoverProvideValue = {
  open: Readonly<Ref<boolean>>;
  showPopover(): void;
  hidePopover(): void;
  setTriggerElement(element: HTMLElement): void;
  triggerElement: ComputedRef<HTMLElement | undefined>;
  dataState: ComputedRef<PopoverState>;
  contentId: string;
  modal: ComputedRef<boolean>;
};
</script>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import { useVModel } from "@vueuse/core";
import { PopperRoot } from "@/Popper";

const props = withDefaults(defineProps<PopoverRootProps>(), {
  modal: false,
});

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true,
});

const triggerElement = ref<HTMLElement>();

provide<PopoverProvideValue>(POPOVER_INJECTION_KEY, {
  open,
  showPopover: () => {
    open.value = true;
  },
  hidePopover: () => {
    open.value = false;
  },
  triggerElement: computed(() => triggerElement.value),
  setTriggerElement: (element) => {
    triggerElement.value = element;
  },
  dataState: computed(() => (open.value ? "open" : "closed")),
  contentId: useId(),
  modal: computed(() => props.modal),
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
