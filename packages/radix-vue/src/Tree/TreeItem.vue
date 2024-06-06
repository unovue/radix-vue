<script lang="ts">
export interface TreeItemProps<T> extends PrimitiveProps {
  /** Value given to this item */
  value: T
  /** Level of depth */
  level: number
}
</script>

<script setup lang="ts" generic="T extends Record<string, any>">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { RovingFocusItem } from '@/RovingFocus'
import { injectTreeRootContext } from './TreeRoot.vue'
import { computed } from 'vue'
import { useCollection } from '@/Collection'

const props = withDefaults(defineProps<TreeItemProps<T>>(), {
  as: 'li',
})

defineSlots<{
  default: (props: {
    isExpanded: boolean
    isSelected: boolean
  }) => any
}>()
const rootContext = injectTreeRootContext()
const { getItems } = useCollection()

const isExpanded = computed(() => {
  const key = rootContext.getKey(props.value)
  return rootContext.expanded.value.includes(key)
})

const isSelected = computed(() => {
  const key = rootContext.getKey(props.value)
  return rootContext.selectedKeys.value.includes(key)
})

function handleKeydownRight() {
  if (!props.value.children?.length)
    return

  if (isExpanded.value) {
    // go to first child
    const collection = getItems().map(i => i.ref)
    const currentElement = document.activeElement as HTMLElement
    const currentIndex = collection.indexOf(currentElement)
    const list = [...collection].slice(currentIndex)
    const nextElement = list.find(el => Number(el.getAttribute('data-indent')) === (props.level + 1))

    if (nextElement)
      nextElement.focus()
  }
  else {
    rootContext.onToggle(props.value)
  }
}

function handleKeydownLeft() {
  if (isExpanded.value) {
    //  close expanded
    rootContext.onToggle(props.value)
  }
  else {
    // go back to parent
    const collection = getItems().map(i => i.ref)
    const currentElement = document.activeElement as HTMLElement
    const currentIndex = collection.indexOf(currentElement)
    const list = [...collection].slice(0, currentIndex).reverse()
    const parentElement = list.find(el => Number(el.getAttribute('data-indent')) === (props.level - 1))

    if (parentElement)
      parentElement.focus()
  }
}

defineExpose({
  isExpanded,
  isSelected,
  onToggle: () => rootContext.onToggle(props.value),
})
</script>

<template>
  <RovingFocusItem as-child :value="value" allow-shift-key>
    <Primitive
      role="treeitem"
      :as="as"
      :as-child="asChild"
      :aria-selected="isSelected"
      :aria-expanded="isExpanded"
      :aria-level="level"
      :data-indent="level"
      :data-selected="isSelected ? '' : undefined"
      :data-expanded="isExpanded ? '' : undefined"
      @keydown.enter.space.self.prevent="rootContext.onSelect(value)"
      @keydown.right.prevent="handleKeydownRight"
      @keydown.left.prevent="handleKeydownLeft"
      @click.stop="() => {
        if (rootContext.preventSelectBeforeExpand.value && !!props.value.children?.length) {
          if (isExpanded)
            rootContext.onSelect(value)
        }
        else {
          rootContext.onSelect(value)
        }
        rootContext.onToggle(value)
      }"
    >
      <slot
        :is-expanded="isExpanded"
        :is-selected="isSelected"
      />
    </Primitive>
  </RovingFocusItem>
</template>
