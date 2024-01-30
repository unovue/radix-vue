<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface MenuItemImplProps extends PrimitiveProps {
  /** When `true`, prevents the user from interacting with the item. */
  disabled?: boolean
  /** Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. <br>
   *  Use this when the content is complex, or you have non-textual content inside. */
  textValue?: string
}
</script>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { isMouseEvent } from './utils'
import { injectMenuContentContext } from './MenuContentImpl.vue'
import {
  Primitive,
} from '@/Primitive'

const props = defineProps<MenuItemImplProps>()

const contentContext = injectMenuContentContext()

const isFocused = ref(false)

async function handlePointerMove(event: PointerEvent) {
  if (event.defaultPrevented)
    return
  if (!isMouseEvent(event))
    return

  if (props.disabled) {
    contentContext.onItemLeave(event)
  }
  else {
    const defaultPrevented = contentContext.onItemEnter(event)
    if (!defaultPrevented) {
      const item = event.currentTarget;
      (item as HTMLElement)?.focus()
    }
  }
}

async function handlePointerLeave(event: PointerEvent) {
  await nextTick()
  if (event.defaultPrevented)
    return
  if (!isMouseEvent(event))
    return

  contentContext.onItemLeave(event)
}
</script>

<template>
  <Primitive
    role="menuitem"
    tabindex="-1"
    :as="as"
    :as-child="asChild"
    data-radix-vue-collection-item
    :aria-disabled="disabled || undefined"
    :data-disabled="disabled ? '' : undefined"
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
