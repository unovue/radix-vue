<script setup lang="ts">
import { MenuPortal, type MenuPortalProps } from '@/Menu'

export interface ContextMenuPortalProps extends MenuPortalProps {}
const props = defineProps<ContextMenuPortalProps>()
</script>

<template>
  <MenuPortal v-bind="props">
    <slot />
  </MenuPortal>
</template>
