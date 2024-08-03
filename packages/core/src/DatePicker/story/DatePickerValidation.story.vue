<script setup lang="ts">
import DatePicker from './_DummyDatePicker.vue'

import { CalendarDate, type DateValue, isWeekend } from '@internationalized/date'

const defaultValue = new CalendarDate(2024, 2, 20)

const minValue = new CalendarDate(2024, 2, 14)
const maxValue = new CalendarDate(2024, 2, 28)

function isDateUnavailable(date: DateValue) {
  return isWeekend(date, 'en')
}

function isDateDisabled(date: DateValue) {
  return date.day <= 12
}
</script>

<template>
  <Story
    title="Date Picker/Validation"
    :layout="{ type: 'grid', width: '50%' }"
  >
    <Variant title="Min date">
      <DatePicker
        :default-value="defaultValue"
        :min-value="minValue"
      />
    </Variant>

    <Variant title="Max date">
      <DatePicker
        :default-value="defaultValue"
        :max-value="maxValue"
      />
    </Variant>

    <Variant title="Unavailable">
      <DatePicker
        :default-value="defaultValue"
        :is-date-unavailable="isDateUnavailable"
      />
    </Variant>

    <Variant title="Disabled">
      <DatePicker
        :default-value="defaultValue"
        :is-date-disabled="isDateDisabled"
      />
    </Variant>
  </Story>
</template>
