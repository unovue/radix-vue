<script lang="ts">
import type { MenuItemIndicatorProps } from '@/Menu'
import { useForwardRef } from '@/shared'

export interface MenubarItemIndicatorProps extends MenuItemIndicatorProps {}
</script>

<script setup lang="ts">
import { MenuItemIndicator } from '@/Menu'

const props = defineProps<MenubarItemIndicatorProps>()
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuItemIndicator v-bind="props" :ref="forwardRef">
    <slot />
  </MenuItemIndicator>
</template>
