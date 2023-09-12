<script lang="ts">
interface SelectContentContextValue {
  content?: Ref<HTMLElement | undefined>
  viewport?: Ref<HTMLElement | undefined>
  onViewportChange: (node: HTMLElement | undefined) => void
  itemRefCallback: (
    node: HTMLElement | undefined,
    value: string,
    disabled: boolean
  ) => void
  selectedItem?: Ref<HTMLElement | undefined>
  onItemLeave: () => void
  itemTextRefCallback: (
    node: HTMLElement | undefined,
    value: string,
    disabled: boolean
  ) => void
  focusSelectedItem?: () => void
  selectedItemText?: Ref<HTMLElement | undefined>
  position?: 'item-aligned' | 'popper'
  isPositioned?: Ref<boolean>
  searchRef?: Ref<string>
}

export const SELECT_CONTENT_INJECTION_KEY
  = Symbol() as InjectionKey<SelectContentContextValue>

export interface SelectContentImplProps extends PopperContentProps {
  position?: 'item-aligned' | 'popper'
}

export type SelectContentImplEmits = {
  closeAutoFocus: [event: Event]
  /**
   * Event handler called when the escape key is down.
   * Can be prevented.
   */
  escapeKeyDown: [event: KeyboardEvent]
  /**
   * Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.
   * Can be prevented.
   */
  pointerDownOutside: [event: PointerDownOutsideEvent]
}
</script>

<script setup lang="ts">
import {
  type ComponentPublicInstance,
  type InjectionKey,
  type Ref,
  computed,
  inject,
  provide,
  ref,
  watch,
  watchEffect,
} from 'vue'
import { unrefElement } from '@vueuse/core'
import { SELECT_INJECTION_KEY } from './SelectRoot.vue'
import SelectItemAlignedPosition from './SelectItemAlignedPosition.vue'
import SelectPopperPosition from './SelectPopperPosition.vue'
import {
  useBodyScrollLock,
  useCollection,
  useFocusGuards,
  useHideOthers,
  useTypeahead,
} from '@/shared'
import { FocusScope } from '@/FocusScope'
import {
  DismissableLayer,
  type PointerDownOutsideEvent,
} from '@/DismissableLayer'
import { focusFirst } from '@/Menu/utils'
import type { PopperContentProps } from '@/Popper'

const props = defineProps<SelectContentImplProps>()
const emits = defineEmits<SelectContentImplEmits>()

const context = inject(SELECT_INJECTION_KEY)

useFocusGuards()
useBodyScrollLock(true)
const { createCollection } = useCollection()

const content = ref<HTMLElement>()
useHideOthers(content)

const collectionItems = createCollection(content)
const { search, handleTypeaheadSearch } = useTypeahead(collectionItems)

const viewport = ref<HTMLElement>()
const selectedItem = ref<HTMLElement>()
const selectedItemText = ref<HTMLElement>()
const isPositioned = ref(false)
const firstValidItemFoundRef = ref(false)

function focusSelectedItem() {
  if (selectedItem.value && content.value)
    focusFirst([selectedItem.value, content.value])
}

watch(isPositioned, () => {
  focusSelectedItem()
})

// prevent selecting items on `pointerup` in some cases after opening from `pointerdown`
// and close on `pointerup` outside.
const { onOpenChange, triggerPointerDownPosRef } = context!
watchEffect((cleanupFn) => {
  if (!content.value)
    return
  let pointerMoveDelta = { x: 0, y: 0 }

  const handlePointerMove = (event: PointerEvent) => {
    pointerMoveDelta = {
      x: Math.abs(
        Math.round(event.pageX) - (triggerPointerDownPosRef.value?.x ?? 0),
      ),
      y: Math.abs(
        Math.round(event.pageY) - (triggerPointerDownPosRef.value?.y ?? 0),
      ),
    }
  }
  const handlePointerUp = (event: PointerEvent) => {
    // If the pointer hasn't moved by a certain threshold then we prevent selecting item on `pointerup`.
    if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
      event.preventDefault()
    }
    else {
      // otherwise, if the event was outside the content, close.
      if (!content.value?.contains(event.target as HTMLElement))
        onOpenChange(false)
    }
    document.removeEventListener('pointermove', handlePointerMove)
    triggerPointerDownPosRef.value = null
  }

  if (triggerPointerDownPosRef.value !== null) {
    document.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('pointerup', handlePointerUp, {
      capture: true,
      once: true,
    })
  }

  cleanupFn(() => {
    document.removeEventListener('pointermove', handlePointerMove)
    document.removeEventListener('pointerup', handlePointerUp, {
      capture: true,
    })
  })
})

function handleKeyDown(event: KeyboardEvent) {
  const isModifierKey = event.ctrlKey || event.altKey || event.metaKey

  // select should not be navigated using tab key so we prevent it
  if (event.key === 'Tab')
    event.preventDefault()

  if (!isModifierKey && event.key.length === 1)
    handleTypeaheadSearch(event.key)

  if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
    let candidateNodes = collectionItems.value

    if (['ArrowUp', 'End'].includes(event.key))
      candidateNodes = candidateNodes.slice().reverse()

    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      const currentElement = event.target as HTMLElement
      const currentIndex = candidateNodes.indexOf(currentElement)
      candidateNodes = candidateNodes.slice(currentIndex + 1)
    }

    /**
     * Imperative focus during keydown is risky so we prevent React's batching updates
     * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
     */
    setTimeout(() => focusFirst(candidateNodes))

    event.preventDefault()
  }
}

const pickedProps = computed(() => {
  if (props.position === 'popper')
    return props
  else return {}
})

provide(SELECT_CONTENT_INJECTION_KEY, {
  content,
  viewport,
  onViewportChange: (node) => {
    viewport.value = node
  },
  itemRefCallback: (node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.value && !disabled
    const isSelectedItem
      = context?.modelValue?.value !== undefined
      && context?.modelValue?.value === value
    if (isSelectedItem || isFirstValidItem) {
      selectedItem.value = node
      if (isFirstValidItem)
        firstValidItemFoundRef.value = true
    }
  },
  selectedItem,
  selectedItemText,
  onItemLeave: () => {
    content.value?.focus()
  },
  itemTextRefCallback: (node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.value && !disabled
    const isSelectedItem
      = context?.modelValue?.value !== undefined
      && context?.modelValue?.value === value
    if (isSelectedItem || isFirstValidItem)
      selectedItemText.value = node
  },
  focusSelectedItem,
  position: props.position,
  isPositioned,
  searchRef: search,
})
</script>

<template>
  <FocusScope
    as-child
    @mount-auto-focus.prevent
    @unmount-auto-focus="
      (event) => {
        emits('closeAutoFocus', event);
        if (event.defaultPrevented) return;
        context?.triggerElement.value?.focus({ preventScroll: true });
        event.preventDefault();
      }
    "
  >
    <DismissableLayer
      as-child
      disable-outside-pointer-events
      @focus-outside.prevent
      @dismiss="context?.onOpenChange(false)"
      @escape-key-down="emits('escapeKeyDown', $event)"
      @pointer-down-outside="emits('pointerDownOutside', $event)"
    >
      <component
        :is="
          position === 'popper'
            ? SelectPopperPosition
            : SelectItemAlignedPosition
        "
        v-bind="{ ...$attrs, ...pickedProps }"
        :id="context?.contentId"
        :ref="
          (vnode: ComponentPublicInstance) => {
            content = unrefElement(vnode) as HTMLElement
            return undefined
          }
        "
        role="listbox"
        :data-state="context?.open.value ? 'open' : 'closed'"
        :dir="context?.dir.value"
        :style="{
          // flex layout so we can place the scroll buttons properly
          display: 'flex',
          flexDirection: 'column',
          // reset the outline by default as the content MAY get focused
          outline: 'none',
        }"
        @contextmenu.prevent
        @placed="isPositioned = true"
        @keydown="handleKeyDown"
      >
        <slot />
      </component>
    </DismissableLayer>
  </FocusScope>
</template>
