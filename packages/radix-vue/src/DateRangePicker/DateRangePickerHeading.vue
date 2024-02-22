<script lang="ts">
import { RangeCalendarHeading, type RangeCalendarHeadingProps } from '..'
import type { CalendarHeadingSegmentValue } from '@/shared/date'

export interface DateRangePickerHeadingProps extends RangeCalendarHeadingProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerHeadingProps>()

defineSlots<{
  default(props: {
    /** The segments for displaying the heading value which have click handlers attached */
    headingValue: CalendarHeadingSegmentValue[]
  }): any
}>()
</script>

<template>
  <RangeCalendarHeading v-slot="{ headingValue }" v-bind="props">
    <slot :heading-value="headingValue" />
  </RangeCalendarHeading>
</template>
