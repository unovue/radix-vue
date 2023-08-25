<script lang="ts">
export type MenuItemEmits = {
  'select': [event: Event]
}
export interface MenuItemProps extends MenuItemImplProps {}
</script>

<script setup lang="ts">
import { inject, nextTick, ref } from 'vue'
import MenuItemImpl, { type MenuItemImplProps } from './MenuItemImpl.vue'
import { MENU_ROOT_INJECTION_KEY } from './MenuRoot.vue'
import { MENU_CONTENT_INJECTION_KEY } from './MenuContentImpl.vue'
import { ITEM_SELECT, SELECTION_KEYS } from './utils'
import { usePrimitiveElement } from '@/Primitive'

const props = defineProps<MenuItemProps>()
const emits = defineEmits<MenuItemEmits>()

const { primitiveElement, currentElement } = usePrimitiveElement()
const rootContext = inject(MENU_ROOT_INJECTION_KEY)
const contentContext = inject(MENU_CONTENT_INJECTION_KEY)

const isPointerDownRef = ref(false)

async function handleSelect() {
  const menuItem = currentElement.value
  if (!props.disabled && menuItem) {
    const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
      bubbles: true,
      cancelable: true,
    })
    emits('select', itemSelectEvent)
    // let select event finish
    await nextTick()
    if (itemSelectEvent.defaultPrevented)
      isPointerDownRef.value = false
    else rootContext!.onClose()
  }
}
</script>

<template>
  <MenuItemImpl
    v-bind="props"
    ref="primitiveElement"
    @click="handleSelect"
    @pointerdown="
      () => {
        isPointerDownRef = true;
      }
    "
    @pointerup="
      async (event) => {
        await nextTick();
        if (event.defaultPrevented) return;
        // Pointer down can move to a different menu item which should activate it on pointer up.
        // We dispatch a click for selection to allow composition with click based triggers and to
        // prevent Firefox from getting stuck in text selection mode when the menu closes.
        if (!isPointerDownRef) event.currentTarget?.click();
      }
    "
    @keydown="
      async (event) => {
        const isTypingAhead = contentContext!.searchRef.value !== '';
        if (disabled || (isTypingAhead && event.key === ' ')) return;
        if (SELECTION_KEYS.includes(event.key)) {
          event.currentTarget.click();
          /**
           * We prevent default browser behaviour for selection keys as they should trigger
           * a selection only:
           * - prevents space from scrolling the page.
           * - if keydown causes focus to move, prevents keydown from firing on the new target.
           */
          event.preventDefault();
        }
      }
    "
  >
    <slot />
  </MenuItemImpl>
</template>
