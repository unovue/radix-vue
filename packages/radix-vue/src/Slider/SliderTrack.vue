<script lang="ts">
export interface SliderTrackProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { SLIDER_INJECTION_KEY } from './SliderRoot.vue'

const props = withDefaults(defineProps<SliderTrackProps>(), { as: 'span' })

const injectedValue = inject(SLIDER_INJECTION_KEY)
</script>

<template>
  <Primitive
    :as-child="props.asChild"
    :as="as"
    :data-disabled="injectedValue?.disabled"
    :data-orientation="injectedValue?.orientation"
  >
    <slot />
  </Primitive>
</template>
