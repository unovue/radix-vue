<script setup lang="ts">
import { TeleportPrimitive, type TeleportProps } from '@/Teleport'

export interface AlertDialogPortalProps extends TeleportProps {}
const props = defineProps<AlertDialogPortalProps>()
</script>

<template>
  <TeleportPrimitive v-bind="props">
    <slot />
  </TeleportPrimitive>
</template>
