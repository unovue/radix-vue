<script lang="ts">
import { RangeCalendarHeading, type RangeCalendarHeadingProps } from '..'

export interface DateRangePickerHeadingProps extends RangeCalendarHeadingProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerHeadingProps>()
</script>

<template>
  <RangeCalendarHeading v-slot="{ headingValue }" v-bind="props">
    <slot :heading-value="headingValue" />
  </RangeCalendarHeading>
</template>
