<script setup lang="ts">
import { DateRangeFieldInput, DateRangeFieldRoot } from '../'
import { Label } from '@/Label'
</script>

<template>
  <Story title="Date Range Field">
    <Variant title="default">
      <div class="flex flex-col gap-2">
        <Label for="date-field">Input label</Label>

        <DateRangeFieldRoot
          id="date-field"
          v-slot="{ segments }"
          :is-date-unavailable="date => date.day === 19"
          granularity="second"
          class="flex select-none bg-white items-center rounded text-center text-green10 placeholder:text-mauve5 border border-gray9 p-2 data-[invalid]:border-red-500"
        >
          <DateRangeFieldInput v-for="item in segments.start" :key="`start-${item.part}`" type="start" :part="item.part" class="p-1">
            {{ item.value }}
          </DateRangeFieldInput>-
          <DateRangeFieldInput v-for="item in segments.end" :key="item.part" class="rounded-5px px-1 py-1 hover:bg-muted focus:bg-muted focus:text-foreground focus-visible:!ring-0 focus-visible:!ring-offset-0 aria-[valuetext=Empty]:text-muted-foreground" type="end" :part="item.part">
            {{ item.value }}
          </DateRangeFieldInput>
        </DateRangeFieldRoot>
      </div>
    </Variant>
  </Story>
</template>
