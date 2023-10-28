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
import { useForwardPropsEmits } from '@/shared'

const props = defineProps<AlertDialogProps>()
const emits = defineEmits<AlertDialogEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogRoot v-bind="forwarded" :modal="true">
    <slot />
  </DialogRoot>
</template>
