<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface CalendarHeadingProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

const props = withDefaults(defineProps<CalendarHeadingProps>(), { as: 'div' })
const rootContext = injectCalendarRootContext()
</script>

<template>
  <Primitive v-bind="props" :data-disabled="rootContext.disabled.value ? '' : undefined">
    <slot :heading-value="rootContext.headingValue">
      {{ rootContext.headingValue.value }}
    </slot>
  </Primitive>
</template>
