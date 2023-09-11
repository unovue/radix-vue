<script setup lang="ts">
import { TeleportPrimitive, type TeleportProps } from '@/Teleport'

export interface HoverCardPortalProps extends TeleportProps {}
const props = defineProps<HoverCardPortalProps>()
</script>

<template>
  <TeleportPrimitive v-bind="props">
    <slot />
  </TeleportPrimitive>
</template>
