<script lang="ts">
import type { DialogTitleProps } from '@/Dialog'

export interface AlertDialogTitleProps extends DialogTitleProps {}
</script>

<script setup lang="ts">
import { DialogTitle } from '@/Dialog'

const props = defineProps<AlertDialogTitleProps>()
</script>

<template>
  <DialogTitle v-bind="props">
    <slot />
  </DialogTitle>
</template>
