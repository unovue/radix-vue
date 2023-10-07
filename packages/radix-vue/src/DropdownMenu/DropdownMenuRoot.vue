<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import type { Direction } from '../shared/types'

export interface DropdownMenuRootProps {
  open?: boolean
  defaultOpen?: boolean
  dir?: Direction
  modal?: boolean
}
export type DropdownMenuRootEmits = {
  'update:open': [value: boolean]
}

export const DROPDOWN_MENU_INJECTION_KEY
  = Symbol() as InjectionKey<DropdownMenuProvideValue>

export interface DropdownMenuProvideValue {
  open: Readonly<Ref<boolean>>
  onOpenChange(open: boolean): void
  onOpenToggle(): void
  triggerId: string
  triggerElement: Ref<HTMLElement | undefined>
  contentId: string
  modal: Ref<boolean>
  dir: Ref<Direction>
}
</script>

<script setup lang="ts">
import { provide, ref, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { MenuRoot } from '@/Menu'
import { useId } from '@/shared'

const props = withDefaults(defineProps<DropdownMenuRootProps>(), {
  modal: true,
  dir: 'ltr',
  open: undefined,
})
const emit = defineEmits<DropdownMenuRootEmits>()

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
})

const triggerElement = ref<HTMLElement>()

const { modal, dir } = toRefs(props)
provide<DropdownMenuProvideValue>(DROPDOWN_MENU_INJECTION_KEY, {
  open,
  onOpenChange: (value) => {
    open.value = value
  },
  onOpenToggle: () => {
    open.value = !open.value
  },
  triggerId: useId(),
  triggerElement,
  contentId: useId(),
  modal,
  dir,
})
</script>

<template>
  <MenuRoot v-model:open="open" :dir="dir" :modal="modal">
    <slot />
  </MenuRoot>
</template>
