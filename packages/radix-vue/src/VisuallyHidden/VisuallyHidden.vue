<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface VisuallyHiddenProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

withDefaults(defineProps<VisuallyHiddenProps>(), { as: 'span' })
useForwardExpose()
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :style="{
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: 'absolute',
      border: 0,
      width: '1px',
      display: 'inline-block',
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
