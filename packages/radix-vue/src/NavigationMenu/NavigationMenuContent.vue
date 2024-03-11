<script lang="ts">
import type { NavigationMenuContentImplEmits, NavigationMenuContentImplProps } from './NavigationMenuContentImpl.vue'

export type NavigationMenuContentEmits = NavigationMenuContentImplEmits

export interface NavigationMenuContentProps extends NavigationMenuContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { injectNavigationMenuContext } from './NavigationMenuRoot.vue'
import { injectNavigationMenuItemContext } from './NavigationMenuItem.vue'
import { getOpenState, whenMouse } from './utils'
import { Presence } from '@/Presence'
import NavigationMenuContentImpl from './NavigationMenuContentImpl.vue'
import { useEmitAsProps, useForwardExpose } from '@/shared'
import { useMounted } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NavigationMenuContentProps>()
const emits = defineEmits<NavigationMenuContentEmits>()

const emitsAsProps = useEmitAsProps(emits)
const { forwardRef } = useForwardExpose()

const isClientMounted = useMounted()
const menuContext = injectNavigationMenuContext()
const itemContext = injectNavigationMenuItemContext()

const open = computed(() => itemContext.value === menuContext.modelValue.value)

// We persist the last active content value as the viewport may be animating out
// and we want the content to remain mounted for the lifecycle of the viewport.
const isLastActiveValue = computed(() => {
  if (menuContext.viewport.value) {
    if (!menuContext.modelValue.value && menuContext.previousValue.value)
      return (menuContext.previousValue.value === itemContext.value)
  }
  return false
})
</script>

<template>
  <Teleport v-if="isClientMounted" :to="menuContext.viewport.value" :disabled="!menuContext.viewport.value">
    <Presence :present="forceMount || open || isLastActiveValue">
      <NavigationMenuContentImpl
        :ref="forwardRef"
        :data-state="getOpenState(open)"
        :style="{
          pointerEvents: !open && menuContext.isRootMenu ? 'none' : undefined,
        }"
        v-bind="{ ...$attrs, ...props, ...emitsAsProps }"
        @pointerenter="menuContext.onContentEnter(itemContext.value)"
        @pointerleave="whenMouse(() => menuContext.onContentLeave())"
        @pointer-down-outside="emits('pointerDownOutside', $event)"
        @focus-outside="emits('focusOutside', $event)"
        @interact-outside="emits('interactOutside', $event)"
      >
        <slot />
      </NavigationMenuContentImpl>
    </Presence>
  </Teleport>
</template>
