<script lang="ts">
import type { DialogTriggerProps } from '@/Dialog'
import { useForwardRef } from '@/shared'

export interface AlertDialogTriggerProps extends DialogTriggerProps {}
</script>

<script setup lang="ts">
import { DialogTrigger } from '@/Dialog'

const props = defineProps<AlertDialogTriggerProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <DialogTrigger v-bind="props" :ref="forwardRef">
    <slot />
  </DialogTrigger>
</template>
