<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { CalendarHeadingSegmentValue, CalendarView } from '@/shared/date'
import { injectCalendarRootContext } from './CalendarRoot.vue'
import { computed } from 'vue'

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

const setViewArg = computed((): CalendarView | null => {
  if (props.type === 'month')
    return 'year'

  if (props.type === 'year')
    return 'decade'

  return null
})
</script>

<template>
  <Primitive v-bind="props" @click="setViewArg ? rootContext.setView(setViewArg as CalendarView) : undefined">
    <slot>
      {{ value }}
    </slot>
  </Primitive>
</template>
