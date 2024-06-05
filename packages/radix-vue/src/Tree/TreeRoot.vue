<script lang="ts">
import { createContext, findValuesBetween, useDirection, useKbd, useSelectionBehavior, useTypeahead } from '@/shared'
import type { Direction } from '@/shared/types'

export interface TreeRootProps<T, U> extends PrimitiveProps {
  /** The controlled value of the tree. Can be binded-with with `v-model`. */
  modelValue?: U | U[]
  /** The value of the tree when initially rendered. Use when you do not need to control the state of the tree */
  defaultValue?: U | U[]
  /** List of items */
  items?: T[]
  /** The controlled value of the expanded item. Can be binded-with with `v-model`. */
  expanded?: string[]
  /** The value of the expanded tree when initially rendered. Use when you do not need to control the state of the expanded tree */
  defaultExpanded?: string[]
  /** This function is passed the index of each item and should return a unique key for that item */
  getKey: (val: T) => string
  /** How multiple selection should behave in the collection. */
  selectionBehavior?: 'toggle' | 'replace'
  /** Whether multiple options can be selected or not.  */
  multiple?: boolean
  /** The reading direction of the listbox when applicable. <br> If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. */
  dir?: Direction
  /** When `true`, prevents the user from interacting with tree  */
  disabled?: boolean
  /** By default clicking on item will select the item, setting to `true` will open the item (if possible) then select the item */
  preventSelectBeforeExpand?: boolean
}

export type TreeRootEmits<T> = {
  'update:modelValue': [val: T]
  'update:expanded': [val: string[]]
}

interface TreeRootContext<T> {
  modelValue: Ref<T | T[]>
  selectedKeys: Ref<string[]>
  onSelect: (val: T) => void
  expanded: Ref<string[]>
  onToggle: (val: T) => void
  items: Ref<T[]>
  getKey: (val: T) => string
  multiple: Ref<boolean>
  disabled: Ref<boolean>
  dir: Ref<Direction>
  preventSelectBeforeExpand: Ref<boolean>
  isVirtual: Ref<boolean>
  virtualKeydownHook: EventHook<KeyboardEvent>

  handleMultipleReplace: ReturnType<typeof useSelectionBehavior>['handleMultipleReplace']
}

export type FlattenedItem<T> = {
  _id: string
  value: T
  level: number
  hasChildren: boolean
  bind: {
    value: T
    level: number
    [key: string]: any
  }
}

export const [injectTreeRootContext, provideTreeRootContext] = createContext<TreeRootContext<any>>('TreeRoot')
</script>

<script setup lang="ts" generic="T extends Record<string, any>, U">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { type EventHook, createEventHook, useVModel } from '@vueuse/core'
import { RovingFocusGroup } from '@/RovingFocus'
import { type Ref, computed, ref, toRefs } from 'vue'
import { MAP_KEY_TO_FOCUS_INTENT } from '@/RovingFocus/utils'

const props = withDefaults(defineProps<TreeRootProps<T, U>>(), {
  selectionBehavior: 'toggle',
})
const emits = defineEmits<TreeRootEmits<U>>()

defineSlots<{
  default: (props: {
    flattenItems: FlattenedItem<T>[]
  }) => any
}>()

const { multiple, disabled, preventSelectBeforeExpand, dir: propDir } = toRefs(props)
const { handleTypeaheadSearch } = useTypeahead()
const dir = useDirection(propDir)
const rovingFocusGroupRef = ref<InstanceType<typeof RovingFocusGroup>>()

// Virtualizer
const isVirtual = ref(false)
const virtualKeydownHook = createEventHook<KeyboardEvent>()

const modelValue = useVModel(props, 'modelValue', emits, {
  // @ts-expect-error idk
  defaultValue: props.defaultValue ?? (multiple.value ? [] : undefined),
  passive: (props.modelValue === undefined) as false,
  deep: true,
}) as Ref<U | U[]>

const expanded = useVModel(props, 'expanded', emits, {
  // @ts-expect-error idk
  defaultValue: props.defaultExpanded ?? [],
  passive: (props.expanded === undefined) as false,
  deep: true,
}) as Ref<string[]>

const { onSelectItem, handleMultipleReplace } = useSelectionBehavior(modelValue, props)

const selectedKeys = computed(() => {
  if (multiple.value && Array.isArray(modelValue.value))
    return modelValue.value.map(i => props.getKey(i as any))
  else
    return [props.getKey(modelValue.value as any ?? {})]
})

function flattenItems(items: T[], level: number = 0): FlattenedItem<T>[] {
  return items.reduce((acc: FlattenedItem<T>[], item: T, index: number) => {
    const key = props.getKey(item)
    const isExpanded = expanded.value.includes(key)

    const flattenedItem: FlattenedItem<T> = {
      _id: key,
      value: item,
      level,
      hasChildren: !!item.children,
      bind: {
        'value': item,
        level,
        'aria-setsize': items.length,
        'aria-posinset': index + 1,
      },
    }
    acc.push(flattenedItem)

    if (item.children && isExpanded)
      acc.push(...flattenItems(item.children, level + 1))

    return acc
  }, [])
}

const expandedItems = computed(() => {
  const items = props.items
  const expandedKeys = expanded.value.map(i => i)
  return flattenItems(items ?? [])
})

function handleKeydown(event: KeyboardEvent) {
  if (isVirtual.value) {
    virtualKeydownHook.trigger(event)
  }
  else {
    const collections = rovingFocusGroupRef.value?.getItems().map(i => i.ref)
    handleTypeaheadSearch(event.key, collections)
  }
}

function handleKeydownNavigation(event: KeyboardEvent) {
  if (isVirtual.value)
    return

  const intent = MAP_KEY_TO_FOCUS_INTENT[event.key]
  handleMultipleReplace(intent, document.activeElement, rovingFocusGroupRef.value?.getItems!, expandedItems.value.map(i => i.value))
}

provideTreeRootContext({
  modelValue,
  selectedKeys,
  onSelect: (val) => {
    onSelectItem(val, v => props.getKey(v as any ?? {}) === props.getKey(val as any))
  },
  expanded,
  onToggle(val) {
    if (!val?.children?.length)
      return

    const key = props.getKey(val) ?? val
    if (expanded.value.includes(key))
      expanded.value = expanded.value.filter(val => val !== key)
    else
      expanded.value.push(key)
  },
  getKey: props.getKey,
  items: expandedItems,
  disabled,
  multiple,
  dir,
  preventSelectBeforeExpand,

  isVirtual,
  virtualKeydownHook,
  handleMultipleReplace,
})
</script>

<template>
  <RovingFocusGroup
    ref="rovingFocusGroupRef"
    as-child
    orientation="vertical"
    :dir="dir"
  >
    <Primitive
      role="tree"
      :as="as"
      :as-child="asChild"
      @keydown="handleKeydown"
      @keydown.up.down.shift="handleKeydownNavigation"
    >
      <slot :flatten-items="expandedItems" />
    </Primitive>
  </RovingFocusGroup>
</template>
