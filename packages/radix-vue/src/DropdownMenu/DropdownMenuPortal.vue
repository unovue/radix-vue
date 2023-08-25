<script setup lang="ts">
import { MenuPortal, type MenuPortalProps } from '@/Menu'

export interface DropdownMenuPortalProps extends MenuPortalProps {}
const props = defineProps<DropdownMenuPortalProps>()
</script>

<template>
  <MenuPortal v-bind="props">
    <slot />
  </MenuPortal>
</template>
