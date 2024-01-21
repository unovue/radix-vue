<script lang="ts">
import type { DialogTitleProps } from '@/Dialog'
import { useForwardExpose } from '@/shared'

export interface AlertDialogTitleProps extends DialogTitleProps {}
</script>

<script setup lang="ts">
import { DialogTitle } from '@/Dialog'

const props = defineProps<AlertDialogTitleProps>()
useForwardExpose()
</script>

<template>
  <DialogTitle v-bind="props">
    <slot />
  </DialogTitle>
</template>
