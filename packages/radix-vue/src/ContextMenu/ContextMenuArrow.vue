<script setup lang="ts">
import { MenuArrow, type MenuArrowProps } from '@/Menu'

export interface ContextMenuArrowProps extends MenuArrowProps {}
const props = defineProps<ContextMenuArrowProps>()
</script>

<template>
  <MenuArrow v-bind="props">
    <slot />
  </MenuArrow>
</template>
