<script setup lang="ts">
import {
  MenuCheckboxItem,
  type MenuCheckboxItemEmits,
  type MenuCheckboxItemProps,
} from '@/Menu'
import { useEmitAsProps } from '@/shared'

export interface DropdownMenuCheckboxItemProps extends MenuCheckboxItemProps {}
export type DropdownMenuCheckboxItemEmits = MenuCheckboxItemEmits

const props = defineProps<DropdownMenuCheckboxItemProps>()
const emits = defineEmits<DropdownMenuCheckboxItemEmits>()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <MenuCheckboxItem v-bind="{ ...props, ...emitsAsProps }">
    <slot />
  </MenuCheckboxItem>
</template>
