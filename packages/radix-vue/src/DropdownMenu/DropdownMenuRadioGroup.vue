<script lang="ts">
import type {
  MenuRadioGroupEmits,
  MenuRadioGroupProps,
} from '@/Menu'

export type DropdownMenuRadioGroupEmits = MenuRadioGroupEmits

export interface DropdownMenuRadioGroupProps extends MenuRadioGroupProps {}
</script>

<script setup lang="ts">
import { MenuRadioGroup } from '@/Menu'
import { useEmitAsProps, useForwardRef } from '@/shared'

const props = defineProps<MenuRadioGroupProps>()
const emits = defineEmits<MenuRadioGroupEmits>()

const emitsAsProps = useEmitAsProps(emits)
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuRadioGroup v-bind="{ ...props, ...emitsAsProps }" :ref="forwardRef">
    <slot />
  </MenuRadioGroup>
</template>
