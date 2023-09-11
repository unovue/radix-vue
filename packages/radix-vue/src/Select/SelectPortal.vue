<script setup lang="ts">
import { TeleportPrimitive, type TeleportProps } from '@/Teleport'

export interface SelectPortalProps extends TeleportProps {}
const props = defineProps<SelectPortalProps>()
</script>

<template>
  <TeleportPrimitive v-bind="props">
    <slot />
  </TeleportPrimitive>
</template>
