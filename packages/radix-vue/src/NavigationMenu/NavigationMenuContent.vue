<script setup lang="ts">
import { computed, getCurrentInstance, inject, nextTick, watch } from 'vue'
import { computedWithControl } from '@vueuse/core'
import { NAVIGATION_MENU_INJECTION_KEY } from './NavigationMenuRoot.vue'
import { NAVIGATION_MENU_ITEM_INJECTION_KEY } from './NavigationMenuItem.vue'
import { getOpenState } from './utils'
import NavigationMenuContentImpl from './NavigationMenuContentImpl.vue'
import { Presence } from '@/Presence'
import {
  type DismissableLayerEmits,
  type DismissableLayerProps,
  type PointerDownOutsideEvent,
} from '@/DismissableLayer'

export interface NavigationMenuContentProps extends DismissableLayerProps {}
export type NavigationMenuContentEmits = DismissableLayerEmits

const props = defineProps<NavigationMenuContentProps>()
const emits = defineEmits<NavigationMenuContentEmits>()

const context = inject(NAVIGATION_MENU_INJECTION_KEY)
const itemContext = inject(NAVIGATION_MENU_ITEM_INJECTION_KEY)

const open = computed(() => itemContext?.value === context?.modelValue.value)

const commonProps = computedWithControl(
  () => itemContext,
  () => ({
    ...props,
    value: itemContext!.value,
    triggerRef: itemContext!.triggerRef,
    focusProxyRef: itemContext!.focusProxyRef,
    wasEscapeCloseRef: itemContext!.wasEscapeCloseRef,
    onContentFocusOutside: itemContext!.onContentFocusOutside,
    onRootContentClose: itemContext!.onRootContentClose,
  }),
)

const instance = getCurrentInstance()

watch(
  open,
  async () => {
    if (!context?.isRootMenu) {
      // Next tick to flush DOM for other dependent elements to mount
      await nextTick()
    }
    // Everytime we remove mounted vnode using `v-if`, we would need to reset the vnode,
    // thus having this watcher is crucial is important for SSR
    // @ts-expect-error
    const vnode = instance?.vnode.children?.default()?.[0]
    if (context?.viewport && vnode && itemContext?.triggerRef.value) {
      vnode.props = {
        ...vnode.props,
        ...commonProps.value,
        triggerRef: itemContext!.triggerRef,
        focusProxyRef: itemContext!.focusProxyRef,
        wasEscapeCloseRef: itemContext!.wasEscapeCloseRef,
      }
      vnode.parentProps = instance.vnode.props
      context.onViewportContentChange(itemContext!.value, vnode)
      commonProps.trigger()
    }
  },
  { immediate: true, deep: true },
)

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
  <Presence v-if="!context?.viewport.value" :present="open">
    <NavigationMenuContentImpl
      :data-state="getOpenState(open)"
      :style="{
        pointerEvents: !open && context?.isRootMenu ? 'none' : undefined,
      }"
      v-bind="{ ...$attrs, ...commonProps }"
      @pointerenter="context?.onContentEnter(itemContext!.value)"
      @pointerleave="context?.onContentLeave()"
      @pointerdown="handlePointerDown"
      @focus-outside="emits('focusOutside', $event)"
      @interact-outside="emits('interactOutside', $event)"
    >
      <slot />
    </NavigationMenuContentImpl>
  </Presence>
</template>
