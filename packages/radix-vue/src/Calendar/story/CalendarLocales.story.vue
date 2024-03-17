<script setup lang="ts">
import Calendar from './_DummyCalendar.vue'
import { CALENDAR, createCalendarDate } from 'flat-internationalized-date'

const gregorian = createCalendarDate({
  year: 2024,
  month: 2,
  day: 20,
})

const persian = createCalendarDate({
  calendar: CALENDAR.PERSIAN,
  year: 1403,
  month: 12,
  day: 1,
})
const japanese = createCalendarDate({
  calendar: CALENDAR.JAPANESE,
  era: 'heisei',
  year: 31,
  month: 4,
  day: 30,

})
const buddhist = createCalendarDate({
  calendar: CALENDAR.BUDDHIST,
  year: 2563,
  month: 4,
  day: 30,
})
const taiwan = createCalendarDate({
  calendar: CALENDAR.TAIWAN,
  year: 109,
  month: 4,
  day: 30,
})

const hebrew = createCalendarDate({
  calendar: CALENDAR.HEBREW,
  year: 5781,
  month: 5,
  day: 1,
})
</script>

<template>
  <Story title="Calendar/Locales" :layout="{ type: 'grid', width: '50%', iframe: false }">
    <Variant title="Gregorian">
      <Calendar :default-value="gregorian" locale="en" />
    </Variant>

    <Variant title="Japanese">
      <Calendar locale="ja" :default-value="japanese" />
    </Variant>

    <Variant title="Persian">
      <Calendar locale="fa-IR" :default-value="persian" />
    </Variant>

    <Variant title="Taiwan">
      <Calendar locale="zh-TW" :default-value="taiwan" />
    </Variant>

    <Variant title="Buddhist">
      <Calendar locale="th" :default-value="buddhist" />
    </Variant>

    <Variant title="Hebrew">
      <Calendar locale="he" :default-value="hebrew" />
    </Variant>
  </Story>
</template>
