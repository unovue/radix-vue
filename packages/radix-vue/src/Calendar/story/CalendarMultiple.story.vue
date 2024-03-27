<script setup lang="ts">
import Calendar from './_DummyCalendar.vue'
import { createCalendarDate } from '@internationalized/date'

const defaultValue = createCalendarDate({ year: 2024, month: 2, day: 20 })
</script>

<template>
  <Story title="Calendar/Multiple" :layout="{ type: 'grid', width: '100%', iframe: false }">
    <Variant title="2 months">
      <Calendar :default-value="defaultValue" :number-of-months="2" />
    </Variant>

    <Variant title="2 months (Paged navigation)">
      <Calendar :default-value="defaultValue" :number-of-months="2" paged-navigation />
    </Variant>

    <Variant title="3 months">
      <Calendar :default-value="defaultValue" :number-of-months="3" />
    </Variant>

    <Variant title="3 months (Paged nagivation)">
      <Calendar :default-value="defaultValue" :number-of-months="3" paged-navigation />
    </Variant>

    <Variant title="3 months (Fixed week)">
      <Calendar :default-value="defaultValue" :number-of-months="3" fixed-weeks />
    </Variant>
  </Story>
</template>
