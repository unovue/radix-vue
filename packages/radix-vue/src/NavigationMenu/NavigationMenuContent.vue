<script setup lang="ts">
import { computed, inject } from 'vue'
import { NAVIGATION_MENU_INJECTION_KEY } from './NavigationMenuRoot.vue'
import { NAVIGATION_MENU_ITEM_INJECTION_KEY } from './NavigationMenuItem.vue'
import { getOpenState } from './utils'
import { Presence } from '@/Presence'
import { type PointerDownOutsideEvent } from '@/DismissableLayer'
import NavigationMenuContentImpl, { type NavigationMenuContentImplEmits, type NavigationMenuContentImplProps } from './NavigationMenuContentImpl.vue'
import { useEmitAsProps } from '@/shared'

export interface NavigationMenuContentProps extends NavigationMenuContentImplProps {}
export type NavigationMenuContentEmits = NavigationMenuContentImplEmits

const props = defineProps<NavigationMenuContentProps>()
const emits = defineEmits<NavigationMenuContentEmits>()

const emitsAsProps = useEmitAsProps(emits)

const context = inject(NAVIGATION_MENU_INJECTION_KEY)
const itemContext = inject(NAVIGATION_MENU_ITEM_INJECTION_KEY)

const open = computed(() => itemContext?.value === context?.modelValue.value)

// We persist the last active content value as the viewport may be animating out
// and we want the content to remain mounted for the lifecycle of the viewport.
const isLastActiveValue = computed(() => {
  if (!context?.modelValue.value && context?.previousValue.value)
    return (context?.previousValue.value === itemContext?.value)
  return false
})

function handlePointerDown(ev: PointerDownOutsideEvent) {
  emits('pointerDownOutside', ev)
  if (!ev.preventDefault)
    context?.onContentLeave()
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <Teleport :to="context?.viewport.value" :disabled="!context?.viewport.value">
    <Presence :present="open || isLastActiveValue">
      <NavigationMenuContentImpl
        :data-state="getOpenState(open)"
        :style="{
          pointerEvents: !open && context?.isRootMenu ? 'none' : undefined,
        }"
        v-bind="{ ...$attrs, ...props, ...emitsAsProps }"
        @pointerenter="context?.onContentEnter(itemContext!.value)"
        @pointerleave="context?.onContentLeave()"
        @pointerdown="handlePointerDown"
        @focus-outside="emits('focusOutside', $event)"
        @interact-outside="emits('interactOutside', $event)"
      >
        <slot />
      </NavigationMenuContentImpl>
    </Presence>
  </Teleport>
</template>
