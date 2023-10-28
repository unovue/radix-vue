<script lang="ts">
import type { DialogTriggerProps } from '@/Dialog'

export interface AlertDialogTriggerProps extends DialogTriggerProps {}
</script>

<script setup lang="ts">
import { DialogTrigger } from '@/Dialog'

const props = defineProps<AlertDialogTriggerProps>()
</script>

<template>
  <DialogTrigger v-bind="props">
    <slot />
  </DialogTrigger>
</template>
