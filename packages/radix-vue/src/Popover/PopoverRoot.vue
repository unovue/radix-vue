<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import { useId } from "@/shared";

export interface PopoverRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
}
export interface PopoverRootEmits {
  (e: "update:open", value: boolean): void;
}

export const POPOVER_INJECTION_KEY =
  Symbol() as InjectionKey<PopoverProvideValue>;

export type PopoverProvideValue = {
  triggerElement: Ref<HTMLElement | undefined>;
  contentId: string;
  open: Ref<boolean>;
  modal: Ref<boolean>;
  onOpenChange(value: boolean): void;
  onOpenToggle(): void;
  hasCustomAnchor: Ref<boolean>;
};
</script>

<script setup lang="ts">
import { provide, ref, toRefs } from "vue";
import { useVModel } from "@vueuse/core";
import { PopperRoot } from "@/Popper";

const props = withDefaults(defineProps<PopoverRootProps>(), {
  defaultOpen: false,
  open: undefined,
  modal: false,
});
const { modal } = toRefs(props);
const emit = defineEmits<PopoverRootEmits>();

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true,
});

const triggerElement = ref<HTMLElement>();
const hasCustomAnchor = ref(false);

provide<PopoverProvideValue>(POPOVER_INJECTION_KEY, {
  contentId: useId(),
  modal,
  open,
  onOpenChange: (value) => {
    open.value = value;
  },
  onOpenToggle: () => {
    open.value = !open.value;
  },
  triggerElement,
  hasCustomAnchor,
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
