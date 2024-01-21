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
import { useForwardExpose } from '@/shared'

const props = withDefaults(defineProps<ContextMenuSubProps>(), {
  open: undefined,
})
const emit = defineEmits<ContextMenuSubEmits>()

useForwardExpose()

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
})
</script>

<template>
  <MenuSub v-model:open="open">
    <slot />
  </MenuSub>
</template>
