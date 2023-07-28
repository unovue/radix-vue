<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface AlertDialogRootProps {
  open?: boolean;
  defaultOpen?: boolean;
}

export const ALERT_DIALOG_INJECTION_KEY =
  Symbol() as InjectionKey<AlertDialogProvideValue>;

export type AlertDialogProvideValue = {
  open: Readonly<Ref<boolean>>;
  openModal(): void;
  closeModal(): void;
  triggerButton: Ref<HTMLElement | undefined>;
};
</script>

<script setup lang="ts">
import { provide, ref, watch, watchEffect } from "vue";
import { useScrollLock, useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<AlertDialogRootProps>(), {
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

const locked = useScrollLock(document.querySelector("body"), open.value);

watchEffect(() => {
  locked.value = open.value;
});

provide<AlertDialogProvideValue>(ALERT_DIALOG_INJECTION_KEY, {
  open,
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
