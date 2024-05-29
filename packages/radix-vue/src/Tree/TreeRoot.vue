<script lang="ts">
import { createContext } from '@/shared'

export interface TreeRootProps<T> extends PrimitiveProps {
  modelValue?: T
  defaultValue?: T
  items?: T[]
  expanded?: string[]
  defaultExpanded?: string[]
  getKey?: (val: T) => string
}

export type TreeRootEmits = {
  'update:expanded': [val: string[]]
}

interface TreeRootContext<T> {
  modelValue: Ref<T>
  onSelect: (val: T) => void
  expanded: Ref<string[]>
  onToggle: (val: T) => void
  getKey?: (val: T) => string
}

export interface TreeItem<T> {
  children?: T[]
}

type FlattenedItem<T> = T & {
  isSelected?: boolean
  isExpanded?: boolean
  hasChildren: boolean
  level: number
}

export const [injectTreeRootContext, provideTreeRootContext] = createContext<TreeRootContext<any>>('TreeRoot')
</script>

<script setup lang="ts" generic="T extends TreeItem<T>">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { useVModel } from '@vueuse/core'
import { RovingFocusGroup } from '@/RovingFocus'
import { type Ref, cloneVNode, computed, ref, toRefs, useSlots, watch } from 'vue'

const props = defineProps<TreeRootProps<T>>()
const emits = defineEmits<TreeRootEmits>()

defineSlots<{
  default: (props: {
    node: FlattenedItem<T>
  }) => any
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  // @ts-expect-error idk
  defaultValue: props.defaultValue ?? [],
  passive: (props.modelValue === undefined) as false,
}) as Ref<T>

const expanded = useVModel(props, 'expanded', emits, {
  // @ts-expect-error idk
  defaultValue: props.defaultExpanded ?? [],
  passive: (props.expanded === undefined) as false,
  deep: true,
}) as Ref<string[]>

const slots = useSlots()

function flattenItems(items: T[], level: number = 0): FlattenedItem<T>[] {
  return items.reduce((acc: FlattenedItem<T>[], item: T) => {
    // TODO: Improve the getKey logic and selected
    const key = props.getKey?.(item) ?? `${item}`
    const modelValueKey = props.getKey?.(modelValue.value ?? {}) ?? `${modelValue.value}`
    const isExpanded = expanded.value.includes(key)
    const isSelected = modelValueKey === key

    const flattenedItem: FlattenedItem<T> = { ...item, level, hasChildren: !!item.children, isExpanded, isSelected }
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

const recursiveItems = computed(
  () => expandedItems.value?.map((item) => {
    const key = props.getKey?.(item as unknown as T) ?? `${item}`
    return {
      item,
      key,
      is: cloneVNode(slots.default!({
        node: item,
      })![0], {
        'key': key,
        'aria-level': item.level,
        'data-indent': item.level,
        'value': item,
      }),
    }
  }),
)

provideTreeRootContext({
  modelValue,
  onSelect: (val) => {
    modelValue.value = val
  },
  expanded,
  onToggle(val) {
    if (!val?.hasChildren)
      return

    const key = props.getKey?.(val) ?? val
    if (expanded.value.includes(key))
      expanded.value = expanded.value.filter(val => val !== key)
    else
      expanded.value.push(key)
  },
  getKey: props.getKey,
})
</script>

<template>
  <RovingFocusGroup as-child orientation="vertical">
    <Primitive
      role="tree"
      :as="as"
      :as-child="asChild"
    >
      <component
        :is="is"
        v-for="{ is, key } in recursiveItems"
        :key="key"
      />
    </Primitive>
  </RovingFocusGroup>
</template>
