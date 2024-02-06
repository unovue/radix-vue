<script lang="ts">
import { RangeCalendarHeading, type RangeCalendarHeadingProps } from '..'

export interface DateRangePickerHeadingProps extends RangeCalendarHeadingProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerHeadingProps>()
</script>

<template>
  <RangeCalendarHeading v-bind="props">
    <slot />
  </RangeCalendarHeading>
</template>
