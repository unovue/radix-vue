<script setup lang="ts">
import {
  MenuRadioGroup,
  type MenuRadioGroupEmits,
  type MenuRadioGroupProps,
} from '@/Menu'
import { useEmitAsProps } from '@/shared'

export interface MenubarRadioGroupProps extends MenuRadioGroupProps {}
export type MenubarRadioGroupEmits = MenuRadioGroupEmits

const props = defineProps<MenubarRadioGroupProps>()
const emits = defineEmits<MenubarRadioGroupEmits>()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <MenuRadioGroup v-bind="{ ...props, ...emitsAsProps }">
    <slot />
  </MenuRadioGroup>
</template>
