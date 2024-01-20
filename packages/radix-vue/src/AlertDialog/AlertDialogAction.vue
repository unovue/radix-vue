<script lang="ts">
import type { DialogCloseProps } from '@/Dialog'
import { useForwardRef } from '@/shared'

export interface AlertDialogActionProps extends DialogCloseProps {}
</script>

<script setup lang="ts">
import { DialogClose } from '@/Dialog'

const props = defineProps<AlertDialogActionProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <DialogClose v-bind="props" :ref="forwardRef">
    <slot />
  </DialogClose>
</template>
