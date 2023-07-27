<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface DialogRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
}

export const DIALOG_INJECTION_KEY =
  Symbol() as InjectionKey<DialogProvideValue>;

export type DialogProvideValue = {
  open: Readonly<Ref<boolean>>;
  modal: boolean;
  openModal(): void;
  closeModal(): void;
  triggerButton: Ref<HTMLElement | undefined>;
};
</script>

<script setup lang="ts">
import { provide, ref, watchEffect } from "vue";
import { useScrollLock, useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<DialogRootProps>(), {
  open: undefined,
  defaultOpen: false,
  modal: true,
});

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true,
});

const locked = useScrollLock(document.querySelector("body"), open.value);

watchEffect(() => {
  locked.value = open.value;
});

provide<DialogProvideValue>(DIALOG_INJECTION_KEY, {
  open,
  modal: props.modal,
  openModal: () => {
    open.value = true;
  },
  closeModal: () => {
    open.value = false;
  },
  triggerButton: ref<HTMLElement>(),
});
</script>

<template>
  <slot />
</template>
