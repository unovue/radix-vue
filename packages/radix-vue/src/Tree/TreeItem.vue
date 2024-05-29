<script lang="ts">
import type { TreeItem } from './TreeRoot.vue'

export interface TreeItemProps<T extends TreeItem<T>> extends PrimitiveProps {
  value: T
}
</script>

<script setup lang="ts" generic="T extends TreeItem<T>">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { RovingFocusItem } from '@/RovingFocus'
import { injectTreeRootContext } from './TreeRoot.vue'
import isEqual from 'fast-deep-equal'
import { computed } from 'vue'
import { useCollection } from '@/shared'

const props = withDefaults(defineProps<TreeItemProps<T>>(), {
  as: 'li',
})

const rootContext = injectTreeRootContext()
const { injectCollection } = useCollection('rovingFocus')
const collection = injectCollection()

const isSelected = computed(() => isEqual(rootContext.modelValue.value, props.value))
const isExpanded = computed(() => {
  const key = rootContext.getKey?.(props.value) ?? `${props.value}`
  return rootContext.expanded.value.includes(key)
})

function handleKeydownRight() {
  if (!props.value.children?.length)
    return

  if (isExpanded.value) {
    // go to first child
    const currentElement = document.activeElement as HTMLElement
    const currentIndex = collection.value.indexOf(currentElement)
    const list = [...collection.value].slice(currentIndex)
    const currentLevel = Number(currentElement.getAttribute('data-indent'))
    const nextElement = list.find(el => Number(el.getAttribute('data-indent')) === (currentLevel + 1))

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
    const currentElement = document.activeElement as HTMLElement
    const currentIndex = collection.value.indexOf(currentElement)
    const list = [...collection.value].slice(0, currentIndex).reverse()
    const currentLevel = Number(currentElement.getAttribute('data-indent'))
    const parentElement = list.find(el => Number(el.getAttribute('data-indent')) === (currentLevel - 1))

    if (parentElement)
      parentElement.focus()
  }
}
</script>

<template>
  <RovingFocusItem as-child>
    <Primitive
      role="treeitem"
      :as="as"
      :as-child="asChild"
      :aria-selected="isSelected"
      :aria-expanded="isExpanded"
      @keydown.enter.space.prevent="rootContext.onSelect(value)"
      @keydown.right.prevent="handleKeydownRight"
      @keydown.left.prevent="handleKeydownLeft"
      @click.stop="() => {
        rootContext.onSelect(value)
        rootContext.onToggle(value)
      }"
    >
      <slot />
    </Primitive>
  </RovingFocusItem>
</template>
