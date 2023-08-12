<script lang="ts">
type AlertDialogContentContextValue = {
  onCancelElementChange(el: HTMLElement | undefined): void;
};

export const ALERT_DIALOG_CONTENT_INJECTION_KEY =
  Symbol() as InjectionKey<AlertDialogContentContextValue>;
</script>

<script setup lang="ts">
import {
  DialogContent,
  type DialogContentProps,
  type DialogContentEmits,
} from "@/Dialog";
import { provide, type InjectionKey, type Ref, ref, nextTick } from "vue";

const props = defineProps<DialogContentProps>();
defineEmits<DialogContentEmits>();

const cancelElement = ref<HTMLElement | undefined>();

provide(ALERT_DIALOG_CONTENT_INJECTION_KEY, {
  onCancelElementChange: (el) => {
    cancelElement.value = el;
  },
});
</script>

<template>
  <DialogContent
    v-bind="props"
    role="alertdialog"
    @pointer-down-outside.prevent
    @interact-outside.prevent
    @open-auto-focus="
      () => {
        nextTick(() => {
          cancelElement?.focus({
            preventScroll: true,
          });
        });
      }
    "
  >
    <slot></slot>
  </DialogContent>
</template>
