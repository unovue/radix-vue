<script setup lang="ts">
import { CalendarDateTime, type DateValue, toZoned } from '@internationalized/date'
import { type Ref, ref } from 'vue'
import { DateRangeFieldInput, DateRangeFieldRoot } from '../'
import { Label } from '@/Label'

const calendarDateTime = new CalendarDateTime(1980, 1, 20, 12, 30, 0, 0)
const zonedDateTime = toZoned(calendarDateTime, 'America/New_York')
const value = ref({
  start: zonedDateTime,
  end: zonedDateTime.add({ days: 4 }),
}) as Ref<{ start: DateValue | undefined; end: DateValue | undefined }>
</script>

<template>
  <Story title="Date Range Field">
    <Variant title="default">
      <Label for="date-field">Input label</Label>

      <DateRangeFieldRoot
        id="date-field"
        v-slot="{ segments }"
        v-model="value"
        :is-date-unavailable="date => date.day === 19"
        granularity="second"
      >
        <DateRangeFieldInput v-for="item in segments.start" :key="`start-${item.part}`" type="start" :part="item.part">
          {{ item.value }}
        </DateRangeFieldInput>-
        <DateRangeFieldInput v-for="item in segments.end" :key="item.part" type="end" :part="item.part">
          {{ item.value }}
        </DateRangeFieldInput>
      </DateRangeFieldRoot>
    </Variant>
  </Story>
</template>
