<script lang="ts">
import type {
  MenuRadioItemEmits,
  MenuRadioItemProps,
} from '@/Menu'
import { useForwardPropsEmits, useForwardRef } from '@/shared'

export type DropdownMenuRadioItemEmits = MenuRadioItemEmits

export interface DropdownMenuRadioItemProps extends MenuRadioItemProps {}
</script>

<script setup lang="ts">
import { MenuRadioItem } from '@/Menu'

const props = defineProps<DropdownMenuRadioItemProps>()
const emits = defineEmits<DropdownMenuRadioItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuRadioItem v-bind="forwarded" :ref="forwardRef">
    <slot />
  </MenuRadioItem>
</template>
