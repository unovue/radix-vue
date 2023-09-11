<script setup lang="ts">
import { TeleportPrimitive, type TeleportProps } from '@/Teleport'

export interface DialogPortalProps extends TeleportProps {}
const props = defineProps<DialogPortalProps>()
</script>

<template>
  <TeleportPrimitive v-bind="props">
    <slot />
  </TeleportPrimitive>
</template>
