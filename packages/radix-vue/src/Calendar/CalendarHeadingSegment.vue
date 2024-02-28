<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { CalendarHeadingSegmentValue } from '@/shared/date'
import { injectCalendarRootContext } from './CalendarRoot.vue'

export interface CalendarHeadingSegmentProps extends PrimitiveProps {
  /** The heading segment value type */
  type: CalendarHeadingSegmentValue['type']
  /** The value of the heading segment */
  value: CalendarHeadingSegmentValue['value']
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<CalendarHeadingSegmentProps>(), { as: 'span' })

const rootContext = injectCalendarRootContext()
</script>

<template>
  <Primitive v-bind="props">
    <slot>
      {{ value }}
    </slot>
  </Primitive>
</template>
