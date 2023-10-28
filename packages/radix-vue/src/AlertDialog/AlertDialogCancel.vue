<script lang="ts">
import type { DialogCloseProps } from '@/Dialog'

export interface AlertDialogCancelProps extends DialogCloseProps {}
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import { injectAlertDialogContentContext } from './AlertDialogContent.vue'
import { DialogClose } from '@/Dialog'
import { usePrimitiveElement } from '@/Primitive'

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
