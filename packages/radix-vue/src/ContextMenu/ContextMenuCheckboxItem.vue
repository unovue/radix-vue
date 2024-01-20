<script lang="ts">
import type {
  MenuCheckboxItemEmits,
  MenuCheckboxItemProps,
} from '@/Menu'

export type ContextMenuCheckboxItemEmits = MenuCheckboxItemEmits

export interface ContextMenuCheckboxItemProps extends MenuCheckboxItemProps {}
</script>

<script setup lang="ts">
import { MenuCheckboxItem } from '@/Menu'
import { useEmitAsProps, useForwardRef } from '@/shared'

const props = defineProps<ContextMenuCheckboxItemProps>()
const emits = defineEmits<ContextMenuCheckboxItemEmits>()

const emitsAsProps = useEmitAsProps(emits)

const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuCheckboxItem v-bind="{ ...props, ...emitsAsProps }" :ref="forwardRef">
    <slot />
  </MenuCheckboxItem>
</template>
