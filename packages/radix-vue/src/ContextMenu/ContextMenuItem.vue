<script lang="ts">
import type { MenuItemEmits, MenuItemProps } from '@/Menu'

export type ContextMenuItemEmits = MenuItemEmits

export interface ContextMenuItemProps extends MenuItemProps {}
</script>

<script setup lang="ts">
import { MenuItem } from '@/Menu'
import { useEmitAsProps, useForwardRef } from '@/shared'

const props = defineProps<MenuItemProps>()
const emits = defineEmits<MenuItemEmits>()

const emitsAsProps = useEmitAsProps(emits)
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuItem v-bind="{ ...props, ...emitsAsProps }" :ref="forwardRef">
    <slot />
  </MenuItem>
</template>
