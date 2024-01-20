<script lang="ts">
import type { DialogDescriptionProps } from '@/Dialog'
import { useForwardRef } from '@/shared'

export interface AlertDialogDescriptionProps extends DialogDescriptionProps {}
</script>

<script setup lang="ts">
import { DialogDescription } from '@/Dialog'

const props = defineProps<AlertDialogDescriptionProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <DialogDescription :ref="forwardRef" v-bind="props">
    <slot />
  </DialogDescription>
</template>
