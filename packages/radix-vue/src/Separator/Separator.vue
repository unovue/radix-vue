<script lang="ts">
import { computed } from 'vue'
import type { Orientation } from '@/shared/types'
import { type PrimitiveProps } from '@/Primitive'

export interface SeparatorProps extends PrimitiveProps {
  /**
   * Either `vertical` or `horizontal`. Defaults to `horizontal`.
   */
  orientation?: Orientation
  /**
   * Whether or not the component is purely decorative. When true, accessibility-related attributes
   * are updated so that that the rendered element is removed from the accessibility tree.
   */
  decorative?: boolean
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: 'horizontal',
})

const ORIENTATIONS = ['horizontal', 'vertical'] as const
function isValidOrientation(orientation: any): orientation is Orientation {
  return ORIENTATIONS.includes(orientation)
}

const computedOrientation = computed(() =>
  isValidOrientation(props.orientation) ? props.orientation : 'horizontal',
)
// `aria-orientation` defaults to `horizontal` so we only need it if `orientation` is vertical
const ariaOrientation = computed(() =>
  computedOrientation.value === 'vertical' ? props.orientation : undefined,
)

const semanticProps = computed(() =>
  props.decorative
    ? { role: 'none' }
    : { 'aria-orientation': ariaOrientation.value, 'role': 'separator' },
)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :data-orientation="computedOrientation"
    v-bind="semanticProps"
  >
    <slot />
  </Primitive>
</template>
