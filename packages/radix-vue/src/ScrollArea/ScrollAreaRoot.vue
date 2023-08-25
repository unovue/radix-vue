<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import type { Direction, ScrollType } from './types'

export interface ScrollAreaProvideValue {
  type: Ref<ScrollType>
  dir: Ref<Direction>
  scrollHideDelay: Ref<number>
  scrollArea: Ref<HTMLElement | undefined>
  viewport: Ref<HTMLElement | undefined>
  onViewportChange(viewport: HTMLElement | null): void
  content: Ref<HTMLElement | undefined>
  onContentChange(content: HTMLElement): void
  scrollbarX: Ref<HTMLElement | undefined>
  onScrollbarXChange(scrollbar: HTMLElement | null): void
  scrollbarXEnabled: Ref<boolean>
  onScrollbarXEnabledChange(rendered: boolean): void
  scrollbarY: Ref<HTMLElement | undefined>
  onScrollbarYChange(scrollbar: HTMLElement | null): void
  scrollbarYEnabled: Ref<boolean>
  onScrollbarYEnabledChange(rendered: boolean): void
  onCornerWidthChange(width: number): void
  onCornerHeightChange(height: number): void
}

export interface ScrollAreaRootProps extends PrimitiveProps {
  type?: ScrollType
  dir?: Direction
  scrollHideDelay?: number
}

export const SCROLL_AREA_INJECTION_KEY
  = Symbol() as InjectionKey<ScrollAreaProvideValue>
</script>

<script setup lang="ts">
import { provide, ref, toRefs } from 'vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'

const props = withDefaults(defineProps<ScrollAreaRootProps>(), {
  type: 'hover',
  dir: 'ltr',
  scrollHideDelay: 600,
})

const { primitiveElement, currentElement: scrollArea } = usePrimitiveElement()

const cornerWidth = ref(0)
const cornerHeight = ref(0)
const viewport = ref<HTMLElement>()
const content = ref<HTMLElement>()
const scrollbarX = ref<HTMLElement>()
const scrollbarY = ref<HTMLElement>()
const scrollbarXEnabled = ref(false)
const scrollbarYEnabled = ref(false)

function onViewportChange(el: HTMLElement) {
  viewport.value = el
}
function onContentChange(el: HTMLElement) {
  content.value = el
}

function onScrollbarXChange(scrollbar: HTMLElement) {
  scrollbarX.value = scrollbar
}
function onScrollbarYChange(scrollbar: HTMLElement) {
  scrollbarY.value = scrollbar
}

function onScrollbarXEnabledChange(rendered: boolean) {
  scrollbarXEnabled.value = rendered
}
function onScrollbarYEnabledChange(rendered: boolean) {
  scrollbarYEnabled.value = rendered
}

function onCornerWidthChange(width: number) {
  cornerWidth.value = width
}
function onCornerHeightChange(height: number) {
  cornerHeight.value = height
}

const { type, dir, scrollHideDelay } = toRefs(props)
provide<ScrollAreaProvideValue>(SCROLL_AREA_INJECTION_KEY, {
  type,
  dir,
  scrollHideDelay,
  scrollArea,
  viewport,
  onViewportChange,
  content,
  onContentChange,
  scrollbarX,
  scrollbarXEnabled,
  scrollbarY,
  scrollbarYEnabled,
  onScrollbarXChange,
  onScrollbarYChange,
  onScrollbarXEnabledChange,
  onScrollbarYEnabledChange,
  onCornerWidthChange,
  onCornerHeightChange,
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :as-child="props.asChild"
    :as="as"
    :dir="props.dir"
    :style="{
      position: 'relative',
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ['--radix-scroll-area-corner-width' as any]: `${cornerWidth}px`,
      ['--radix-scroll-area-corner-height' as any]: `${cornerHeight}px`,
    }"
  >
    <slot />
  </Primitive>
</template>
