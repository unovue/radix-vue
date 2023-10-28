<script lang="ts">
import type { MenuItemEmits, MenuItemProps } from '@/Menu'

export type MenubarItemEmits = MenuItemEmits

export interface MenubarItemProps extends MenuItemProps {}
</script>

<script setup lang="ts">
import { MenuItem } from '@/Menu'
import { useEmitAsProps } from '@/shared'

const props = defineProps<MenubarItemProps>()
const emits = defineEmits<MenubarItemEmits>()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <MenuItem v-bind="{ ...props, ...emitsAsProps }">
    <slot />
  </MenuItem>
</template>
