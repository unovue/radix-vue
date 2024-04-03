<script lang="ts">
import type {
  ComponentPublicInstance,
  Ref,
} from 'vue'
import type { PopperContentProps } from '@/Popper'
import type { PointerDownOutsideEvent } from '@/DismissableLayer'
import {
  createContext,
  useBodyScrollLock,
  useFocusGuards,
  useForwardProps,
  useHideOthers,
} from '@/shared'

interface SelectContentContext {
  content?: Ref<HTMLElement | undefined>
  viewport?: Ref<HTMLElement | undefined>
  onViewportChange: (node: HTMLElement | undefined) => void
  itemRefCallback: (
    node: HTMLElement | undefined,
    value: string,
    disabled: boolean
  ) => void
  selectedItem?: Ref<HTMLElement | undefined>
  onItemLeave?: () => void
  itemTextRefCallback: (
    node: HTMLElement | undefined,
    value: string,
    disabled: boolean
  ) => void
  focusSelectedItem?: () => void
  selectedItemText?: Ref<HTMLElement | undefined>
  position?: 'item-aligned' | 'popper'
  isPositioned?: Ref<boolean>
}

export const SelectContentDefaultContextValue: SelectContentContext = {
  onViewportChange: () => {},
  itemTextRefCallback: () => {},
  itemRefCallback: () => {},
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

export interface SelectContentImplProps extends PopperContentProps {
  /**
   *  The positioning mode to use
   *
   *  `item-aligned (default)` - behaves similarly to a native MacOS menu by positioning content relative to the active item. <br>
   *  `popper` - positions content in the same way as our other primitives, for example `Popover` or `DropdownMenu`.
   */
  position?: 'item-aligned' | 'popper'
}

export const [injectSelectContentContext, provideSelectContentContext]
  = createContext<SelectContentContext>('SelectContent')
</script>

<script setup lang="ts">
import {
  computed,
  ref,
  watch,
} from 'vue'
import { unrefElement } from '@vueuse/core'
import { injectSelectRootContext } from './SelectRoot.vue'
import SelectItemAlignedPosition from './SelectItemAlignedPosition.vue'
import SelectPopperPosition from './SelectPopperPosition.vue'
import { FocusScope } from '@/FocusScope'
import { DismissableLayer } from '@/DismissableLayer'
import { focusFirst } from '@/Menu/utils'
import { ListboxContent, ListboxRoot } from '@/Listbox'

const props = withDefaults(defineProps<SelectContentImplProps>(), {
  align: 'start',
  position: 'item-aligned',
})
const emits = defineEmits<SelectContentImplEmits>()

const rootContext = injectSelectRootContext()

useFocusGuards()
useBodyScrollLock(true)

const content = ref<HTMLElement>()
useHideOthers(content)

const viewport = ref<HTMLElement>()
const selectedItem = ref<HTMLElement>()
const selectedItemText = ref<HTMLElement>()
const isPositioned = ref(false)
const firstValidItemFoundRef = ref(false)

function focusSelectedItem() {
  if (selectedItem.value && content.value)
    focusFirst([selectedItem.value, content.value])
}

function onItemLeave() {
  content.value?.focus()
}

watch(isPositioned, () => {
  focusSelectedItem()
})

const pickedProps = computed(() => {
  if (props.position === 'popper')
    return props
  else return {}
})

const forwardedProps = useForwardProps(pickedProps.value)

provideSelectContentContext({
  content,
  viewport,
  onViewportChange: (node) => {
    viewport.value = node
  },
  itemRefCallback: (node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.value && !disabled
    const isSelectedItem
      = rootContext.modelValue?.value !== undefined
      && rootContext.modelValue?.value === value
    if (isSelectedItem || isFirstValidItem) {
      selectedItem.value = node
      if (isFirstValidItem)
        firstValidItemFoundRef.value = true
    }
  },
  selectedItem,
  selectedItemText,
  onItemLeave,
  itemTextRefCallback: (node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.value && !disabled
    const isSelectedItem
      = rootContext.modelValue?.value !== undefined
      && rootContext.modelValue?.value === value
    if (isSelectedItem || isFirstValidItem)
      selectedItemText.value = node
  },
  focusSelectedItem,
  position: props.position,
  isPositioned,
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
        rootContext.triggerElement.value?.focus({ preventScroll: true });
        event.preventDefault();
      }
    "
  >
    <DismissableLayer
      as-child
      disable-outside-pointer-events
      @focus-outside.prevent
      @dismiss="rootContext.onOpenChange(false)"
      @escape-key-down="emits('escapeKeyDown', $event)"
      @pointer-down-outside="emits('pointerDownOutside', $event)"
    >
      <ListboxRoot
        as-child
        highlight-on-hover
        :dir="rootContext.dir.value"
        :model-value="rootContext.modelValue?.value"
        @update:model-value="rootContext.onValueChange"
        @keydown.tab.prevent
        @leave="event => {
          const target = (event as FocusEvent).relatedTarget || event.target
          if (target !== rootContext.triggerElement.value) {
            onItemLeave()
          }
        }"
        @entry-focus.prevent
      >
        <ListboxContent as-child>
          <component
            :is="
              position === 'popper'
                ? SelectPopperPosition
                : SelectItemAlignedPosition
            "
            v-bind="{ ...$attrs, ...forwardedProps }"
            :id="rootContext.contentId"
            :ref="
              (vnode: ComponentPublicInstance) => {
                content = unrefElement(vnode) as HTMLElement
                return undefined
              }
            "
            :data-state="rootContext.open.value ? 'open' : 'closed'"
            :style="{
              // flex layout so we can place the scroll buttons properly
              display: 'flex',
              flexDirection: 'column',
              // reset the outline by default as the content MAY get focused
              outline: 'none',
            }"
            @contextmenu.prevent
            @placed="isPositioned = true"
          >
            <slot />
          </component>
        </ListboxContent>
      </ListboxRoot>
    </DismissableLayer>
  </FocusScope>
</template>
