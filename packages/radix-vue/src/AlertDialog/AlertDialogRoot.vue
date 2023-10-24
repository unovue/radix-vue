<script setup lang="ts">
import {
  DialogRoot,
  type DialogRootEmits,
  type DialogRootProps,
} from '@/Dialog'
import { useForwardPropsEmits } from '@/shared'

export interface AlertDialogProps extends Omit<DialogRootProps, 'modal'> {}
export type AlertDialogEmits = DialogRootEmits

const props = defineProps<AlertDialogProps>()
const emits = defineEmits<AlertDialogEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogRoot v-bind="forwarded" :modal="true">
    <slot />
  </DialogRoot>
</template>
