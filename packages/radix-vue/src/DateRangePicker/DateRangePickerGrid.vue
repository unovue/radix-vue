<script lang="ts">
import { RangeCalendarGrid, type RangeCalendarGridProps } from '..'

export interface DateRangePickerGridProps extends RangeCalendarGridProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerGridProps>()
</script>

<template>
  <RangeCalendarGrid v-bind="props">
    <slot />
  </RangeCalendarGrid>
</template>
