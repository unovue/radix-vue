<script lang="ts">
export type DropdownMenuSubEmits = {
  'update:open': [value: boolean]
}

export interface DropdownMenuSubProps {
  open?: boolean
  defaultOpen?: boolean
}
</script>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { MenuSub } from '@/Menu'
import { useForwardRef } from '@/shared'

const props = withDefaults(defineProps<DropdownMenuSubProps>(), {
  open: undefined,
})
const emit = defineEmits<DropdownMenuSubEmits>()

const open = useVModel(props, 'open', emit, {
  passive: (props.open === undefined) as false,
  defaultValue: props.defaultOpen ?? false,
})

const { forwardRef } = useForwardRef()
</script>

<template>
  <MenuSub :ref="forwardRef" v-model:open="open">
    <slot />
  </MenuSub>
</template>
