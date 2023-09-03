<script lang="ts">
import { createContext } from '@/shared'

interface DismissableLayerContextValue {
  layers: Ref<Set<HTMLElement>>
  layersWithOutsidePointerEventsDisabled: Ref<Set<HTMLElement>>
}

export const [injectDismissableLayerContext, provideDismissableLayerContext]
  = createContext<DismissableLayerContextValue>('DismissableLayer')
</script>

<script setup lang="ts">
import {
  type Ref,
  computed,
  nextTick,
  ref,
  watch,
  watchEffect,
} from 'vue'
import { onKeyStroke } from '@vueuse/core'
import {
  type FocusOutsideEvent,
  type PointerDownOutsideEvent,
  useFocusOutside,
  usePointerDownOutside,
} from './utils'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'

export interface DismissableLayerProps extends PrimitiveProps {
  /**
   * When `true`, hover/focus/click interactions will be disabled on elements outside
   * the `DismissableLayer`. Users will need to click twice on outside elements to
   * interact with them: once to close the `DismissableLayer`, and again to trigger the element.
   */
  disableOutsidePointerEvents?: boolean
}

export type DismissableLayerEmits = {
  /**
   * Event handler called when the escape key is down.
   * Can be prevented.
   */
  'escapeKeyDown': [event: KeyboardEvent]
  /**
   * Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.
   * Can be prevented.
   */
  'pointerDownOutside': [event: PointerDownOutsideEvent]
  /**
   * Event handler called when the focus moves outside of the `DismissableLayer`.
   * Can be prevented.
   */
  'focusOutside': [ event: FocusOutsideEvent]
  /**
   * Event handler called when an interaction happens outside the `DismissableLayer`.
   * Specifically, when a `pointerdown` event happens outside or focus moves outside of it.
   * Can be prevented.
   */
  'interactOutside': [ event: PointerDownOutsideEvent | FocusOutsideEvent]
  /**
   * Handler called when the `DismissableLayer` should be dismissed
   */
  'dismiss': []
}

const props = withDefaults(defineProps<DismissableLayerProps>(), {
  disableOutsidePointerEvents: false,
})

const emits = defineEmits<DismissableLayerEmits>()

const { primitiveElement, currentElement: layerElement }
  = usePrimitiveElement()
const ownerDocument = computed(
  () => layerElement.value?.ownerDocument ?? globalThis.document,
)

const layers = ref<Set<HTMLElement>>(new Set())
const layersWithOutsidePointerEventsDisabled = ref<Set<HTMLElement>>(new Set())

provideDismissableLayerContext({
  layers,
  layersWithOutsidePointerEventsDisabled,
})
const context = injectDismissableLayerContext({
  layers,
  layersWithOutsidePointerEventsDisabled,
})

watch(
  () => context,
  () => {
    if (context.layers.value)
      layers.value = context.layers.value
    if (context.layersWithOutsidePointerEventsDisabled.value) {
      layersWithOutsidePointerEventsDisabled.value
        = context.layersWithOutsidePointerEventsDisabled.value
    }
  },
  { immediate: true, deep: true },
)

const index = computed(() => {
  return layerElement.value
    ? Array.from(layers.value).indexOf(layerElement.value)
    : -1
})

const isBodyPointerEventsDisabled = computed(() => {
  return layersWithOutsidePointerEventsDisabled.value.size > 0
})

const isPointerEventsEnabled = computed(() => {
  const localLayers = Array.from(layers.value)
  const [highestLayerWithOutsidePointerEventsDisabled] = [...layersWithOutsidePointerEventsDisabled.value].slice(-1)
  const highestLayerWithOutsidePointerEventsDisabledIndex = localLayers.indexOf(highestLayerWithOutsidePointerEventsDisabled)

  return index.value >= highestLayerWithOutsidePointerEventsDisabledIndex
})

const pointerDownOutside = usePointerDownOutside(async (event) => {
  if (!isPointerEventsEnabled.value)
    return
  emits('pointerDownOutside', event)
  emits('interactOutside', event)
  await nextTick()
  if (!event.defaultPrevented)
    emits('dismiss')
}, layerElement)

const focusOutside = useFocusOutside((event) => {
  emits('focusOutside', event)
  emits('interactOutside', event)
  if (!event.defaultPrevented)
    emits('dismiss')
}, layerElement)

onKeyStroke('Escape', (event) => {
  const isHighestLayer = index.value === layers.value.size - 1
  if (!isHighestLayer)
    return
  emits('escapeKeyDown', event)
  if (!event.defaultPrevented)
    emits('dismiss')
})

watchEffect((cleanupFn) => {
  if (!layerElement.value)
    return
  let originalBodyPointerEvents: string
  if (props.disableOutsidePointerEvents) {
    if (layersWithOutsidePointerEventsDisabled.value.size === 0) {
      originalBodyPointerEvents = ownerDocument.value.body.style.pointerEvents
      ownerDocument.value.body.style.pointerEvents = 'none'
    }
    layersWithOutsidePointerEventsDisabled.value.add(layerElement.value)
  }
  layers.value.add(layerElement.value)

  cleanupFn(() => {
    if (
      props.disableOutsidePointerEvents
      || layersWithOutsidePointerEventsDisabled.value.size === 1
    )
      ownerDocument.value.body.style.pointerEvents = originalBodyPointerEvents
  })
})

watchEffect((cleanupFn) => {
  cleanupFn(() => {
    if (!layerElement.value)
      return
    layers.value.delete(layerElement.value)
    layersWithOutsidePointerEventsDisabled.value.delete(layerElement.value)
  })
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :as-child="asChild"
    :as="as"
    data-dismissable-layer
    :style="{
      pointerEvents: isBodyPointerEventsDisabled
        ? isPointerEventsEnabled
          ? 'auto'
          : 'none'
        : undefined,
    }"
    @focus.capture="focusOutside.onFocusCapture"
    @blur.capture="focusOutside.onBlurCapture"
    @pointerdown.capture="pointerDownOutside.onPointerDownCapture"
  >
    <slot />
  </Primitive>
</template>
