<script lang="ts">
import { createContext, useEmitAsProps } from '@/shared'

interface AlertDialogContentContextValue {
  onCancelElementChange(el: HTMLElement | undefined): void
}

export const [injectAlertDialogContentContext, provideAlertDialogContentContext]
  = createContext<AlertDialogContentContextValue>('AlertDialogContent')

export interface AlertDialogContentProps extends DialogContentProps {}
export type AlertDialogContentEmits = DialogContentEmits
</script>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
} from '@/Dialog'

const props = defineProps<AlertDialogContentProps>()
const emits = defineEmits<AlertDialogContentEmits>()

const emitsAsProps = useEmitAsProps(emits)

const cancelElement = ref<HTMLElement>()

provideAlertDialogContentContext({
  onCancelElementChange: (el) => {
    cancelElement.value = el
  },
})
</script>

<template>
  <DialogContent
    v-bind="{ ...props, ...emitsAsProps }"
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
    <slot />
  </DialogContent>
</template>
