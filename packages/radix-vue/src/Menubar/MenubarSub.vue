<script lang="ts">
export type MenubarSubEmits = {
  'update:open': [value: boolean]
}
export interface MenubarSubProps {
  open?: boolean
  defaultOpen?: boolean
}
</script>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { MenuSub } from '@/Menu'

const props = defineProps<MenubarSubProps>()
const emit = defineEmits<MenubarSubEmits>()

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen ?? false,
  passive: (props.open === undefined) as false,
})
</script>

<template>
  <MenuSub v-model:open="open">
    <slot />
  </MenuSub>
</template>
