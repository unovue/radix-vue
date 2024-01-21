<script lang="ts">
import type {
  MenuSubContentEmits,
  MenuSubContentProps,
} from '@/Menu'

export type ContextMenuSubContentEmits = MenuSubContentEmits
export interface ContextMenuSubContentProps extends MenuSubContentProps {}
</script>

<script setup lang="ts">
import { MenuSubContent } from '@/Menu'
import { useForwardExpose, useForwardPropsEmits } from '@/shared'

const props = defineProps<ContextMenuSubContentProps>()

const emits = defineEmits<ContextMenuSubContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
useForwardExpose()
</script>

<template>
  <MenuSubContent
    v-bind="forwarded"
    :style="{
      '--radix-context-menu-content-transform-origin':
        'var(--radix-popper-transform-origin)',
      '--radix-context-menu-content-available-width':
        'var(--radix-popper-available-width)',
      '--radix-context-menu-content-available-height':
        'var(--radix-popper-available-height)',
      '--radix-context-menu-trigger-width': 'var(--radix-popper-anchor-width)',
      '--radix-context-menu-trigger-height':
        'var(--radix-popper-anchor-height)',
    }"
  >
    <slot />
  </MenuSubContent>
</template>
