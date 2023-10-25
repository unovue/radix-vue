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
import { useEmitAsProps } from '@/shared'

const props = defineProps<ContextMenuRadioGroupProps>()
const emits = defineEmits<ContextMenuRadioGroupEmits>()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <MenuRadioGroup v-bind="{ ...props, ...emitsAsProps }">
    <slot />
  </MenuRadioGroup>
</template>
