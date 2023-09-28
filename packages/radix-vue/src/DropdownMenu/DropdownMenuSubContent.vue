<script setup lang="ts">
import {
  MenuSubContent,
  type MenuSubContentEmits,
  type MenuSubContentProps,
} from '@/Menu'
import { useForwardPropsEmits } from '..'

export interface DropdownMenuSubContentProps extends MenuSubContentProps {}
export type DropdownMenuSubContentEmits = MenuSubContentEmits

const props = defineProps<DropdownMenuSubContentProps>()
const emits = defineEmits<DropdownMenuSubContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <MenuSubContent
    v-bind="forwarded"
    :style="{
      '--radix-dropdown-menu-content-transform-origin':
        'var(--radix-popper-transform-origin)',
      '--radix-dropdown-menu-content-available-width':
        'var(--radix-popper-available-width)',
      '--radix-dropdown-menu-content-available-height':
        'var(--radix-popper-available-height)',
      '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
      '--radix-dropdown-menu-trigger-height':
        'var(--radix-popper-anchor-height)',
    }"
  >
    <slot />
  </MenuSubContent>
</template>
