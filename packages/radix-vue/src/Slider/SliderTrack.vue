<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export interface SliderTrackProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectSliderRootContext } from './SliderRoot.vue'

withDefaults(defineProps<SliderTrackProps>(), { as: 'span' })

const rootContext = injectSliderRootContext()

const { forwardRef } = useForwardRef()
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as-child="asChild"
    :as="as"
    :data-disabled="rootContext.disabled.value"
    :data-orientation="rootContext.orientation.value"
  >
    <slot />
  </Primitive>
</template>
