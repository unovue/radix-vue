<script lang="ts">
import type { Ref } from 'vue'
import type { Direction } from '../shared/types'
import { createContext, useCollection, useDirection, useForwardRef } from '@/shared'

export interface MenubarRootProps {
  modelValue?: string
  defaultValue?: string
  dir?: Direction
  loop?: boolean
}
export type MenubarRootEmits = {
  'update:modelValue': [value: boolean]
}

export interface MenubarRootContext {
  modelValue: Ref<string>
  dir: Ref<Direction>
  loop: Ref<boolean>
  onMenuOpen(value: string): void
  onMenuClose(): void
  onMenuToggle(value: string): void
}

export const [injectMenubarRootContext, provideMenubarRootContext]
  = createContext<MenubarRootContext>('MenubarRoot')
</script>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { Primitive } from '@/Primitive'
import { RovingFocusGroup } from '@/RovingFocus'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<MenubarRootProps>(), {
  loop: false,
})
const emit = defineEmits<MenubarRootEmits>()

const { forwardRef, currentElement } = useForwardRef()
const { createCollection } = useCollection('menubar')
createCollection(currentElement)

const modelValue = useVModel(props, 'modelValue', emit, {
  defaultValue: props.defaultValue ?? '',
  passive: (props.modelValue === undefined) as false,
}) as Ref<string>

const currentTabStopId = ref<string | null>(null)

const { dir: propDir, loop } = toRefs(props)
const dir = useDirection(propDir)
provideMenubarRootContext({
  modelValue,
  dir,
  loop,
  onMenuOpen: (value) => {
    modelValue.value = value
    currentTabStopId.value = value
  },
  onMenuClose: () => {
    modelValue.value = ''
  },
  onMenuToggle: (value) => {
    modelValue.value = modelValue.value ? '' : value
    // `openMenuOpen` and `onMenuToggle` are called exclusively so we
    // need to update the id in either case.
    currentTabStopId.value = value
  },
})
</script>

<template>
  <RovingFocusGroup
    v-model:current-tab-stop-id="currentTabStopId"
    orientation="horizontal"
    :loop="loop"
    :dir="dir"
    as-child
  >
    <Primitive :ref="forwardRef" role="menubar">
      <slot />
    </Primitive>
  </RovingFocusGroup>
</template>
