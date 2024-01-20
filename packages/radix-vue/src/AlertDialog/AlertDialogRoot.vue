<script lang="ts">
import type {
  DialogRootEmits,
  DialogRootProps,
} from '@/Dialog'

export type AlertDialogEmits = DialogRootEmits
export interface AlertDialogProps extends Omit<DialogRootProps, 'modal'> {}
</script>

<script setup lang="ts">
import { DialogRoot } from '@/Dialog'
import { useForwardPropsEmits, useForwardRef } from '@/shared'

const props = defineProps<AlertDialogProps>()
const emits = defineEmits<AlertDialogEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const { forwardRef } = useForwardRef()
</script>

<template>
  <DialogRoot v-bind="forwarded" :ref="forwardRef" :modal="true">
    <slot />
  </DialogRoot>
</template>
