<script lang="ts">
export interface MenuSubContextValue {
  contentId: string
  triggerId: string
  trigger: Ref<HTMLElement | undefined>
  onTriggerChange(trigger: HTMLElement | undefined): void
  parentMenuContext?: MenuContextValue
}

export const MENU_SUB_INJECTION_KEY
  = Symbol() as InjectionKey<MenuSubContextValue>

export interface MenuSubProps {
  open?: boolean
}
</script>

<script setup lang="ts">
import {
  type InjectionKey,
  type Ref,
  inject,
  provide,
  ref,
  watchEffect,
} from 'vue'
import { useVModel } from '@vueuse/core'
import { MENU_INJECTION_KEY, type MenuContextValue } from './MenuRoot.vue'
import { PopperRoot } from '@/Popper'
import { useId } from '@/shared'

const props = withDefaults(defineProps<MenuSubProps>(), {
  open: undefined,
})
const emits = defineEmits<{
  'update:open': [payload: boolean]
}>()

const open = useVModel(props, 'open', emits, {
  defaultValue: false,
  passive: (props.open === undefined) as false,
})

const parentMenuContext = inject(MENU_INJECTION_KEY)
const trigger = ref<HTMLElement>()
const content = ref<HTMLElement>()

// Prevent the parent menu from reopening with open submenus.
watchEffect((cleanupFn) => {
  if (parentMenuContext?.open.value === false)
    open.value = false
  cleanupFn(() => (open.value = false))
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

provide(MENU_SUB_INJECTION_KEY, {
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
