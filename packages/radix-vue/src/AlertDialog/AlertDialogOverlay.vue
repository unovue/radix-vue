<script setup lang="ts">
import { DialogOverlay, type DialogOverlayProps } from '@/Dialog'

export interface AlertDialogOverlayProps extends DialogOverlayProps {}

const props = defineProps<AlertDialogOverlayProps>()
</script>

<template>
  <DialogOverlay v-bind="props">
    <slot />
  </DialogOverlay>
</template>
