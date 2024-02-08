<script lang="ts">
import type { Ref } from 'vue'
import type { Direction } from './utils'
import { createContext, useDirection } from '@/shared'

export interface MenuContext {
  open: Ref<boolean>
  onOpenChange(open: boolean): void
  content: Ref<HTMLElement | undefined>
  onContentChange(content: HTMLElement | undefined): void
}

export interface MenuRootContext {
  onClose(): void
  dir: Ref<Direction>
  isUsingKeyboardRef: Ref<boolean>
  modal: Ref<boolean>
}

export interface MenuProps {
  /** The controlled open state of the menu. Can be used as `v-model:open`. */
  open?: boolean
  /** The reading direction of the combobox when applicable.
   *
   * If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. */
  dir?: Direction
  /** The modality of the dropdown menu.
   *
   * When set to `true`, interaction with outside elements will be disabled and only menu content will be visible to screen readers. */
  modal?: boolean
}

export type MenuEmits = {
  'update:open': [payload: boolean]
}

export const [injectMenuContext, provideMenuContext]
  = createContext<MenuContext>(['MenuRoot', 'MenuSub'], 'MenuContext')

export const [injectMenuRootContext, provideMenuRootContext]
  = createContext<MenuRootContext>('MenuRoot')
</script>

<script setup lang="ts">
import {
  ref,
  toRefs,
  watchEffect,
} from 'vue'
import { isClient } from '@vueuse/shared'
import { useVModel } from '@vueuse/core'
import { PopperRoot } from '@/Popper'

const props = withDefaults(defineProps<MenuProps>(), {
  open: false,
  modal: true,
})
const emits = defineEmits<MenuEmits>()
const { modal, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)

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

provideMenuContext({
  open,
  onOpenChange: (value) => {
    open.value = value
  },
  content,
  onContentChange: (element) => {
    content.value = element
  },
})

provideMenuRootContext({
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
