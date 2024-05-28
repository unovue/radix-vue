<script lang="ts">
import { createContext } from '@/shared'

export interface TreeRootProps<T> extends PrimitiveProps {
  items?: T[]
  expanded?: string[]
  defaultExpanded?: string[]
  getKey?: (val: T) => string
}

export type TreeRootEmits = {
  'update:expanded': [val: string[]]
}

interface TreeRootContext<T> {
  modelValue: Ref<any>
  onSelect: (val: any) => void
  expanded: Ref<string[]>
  onToggle: (val: T) => void
  getKey?: (val: T) => string
}

interface TreeItem<T> {
  children?: T[]
}
type FlattenedItem<T> = Omit<T, 'children'> & {
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

const modelValue = ref()

const expanded = useVModel(props, 'expanded', emits, {
  defaultValue: props.defaultExpanded ?? [],
  passive: (props.expanded === undefined) as false,
  deep: true,
}) as Ref<string[]>

const slots = useSlots()

function flattenItems(items: T[], level: number = 0): FlattenedItem<T>[] {
  return items.reduce((acc: FlattenedItem<T>[], item: T) => {
    const key = props.getKey?.(item) ?? `${item}`
    const isExpanded = expanded.value.includes(key)
    const flattenedItem: FlattenedItem<T> = { ...item, level, hasChildren: !!item.children }
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

const virtualizedItems = computed(
  () => expandedItems.value?.map((item) => {
    const key = props.getKey?.(item as unknown as T) ?? `${item}`
    return {
      item,
      key,
      is: cloneVNode(slots.default!({
        node: item,
      })![0], {
        'key': key,
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
        v-for="{ is, key } in virtualizedItems"
        :key="key"
      />
    </Primitive>
  </RovingFocusGroup>
</template>
