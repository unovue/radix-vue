<script lang="ts">
export interface NavigationMenuItemProps extends PrimitiveProps {
  value?: string
}

export interface NavigationMenuItemContextValue {
  value: string
  contentId: string
  triggerRef: Ref<HTMLElement | undefined>
  focusProxyRef: Ref<HTMLElement | undefined>
  wasEscapeCloseRef: Ref<boolean>
  onEntryKeyDown(): void
  onFocusProxyEnter(side: 'start' | 'end'): void
  onContentFocusOutside(): void
  onRootContentClose(): void
}

export const NAVIGATION_MENU_ITEM_INJECTION_KEY
  = Symbol() as InjectionKey<NavigationMenuItemContextValue>
</script>

<script setup lang="ts">
import { type InjectionKey, type Ref, inject, provide, ref } from 'vue'
import { NAVIGATION_MENU_INJECTION_KEY } from './NavigationMenuRoot.vue'
import {
  focusFirst,
  getTabbableCandidates,
  makeContentId,
  removeFromTabOrder,
} from './utils'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { useArrowNavigation, useId, useNewCollection } from '@/shared'

const props = withDefaults(defineProps<NavigationMenuItemProps>(), {
  as: 'li',
})
const { injectCollection } = useNewCollection('nav')
const collectionItems = injectCollection()

const context = inject(NAVIGATION_MENU_INJECTION_KEY)

const value = props.value || useId()
const triggerRef = ref<HTMLElement>()
const focusProxyRef = ref<HTMLElement>()

const contentId = makeContentId(context!.baseId, value)

let restoreContentTabOrderRef: () => void = () => ({})

const wasEscapeCloseRef = ref(false)
async function handleContentEntry(side = 'start') {
  const el = document.getElementById(contentId)
  if (el) {
    restoreContentTabOrderRef()
    const candidates = getTabbableCandidates(el)
    if (candidates.length)
      focusFirst(side === 'start' ? candidates : candidates.reverse())
  }
}

function handleContentExit() {
  const el = document.getElementById(contentId)
  if (el) {
    const candidates = getTabbableCandidates(el)
    if (candidates.length)
      restoreContentTabOrderRef = removeFromTabOrder(candidates)
  }
}

provide(NAVIGATION_MENU_ITEM_INJECTION_KEY, {
  value,
  contentId,
  triggerRef,
  focusProxyRef,
  wasEscapeCloseRef,
  onEntryKeyDown: handleContentEntry,
  onFocusProxyEnter: handleContentEntry,
  onContentFocusOutside: handleContentExit,
  onRootContentClose: handleContentExit,
})

function handleClose() {
  context?.onItemDismiss()
  triggerRef.value?.focus()
}

function handleKeydown(ev: KeyboardEvent) {
  const currentFocus = document.activeElement as HTMLElement
  if (ev.keyCode === 32 || ev.key === 'Enter') {
    if (context?.modelValue.value === value) {
      handleClose()
      ev.preventDefault()
      return
    }
    else {
      (ev.target as HTMLElement).click()
      ev.preventDefault()
      return
    }
  }

  const itemsArray = collectionItems.value.filter(i =>
    i.parentElement?.hasAttribute('aria-menu-item'),
  )

  const newSelectedElement = useArrowNavigation(ev, currentFocus, undefined, {
    itemsArray,
    loop: false,
  })

  if (newSelectedElement)
    newSelectedElement?.focus()

  ev.preventDefault()
  ev.stopPropagation()
}
</script>

<template>
  <Primitive
    :as-child="props.asChild"
    :as="as"
    aria-menu-item
    @keydown.up.down.left.right.home.end.space="handleKeydown"
  >
    <slot />
  </Primitive>
</template>
