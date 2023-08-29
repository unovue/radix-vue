<script lang="ts">
import type { InjectionKey, Ref } from 'vue'

export interface HoverCardRootProps {
  defaultOpen?: false
  open?: boolean
  openDelay?: number
  closeDelay?: number
}
export type HoverCardRootEmits = {
  'update:open': [value: boolean]
}

export const HOVER_CARD_INJECTION_KEY
  = Symbol() as InjectionKey<HoverCardProvideValue>

export interface HoverCardProvideValue {
  open: Ref<boolean>
  onOpenChange(open: boolean): void
  onOpen(): void
  onClose(): void
  onDismiss(): void
  hasSelectionRef: Ref<boolean>
  isPointerDownOnContentRef: Ref<boolean>
}
</script>

<script setup lang="ts">
import { provide, ref, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { PopperRoot } from '@/Popper'

const props = withDefaults(defineProps<HoverCardRootProps>(), {
  defaultOpen: false,
  open: undefined,
  openDelay: 700,
  closeDelay: 300,
})
const emit = defineEmits<HoverCardRootEmits>()

const { openDelay, closeDelay } = toRefs(props)

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: true,
})

const openTimerRef = ref(0)
const closeTimerRef = ref(0)
const hasSelectionRef = ref(false)
const isPointerDownOnContentRef = ref(false)

function handleOpen() {
  clearTimeout(closeTimerRef.value)
  openTimerRef.value = window.setTimeout(() => open.value = true, openDelay.value)
}

function handleClose() {
  clearTimeout(openTimerRef.value)
  if (!hasSelectionRef.value && !isPointerDownOnContentRef.value)
    closeTimerRef.value = window.setTimeout(() => open.value = false, closeDelay.value)
}

function handleDismiss() {
  open.value = false
}

provide<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY, {
  open,
  onOpenChange(value) {
    open.value = value
  },
  onOpen: handleOpen,
  onClose: handleClose,
  onDismiss: handleDismiss,
  hasSelectionRef,
  isPointerDownOnContentRef,
})
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
