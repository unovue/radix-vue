<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import type { Direction } from '../shared/types'
import { useDirection } from '@/shared'

interface ContextMenuContextValue {
  open: Ref<boolean>
  onOpenChange(open: boolean): void
  modal: Ref<boolean>
  dir: Ref<Direction>
}

export const CONTEXT_MENU_INJECTION_KEY
  = Symbol() as InjectionKey<ContextMenuContextValue>

export interface ContextMenuRootProps {
  dir?: Direction
  modal?: boolean
}
export type ContextMenuRootEmits = {
  'update:open': [value: boolean]
}
</script>

<script setup lang="ts">
import { provide, ref, toRefs } from 'vue'
import { MenuRoot } from '@/Menu'

const props = withDefaults(defineProps<ContextMenuRootProps>(), {
  modal: true,
})
const emits = defineEmits<ContextMenuRootEmits>()
const { dir: propDir, modal } = toRefs(props)
const dir = useDirection(propDir)

const open = ref(false)

provide(CONTEXT_MENU_INJECTION_KEY, {
  open,
  onOpenChange: (value: boolean) => {
    open.value = value
    emits('update:open', value)
  },
  dir,
  modal,
})
</script>

<template>
  <MenuRoot v-model:open="open" :dir="dir" :modal="modal">
    <slot />
  </MenuRoot>
</template>
