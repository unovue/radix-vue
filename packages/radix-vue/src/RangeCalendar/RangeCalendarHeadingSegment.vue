<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { CalendarHeadingSegmentValue, CalendarView } from '@/shared/date'
import { injectRangeCalendarRootContext } from './RangeCalendarRoot.vue'
import { computed } from 'vue'

export interface RangeCalendarHeadingSegmentProps extends PrimitiveProps {
  type: CalendarHeadingSegmentValue['type']
  value: CalendarHeadingSegmentValue['value']
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<RangeCalendarHeadingSegmentProps>(), { as: 'span' })

const rootContext = injectRangeCalendarRootContext()

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
