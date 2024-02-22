<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { CalendarHeadingSegmentValue } from '@/shared/date'

export interface CalendarHeadingProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

const props = withDefaults(defineProps<CalendarHeadingProps>(), { as: 'div' })
defineSlots<{
  default(props: {
    /** The segments for displaying the heading value which have click handlers attached */
    headingValue: CalendarHeadingSegmentValue[]
  }): any
}>()

const rootContext = injectCalendarRootContext()
</script>

<template>
  <Primitive v-bind="props" :data-disabled="rootContext.disabled.value ? '' : undefined">
    <slot :heading-value="rootContext.headingValue.value" />
  </Primitive>
</template>
