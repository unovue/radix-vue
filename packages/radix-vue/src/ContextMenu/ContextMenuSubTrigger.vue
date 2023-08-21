<script setup lang="ts">
import { MenuSubTrigger, type MenuSubTriggerProps } from '@/Menu'

export interface ContextMenuSubTriggerProps extends MenuSubTriggerProps {}
const props = defineProps<ContextMenuSubTriggerProps>()
</script>

<template>
  <MenuSubTrigger v-bind="props">
    <slot />
  </MenuSubTrigger>
</template>
