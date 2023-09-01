<script lang="ts">
import type { Ref } from 'vue'
import type { Direction } from '../shared/types'

export interface MenubarRootProps {
  modelValue?: string
  defaultValue?: string
  dir?: Direction
  loop?: boolean
}
export type MenubarRootEmits = {
  'update:modelValue': [value: boolean]
}

import { createCollection, createContext } from '@/shared'

export const [injectMenubarCollection, provideMenubarCollection]
  = createCollection('MenubarRoot')

export interface MenubarContextValue {
  modelValue: Ref<string>
  dir: Ref<Direction>
  loop: Ref<boolean>
  onMenuOpen(value: string): void
  onMenuClose(): void
  onMenuToggle(value: string): void
}

export const [injectMenubarRootContext, provideMenubarRootContext]
  = createContext<MenubarContextValue>('MenubarRoot')
</script>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { RovingFocusGroup } from '@/RovingFocus'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<MenubarRootProps>(), {
  dir: 'ltr',
  loop: false,
})
const emit = defineEmits<MenubarRootEmits>()

const { primitiveElement, currentElement } = usePrimitiveElement()
provideMenubarCollection(currentElement)

const modelValue = useVModel(props, 'modelValue', emit, {
  passive: true,
  defaultValue: props.defaultValue ?? '',
}) as Ref<string>

const currentTabStopId = ref<string | null>(null)

const { dir, loop } = toRefs(props)

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
    <Primitive ref="primitiveElement" role="menubar">
      <slot />
    </Primitive>
  </RovingFocusGroup>
</template>
