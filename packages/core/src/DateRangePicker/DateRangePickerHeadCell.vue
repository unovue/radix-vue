<script lang="ts">
import { RangeCalendarHeadCell, type RangeCalendarHeadCellProps } from '..'

export interface DateRangePickerHeadCellProps extends RangeCalendarHeadCellProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerHeadCellProps>()
</script>

<template>
  <RangeCalendarHeadCell v-bind="props">
    <slot />
  </RangeCalendarHeadCell>
</template>
