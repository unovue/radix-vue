<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface HoverCardRootProps {
  defaultOpen?: false;
  open?: boolean;
  openDelay?: number;
  closeDelay?: number;
}
export interface HoverCardRootEmits {
  (e: "update:open", value: boolean): void;
}

export const HOVER_CARD_INJECTION_KEY =
  Symbol() as InjectionKey<HoverCardProvideValue>;

export type HoverCardProvideValue = {
  open: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  openDelay: number;
  closeDelay: number;
  isHover: boolean;
};
</script>

<script setup lang="ts">
import { provide } from "vue";
import { useVModel } from "@vueuse/core";
import { PopperRoot } from "@/Popper";

const props = withDefaults(defineProps<HoverCardRootProps>(), {
  defaultOpen: false,
  open: undefined,
  openDelay: 700,
  closeDelay: 300,
});

const emit = defineEmits<HoverCardRootEmits>();

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
  openDelay: props.openDelay,
  closeDelay: props.closeDelay,
  isHover: false,
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
