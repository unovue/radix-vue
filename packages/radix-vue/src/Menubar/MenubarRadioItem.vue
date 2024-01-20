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
import { useForwardPropsEmits, useForwardRef } from '@/shared'

const props = defineProps<MenuRadioItemProps>()
const emits = defineEmits<MenuRadioItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuRadioItem v-bind="forwarded" :ref="forwardRef">
    <slot />
  </MenuRadioItem>
</template>
