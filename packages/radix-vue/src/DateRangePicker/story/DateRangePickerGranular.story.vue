<script setup lang="ts">
import DateRangePicker from './_DummyDateRangePicker.vue'

import { CalendarDate, type DateValue } from '@internationalized/date'
import { type Ref, ref } from 'vue'

const defaultValue = new CalendarDate(2024, 2, 20)
const modelValue = ref(defaultValue) as Ref<DateValue>

const placeholder = new CalendarDate(2024, 4, 1)
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
