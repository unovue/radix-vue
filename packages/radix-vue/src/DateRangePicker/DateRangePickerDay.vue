<script lang="ts">
import { RangeCalendarDay, type RangeCalendarDayProps } from '..'

export interface DateRangePickerDayProps extends RangeCalendarDayProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerDayProps>()
</script>

<template>
  <RangeCalendarDay v-bind="props">
    <slot />
  </RangeCalendarDay>
</template>
