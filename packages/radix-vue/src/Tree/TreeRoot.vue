<script lang="ts">
import { createContext } from '@/shared'

export interface TreeRootProps<T, U> extends PrimitiveProps {
  modelValue?: U
  defaultValue?: U
  items?: T[]
  expanded?: string[]
  defaultExpanded?: string[]
  getKey: (val: T) => string
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
  items?: Ref<T[]>
  getKey: (val: T) => string
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
import { useVModel } from '@vueuse/core'
import { RovingFocusGroup } from '@/RovingFocus'
import { type Ref, cloneVNode, computed, ref, toRefs, useSlots, watch } from 'vue'

const props = defineProps<TreeRootProps<T, U>>()
const emits = defineEmits<TreeRootEmits<U>>()

defineSlots<{
  default: (props: {
    // node: FlattenedItem<T>
    // value: T
    flattenItems: FlattenedItem<T>[]
  }) => any
}>()

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

// const recursiveItems = computed(
//   () => expandedItems.value?.map((item) => {
//     const key = props.getKey(item.value)
//     return {
//       item,
//       key,
//       is: cloneVNode(slots.default!({
//         node: item,
//         value: item.value,
//       })![0], {
//         'key': key,
//         'aria-level': item.level,
//         'data-indent': item.level,
//       }),
//     }
//   }),
// )

// Virtualizer

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
})
</script>

<template>
  <RovingFocusGroup as-child orientation="vertical">
    <Primitive
      role="tree"
      :as="as"
      :as-child="asChild"
    >
      <slot :flatten-items="expandedItems" />
    </Primitive>
  </RovingFocusGroup>
</template>
