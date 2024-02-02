<script setup lang="ts">
import { DateFieldInput, DateFieldRoot } from '../'
import { Label } from '@/Label'
</script>

<template>
  <Story title="Date Field">
    <Variant title="default">
      <Label for="date-field">Input label</Label>
      <DateFieldRoot
        id="date-field"
        v-slot="{ segments }"
        :is-date-unavailable="date => date.day === 19"
        granularity="second"
      >
        <DateFieldInput v-for="item in segments" :key="item.part" :part="item.part">
          {{ item.value }}
        </DateFieldInput>
      </DateFieldRoot>
    </Variant>
  </Story>
</template>
