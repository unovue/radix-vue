<script lang="ts">
import type { DialogTitleProps } from '@/Dialog'
import { useForwardRef } from '@/shared'

export interface AlertDialogTitleProps extends DialogTitleProps {}
</script>

<script setup lang="ts">
import { DialogTitle } from '@/Dialog'

const props = defineProps<AlertDialogTitleProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <DialogTitle v-bind="props" :ref="forwardRef">
    <slot />
  </DialogTitle>
</template>
