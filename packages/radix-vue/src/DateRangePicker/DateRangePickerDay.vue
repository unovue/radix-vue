<script lang="ts">
import { RangeCalendarCellTrigger, type RangeCalendarCellTriggerProps } from '..'

export interface DateRangePickerDayProps extends RangeCalendarCellTriggerProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerDayProps>()
</script>

<template>
  <RangeCalendarCellTrigger v-bind="props">
    <slot />
  </RangeCalendarCellTrigger>
</template>
