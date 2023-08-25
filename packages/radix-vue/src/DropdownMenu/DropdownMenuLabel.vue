<script setup lang="ts">
import { MenuLabel, type MenuLabelProps } from '@/Menu'

export interface DropdownMenuLabelProps extends MenuLabelProps {}
const props = defineProps<DropdownMenuLabelProps>()
</script>

<template>
  <MenuLabel v-bind="props">
    <slot />
  </MenuLabel>
</template>
