<script setup lang="ts">
import {
  MenuRadioItem,
  type MenuRadioItemEmits,
  type MenuRadioItemProps,
} from '@/Menu'

export interface MenubarRadioItemProps extends MenuRadioItemProps {}
export type MenubarRadioItemEmits = MenuRadioItemEmits

const props = defineProps<MenuRadioItemProps>()
const emits = defineEmits<MenuRadioItemEmits>()
</script>

<template>
  <MenuRadioItem v-bind="{ ...props, ...emits }">
    <slot />
  </MenuRadioItem>
</template>
