<script lang="ts">
export interface SliderTrackProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { injectSliderRootContext } from './SliderRoot.vue'

const props = withDefaults(defineProps<SliderTrackProps>(), { as: 'span' })

const rootContext = injectSliderRootContext()
</script>

<template>
  <Primitive
    :as-child="props.asChild"
    :as="as"
    :data-disabled="rootContext.disabled.value"
    :data-orientation="rootContext.orientation.value"
  >
    <slot />
  </Primitive>
</template>
