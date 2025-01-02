<script lang="ts">
import { RangeCalendarNext, type RangeCalendarNextProps } from '..'

export interface DateRangePickerNextProps extends RangeCalendarNextProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerNextProps>()
</script>

<template>
  <RangeCalendarNext v-bind="props">
    <slot />
  </RangeCalendarNext>
</template>
