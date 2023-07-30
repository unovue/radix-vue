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
import { useScrollLock, useVModel } from "@vueuse/core";
import { useId } from "@/shared";

const props = withDefaults(defineProps<AlertDialogRootProps>(), {
  open: undefined,
  defaultOpen: false,
});

const emit = defineEmits<AlertDialogRootEmits>();

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true,
});

const locked = useScrollLock(document.body, open.value);

watchEffect(() => {
  if (open.value) {
    const verticalScrollbarWidth =
      window.innerWidth - document.body.clientWidth;

    if (verticalScrollbarWidth) {
      document.body.style.marginRight = verticalScrollbarWidth + "px";
    }

    document.body.style.pointerEvents = "none";
  } else {
    document.body.style.marginRight = "";
    document.body.style.pointerEvents = "";
  }
  locked.value = open.value;
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
