<script lang="ts">
type MotionAttribute = 'to-start' | 'to-end' | 'from-start' | 'from-end'

interface NavigationMenuContentImplProps {
  value: string
  triggerRef: Ref<HTMLElement | undefined>
  focusProxyRef: Ref<HTMLElement | undefined>
  wasEscapeCloseRef: Ref<boolean>
  onContentFocusOutside(): void
  onRootContentClose(): void

  disableOutsidePointerEvents?: boolean
}
</script>

<script setup lang="ts">
import { type Ref, computed, inject, ref, watchEffect } from 'vue'
import { NAVIGATION_MENU_INJECTION_KEY } from './NavigationMenuRoot.vue'

import {
  EVENT_ROOT_CONTENT_DISMISS,
  focusFirst,
  getOpenState,
  getTabbableCandidates,
  makeContentId,
  makeTriggerId,
} from './utils'
import {
  DismissableLayer,
  type DismissableLayerEmits,
  type FocusOutsideEvent,
} from '@/DismissableLayer'
import { usePrimitiveElement } from '@/Primitive'
import { useArrowNavigation, useNewCollection } from '@/shared'
import type { PointerDownOutsideEvent } from '@/DismissableLayer/utils'

const props = defineProps<NavigationMenuContentImplProps>()
const emits = defineEmits<DismissableLayerEmits>()

const { injectCollection } = useNewCollection('nav')
const collectionItems = injectCollection()
const { primitiveElement, currentElement } = usePrimitiveElement()

const context = inject(NAVIGATION_MENU_INJECTION_KEY)
const triggerId = makeTriggerId(context!.baseId, props.value)
const contentId = makeContentId(context!.baseId, props.value)

const prevMotionAttributeRef = ref<MotionAttribute | null>(null)
const motionAttribute = computed(() => {
  const items = collectionItems.value
  const values = items.map(item => item.id.split('trigger-')[1])
  if (context?.dir === 'rtl')
    values.reverse()
  const index = values.indexOf(context!.modelValue.value)
  const prevIndex = values.indexOf(context!.previousValue.value)
  const isSelected = props.value === context?.modelValue.value
  const wasSelected = prevIndex === values.indexOf(props.value)

  // We only want to update selected and the last selected content
  // this avoids animations being interrupted outside of that range
  if (!isSelected && !wasSelected)
    return prevMotionAttributeRef.value

  const attribute = (() => {
    // Don't provide a direction on the initial open
    if (index !== prevIndex) {
      // If we're moving to this item from another
      if (isSelected && prevIndex !== -1)
        return index > prevIndex ? 'from-end' : 'from-start'
      // If we're leaving this item for another
      if (wasSelected && index !== -1)
        return index > prevIndex ? 'to-start' : 'to-end'
    }
    // Otherwise we're entering from closed or leaving the list
    // entirely and should not animate in any direction
    return null
  })()

  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  prevMotionAttributeRef.value = attribute
  return attribute
})

function handleFocusOutside(ev: FocusOutsideEvent) {
  emits('focusOutside', ev)
  emits('interactOutside', ev)

  if (!ev.defaultPrevented) {
    props.onContentFocusOutside()

    const target = ev.target as HTMLElement
    // Only dismiss content when focus moves outside of the menu
    if (context!.rootNavigationMenu?.value?.contains(target))
      ev.preventDefault()
  }
}

function handlePointerDownOutside(ev: PointerDownOutsideEvent) {
  emits('pointerDownOutside', ev)

  if (!ev.defaultPrevented) {
    const target = ev.target as HTMLElement
    const isTrigger = collectionItems.value.some(item =>
      item.contains(target),
    )
    const isRootViewport
      = context?.isRootMenu && context.viewport.value?.contains(target)

    if (isTrigger || isRootViewport || !context?.isRootMenu)
      ev.preventDefault()
  }
}

watchEffect((cleanupFn) => {
  const content = currentElement.value
  if (context?.isRootMenu && content) {
    // Bubble dismiss to the root content node and focus its trigger
    const handleClose = () => {
      context.onItemDismiss()
      props.onRootContentClose()
      if (content.contains(document.activeElement))
        props.triggerRef.value?.focus()
    }
    content.addEventListener(EVENT_ROOT_CONTENT_DISMISS, handleClose)

    cleanupFn(() =>
      content.removeEventListener(EVENT_ROOT_CONTENT_DISMISS, handleClose),
    )
  }
})

function handleEscapeKeyDown(ev: KeyboardEvent) {
  emits('escapeKeyDown', ev)

  if (!ev.defaultPrevented) {
    context!.onItemDismiss()
    props?.triggerRef?.value?.focus()
    props!.wasEscapeCloseRef.value = true
  }
}

function handleKeydown(ev: KeyboardEvent) {
  const isMetaKey = ev.altKey || ev.ctrlKey || ev.metaKey
  const isTabKey = ev.key === 'Tab' && !isMetaKey
  const candidates = getTabbableCandidates(ev.currentTarget as HTMLElement)

  if (isTabKey) {
    const focusedElement = document.activeElement
    const index = candidates.findIndex(
      candidate => candidate === focusedElement,
    )
    const isMovingBackwards = ev.shiftKey
    const nextCandidates = isMovingBackwards
      ? candidates.slice(0, index).reverse()
      : candidates.slice(index + 1, candidates.length)

    if (focusFirst(nextCandidates)) {
      // prevent browser tab keydown because we've handled focus
      ev.preventDefault()
    }
    else {
      // If we can't focus that means we're at the edges
      // so focus the proxy and let browser handle
      // tab/shift+tab keypress on the proxy instead
      props.focusProxyRef.value?.focus()
      return
    }
  }

  const newSelectedElement = useArrowNavigation(
    ev,
    document.activeElement as HTMLElement,
    undefined,
    { itemsArray: candidates, loop: false },
  )
  newSelectedElement?.focus()

  if (ev.key === 'Enter' || ev.key === 'Escape')
    return
  ev.preventDefault()
  ev.stopPropagation()
}

function handleDismiss() {
  const rootContentDismissEvent = new Event(EVENT_ROOT_CONTENT_DISMISS, {
    bubbles: true,
    cancelable: true,
  })
  currentElement.value?.dispatchEvent(rootContentDismissEvent)
}

defineExpose({
  ...props,
})
</script>

<template>
  <DismissableLayer
    :id="contentId"
    ref="primitiveElement"
    :aria-labelledby="triggerId"
    :data-motion="motionAttribute"
    :data-state="getOpenState(context?.modelValue.value === props.value)"
    :data-orientation="context?.orientation"
    :disable-outside-pointer-events="disableOutsidePointerEvents"
    @keydown="handleKeydown"
    @escape-key-down="handleEscapeKeyDown"
    @pointer-down-outside="handlePointerDownOutside"
    @focus-outside="handleFocusOutside"
    @dismiss="handleDismiss"
  >
    <slot />
  </DismissableLayer>
</template>
