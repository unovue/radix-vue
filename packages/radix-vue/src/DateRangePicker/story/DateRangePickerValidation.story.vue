<script setup lang="ts">
import DateRangePicker from './_DummyDateRangePicker.vue'

import { CalendarDateTime, type DateValue, isWeekend } from '@internationalized/date'

const defaultValue = { start: new CalendarDateTime(2024, 2, 20), end: new CalendarDateTime(2024, 2, 27) }

const minValue = new CalendarDateTime(2024, 2, 14)
const maxValue = new CalendarDateTime(2024, 2, 28)

function isDateUnavailable(date: DateValue) {
  return isWeekend(date, 'en')
}

function isDateDisabled(date: DateValue) {
  return date.day <= 12
}
</script>

<template>
  <Story title="Date Range Picker/Validation" :layout="{ type: 'grid', width: '50%', iframe: false }">
    <Variant title="Min date">
      <DateRangePicker :default-value="defaultValue" :min-value="minValue" />
    </Variant>

    <Variant title="Max date">
      <DateRangePicker :default-value="defaultValue" :max-value="maxValue" />
    </Variant>

    <Variant title="Unavailable">
      <DateRangePicker :default-value="defaultValue" :is-date-unavailable="isDateUnavailable" />
    </Variant>

    <Variant title="Disabled">
      <DateRangePicker :default-value="defaultValue" :is-date-disabled="isDateDisabled" />
    </Variant>
  </Story>
</template>
