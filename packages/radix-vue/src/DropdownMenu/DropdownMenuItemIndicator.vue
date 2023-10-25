<script lang="ts">
import type { MenuItemIndicatorProps } from '@/Menu'

export interface DropdownMenuItemIndicatorProps extends MenuItemIndicatorProps {}
</script>

<script setup lang="ts">
import { MenuItemIndicator } from '@/Menu'

const props = defineProps<DropdownMenuItemIndicatorProps>()
</script>

<template>
  <MenuItemIndicator v-bind="props">
    <slot />
  </MenuItemIndicator>
</template>
