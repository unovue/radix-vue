<script lang="ts">
import { type PrimitiveProps } from '@/Primitive'

export interface SplitterPanelProps extends PrimitiveProps {
  collapsedSize?: number
  collapsible?: boolean
  defaultSize?: number
  maxSize?: number
  minSize?: number

}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectSplitterGroupContext } from './SplitterGroup.vue'
import { useId } from '@/shared'
import { type PanelData, findPanelDataIndex } from './utils'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(defineProps<SplitterPanelProps>(), {
  collapsedSize: 0,
  collapsible: false,
  maxSize: 100,
  minSize: 10,
})

const groupContext = injectSplitterGroupContext()
const panelId = useId()

const panelDataRef = ref<PanelData>({
  callbacks: {},
  constraints: {
    collapsedSize: props.collapsedSize,
    collapsible: props.collapsible,
    defaultSize: props.defaultSize,
    maxSize: props.maxSize,
    minSize: props.minSize,
  },
  id: panelId,
  idIsFromProps: false,
  order: undefined,
})

const panelIndex = computed(() => findPanelDataIndex(Array.from(groupContext.panelDataArray.value), panelDataRef.value))

onMounted(() => {
  groupContext.panelDataArray.value.add(panelDataRef.value)
})
onUnmounted(() => {
  groupContext.panelDataArray.value.delete(panelDataRef.value)
})
</script>

<template>
  <Primitive
    data-panel
    :data-panel-id="panelId"
    :data-panel-group-id="groupContext.groupId"
  >
    {{ panelIndex }}
    <slot />
  </Primitive>
</template>
