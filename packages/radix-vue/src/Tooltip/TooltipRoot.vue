<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface TooltipRootProps {
  defaultOpen?: boolean;
  open?: boolean;
  //onOpenChange?: void;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}

export const TOOLTIP_INJECTION_KEY =
  Symbol() as InjectionKey<TooltipProvideValue>;

export type TooltipProvideValue = {
  open: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
};
</script>

<script setup lang="ts">
import { provide } from "vue";
import { useVModel } from "@vueuse/core";
import { PopperRoot } from "@/Popper";

const props = withDefaults(defineProps<TooltipRootProps>(), {
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

provide<TooltipProvideValue>(TOOLTIP_INJECTION_KEY, {
  open,
  showTooltip: () => {
    open.value = true;
  },
  hideTooltip: () => {
    open.value = false;
  },
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
