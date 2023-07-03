<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface DialogRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  //onOpenChange?: void;
}

export const DIALOG_INJECTION_KEY =
  Symbol() as InjectionKey<DialogProvideValue>;

export type DialogProvideValue = {
  open: Readonly<Ref<boolean>>;
  openModal(): void;
  closeModal(): void;
  triggerButton: Readonly<Ref<HTMLElement | undefined>>;
};
</script>

<script setup lang="ts">
import { provide, ref } from "vue";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<DialogRootProps>(), {
  open: undefined,
  defaultOpen: false,
});

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true,
});
const triggerButton = ref<HTMLElement>();

provide<DialogProvideValue>(DIALOG_INJECTION_KEY, {
  open,
  openModal: () => {
    open.value = true;
  },
  closeModal: () => {
    open.value = false;
  },
  triggerButton: triggerButton,
});
</script>

<template>
  <slot />
</template>
