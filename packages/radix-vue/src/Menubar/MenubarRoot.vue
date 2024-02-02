<script lang="ts">
import type { Ref } from 'vue'
import type { Direction } from '../shared/types'
import { createContext, useCollection, useDirection, useForwardExpose } from '@/shared'

export interface MenubarRootProps {
  /** The controlled value of the menu to open. Can be used as `v-model`. */
  modelValue?: string
  /** The value of the menu that should be open when initially rendered. Use when you do not need to control the value state. */
  defaultValue?: string
  /** The reading direction of the combobox when applicable.
   *
   *  If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. */
  dir?: Direction
  /** When `true`, keyboard navigation will loop from last item to first, and vice versa. */
  loop?: boolean
}
export type MenubarRootEmits = {
  /** Event handler called when the value changes. */
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

const { forwardRef, currentElement } = useForwardExpose()
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
