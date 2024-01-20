<script lang="ts">
import type { DialogOverlayProps } from '@/Dialog'
import { useForwardRef } from '@/shared'

export interface AlertDialogOverlayProps extends DialogOverlayProps {}
</script>

<script setup lang="ts">
import { DialogOverlay } from '@/Dialog'

const props = defineProps<AlertDialogOverlayProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <DialogOverlay v-bind="props" :ref="forwardRef">
    <slot />
  </DialogOverlay>
</template>
