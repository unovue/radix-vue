<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface VisuallyHiddenProps extends PrimitiveProps {
  feature?: 'focusable' | 'fully-hidden'
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

withDefaults(defineProps<VisuallyHiddenProps>(), { as: 'span', feature: 'focusable' })
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :aria-hidden="feature === 'focusable' ? '' : undefined"
    :hidden="feature === 'fully-hidden' ? '' : undefined"
    :tabindex="feature === 'fully-hidden' ? '-1' : undefined"
    :style="{
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: 'absolute',
      border: 0,
      width: '1px',
      display: feature === 'focusable' ? 'inline-block' : 'none',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    }"
  >
    <slot />
  </Primitive>
</template>
