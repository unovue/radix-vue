<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface AlertDialogRootProps {
  open?: boolean;
  defaultOpen?: boolean;
}

export const ALERT_DIALOG_INJECTION_KEY =
  Symbol() as InjectionKey<AlertDialogProvideValue>;

export type AlertDialogProvideValue = {
  contentId: string;
  titleId: string;
  descriptionId: string;
  open: Readonly<Ref<boolean>>;
  openModal(): void;
  closeModal(): void;
  triggerButton: Ref<HTMLElement | undefined>;
};

export type AlertDialogRootEmits = {
  (e: "update:open", value: boolean): void;
};
</script>

<script setup lang="ts">
import { provide, ref, watchEffect } from "vue";
import { useVModel } from "@vueuse/core";
import { useId, useBodyScrollLock } from "@/shared";

const props = withDefaults(defineProps<AlertDialogRootProps>(), {
  open: undefined,
  defaultOpen: false,
});

const emit = defineEmits<AlertDialogRootEmits>();

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true,
});

const isBodyLocked = useBodyScrollLock(open.value);

watchEffect((onCleanup) => {
  isBodyLocked.value = open.value;
  onCleanup(() => (isBodyLocked.value = false));
});

provide(ALERT_DIALOG_INJECTION_KEY, {
  contentId: useId(),
  titleId: useId(),
  descriptionId: useId(),
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
