<script lang="ts">
import type { VNode } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface NavigationMenuTriggerProps extends PrimitiveProps {
  /** When `true`, prevents the user from interacting with item */
  disabled?: boolean
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { refAutoReset, unrefElement } from '@vueuse/core'
import { injectNavigationMenuContext } from './NavigationMenuRoot.vue'
import { injectNavigationMenuItemContext } from './NavigationMenuItem.vue'
import { getOpenState, makeContentId, makeTriggerId } from './utils'
import {
  Primitive,
} from '@/Primitive'
import { VisuallyHidden } from '@/VisuallyHidden'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NavigationMenuTriggerProps>(), {
  as: 'button',
})

const menuContext = injectNavigationMenuContext()
const itemContext = injectNavigationMenuItemContext()

const { forwardRef, currentElement: triggerElement } = useForwardExpose()
const triggerId = ref('')
const contentId = ref('')

const hasPointerMoveOpenedRef = refAutoReset(false, 300)
const wasClickCloseRef = ref(false)

const open = computed(() => itemContext.value === menuContext.modelValue.value)

onMounted(() => {
  itemContext.triggerRef = triggerElement
  triggerId.value = makeTriggerId(menuContext.baseId, itemContext.value)
  contentId.value = makeContentId(menuContext.baseId, itemContext.value)
})

function handlePointerEnter() {
  wasClickCloseRef.value = false
  itemContext.wasEscapeCloseRef.value = false
}

function handlePointerMove(ev: PointerEvent) {
  if (ev.pointerType === 'mouse') {
    if (
      props.disabled
      || wasClickCloseRef.value
      || itemContext.wasEscapeCloseRef.value
      || hasPointerMoveOpenedRef.value
    )
      return
    menuContext.onTriggerEnter(itemContext.value)
    hasPointerMoveOpenedRef.value = true
  }
}

function handlePointerLeave(ev: PointerEvent) {
  if (ev.pointerType === 'mouse') {
    if (props.disabled)
      return
    menuContext.onTriggerLeave()
    hasPointerMoveOpenedRef.value = false
  }
}

function handleClick() {
  // if open via pointermove, we prevent click event
  if (hasPointerMoveOpenedRef.value)
    return

  if (open.value)
    menuContext.onItemSelect('')
  else menuContext.onItemSelect(itemContext.value)

  wasClickCloseRef.value = open.value
}

function handleKeydown(ev: KeyboardEvent) {
  const verticalEntryKey = menuContext.dir.value === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
  const entryKey = { horizontal: 'ArrowDown', vertical: verticalEntryKey }[
    menuContext.orientation
  ]
  if (open.value && ev.key === entryKey) {
    itemContext.onEntryKeyDown()
    // Prevent FocusGroupItem from handling the event
    ev.preventDefault()
    ev.stopPropagation()
  }
}

function setFocusProxyRef(node: VNode) {
  // @ts-expect-error unrefElement expect MaybeRef, but also support Vnode
  itemContext.focusProxyRef.value = unrefElement(node)
  return undefined
}

function handleVisuallyHiddenFocus(ev: FocusEvent) {
  const content = document.getElementById(itemContext.contentId)
  const prevFocusedElement = ev.relatedTarget as HTMLElement | null

  const wasTriggerFocused = prevFocusedElement === triggerElement.value
  const wasFocusFromContent = content?.contains(prevFocusedElement)

  if (wasTriggerFocused || !wasFocusFromContent)
    itemContext.onFocusProxyEnter(wasTriggerFocused ? 'start' : 'end')
}
</script>

<template>
  <Primitive
    :id="triggerId"
    :ref="forwardRef"
    :disabled="disabled"
    :data-disabled="disabled ? '' : undefined"
    :data-state="getOpenState(open)"
    :aria-expanded="open"
    :aria-controls="contentId"
    :as-child="props.asChild"
    :as="as"
    v-bind="$attrs"
    data-radix-vue-collection-item
    @pointerenter="handlePointerEnter"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <slot />
  </Primitive>

  <template v-if="open">
    <VisuallyHidden
      :ref="setFocusProxyRef"
      aria-hidden
      :tabindex="0"
      @focus="handleVisuallyHiddenFocus"
    />
    <span v-if="menuContext.viewport" :aria-owns="contentId" />
  </template>
</template>
