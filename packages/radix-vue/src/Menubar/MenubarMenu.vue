<script lang="ts">
import type { Ref } from 'vue'
import { createContext, useId } from '@/shared'

export interface MenubarMenuProps {
  value?: string
}

interface MenubarMenuContextValue {
  value: string
  triggerId: string
  triggerElement: Ref<HTMLElement | undefined>
  contentId: string
  wasKeyboardTriggerOpenRef: Ref<boolean>
}

export const [injectMenubarMenuContext, provideMenubarMenuContext]
  = createContext<MenubarMenuContextValue>('MenubarMenu')
</script>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { injectMenubarRootContext } from './MenubarRoot.vue'

import { MenuRoot } from '@/Menu'

const props = defineProps<MenubarMenuProps>()

const value = props.value ?? useId()
const context = injectMenubarRootContext()

const triggerElement = ref<HTMLElement>()
const wasKeyboardTriggerOpenRef = ref(false)

const open = computed(() => context.modelValue.value === value)

watch(open, () => {
  if (!open.value)
    wasKeyboardTriggerOpenRef.value = false
})

provideMenubarMenuContext({
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
    :dir="context.dir.value"
    @update:open="
      (value) => {
        // Menu only calls `@update:open` when dismissing so we
        // want to close our MenuBar based on the same events.
        if (!value) context.onMenuClose();
      }
    "
  >
    <slot />
  </MenuRoot>
</template>
