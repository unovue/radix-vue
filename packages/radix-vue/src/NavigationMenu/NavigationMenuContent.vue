<script setup lang="ts">
import { computed } from 'vue'
import { injectNavigationMenuContext } from './NavigationMenuRoot.vue'
import { injectNavigationMenuItemContext } from './NavigationMenuItem.vue'
import { getOpenState } from './utils'
import { Presence } from '@/Presence'
import { type PointerDownOutsideEvent } from '@/DismissableLayer'
import NavigationMenuContentImpl, { type NavigationMenuContentImplEmits, type NavigationMenuContentImplProps } from './NavigationMenuContentImpl.vue'
import { useEmitAsProps } from '@/shared'
import { useMounted } from '@vueuse/core'

export interface NavigationMenuContentProps extends NavigationMenuContentImplProps {}
export type NavigationMenuContentEmits = NavigationMenuContentImplEmits

const props = defineProps<NavigationMenuContentProps>()
const emits = defineEmits<NavigationMenuContentEmits>()

const emitsAsProps = useEmitAsProps(emits)

const isClientMounted = useMounted()
const menuContext = injectNavigationMenuContext()
const itemContext = injectNavigationMenuItemContext()

const open = computed(() => itemContext.value === menuContext.modelValue.value)

// We persist the last active content value as the viewport may be animating out
// and we want the content to remain mounted for the lifecycle of the viewport.
const isLastActiveValue = computed(() => {
  if (!menuContext.modelValue.value && menuContext.previousValue.value)
    return (menuContext.previousValue.value === itemContext.value)
  return false
})

function handlePointerDown(ev: PointerDownOutsideEvent) {
  emits('pointerDownOutside', ev)
  if (!ev.preventDefault)
    menuContext.onContentLeave()
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <Teleport v-if="isClientMounted" :to="menuContext.viewport.value" :disabled="!menuContext.viewport.value">
    <Presence :present="open || isLastActiveValue">
      <NavigationMenuContentImpl
        :data-state="getOpenState(open)"
        :style="{
          pointerEvents: !open && menuContext.isRootMenu ? 'none' : undefined,
        }"
        v-bind="{ ...$attrs, ...props, ...emitsAsProps }"
        @pointerenter="menuContext.onContentEnter(itemContext.value)"
        @pointerleave="menuContext.onContentLeave()"
        @pointerdown="handlePointerDown"
        @focus-outside="emits('focusOutside', $event)"
        @interact-outside="emits('interactOutside', $event)"
      >
        <slot />
      </NavigationMenuContentImpl>
    </Presence>
  </Teleport>
</template>
