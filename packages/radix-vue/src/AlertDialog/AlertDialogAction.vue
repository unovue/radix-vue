<script lang="ts">
import type { DialogCloseProps } from '@/Dialog'

export interface AlertDialogActionProps extends DialogCloseProps {}
</script>

<script setup lang="ts">
import { DialogClose } from '@/Dialog'

const props = defineProps<AlertDialogActionProps>()
</script>

<template>
  <DialogClose v-bind="props">
    <slot />
  </DialogClose>
</template>
