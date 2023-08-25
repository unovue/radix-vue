<script lang="ts">
import type { InjectionKey, Ref } from 'vue'

export interface MenubarMenuProps {
  value?: string
}

export const MENUBAR_MENU_INJECTION_KEY
  = Symbol() as InjectionKey<MenubarMenuProvideValue>

interface MenubarMenuProvideValue {
  value: string
  triggerId: string
  triggerElement: Ref<HTMLElement | undefined>
  contentId: string
  wasKeyboardTriggerOpenRef: Ref<boolean>
}
</script>

<script setup lang="ts">
import { computed, inject, provide, ref, watch } from 'vue'
import { MENUBAR_INJECTION_KEY } from './MenubarRoot.vue'
import { useId } from '@/shared'
import { MenuRoot } from '@/Menu'

const props = defineProps<MenubarMenuProps>()

const value = props.value ?? useId()
const context = inject(MENUBAR_INJECTION_KEY)

const triggerElement = ref<HTMLElement>()
const wasKeyboardTriggerOpenRef = ref(false)

const open = computed(() => context?.modelValue.value === value)

watch(open, () => {
  if (!open.value)
    wasKeyboardTriggerOpenRef.value = false
})

provide(MENUBAR_MENU_INJECTION_KEY, {
  value,
  triggerElement,
  triggerId: value,
  contentId: useId(),
  wasKeyboardTriggerOpenRef,
})
</script>

<template>
  <MenuRoot
    :open="open"
    :modal="false"
    :dir="context?.dir.value"
    @update:open="
      (value) => {
        // Menu only calls `@update:open` when dismissing so we
        // want to close our MenuBar based on the same events.
        if (!value) context?.onMenuClose();
      }
    "
  >
    <slot />
  </MenuRoot>
</template>
