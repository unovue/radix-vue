<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { ALERT_DIALOG_CONTENT_INJECTION_KEY } from './AlertDialogContent.vue'
import { DialogClose, type DialogCloseProps } from '@/Dialog'
import { usePrimitiveElement } from '@/Primitive'

export interface AlertDialogCancelProps extends DialogCloseProps {}

const props = defineProps<AlertDialogCancelProps>()
const contentContext = inject(ALERT_DIALOG_CONTENT_INJECTION_KEY)
const { primitiveElement, currentElement } = usePrimitiveElement()

onMounted(() => {
  contentContext!.onCancelElementChange(currentElement.value)
})
</script>

<template>
  <DialogClose v-bind="props" ref="primitiveElement">
    <slot />
  </DialogClose>
</template>
