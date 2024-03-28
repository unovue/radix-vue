<script setup lang="ts">
import DatePicker from './_DummyDatePicker.vue'

import { CalendarDate, type DateValue } from '@internationalized/date'
import { type Ref, ref } from 'vue'

const defaultValue = new CalendarDate(2024, 2, 20)
const modelValue = ref(defaultValue) as Ref<DateValue>

const placeholder = new CalendarDate(2024, 4, 1)
</script>

<template>
  <Story title="Date Picker/Granular" :layout="{ type: 'grid', width: '50%', iframe: false }">
    <Variant title="Granular (second)">
      <DatePicker granularity="second" />
    </Variant>

    <Variant title="Granular (minute)">
      <DatePicker granularity="minute" />
    </Variant>

    <Variant title="Granular (hour)">
      <DatePicker granularity="hour" />
    </Variant>

    <Variant title="Granular (day)">
      <DatePicker granularity="day" />
    </Variant>
  </Story>
</template>
