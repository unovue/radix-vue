<script setup lang="ts">
import { MenuPortal, type MenuPortalProps } from '@/Menu'

export interface MenubarPortalProps extends MenuPortalProps {}
const props = defineProps<MenubarPortalProps>()
</script>

<template>
  <MenuPortal v-bind="props">
    <slot />
  </MenuPortal>
</template>
