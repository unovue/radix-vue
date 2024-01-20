<script lang="ts">
import type {
  MenuRadioGroupEmits,
  MenuRadioGroupProps,
} from '@/Menu'

export type ContextMenuRadioGroupEmits = MenuRadioGroupEmits

export interface ContextMenuRadioGroupProps extends MenuRadioGroupProps {}
</script>

<script setup lang="ts">
import { MenuRadioGroup } from '@/Menu'
import { useEmitAsProps, useForwardRef } from '@/shared'

const props = defineProps<ContextMenuRadioGroupProps>()
const emits = defineEmits<ContextMenuRadioGroupEmits>()

const emitsAsProps = useEmitAsProps(emits)
const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuRadioGroup v-bind="{ ...props, ...emitsAsProps }" :ref="forwardRef">
    <slot />
  </MenuRadioGroup>
</template>
