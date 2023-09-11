<script setup lang="ts">
import { TeleportPrimitive, type TeleportProps } from '@/Teleport'

export interface MenuPortalProps extends TeleportProps {}
const props = defineProps<MenuPortalProps>()
</script>

<template>
  <TeleportPrimitive v-bind="props">
    <slot />
  </TeleportPrimitive>
</template>
