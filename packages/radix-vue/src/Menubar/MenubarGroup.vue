<script setup lang="ts">
import { MenuGroup, type MenuGroupProps } from '@/Menu'

export interface MenubarGroupProps extends MenuGroupProps {}
const props = defineProps<MenubarGroupProps>()
</script>

<template>
  <MenuGroup v-bind="props">
    <slot />
  </MenuGroup>
</template>
