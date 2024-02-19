<script lang="ts">
import { RangeCalendarHeadingSegment, type RangeCalendarHeadingSegmentProps } from '..'

export interface DateRangePickerHeadingSegmentProps extends RangeCalendarHeadingSegmentProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerHeadingSegmentProps>()
</script>

<template>
  <RangeCalendarHeadingSegment v-bind="props">
    <slot />
  </RangeCalendarHeadingSegment>
</template>
