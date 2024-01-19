<script lang="ts">
import type { DialogCloseProps } from '@/Dialog'
import { useForwardRef } from '@/shared'

export interface AlertDialogCancelProps extends DialogCloseProps {}
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import { injectAlertDialogContentContext } from './AlertDialogContent.vue'
import { DialogClose } from '@/Dialog'

const props = defineProps<AlertDialogCancelProps>()
const contentContext = injectAlertDialogContentContext()
const { forwardRef, currentElement } = useForwardRef()

onMounted(() => {
  contentContext.onCancelElementChange(currentElement.value)
})
</script>

<template>
  <DialogClose v-bind="props" :ref="forwardRef">
    <slot />
  </DialogClose>
</template>
