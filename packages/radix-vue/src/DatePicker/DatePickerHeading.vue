<script lang="ts">
import { CalendarHeading, type CalendarHeadingProps } from '..'
import type { CalendarHeadingSegmentValue } from '@/shared/date'

export interface DatePickerHeadingProps extends CalendarHeadingProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerHeadingProps>()

defineSlots<{
  default(props: {
    /** The segments for displaying the heading value which have click handlers attached */
    headingValue: CalendarHeadingSegmentValue[]
  }): any
}>()
</script>

<template>
  <CalendarHeading
    v-slot="{ headingValue }"
    v-bind="props"
  >
    <slot :heading-value="headingValue" />
  </CalendarHeading>
</template>
