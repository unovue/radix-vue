<script lang="ts">
export interface MenuContextValue {
  open: Ref<boolean>
  onOpenChange(open: boolean): void
  content: Ref<HTMLElement | undefined>
  onContentChange(content: HTMLElement | undefined): void
}

export interface MenuRootContextValue {
  onClose(): void
  dir: Ref<Direction>
  isUsingKeyboardRef: Ref<boolean>
  modal: Ref<boolean>
}

export interface MenuProps {
  open?: boolean
  onOpenChange?(open: boolean): void
  dir?: Direction
  modal?: boolean
}

export const MENU_INJECTION_KEY = Symbol() as InjectionKey<MenuContextValue>
export const MENU_ROOT_INJECTION_KEY
  = Symbol() as InjectionKey<MenuRootContextValue>
</script>

<script setup lang="ts">
import {
  type InjectionKey,
  type Ref,
  provide,
  ref,
  toRefs,
  watchEffect,
} from 'vue'
import { isClient } from '@vueuse/shared'
import { useVModel } from '@vueuse/core'
import { type Direction } from './utils'
import { PopperRoot } from '@/Popper'

const props = withDefaults(defineProps<MenuProps>(), {
  open: false,
  modal: true,
  dir: 'ltr',
})
const emits = defineEmits<{ (e: 'update:open', payload: boolean): void }>()
const { modal, dir } = toRefs(props)

const open = useVModel(props, 'open', emits)

const content = ref<HTMLElement>()
const isUsingKeyboardRef = ref(false)

watchEffect((cleanupFn) => {
  if (!isClient)
    return
  // Capture phase ensures we set the boolean before any side effects execute
  // in response to the key or pointer event as they might depend on this value.
  const handleKeyDown = () => {
    isUsingKeyboardRef.value = true
    document.addEventListener('pointerdown', handlePointer, {
      capture: true,
      once: true,
    })
    document.addEventListener('pointermove', handlePointer, {
      capture: true,
      once: true,
    })
  }
  const handlePointer = () => (isUsingKeyboardRef.value = false)
  document.addEventListener('keydown', handleKeyDown, { capture: true })

  cleanupFn(() => {
    document.removeEventListener('keydown', handleKeyDown, { capture: true })
    document.removeEventListener('pointerdown', handlePointer, {
      capture: true,
    })
    document.removeEventListener('pointermove', handlePointer, {
      capture: true,
    })
  })
})

provide(MENU_INJECTION_KEY, {
  open,
  onOpenChange: (value) => {
    open.value = value
  },
  content,
  onContentChange: (element) => {
    content.value = element
  },
})

provide(MENU_ROOT_INJECTION_KEY, {
  onClose: () => {
    open.value = false
  },
  isUsingKeyboardRef,
  dir,
  modal,
})
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
