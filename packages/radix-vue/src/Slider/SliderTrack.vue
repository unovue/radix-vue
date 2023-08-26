<script lang="ts">
export interface SliderTrackProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { SLIDER_INJECTION_KEY } from './SliderRoot.vue'

const props = withDefaults(defineProps<SliderTrackProps>(), { as: 'span' })

const context = inject(SLIDER_INJECTION_KEY)
</script>

<template>
  <Primitive
    :as-child="props.asChild"
    :as="as"
    :data-disabled="context?.disabled.value"
    :data-orientation="context?.orientation.value"
  >
    <slot />
  </Primitive>
</template>
