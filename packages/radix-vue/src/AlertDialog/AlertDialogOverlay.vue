<script lang="ts">
import type { DialogOverlayProps } from '@/Dialog'

export interface AlertDialogOverlayProps extends DialogOverlayProps {}
</script>

<script setup lang="ts">
import { DialogOverlay } from '@/Dialog'

const props = defineProps<AlertDialogOverlayProps>()
</script>

<template>
  <DialogOverlay v-bind="props">
    <slot />
  </DialogOverlay>
</template>
