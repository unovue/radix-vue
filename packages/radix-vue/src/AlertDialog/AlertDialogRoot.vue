<script setup lang="ts">
import {
  DialogRoot,
  type DialogRootEmits,
  type DialogRootProps,
} from '@/Dialog'
import { useEmitAsProps } from '@/shared'

export interface AlertDialogProps extends Omit<DialogRootProps, 'modal'> {}
export type AlertDialogEmits = DialogRootEmits

const props = defineProps<AlertDialogProps>()
const emit = defineEmits<AlertDialogEmits>()

const emitsAsProps = useEmitAsProps(emit)
</script>

<template>
  <DialogRoot v-bind="{ ...props, ...emitsAsProps }" :modal="true">
    <slot />
  </DialogRoot>
</template>
