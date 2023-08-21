<script setup lang="ts">
import { MenuSeparator, type MenuSeparatorProps } from '@/Menu'

export interface MenubarSeparatorProps extends MenuSeparatorProps {}
const props = defineProps<MenubarSeparatorProps>()
</script>

<template>
  <MenuSeparator v-bind="props">
    <slot />
  </MenuSeparator>
</template>
