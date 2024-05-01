<script lang="ts">
import { createContext } from '@/shared'
import { type Ref, ref } from 'vue'

export interface TreeGroupProps<T extends AcceptableValue> extends TreeItemProps<T> {

}

interface TreeGroupContext {
  isExpanded: Ref<boolean>
}

export const [injectTreeGroupContext, provideTreeGroupContext] = createContext<TreeGroupContext>('TreeGroup')
</script>

<script setup lang="ts" generic="T extends AcceptableValue">
import type { AcceptableValue } from '@/shared/types'
import TreeItem, { type TreeItemProps } from './TreeItem.vue'

const props = defineProps<TreeGroupProps<T>>()

const isExpanded = ref(false)
function toggleExpand(val?: boolean) {
  isExpanded.value = val ?? !isExpanded.value
}

provideTreeGroupContext({
  isExpanded,
})
</script>

<template>
  <TreeItem
    :value="props.value"
    :as="as"
    :as-child="asChild"
    @click="toggleExpand"
    @keydown.right="toggleExpand(true)"
    @keydown.left.stop="toggleExpand(false)"
  >
    <slot />
  </TreeItem>
</template>
