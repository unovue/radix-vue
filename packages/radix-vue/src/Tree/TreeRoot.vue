<script lang="ts">
import { createContext } from '@/shared'

export interface TreeRootProps<T> extends PrimitiveProps {
  items?: T[]
  expanded?: string[]
  defaultExpanded?: string[]
}

export type TreeRootEmits = {
  'update:expanded': [val: string[]]
}

interface TreeRootContext {
  modelValue: Ref<any>
  onSelect: (val: any) => void
}

export const [injectTreeRootContext, provideTreeRootContext] = createContext<TreeRootContext>('TreeRoot')
</script>

<script setup lang="ts" generic="T">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { useVModel } from '@vueuse/core'
import { RovingFocusGroup } from '@/RovingFocus'
import { type Ref, ref } from 'vue'

const props = defineProps<TreeRootProps<T>>()
const emits = defineEmits<TreeRootEmits>()

const modelValue = ref()

const expanded = useVModel(props, 'expanded', emits, {
  defaultValue: props.defaultExpanded ?? [],
  passive: (props.expanded === undefined) as false,
  deep: true,
})

provideTreeRootContext({
  modelValue,
  onSelect: (val) => {
    modelValue.value = val
  },
})
</script>

<template>
  <RovingFocusGroup as-child>
    <Primitive
      role="tree"
      :as="as"
      :as-child="asChild"
    >
      <slot />
    </Primitive>
  </RovingFocusGroup>
</template>
