<script lang="ts">
import { CalendarHeadingSegment, type CalendarHeadingSegmentProps } from '..'

export interface DatePickerHeadingSegmentProps extends CalendarHeadingSegmentProps {}
</script>

<script setup lang="ts">
const props = defineProps<DatePickerHeadingSegmentProps>()
</script>

<template>
  <CalendarHeadingSegment v-bind="props">
    <slot />
  </CalendarHeadingSegment>
</template>
