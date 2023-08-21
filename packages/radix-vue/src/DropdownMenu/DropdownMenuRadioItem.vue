<script setup lang="ts">
import {
  MenuRadioItem,
  type MenuRadioItemEmits,
  type MenuRadioItemProps,
} from '@/Menu'

export interface DropdownMenuRadioItemProps extends MenuRadioItemProps {}
export type DropdownMenuRadioItemEmits = MenuRadioItemEmits

const props = defineProps<DropdownMenuRadioItemProps>()
const emits = defineEmits<DropdownMenuRadioItemEmits>()
</script>

<template>
  <MenuRadioItem v-bind="{ ...props, ...emits }">
    <slot />
  </MenuRadioItem>
</template>
