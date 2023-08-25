<script lang="ts">
export interface SliderRangeProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { SLIDER_INJECTION_KEY } from './SliderRoot.vue'
import type { SliderProvideValue } from './SliderRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = withDefaults(defineProps<SliderRangeProps>(), { as: 'span' })
const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY)
</script>

<template>
  <Primitive
    :data-disabled="injectedValue?.disabled"
    :data-orientation="injectedValue?.orientation"
    :as-child="props.asChild"
    :as="as"
    :style="`left: 0%; right: ${
      (injectedValue?.max ?? 100) - (injectedValue?.modelValue?.value ?? 0)
    }%`"
  />
</template>
