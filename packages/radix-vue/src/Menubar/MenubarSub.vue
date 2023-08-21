<script lang="ts">
export interface MenubarSubProps {
  open?: boolean
  defaultOpen?: boolean
}
export interface MenubarSubEmits {
  (e: 'update:open', value: boolean): void
}
</script>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { MenuSub } from '@/Menu'

const props = defineProps<MenubarSubProps>()
const emit = defineEmits<MenubarSubEmits>()

const open = useVModel(props, 'open', emit, {
  passive: true,
  defaultValue: props.defaultOpen ?? false,
})
</script>

<template>
  <MenuSub v-model:open="open">
    <slot />
  </MenuSub>
</template>
