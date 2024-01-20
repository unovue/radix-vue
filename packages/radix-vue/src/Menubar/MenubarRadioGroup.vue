<script lang="ts">
import type {
  MenuRadioGroupEmits,
  MenuRadioGroupProps,
} from '@/Menu'

export type MenubarRadioGroupEmits = MenuRadioGroupEmits

export interface MenubarRadioGroupProps extends MenuRadioGroupProps {}
</script>

<script setup lang="ts">
import { MenuRadioGroup } from '@/Menu'
import { useEmitAsProps, useForwardRef } from '@/shared'

const props = defineProps<MenubarRadioGroupProps>()
const emits = defineEmits<MenubarRadioGroupEmits>()

const emitsAsProps = useEmitAsProps(emits)
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuRadioGroup v-bind="{ ...props, ...emitsAsProps }" :ref="forwardRef">
    <slot />
  </MenuRadioGroup>
</template>
