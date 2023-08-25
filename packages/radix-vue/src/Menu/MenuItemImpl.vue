<script lang="ts">
import { isMouseEvent } from './utils'

export interface MenuItemImplProps extends PrimitiveProps {
  disabled?: boolean
  textValue?: string
}
</script>

<script setup lang="ts">
import { MENU_CONTENT_INJECTION_KEY } from './MenuContentImpl.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { inject, nextTick, ref } from 'vue'

const props = defineProps<MenuItemImplProps>()

const { primitiveElement, currentElement } = usePrimitiveElement()
const contentContext = inject(MENU_CONTENT_INJECTION_KEY)

const isFocused = ref(false)

async function handlePointerMove(event: PointerEvent) {
  await nextTick()
  if (event.defaultPrevented)
    return
  if (!isMouseEvent(event))
    return

  if (props.disabled) {
    contentContext!.onItemLeave(event)
  }
  else {
    contentContext!.onItemEnter(event)
    if (!event.defaultPrevented) {
      const item = event.currentTarget
      item && (item as HTMLElement).focus()
    }
  }
}

async function handlePointerLeave(event: PointerEvent) {
  await nextTick()
  if (event.defaultPrevented)
    return
  if (!isMouseEvent(event))
    return

  contentContext!.onItemLeave(event)
}

defineExpose({
  el: currentElement,
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    role="menuitem"
    tabindex="-1"
    :as="as"
    :as-child="asChild"
    data-radix-vue-collection-item
    :aria-disabled="disabled || undefined"
    :data-disabled="disabled ? '' : undefined"
    :disabled="disabled"
    :data-highlighted="isFocused ? '' : undefined"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
    @focus="
      async (event) => {
        await nextTick();
        if (event.defaultPrevented || disabled) return;
        isFocused = true;
      }
    "
    @blur="
      async (event) => {
        await nextTick();
        if (event.defaultPrevented) return;
        isFocused = false;
      }
    "
  >
    <slot />
  </Primitive>
</template>
