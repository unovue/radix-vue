<script setup lang="ts">
import Calendar from './_DummyCalendar.vue'
import { CalendarDate, type DateValue } from '@internationalized/date'
import { type Ref, ref } from 'vue'

const defaultValue = new CalendarDate(2024, 2, 20)
const modelValue = ref(defaultValue) as Ref<DateValue>

const placeholder = ref(new CalendarDate(2024, 4, 1)) as Ref<CalendarDate>
</script>

<template>
  <Story title="Calendar/Chromatic" :layout="{ type: 'grid', width: '50%', iframe: false }">
    <Variant title="Uncontrolled (modelValue)">
      <Calendar :default-value="defaultValue" />
    </Variant>

    <Variant title="Controlled (modelValue)">
      <Calendar v-model="modelValue" />
    </Variant>

    <Variant title="Uncontrolled (placeholder)">
      <Calendar :default-value="defaultValue" :default-placeholder="placeholder" />
    </Variant>

    <Variant title="Controlled (placeholder)">
      <Calendar v-model:placeholder="placeholder" :default-value="defaultValue" />
    </Variant>

    <Variant title="Empty default">
      <Calendar />
    </Variant>

    <Variant title="Default value">
      <Calendar :default-value="defaultValue" />
    </Variant>

    <Variant title="Fixed weeks">
      <Calendar :default-value="defaultValue" fixed-weeks />
    </Variant>

    <Variant title="Localization">
      <Calendar :default-value="defaultValue" locale="de" />
    </Variant>

    <Variant title="Prevent deselection">
      <Calendar :default-value="defaultValue" prevent-deselect />
    </Variant>

    <Variant title="Multiple selection">
      <Calendar :default-value="defaultValue" multiple />
    </Variant>
  </Story>
</template>
