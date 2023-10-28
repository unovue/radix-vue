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

const props = withDefaults(defineProps<DropdownMenuSubProps>(), {
  open: undefined,
})
const emit = defineEmits<DropdownMenuSubEmits>()

const open = useVModel(props, 'open', emit, {
  passive: (props.open === undefined) as false,
  defaultValue: props.defaultOpen ?? false,
})
</script>

<template>
  <MenuSub v-model:open="open">
    <slot />
  </MenuSub>
</template>
