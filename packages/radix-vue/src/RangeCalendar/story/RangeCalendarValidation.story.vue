<script setup lang="ts">
import RangeCalendar from './_DummyRangeCalendar.vue'
import { CalendarDate, type DateValue, isWeekend } from '@internationalized/date'
import { ref } from 'vue'

function isDateUnavailable(date: DateValue) {
  return isWeekend(date, 'en')
}
function isDateDisabled(date: DateValue) {
  return date.day > 20
}

const modelValue = ref<DateValue>()
const defaultValue = { start: new CalendarDate(2024, 2, 20), end: new CalendarDate(2024, 2, 24) }
const minValue = new CalendarDate(2024, 2, 12)
const maxValue = new CalendarDate(2024, 2, 20)
</script>

<template>
  <Story title="Range Calendar/Validation" :layout="{ type: 'grid', width: '50%', iframe: false }">
    <Variant title="Unavailable">
      <RangeCalendar :default-value="defaultValue" :is-date-unavailable="isDateUnavailable" />
    </Variant>

    <Variant title="Disabled">
      <RangeCalendar :default-value="defaultValue" :is-date-disabled="isDateDisabled" />
    </Variant>

    <Variant title="Min">
      <RangeCalendar :default-value="defaultValue" :min-value="minValue" />
    </Variant>

    <Variant title="Max">
      <RangeCalendar :default-value="defaultValue" :max-value="maxValue" />
    </Variant>

    <Variant title="Min Max">
      <RangeCalendar :default-value="defaultValue" :min-value="minValue" :max-value="maxValue" />
    </Variant>
  </Story>
</template>
..
