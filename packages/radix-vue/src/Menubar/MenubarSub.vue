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
import { useForwardExpose } from '@/shared'

const props = withDefaults(defineProps<MenubarSubProps>(), {
  open: undefined,
})
const emit = defineEmits<MenubarSubEmits>()

useForwardExpose()
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
