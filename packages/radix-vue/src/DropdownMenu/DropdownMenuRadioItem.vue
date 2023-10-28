<script lang="ts">
import type {
  MenuRadioItemEmits,
  MenuRadioItemProps,
} from '@/Menu'

export type DropdownMenuRadioItemEmits = MenuRadioItemEmits

export interface DropdownMenuRadioItemProps extends MenuRadioItemProps {}
</script>

<script setup lang="ts">
import { MenuRadioItem } from '@/Menu'

const props = defineProps<DropdownMenuRadioItemProps>()
const emits = defineEmits<DropdownMenuRadioItemEmits>()
</script>

<template>
  <MenuRadioItem v-bind="{ ...props, ...emits }">
    <slot />
  </MenuRadioItem>
</template>
