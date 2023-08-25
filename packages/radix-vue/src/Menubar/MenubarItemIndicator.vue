<script setup lang="ts">
import { MenuItemIndicator, type MenuItemIndicatorProps } from '@/Menu'

export interface MenubarItemIndicatorProps extends MenuItemIndicatorProps {}
const props = defineProps<MenubarItemIndicatorProps>()
</script>

<template>
  <MenuItemIndicator v-bind="props">
    <slot />
  </MenuItemIndicator>
</template>
