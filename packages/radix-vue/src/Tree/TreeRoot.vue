<script lang="ts">
import { createContext, useTypeahead } from '@/shared'

export interface TreeRootProps<T, U> extends PrimitiveProps {
  modelValue?: U
  defaultValue?: U
  items?: T[]
  expanded?: string[]
  defaultExpanded?: string[]
  getKey: (val: T) => string
  multiple?: boolean
}

export type TreeRootEmits<T> = {
  'update:modelValue': [val: T]
  'update:expanded': [val: string[]]
}

interface TreeRootContext<T> {
  modelValue: Ref<T>
  onSelect: (val: T) => void
  expanded: Ref<string[]>
  onToggle: (val: T) => void
  items: Ref<T[]>
  getKey: (val: T) => string
  isVirtual: Ref<boolean>
  virtualKeydownHook: EventHook<KeyboardEvent>
}

export type FlattenedItem<T> = {
  _id: string
  value: T
  isSelected?: boolean
  isExpanded?: boolean
  hasChildren: boolean
  level: number
}

export const [injectTreeRootContext, provideTreeRootContext] = createContext<TreeRootContext<any>>('TreeRoot')
</script>

<script setup lang="ts" generic="T extends Record<string, any>, U">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { type EventHook, createEventHook, useVModel } from '@vueuse/core'
import { RovingFocusGroup } from '@/RovingFocus'
import { type Ref, computed, ref, toRefs } from 'vue'

const props = defineProps<TreeRootProps<T, U>>()
const emits = defineEmits<TreeRootEmits<U>>()

defineSlots<{
  default: (props: {
    // node: FlattenedItem<T>
    // value: T
    flattenItems: FlattenedItem<T>[]
  }) => any
}>()

// const { multiple } = toRefs(props)
const { handleTypeaheadSearch } = useTypeahead()
const rovingFocusGroupRef = ref<InstanceType<typeof RovingFocusGroup>>()

const modelValue = useVModel(props, 'modelValue', emits, {
  // @ts-expect-error idk
  defaultValue: props.defaultValue ?? [],
  passive: (props.modelValue === undefined) as false,
  deep: true,
}) as Ref<U>

const expanded = useVModel(props, 'expanded', emits, {
  // @ts-expect-error idk
  defaultValue: props.defaultExpanded ?? [],
  passive: (props.expanded === undefined) as false,
  deep: true,
}) as Ref<string[]>

function flattenItems(items: T[], level: number = 0): FlattenedItem<T>[] {
  return items.reduce((acc: FlattenedItem<T>[], item: T) => {
    const key = props.getKey(item)
    const modelValueKey = props.getKey((modelValue.value ?? {}) as T) ?? `${modelValue.value}`
    const isExpanded = expanded.value.includes(key)
    const isSelected = modelValueKey === key

    const flattenedItem: FlattenedItem<T> = { _id: key, value: item, level, hasChildren: !!item.children, isExpanded, isSelected }
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

// Virtualizer
const isVirtual = ref(false)
const virtualKeydownHook = createEventHook<KeyboardEvent>()

provideTreeRootContext({
  modelValue,
  onSelect: (val) => {
    modelValue.value = { ...val }
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

  isVirtual,
  virtualKeydownHook,
})
</script>

<template>
  <RovingFocusGroup ref="rovingFocusGroupRef" as-child orientation="vertical">
    <Primitive
      role="tree"
      :as="as"
      :as-child="asChild"
      @keydown="handleKeydown"
    >
      <slot :flatten-items="expandedItems" />
    </Primitive>
  </RovingFocusGroup>
</template>
