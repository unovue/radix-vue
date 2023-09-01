<script lang="ts">
export interface SliderTrackProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { injectSliderContext } from './SliderRoot.vue'

const props = withDefaults(defineProps<SliderTrackProps>(), { as: 'span' })

const context = injectSliderContext()
</script>

<template>
  <Primitive
    :as-child="props.asChild"
    :as="as"
    :data-disabled="context.disabled.value"
    :data-orientation="context.orientation.value"
  >
    <slot />
  </Primitive>
</template>
