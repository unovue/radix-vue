<script setup lang="ts">
import DateRangePicker from './_DummyDateRangePicker.vue'

import { type DateValue, createCalendarDate } from 'flat-internationalized-date'
import { type Ref, ref } from 'vue'

const defaultValue = createCalendarDate({ year: 2024, month: 2, day: 20 })
const modelValue = ref(defaultValue) as Ref<DateValue>

const placeholder = createCalendarDate({ year: 2024, month: 4, day: 1 })
</script>

<template>
  <Story title="Date Range Picker/Granular" :layout="{ type: 'grid', width: '50%', iframe: false }">
    <Variant title="Granular (second)">
      <DateRangePicker granularity="second" />
    </Variant>

    <Variant title="Granular (minute)">
      <DateRangePicker granularity="minute" />
    </Variant>

    <Variant title="Granular (hour)">
      <DateRangePicker granularity="hour" />
    </Variant>

    <Variant title="Granular (day)">
      <DateRangePicker granularity="day" />
    </Variant>
  </Story>
</template>
