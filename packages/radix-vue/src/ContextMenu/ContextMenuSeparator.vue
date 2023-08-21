<script setup lang="ts">
import { MenuSeparator, type MenuSeparatorProps } from '@/Menu'

export interface ContextMenuSeparatorProps extends MenuSeparatorProps {}
const props = defineProps<ContextMenuSeparatorProps>()
</script>

<template>
  <MenuSeparator v-bind="props">
    <slot />
  </MenuSeparator>
</template>
