<script lang="ts">
import type { Ref } from 'vue'
import { createContext, useForwardRef, useId } from '@/shared'

export interface MenubarMenuProps {
  value?: string
}

type MenubarMenuContext = {
  value: string
  triggerId: string
  triggerElement: Ref<HTMLElement | undefined>
  contentId: string
  wasKeyboardTriggerOpenRef: Ref<boolean>
}

export const [injectMenubarMenuContext, provideMenubarMenuContext]
  = createContext<MenubarMenuContext>('MenubarMenu')
</script>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { injectMenubarRootContext } from './MenubarRoot.vue'
import { MenuRoot } from '@/Menu'

const props = defineProps<MenubarMenuProps>()

const value = props.value ?? useId()
const rootContext = injectMenubarRootContext()
const { forwardRef } = useForwardRef()

const triggerElement = ref<HTMLElement>()
const wasKeyboardTriggerOpenRef = ref(false)

const open = computed(() => rootContext.modelValue.value === value)

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
    :ref="forwardRef"
    :open="open"
    :modal="false"
    :dir="rootContext.dir.value"
    @update:open="
      (value) => {
        // Menu only calls `@update:open` when dismissing so we
        // want to close our MenuBar based on the same events.
        if (!value) rootContext.onMenuClose();
      }
    "
  >
    <slot />
  </MenuRoot>
</template>
