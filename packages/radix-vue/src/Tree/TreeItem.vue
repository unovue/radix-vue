<script lang="ts">
export interface TreeItemProps<T extends AcceptableValue> extends PrimitiveProps {
  value?: T
}
</script>

<script setup lang="ts" generic="T extends AcceptableValue">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { RovingFocusItem } from '@/RovingFocus'
import type { AcceptableValue } from '@/shared/types'
import { injectTreeRootContext } from './TreeRoot.vue'
import isEqual from 'fast-deep-equal'
import { computed } from 'vue'

const props = withDefaults(defineProps<TreeItemProps<T>>(), {
  as: 'li',
})

const rootContext = injectTreeRootContext()

const isSelected = computed(() => isEqual(rootContext.modelValue.value, props.value))
</script>

<template>
  <RovingFocusItem as-child>
    <Primitive
      role="treeitem"
      :as="as"
      :as-child="asChild"
      :aria-selected="isSelected"
      @click.stop="rootContext.onToggle(value)"
    >
      <slot />
    </Primitive>
  </RovingFocusItem>
</template>
