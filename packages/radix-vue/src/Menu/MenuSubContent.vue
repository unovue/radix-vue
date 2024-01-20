<script lang="ts">
import type {
  MenuContentImplEmits,
  MenuContentImplProps,
} from './MenuContentImpl.vue'

export type MenuSubContentEmits = MenuContentImplEmits

export interface MenuSubContentProps extends MenuContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import MenuContentImpl from './MenuContentImpl.vue'
import { injectMenuContext, injectMenuRootContext } from './MenuRoot.vue'
import { injectMenuSubContext } from './MenuSub.vue'
import { SUB_CLOSE_KEYS } from './utils'
import { Presence } from '@/Presence'
import { useForwardExpose, useForwardPropsEmits } from '@/shared'

const props = defineProps<MenuSubContentProps>()
const emits = defineEmits<MenuSubContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const menuContext = injectMenuContext()
const rootContext = injectMenuRootContext()
const menuSubContext = injectMenuSubContext()

const { forwardRef, currentElement: subContentElement } = useForwardExpose()
</script>

<template>
  <Presence :present="forceMount || menuContext.open.value">
    <MenuContentImpl
      v-bind="forwarded"
      :id="menuSubContext.contentId"
      :ref="forwardRef"
      :aria-labelledby="menuSubContext.triggerId"
      align="start"
      :side="rootContext.dir.value === 'rtl' ? 'left' : 'right'"
      :disable-outside-pointer-events="false"
      :disable-outside-scroll="false"
      :trap-focus="false"
      @open-auto-focus.prevent="(event) => {
        // when opening a submenu, focus content for keyboard users only
        if (rootContext.isUsingKeyboardRef.value) subContentElement?.focus();
      }"
      @close-auto-focus.prevent
      @focus-outside="
        (event) => {
          if (event.defaultPrevented) return;
          // We prevent closing when the trigger is focused to avoid triggering a re-open animation
          // on pointer interaction.
          if (event.target !== menuSubContext.trigger.value)
            menuContext.onOpenChange(false);
        }
      "
      @escape-key-down="
        (event) => {
          rootContext.onClose();
          // ensure pressing escape in submenu doesn't escape full screen mode
          event.preventDefault();
        }
      "
      @keydown="(event: KeyboardEvent) => {
        // Submenu key events bubble through portals. We only care about keys in this menu.
        const isKeyDownInside = (event.currentTarget as HTMLElement)?.contains(event.target as HTMLElement);
        const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir.value].includes(event.key);
        if (isKeyDownInside && isCloseKey) {
          menuContext.onOpenChange(false);
          // We focus manually because we prevented it in `onCloseAutoFocus`
          menuSubContext.trigger.value?.focus();
          // prevent window from scrolling
          event.preventDefault();
        }
      }"
    >
      <slot />
    </MenuContentImpl>
  </Presence>
</template>
