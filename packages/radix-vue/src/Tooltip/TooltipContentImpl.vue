<script lang="ts">
import { useEventListener } from '@vueuse/core'
import type { PopperContentProps } from '@/Popper'
import { TOOLTIP_OPEN } from './utils'

export interface TooltipContentImplProps
  extends PrimitiveProps,
  Pick<
      PopperContentProps,
      | 'side'
      | 'sideOffset'
      | 'align'
      | 'alignOffset'
      | 'avoidCollisions'
      | 'collisionBoundary'
      | 'collisionPadding'
      | 'arrowPadding'
      | 'sticky'
      | 'hideWhenDetached'
    > {
  /**
   * By default, screenreaders will announce the content inside
   * the component. If this is not descriptive enough, or you have
   * content that cannot be announced, use aria-label as a more
   * descriptive label.
   *
   * @default String
   */
  ariaLabel?: string
}

export interface TooltipContentImplEmits {
  (e: 'escapeKeyDown', event: KeyboardEvent): void
  (e: 'pointerDownOutside', event: Event): void
}
</script>

<script setup lang="ts">
import { PopperContent } from '@/Popper'
import { type PrimitiveProps } from '@/Primitive'
import { VisuallyHidden } from '@/VisuallyHidden'
import { type VNode, computed, onMounted, ref, useSlots } from 'vue'
import { injectTooltipRootContent } from './TooltipRoot.vue'
import { DismissableLayer } from '@/DismissableLayer'

const props = withDefaults(defineProps<TooltipContentImplProps>(), {
  asChild: false,
  side: 'top',
  sideOffset: 0,
  align: 'center',
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  arrowPadding: 0,
  sticky: 'partial',
  hideWhenDetached: false,
})
const emits = defineEmits<TooltipContentImplEmits>()

const contentElement = ref<HTMLElement>()
const context = injectTooltipRootContent()

const ariaLabel = computed(() => {
  if (props.ariaLabel)
    return props.ariaLabel
  const defaultSlot = useSlots().default?.()
  let content = ''

  function recursiveTextSearch(node: VNode) {
    if (typeof node.children === 'string')
      content += node.children
    else if (Array.isArray(node.children))
      node.children.forEach(child => recursiveTextSearch(child as VNode))
  }

  defaultSlot?.forEach(node => recursiveTextSearch(node))
  return content
})

const popperContentProps = computed(() => ({
  as: props.as,
  asChild: props.asChild,
  side: props.side,
  sideOffset: props.sideOffset,
  align: props.align,
  alignOffset: props.alignOffset,
  avoidCollisions: props.avoidCollisions,
  collisionBoundary: props.collisionBoundary,
  collisionPadding: props.collisionPadding,
  arrowPadding: props.arrowPadding,
  sticky: props.sticky,
  hideWhenDetached: props.hideWhenDetached,
}))

onMounted(() => {
  // Close the tooltip if the trigger is scrolled
  useEventListener(window, 'scroll', (event) => {
    const target = event.target as HTMLElement
    if (target?.contains(context.trigger.value!))
      context.onClose()
  })
  // Close this tooltip if another one opens
  useEventListener(window, TOOLTIP_OPEN, context.onClose)
})
</script>

<template>
  <DismissableLayer
    as-child
    :disable-outside-pointer-events="false"
    @escape-key-down="emits('escapeKeyDown', $event)"
    @pointer-down-outside="emits('pointerDownOutside', $event)"
    @focus-outside.prevent
    @dismiss="context.onClose()"
  >
    <PopperContent
      ref="contentElement"
      :data-state="context.stateAttribute.value"
      v-bind="{ ...$attrs, ...popperContentProps }"
      :style="{
        '--radix-tooltip-content-transform-origin': 'var(--radix-popper-transform-origin)',
        '--radix-tooltip-content-available-width': 'var(--radix-popper-available-width)',
        '--radix-tooltip-content-available-height': 'var(--radix-popper-available-height)',
        '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
        '--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)',
      }"
    >
      <slot />
      <VisuallyHidden :id="context.contentId" role="tooltip">
        {{ ariaLabel }}
      </VisuallyHidden>
    </PopperContent>
  </DismissableLayer>
</template>
