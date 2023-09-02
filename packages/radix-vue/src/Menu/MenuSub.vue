<script lang="ts">
import { createContext, useId } from '@/shared'

export interface MenuSubContextValue {
  contentId: string
  triggerId: string
  trigger: Ref<HTMLElement | undefined>
  onTriggerChange(trigger: HTMLElement | undefined): void
  parentMenuContext?: MenuContextValue
}

export const [injectMenuSubContext, provideMenuSubContext]
  = createContext<MenuSubContextValue>('MenuSub')

export interface MenuSubProps {
  open?: boolean
}
</script>

<script setup lang="ts">
import {
  type Ref,
  ref,
  watchEffect,
} from 'vue'
import { useVModel } from '@vueuse/core'
import { type MenuContextValue, injectMenuContext, provideMenuContext } from './MenuRoot.vue'
import { PopperRoot } from '@/Popper'

const props = defineProps<MenuSubProps>()
const emits = defineEmits<{
  'update:open': [payload: boolean]
}>()

const open = useVModel(props, 'open', emits, {
  defaultValue: false,
  passive: true,
})

const parentMenuContext = injectMenuContext()
const trigger = ref<HTMLElement>()
const content = ref<HTMLElement>()

// Prevent the parent menu from reopening with open submenus.
watchEffect((cleanupFn) => {
  if (parentMenuContext.open.value === false)
    open.value = false
  cleanupFn(() => (open.value = false))
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

provideMenuSubContext({
  triggerId: useId(),
  contentId: useId(),
  trigger,
  onTriggerChange: (element) => {
    trigger.value = element
  },
})
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
