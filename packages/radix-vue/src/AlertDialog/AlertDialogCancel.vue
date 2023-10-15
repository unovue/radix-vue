<script setup lang="ts">
import { onMounted } from 'vue'
import { injectAlertDialogContentContext } from './AlertDialogContent.vue'
import { DialogClose, type DialogCloseProps } from '@/Dialog'
import { usePrimitiveElement } from '@/Primitive'

export interface AlertDialogCancelProps extends DialogCloseProps {}

const props = defineProps<AlertDialogCancelProps>()
const contentContext = injectAlertDialogContentContext()
const { primitiveElement, currentElement } = usePrimitiveElement()

onMounted(() => {
  contentContext.onCancelElementChange(currentElement.value)
})
</script>

<template>
  <DialogClose v-bind="props" ref="primitiveElement">
    <slot />
  </DialogClose>
</template>
