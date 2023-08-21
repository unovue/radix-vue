<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface VisuallyHiddenProps extends PrimitiveProps {}

withDefaults(defineProps<VisuallyHiddenProps>(), { as: 'span' })
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :style="{
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: 'absolute',
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    }"
  >
    <slot />
  </Primitive>
</template>
