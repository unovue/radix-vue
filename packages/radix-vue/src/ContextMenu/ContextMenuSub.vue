<script lang="ts">
export type ContextMenuSubEmits = {
  'update:open': [value: boolean]
}
export interface ContextMenuSubProps {
  open?: boolean
  defaultOpen?: boolean
}
</script>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { MenuSub } from '@/Menu'
import { useForwardRef } from '@/shared'

const props = withDefaults(defineProps<ContextMenuSubProps>(), {
  open: undefined,
})
const emit = defineEmits<ContextMenuSubEmits>()

const { forwardRef } = useForwardRef()

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
})
</script>

<template>
  <MenuSub :ref="forwardRef" v-model:open="open">
    <slot />
  </MenuSub>
</template>
