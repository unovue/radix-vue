<script lang="ts">
import type { MenuItemEmits, MenuItemProps } from '@/Menu'

export type DropdownMenuItemEmits = MenuItemEmits

export interface DropdownMenuItemProps extends MenuItemProps {}
</script>

<script setup lang="ts">
import { MenuItem } from '@/Menu'
import { useEmitAsProps, useForwardRef } from '@/shared'

const props = defineProps<DropdownMenuItemProps>()
const emits = defineEmits<DropdownMenuItemEmits>()

const emitsAsProps = useEmitAsProps(emits)
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuItem v-bind="{ ...props, ...emitsAsProps }" :ref="forwardRef">
    <slot />
  </MenuItem>
</template>
