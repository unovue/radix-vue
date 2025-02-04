<script lang="ts">
import type { RangeCalendarPrevSlot } from '@/RangeCalendar/RangeCalendarPrev.vue'
import { RangeCalendarPrev, type RangeCalendarPrevProps } from '..'

export interface DateRangePickerPrevProps extends RangeCalendarPrevProps {}
</script>

<script setup lang="ts">
const props = defineProps<DateRangePickerPrevProps>()
defineSlots<RangeCalendarPrevSlot>()
</script>

<template>
  <RangeCalendarPrev
    v-slot="slotProps "
    v-bind="props"
  >
    <slot v-bind="slotProps" />
  </RangeCalendarPrev>
</template>
