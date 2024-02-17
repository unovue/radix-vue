<script lang="ts">
import { createContext, useId } from '@/shared'
import type { PrimitiveProps } from '@/Primitive'
import type { DataOrientation } from '@/shared/types'
import { type Ref } from 'vue'
import type { PanelData, ResizeEvent } from './utils'

export interface SplitterGroupProps extends PrimitiveProps {
  direction?: DataOrientation
}

interface SplitterGroupContext {
  direction: Ref<DataOrientation>
  groupId: string
  panelDataArray: Ref<Set<PanelData>>
  isDragging: Ref<boolean>
  startDragging: (dragHandleId: string, event: ResizeEvent) => void
  stopDragging: () => void
  registerPanel: () => void
  registerResizeHandler: () => void
}

export const [injectSplitterGroupContext, provideSplitterGroupContext]
  = createContext<SplitterGroupContext>('SliderRoot')
</script>

<script setup lang="ts">
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { ref, toRefs, watch } from 'vue'

const props = withDefaults(defineProps<SplitterGroupProps>(), {
  direction: 'horizontal',
})

const { direction } = toRefs(props)
const { primitiveElement, currentElement } = usePrimitiveElement()
const groupId = useId()
const layout = ref<number[]>([])

const panelDataArray = ref<Set<PanelData>>(new Set())
const isDragging = ref(false)

function startDragging(dragHandleId: string, event: ResizeEvent) {
  isDragging.value = true
}
function stopDragging() {
  isDragging.value = false
}

function registerPanel() {

}
function registerResizeHandler() {

}

function calculateInitialLayout() {
  // TODO: Dynmic add or remove panel
  const currentLayout = [...layout.value]
  const defaultSizes = Array.from(panelDataArray.value).map(panel => panel.constraints.defaultSize)

  // No default size for all panel
  if (defaultSizes.every(size => !size))
    layout.value = defaultSizes.map(size => (100 / defaultSizes.length))

  // let remaining = 100
  // const computedSizes = defaultSizes.forEach((size) => {
  //   if(size)
  // })
}

watch(() => panelDataArray.value.size, () => {
  // layout = []
  calculateInitialLayout()
})

provideSplitterGroupContext({
  direction,
  groupId,
  panelDataArray,
  isDragging,
  startDragging,
  stopDragging,
  registerPanel,
  registerResizeHandler,
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :style="{
      display: 'flex',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      height: '100%',
      overflow: 'hidden',
      width: '100%',
    }"
    data-panel-group
    :data-panel-group-direction="direction"
    :data-panel-group-id="groupId"
  >
    {{ layout }}
    <slot />
  </Primitive>
</template>
