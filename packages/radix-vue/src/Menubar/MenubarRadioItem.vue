<script lang="ts">
import type {
  MenuRadioItemEmits,
  MenuRadioItemProps,
} from '@/Menu'

export type MenubarRadioItemEmits = MenuRadioItemEmits

export interface MenubarRadioItemProps extends MenuRadioItemProps {}
</script>

<script setup lang="ts">
import { MenuRadioItem } from '@/Menu'

const props = defineProps<MenuRadioItemProps>()
const emits = defineEmits<MenuRadioItemEmits>()
</script>

<template>
  <MenuRadioItem v-bind="{ ...props, ...emits }">
    <slot />
  </MenuRadioItem>
</template>
