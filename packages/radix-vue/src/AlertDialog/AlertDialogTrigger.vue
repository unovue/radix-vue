<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from '@/Dialog'

export interface AlertDialogTriggerProps extends DialogTriggerProps {}

const props = defineProps<AlertDialogTriggerProps>()
</script>

<template>
  <DialogTrigger v-bind="props">
    <slot />
  </DialogTrigger>
</template>
