<script lang="ts">
import { RangeCalendarGridBody, type RangeCalendarGridBodyProps } from '..'

export interface DateRangePickerGridBodyProps extends RangeCalendarGridBodyProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerGridBodyProps>()
</script>

<template>
  <RangeCalendarGridBody v-bind="props">
    <slot />
  </RangeCalendarGridBody>
</template>
