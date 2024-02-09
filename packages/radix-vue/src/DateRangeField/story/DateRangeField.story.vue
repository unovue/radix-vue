<script setup lang="ts">
import { DateRangeFieldInput, DateRangeFieldRoot } from '../'
import { Label } from '@/Label'
</script>

<template>
  <Story title="Date Range Field">
    <Variant title="default">
      <Label for="date-field">Input label</Label>

      <DateRangeFieldRoot
        id="date-field"
        v-slot="{ segments }"
        :is-date-unavailable="date => date.day === 19"
        granularity="second"
      >
        <DateRangeFieldInput v-for="item in segments.start" :key="`start-${item.part}`" type="start" :part="item.part">
          {{ item.value }}
        </DateRangeFieldInput>-
        <DateRangeFieldInput v-for="item in segments.end" :key="item.part" type="end" :part="item.part">
          {{ item.value }}
        </DateRangeFieldInput>
      </DateRangeFieldRoot>
    </Variant>
  </Story>
</template>
