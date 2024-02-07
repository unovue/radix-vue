<script lang="ts">
import { createContext, useId } from '@/shared'
import type { PrimitiveProps } from '@/Primitive'
import type { DataOrientation } from '@/shared/types'
import { type Ref } from 'vue'
import type { PanelData } from './utils'

export interface SplitterGroupProps extends PrimitiveProps {
  direction?: DataOrientation
}

interface SplitterGroupContext {
  direction: Ref<DataOrientation>
  groupId: string
  panelDataArray: Ref<Set<PanelData>>
}

export const [injectSplitterGroupContext, provideSplitterGroupContext]
  = createContext<SplitterGroupContext>('SliderRoot')
</script>

<script setup lang="ts">
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { ref, toRefs } from 'vue'

const props = withDefaults(defineProps<SplitterGroupProps>(), {
  direction: 'horizontal',
})

const { direction } = toRefs(props)
const { primitiveElement, currentElement } = usePrimitiveElement()
const groupId = useId()

const panelDataArray = ref<Set<PanelData>>(new Set())

provideSplitterGroupContext({
  direction,
  groupId,
  panelDataArray,
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
    <slot />
  </Primitive>
</template>
