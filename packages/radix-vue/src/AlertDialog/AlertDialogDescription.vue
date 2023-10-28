<script lang="ts">
import type { DialogDescriptionProps } from '@/Dialog'

export interface AlertDialogDescriptionProps extends DialogDescriptionProps {}
</script>

<script setup lang="ts">
import { DialogDescription } from '@/Dialog'

const props = defineProps<AlertDialogDescriptionProps>()
</script>

<template>
  <DialogDescription v-bind="props">
    <slot />
  </DialogDescription>
</template>
