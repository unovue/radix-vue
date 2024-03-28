<script setup lang="ts">
import RangeCalendar from './_DummyRangeCalendar.vue'
import { CalendarDate } from '@internationalized/date'

const defaultValue = { start: new CalendarDate(2024, 2, 20), end: new CalendarDate(2024, 2, 27) }
</script>

<template>
  <Story title="Range Calendar/Multiple" :layout="{ type: 'grid', width: '100%', iframe: false }">
    <Variant title="2 months">
      <RangeCalendar :default-value="defaultValue" :number-of-months="2" />
    </Variant>

    <Variant title="2 months (Paged nagivation)">
      <RangeCalendar :default-value="defaultValue" :number-of-months="2" paged-navigation />
    </Variant>

    <Variant title="3 months">
      <RangeCalendar :default-value="defaultValue" :number-of-months="3" />
    </Variant>

    <Variant title="3 months (Paged nagivation)">
      <RangeCalendar :default-value="defaultValue" :number-of-months="3" paged-navigation />
    </Variant>

    <Variant title="3 months (Fixed week)">
      <RangeCalendar :default-value="defaultValue" :number-of-months="3" fixed-weeks />
    </Variant>
  </Story>
</template>
