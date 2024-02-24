<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { computed, onMounted, onUnmounted, watch } from 'vue'

export interface SplitterPanelProps extends PrimitiveProps {
  collapsedSize?: number
  collapsible?: boolean
  defaultSize?: number
  id?: string
  maxSize?: number
  minSize?: number
  order?: number
}

export type SplitterPanelEmits = {
  'collapse': []
  'expand': []
  'resize': [size: number, prevSize: number | undefined]
}

export type PanelOnCollapse = () => void
export type PanelOnExpand = () => void
export type PanelOnResize = (
  size: number,
  prevSize: number | undefined
) => void

export type PanelCallbacks = {
  onCollapse?: PanelOnCollapse
  onExpand?: PanelOnExpand
  onResize?: PanelOnResize
}

export type PanelConstraints = {
  collapsedSize?: number | undefined
  collapsible?: boolean | undefined
  defaultSize?: number | undefined
  maxSize?: number | undefined
  minSize?: number | undefined
}

export type PanelData = {
  callbacks: PanelCallbacks
  constraints: PanelConstraints
  id: string
  idIsFromProps: boolean
  order: number | undefined
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectPanelGroupContext } from './SplitterGroup.vue'
import useUniqueId from './utils/composables/useUniqueId'

const props = defineProps<SplitterPanelProps>()
const emits = defineEmits<SplitterPanelEmits>()

const panelGroupContext = injectPanelGroupContext()
if (panelGroupContext === null) {
  throw new Error(
    'SplitterPanel components must be rendered within a SplitterGroup container',
  )
}

const { getPanelStyle, groupId, reevaluatePanelConstraints, registerPanel, unregisterPanel } = panelGroupContext
const panelId = useUniqueId(props.id)

const panelDataRef = computed(() => ({
  callbacks: {
    onCollapse: () => emits('collapse'),
    onExpand: () => emits('expand'),
    onResize: (...args) => emits('resize', ...args),
  },
  constraints: {
    collapsedSize: props.collapsedSize,
    collapsible: props.collapsible,
    defaultSize: props.defaultSize,
    maxSize: props.maxSize,
    minSize: props.minSize,
  },
  id: panelId,
  idIsFromProps: props.id !== undefined,
  order: props.order,
}) satisfies PanelData)

watch(() => panelDataRef.value.constraints, (prevConstraints, constraints) => {
  // If constraints have changed, we should revisit panel sizes.
  // This is uncommon but may happen if people are trying to implement pixel based constraints.
  if (
    prevConstraints.collapsedSize !== constraints.collapsedSize
      || prevConstraints.collapsible !== constraints.collapsible
      || prevConstraints.maxSize !== constraints.maxSize
      || prevConstraints.minSize !== constraints.minSize
  )
    reevaluatePanelConstraints(panelDataRef.value, prevConstraints)
}, { deep: true })

onMounted(() => {
  const panelData = panelDataRef.value
  registerPanel(panelData)
  onUnmounted(() => {
    unregisterPanel(panelData)
  })
})

const style = computed(() => getPanelStyle(panelDataRef.value, props.defaultSize))
</script>

<template>
  <Primitive
    :style="style"
    data-panel=""
    :data-panel-collapsible="collapsible || undefined"
    :data-panel-group-id="groupId"
    :data-panel-id="panelId"
    :data-panel-size=" Number.parseFloat(`${style.flexGrow}`).toFixed(1)"
  >
    <slot />
  </Primitive>
</template>
