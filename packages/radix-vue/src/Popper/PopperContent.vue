<script lang="ts">
import type { Ref } from 'vue'
import type {
  Middleware,
  Placement,
} from '@floating-ui/vue'
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useForwardExpose, useSize } from '@/shared'
import type {
  Align,
  Side,
} from './utils'

export const PopperContentPropsDefaultValue = {
  side: 'bottom' as Side,
  sideOffset: 0,
  align: 'center' as Align,
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: 'partial' as 'partial' | 'always',
  hideWhenDetached: false,
  updatePositionStrategy: 'optimized' as 'optimized' | 'always',
  prioritizePosition: false,
}

export interface PopperContentProps extends PrimitiveProps {
  /**
   * The preferred side of the trigger to render against when open.
   * Will be reversed when collisions occur and avoidCollisions
   * is enabled.
   *
   * @defaultValue "top"
   */
  side?: Side

  /**
   * The distance in pixels from the trigger.
   *
   * @defaultValue 0
   */
  sideOffset?: number

  /**
   * The preferred alignment against the trigger.
   * May change when collisions occur.
   *
   * @defaultValue "center"
   */
  align?: Align

  /**
   * An offset in pixels from the `start` or `end` alignment options.
   *
   * @defaultValue 0
   */
  alignOffset?: number

  /**
   * When `true`, overrides the side andalign preferences
   * to prevent collisions with boundary edges.
   *
   * @defaultValue true
   */
  avoidCollisions?: boolean

  /**
   * The element used as the collision boundary. By default
   * this is the viewport, though you can provide additional
   * element(s) to be included in this check.
   *
   * @defaultValue []
   */
  collisionBoundary?: Element | null | Array<Element | null>

  /**
   * The distance in pixels from the boundary edges where collision
   * detection should occur. Accepts a number (same for all sides),
   * or a partial padding object, for example: { top: 20, left: 20 }.
   *
   * @defaultValue 0
   */
  collisionPadding?: number | Partial<Record<Side, number>>

  /**
   * The padding between the arrow and the edges of the content.
   * If your content has border-radius, this will prevent it from
   * overflowing the corners.
   *
   * @defaultValue 0
   */
  arrowPadding?: number

  /**
   * The sticky behavior on the align axis. `partial` will keep the
   * content in the boundary as long as the trigger is at least partially
   * in the boundary whilst "always" will keep the content in the boundary
   * regardless.
   *
   * @defaultValue "partial"
   */
  sticky?: 'partial' | 'always'

  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   *
   * @defaultValue false
   */
  hideWhenDetached?: boolean

  /**
   * Strategy to update the position of the floating element on every animation frame.
   *
   * @defaultValue 'optimized'
   */
  updatePositionStrategy?: 'optimized' | 'always'

  /**
   * Force content to be position within the viewport.
   *
   * Might overlap the reference element, which may not be desired.
   *
   * @defaultValue false
   */
  prioritizePosition?: boolean
}

export interface PopperContentContext {
  placedSide: Ref<Side>
  onArrowChange(arrow: HTMLElement | undefined): void
  arrowX?: Ref<number>
  arrowY?: Ref<number>
  shouldHideArrow: Ref<boolean>
}

export const [injectPopperContentContext, providePopperContentContext]
  = createContext<PopperContentContext>('PopperContent')
</script>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { computedEager } from '@vueuse/core'
import {
  autoUpdate,
  flip,
  arrow as floatingUIarrow,
  hide,
  limitShift,
  offset,
  shift,
  size,
  useFloating,
} from '@floating-ui/vue'
import { injectPopperRootContext } from './PopperRoot.vue'
import {
  getSideAndAlignFromPlacement,
  isNotNull,
  transformOrigin,
} from './utils'
import {
  Primitive,
} from '@/Primitive'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PopperContentProps>(), {
  ...PopperContentPropsDefaultValue,
})
const emits = defineEmits<{
  placed: [void]
}>()
const rootContext = injectPopperRootContext()

const { forwardRef, currentElement: contentElement } = useForwardExpose()

const floatingRef = ref<HTMLElement>()

const arrow = ref<HTMLElement>()
const { width: arrowWidth, height: arrowHeight } = useSize(arrow)

const desiredPlacement = computed(
  () =>
    (props.side
      + (props.align !== 'center' ? `-${props.align}` : '')) as Placement,
)

const collisionPadding = computed(() => {
  return typeof props.collisionPadding === 'number'
    ? props.collisionPadding
    : { top: 0, right: 0, bottom: 0, left: 0, ...props.collisionPadding }
})

const boundary = computed(() => {
  return Array.isArray(props.collisionBoundary)
    ? props.collisionBoundary
    : [props.collisionBoundary]
})

const detectOverflowOptions = computed(() => {
  return {
    padding: collisionPadding.value,
    boundary: boundary.value.filter(isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: boundary.value.length > 0,
  }
})

const computedMiddleware = computedEager(() => {
  return [
    offset({
      mainAxis: props.sideOffset + arrowHeight.value,
      alignmentAxis: props.alignOffset,
    }),
    props.prioritizePosition
      && props.avoidCollisions
      && flip({
        ...detectOverflowOptions.value,
      }),
    props.avoidCollisions
      && shift({
        mainAxis: true,
        crossAxis: !!props.prioritizePosition,
        limiter: props.sticky === 'partial' ? limitShift() : undefined,
        ...detectOverflowOptions.value,
      }),
    !props.prioritizePosition
      && props.avoidCollisions
      && flip({
        ...detectOverflowOptions.value,
      }),
    size({
      ...detectOverflowOptions.value,
      apply: ({ elements, rects, availableWidth, availableHeight }) => {
        const { width: anchorWidth, height: anchorHeight } = rects.reference
        const contentStyle = elements.floating.style
        Object.assign(elements.floating.style, {
          maxWidth: `${availableWidth}px`,
          maxHeight: `${availableHeight}px`,
        })
        contentStyle.setProperty(
          '--radix-popper-available-width',
          `${availableWidth}px`,
        )
        contentStyle.setProperty(
          '--radix-popper-available-height',
          `${availableHeight}px`,
        )
        contentStyle.setProperty(
          '--radix-popper-anchor-width',
          `${anchorWidth}px`,
        )
        contentStyle.setProperty(
          '--radix-popper-anchor-height',
          `${anchorHeight}px`,
        )
      },
    }),
    arrow.value
      && floatingUIarrow({ element: arrow.value, padding: props.arrowPadding }),
    transformOrigin({
      arrowWidth: arrowWidth.value,
      arrowHeight: arrowHeight.value,
    }),
    props.hideWhenDetached
      && hide({ strategy: 'referenceHidden', ...detectOverflowOptions.value }),
  ] as Middleware[]
})

const { floatingStyles, placement, isPositioned, middlewareData } = useFloating(
  rootContext.anchor,
  floatingRef,
  {
    strategy: 'fixed',
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: props.updatePositionStrategy === 'always',
      })
      return cleanup
    },
    middleware: computedMiddleware,
  },
)

const placedSide = computed(
  () => getSideAndAlignFromPlacement(placement.value)[0],
)
const placedAlign = computed(
  () => getSideAndAlignFromPlacement(placement.value)[1],
)

watchEffect(() => {
  if (isPositioned.value)
    emits('placed')
})

const cannotCenterArrow = computed(
  () => middlewareData.value.arrow?.centerOffset !== 0,
)

const contentZIndex = ref('')
watchEffect(() => {
  if (contentElement.value)
    contentZIndex.value = window.getComputedStyle(contentElement.value).zIndex
})

const arrowX = computed(() => middlewareData.value.arrow?.x ?? 0)
const arrowY = computed(() => middlewareData.value.arrow?.y ?? 0)

providePopperContentContext({
  placedSide,
  onArrowChange: element => arrow.value = element,
  arrowX,
  arrowY,
  shouldHideArrow: cannotCenterArrow,
})
</script>

<template>
  <div
    ref="floatingRef"
    data-radix-popper-content-wrapper=""
    :style="{
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : 'translate(0, -200%)', // keep off the page when measuring
      minWidth: 'max-content',
      zIndex: contentZIndex,
      ['--radix-popper-transform-origin' as any]: [
        middlewareData.transformOrigin?.x,
        middlewareData.transformOrigin?.y,
      ].join(' '),

      // hide the content if using the hide middleware and should be hidden
      // set visibility to hidden and disable pointer events so the UI behaves
      // as if the PopperContent isn't there at all
      ...(middlewareData.hide?.referenceHidden && {
        visibility: 'hidden',
        pointerEvents: 'none',
      }),
    }"
  >
    <Primitive
      :ref="forwardRef"
      v-bind="$attrs"
      :as-child="props.asChild"
      :as="as"
      :data-side="placedSide"
      :data-align="placedAlign"
      :style="{
        // if the PopperContent hasn't been placed yet (not all measurements done)
        // we prevent animations so that users's animation don't kick in too early referring wrong sides
        animation: !isPositioned ? 'none' : undefined,
      }"
    >
      <slot />
    </Primitive>
  </div>
</template>
