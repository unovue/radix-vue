<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

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
const context = injectNavigationMenuContext()
const itemContext = injectNavigationMenuItemContext()

const open = computed(() => itemContext.value === context.modelValue.value)

// We persist the last active content value as the viewport may be animating out
// and we want the content to remain mounted for the lifecycle of the viewport.
const isLastActiveValue = computed(() => {
  if (!context.modelValue.value && context.previousValue.value)
    return (context.previousValue.value === itemContext.value)
  return false
})

function handlePointerDown(ev: PointerDownOutsideEvent) {
  emits('pointerDownOutside', ev)
  if (!ev.preventDefault)
    context.onContentLeave()
}
</script>

<template>
  <Teleport v-if="isClientMounted" :to="context.viewport.value" :disabled="!context.viewport.value">
    <Presence :present="open || isLastActiveValue">
      <NavigationMenuContentImpl
        :data-state="getOpenState(open)"
        :style="{
          pointerEvents: !open && context.isRootMenu ? 'none' : undefined,
        }"
        v-bind="{ ...$attrs, ...props, ...emitsAsProps }"
        @pointerenter="context.onContentEnter(itemContext.value)"
        @pointerleave="context.onContentLeave()"
        @pointerdown="handlePointerDown"
        @focus-outside="emits('focusOutside', $event)"
        @interact-outside="emits('interactOutside', $event)"
      >
        <slot />
      </NavigationMenuContentImpl>
    </Presence>
  </Teleport>
</template>
