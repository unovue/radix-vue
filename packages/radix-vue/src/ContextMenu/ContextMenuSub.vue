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

const props = defineProps<ContextMenuSubProps>()
const emit = defineEmits<ContextMenuSubEmits>()

const open = useVModel(props, 'open', emit, {
  passive: true,
  defaultValue: props.defaultOpen,
})
</script>

<template>
  <MenuSub v-model:open="open">
    <slot />
  </MenuSub>
</template>
