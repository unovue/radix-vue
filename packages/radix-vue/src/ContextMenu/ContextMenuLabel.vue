<script setup lang="ts">
import { MenuLabel, type MenuLabelProps } from '@/Menu'

export interface ContextMenuLabelProps extends MenuLabelProps {}
const props = defineProps<ContextMenuLabelProps>()
</script>

<template>
  <MenuLabel v-bind="props">
    <slot />
  </MenuLabel>
</template>
