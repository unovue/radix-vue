<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface PopoverRootProps {
  defaultOpen?: boolean;
  open?: boolean;
  //onOpenChange?: void;
  modal?: boolean;
}
export interface PopoverRootEmits {
  (e: "update:open", value: boolean): void;
}

export const POPOVER_INJECTION_KEY =
  Symbol() as InjectionKey<PopoverProvideValue>;

export type PopoverProvideValue = {
  open: Readonly<Ref<boolean>>;
  showPopover(): void;
  hidePopover(): void;
  triggerElement: Ref<HTMLElement | undefined>;
};
</script>

<script setup lang="ts">
import { provide, ref } from "vue";
import { useVModel } from "@vueuse/core";
import { PopperRoot } from "@/Popper";

const props = withDefaults(defineProps<PopoverRootProps>(), {
  defaultOpen: false,
  open: undefined,
  modal: false,
});
const emit = defineEmits<PopoverRootEmits>();

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
  triggerElement,
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
