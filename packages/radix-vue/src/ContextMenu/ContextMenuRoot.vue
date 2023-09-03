<script lang="ts">
import type { Ref } from 'vue'
import type { Direction } from '../shared/types'
import { createContext } from '@/shared'

interface ContextMenuContextValue {
  open: Ref<boolean>
  onOpenChange(open: boolean): void
  modal: Ref<boolean>
  dir: Ref<Direction>
}

export const [injectContextMenuContext, provideContextMenuContext]
  = createContext<ContextMenuContextValue>('ContextMenuRoot')

export interface ContextMenuRootProps {
  dir?: Direction
  modal?: boolean
}
export type ContextMenuRootEmits = {
  'update:open': [value: boolean]
}
</script>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { MenuRoot } from '@/Menu'

const props = withDefaults(defineProps<ContextMenuRootProps>(), {
  dir: 'ltr',
  modal: true,
})
const emits = defineEmits<ContextMenuRootEmits>()
const { dir, modal } = toRefs(props)

const open = ref(false)

provideContextMenuContext({
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
