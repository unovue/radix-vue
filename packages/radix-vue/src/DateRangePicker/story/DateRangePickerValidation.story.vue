<script setup lang="ts">
import DateRangePicker from './_DummyDateRangePicker.vue'

import { type DateValue, createCalendarDateTime, isWeekend } from '@internationalized/date'

const defaultValue = { start: createCalendarDateTime({ year: 2024, month: 2, day: 20 }), end: createCalendarDateTime({ year: 2024, month: 2, day: 27 }) }

const minValue = createCalendarDateTime({ year: 2024, month: 2, day: 14 })
const maxValue = createCalendarDateTime({ year: 2024, month: 2, day: 28 })

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
