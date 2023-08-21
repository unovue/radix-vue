<script setup lang="ts">
import { MenuGroup, type MenuGroupProps } from '@/Menu'

export interface ContextMenuGroupProps extends MenuGroupProps {}
const props = defineProps<ContextMenuGroupProps>()
</script>

<template>
  <MenuGroup v-bind="props">
    <slot />
  </MenuGroup>
</template>
