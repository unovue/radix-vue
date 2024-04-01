<script lang="ts">
import { createContext, useKbd, useTypeahead } from '@/shared'
import { Primitive } from '..'

type ListboxRootContext<T> = {
  modelValue: Ref<T | Array<T> | undefined>
  onValueChange: (val: T) => void
  multiple: Ref<boolean>
  disabled: Ref<boolean>
  highlightedElement: Ref<HTMLElement | null>
  isVirtual: Ref<boolean>
  virtualFocusHook: EventHook<Event | null>
  virtualKeydownHook: EventHook<KeyboardEvent>
  by?: keyof T | ((a: T, b: T) => boolean)

  focusable: Ref<boolean>

  onChangeHighlight: (el: HTMLElement) => void
  onKeydownNavigation: (event: KeyboardEvent) => void
  onKeydownEnter: (event: KeyboardEvent) => void
  onKeydownTypeAhead: (event: KeyboardEvent) => void
}

export const [injectListboxRootContext, provideListboxRootContext]
  = createContext<ListboxRootContext<AcceptableValue>>('ListboxRoot')

export interface ListboxRootProps<T = AcceptableValue> extends Pick<RovingFocusGroupProps, 'as' | 'asChild' | 'orientation' | 'dir' | 'loop'> {
  /** The controlled value of the listbox. Can be binded-with with `v-model`. */
  modelValue?: T | Array<T>
  /** The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox */
  defaultValue?: T | Array<T>
  /** Whether multiple options can be selected or not. */
  multiple?: boolean
  /** When `true`, prevents the user from interacting with listbox */
  disabled?: boolean
  selectionBehavior?: 'toggle' | 'replace'
  /** Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared. */
  by?: keyof T | ((a: T, b: T) => boolean)
}

export type ListboxRootEmits<T = AcceptableValue> = {
  /** Event handler called when the value changes. */
  'update:modelValue': [value: T]
}
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import type { RovingFocusGroupProps } from '@/RovingFocus'
import { type EventHook, createEventHook, useVModel } from '@vueuse/core'
import { type AcceptableValue, compare } from './utils'
import { type Ref, nextTick, ref, toRefs, watch } from 'vue'
import { createCollection } from '@/Collection'

const props = withDefaults(defineProps<ListboxRootProps>(), {
  selectionBehavior: 'toggle',
})
const emits = defineEmits<ListboxRootEmits>()

const { multiple, disabled } = toRefs(props)
const { getItems } = createCollection()
const { handleTypeaheadSearch } = useTypeahead()
const kbd = useKbd()

const isUserAction = ref(false)
const focusable = ref(true)
const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? (multiple.value ? [] : undefined),
  passive: (props.modelValue === undefined) as false,
  deep: true,
}) as Ref<T | T[] | undefined>

function onValueChange(val: T) {
  isUserAction.value = true
  if (Array.isArray(modelValue.value)) {
    const index = modelValue.value.findIndex(i => compare(i, val, props.by))
    index === -1 ? modelValue.value.push(val) : modelValue.value.splice(index, 1)
    // TODO: add replace behavior for multiple
  }
  else {
    if (props.selectionBehavior === 'toggle') {
      if (compare(modelValue.value, val, props.by))
        modelValue.value = undefined
      else
        modelValue.value = val
    }
    else {
      modelValue.value = val
    }
  }
  setTimeout(() => {
    isUserAction.value = false
  }, 1)
}

const highlightedElement = ref<HTMLElement | null>(null)
const isVirtual = ref(false)
const virtualFocusHook = createEventHook<Event | null>()
const virtualKeydownHook = createEventHook<KeyboardEvent>()

function getCollectionItem() {
  return getItems().map(i => i.ref).filter(i => i.dataset.disabled !== '')
}
function onChangeHighlight(el: HTMLElement) {
  highlightedElement.value = el
  highlightedElement.value.focus()
  highlightedElement.value.scrollIntoView({ block: 'nearest' })
}

function onKeydownEnter(event: KeyboardEvent) {
  if (highlightedElement.value)
    highlightedElement.value.click()
}

function onKeydownTypeAhead(event: KeyboardEvent) {
  if (isVirtual.value)
    virtualKeydownHook.trigger(event)
  else
    handleTypeaheadSearch(event.key, getCollectionItem())
}

async function handleFocus(event?: Event) {
  if (isVirtual.value) {
    virtualFocusHook.trigger(event)
  }
  else {
    await nextTick()
    const collection = getCollectionItem()
    const item = collection.find(i => i.dataset.state === 'checked')
    if (item)
      onChangeHighlight(item)
  }
}

// watch for only programmatic changes
watch(modelValue, () => {
  if (!isUserAction.value) {
    nextTick(() => {
      handleFocus()
    })
  }
}, { immediate: true, deep: true })

provideListboxRootContext({
  modelValue,
  // @ts-expect-error igoring
  onValueChange,
  multiple,
  disabled,
  highlightedElement,
  isVirtual,
  virtualFocusHook,
  virtualKeydownHook,
  by: props.by,

  onChangeHighlight,
  onKeydownEnter,
  onKeydownNavigation: (event) => {
    let collection = getCollectionItem()
    if (highlightedElement.value) {
      if (event.key === kbd.END) {
        collection.reverse()
      }
      else if (event.key === kbd.ARROW_UP || event.key === kbd.ARROW_DOWN) {
        if (event.key === kbd.ARROW_UP)
          collection.reverse()

        const currentIndex = collection.indexOf(highlightedElement.value)
        collection = collection.slice(currentIndex + 1)
      }
    }

    if (collection.length)
      onChangeHighlight(collection[0])

    if (isVirtual.value)
      virtualKeydownHook.trigger(event)
  },
  onKeydownTypeAhead,
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
  >
    <slot />
  </Primitive>
</template>
