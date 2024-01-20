<script lang="ts">
import type {
  MenuCheckboxItemEmits,
  MenuCheckboxItemProps,
} from '@/Menu'

export type DropdownMenuCheckboxItemEmits = MenuCheckboxItemEmits

export interface DropdownMenuCheckboxItemProps extends MenuCheckboxItemProps {}
</script>

<script setup lang="ts">
import { MenuCheckboxItem } from '@/Menu'
import { useEmitAsProps, useForwardRef } from '@/shared'

const props = defineProps<DropdownMenuCheckboxItemProps>()
const emits = defineEmits<DropdownMenuCheckboxItemEmits>()

const emitsAsProps = useEmitAsProps(emits)
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuCheckboxItem v-bind="{ ...props, ...emitsAsProps }" :ref="forwardRef">
    <slot />
  </MenuCheckboxItem>
</template>
