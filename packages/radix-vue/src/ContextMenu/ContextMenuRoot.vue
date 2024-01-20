<script lang="ts">
import type { Ref } from 'vue'
import type { Direction } from '@/shared/types'
import { createContext, useDirection, useForwardRef } from '@/shared'

type ContextMenuRootContext = {
  open: Ref<boolean>
  onOpenChange(open: boolean): void
  modal: Ref<boolean>
  dir: Ref<Direction>
}

export interface ContextMenuRootProps {
  dir?: Direction
  modal?: boolean
}
export type ContextMenuRootEmits = {
  'update:open': [value: boolean]
}

export const [injectContextMenuRootContext, provideContextMenuRootContext]
  = createContext<ContextMenuRootContext>('ContextMenuRoot')
</script>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { MenuRoot } from '@/Menu'

const props = withDefaults(defineProps<ContextMenuRootProps>(), {
  modal: true,
})
const emits = defineEmits<ContextMenuRootEmits>()
const { dir: propDir, modal } = toRefs(props)
const { forwardRef } = useForwardRef()
const dir = useDirection(propDir)

const open = ref(false)

provideContextMenuRootContext({
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
  <MenuRoot :ref="forwardRef" v-model:open="open" :dir="dir" :modal="modal">
    <slot />
  </MenuRoot>
</template>
