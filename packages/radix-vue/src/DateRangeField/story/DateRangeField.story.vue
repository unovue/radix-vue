<script setup lang="ts">
import { DateRangeFieldInput, DateRangeFieldRoot } from '../'
import { Label } from '@/Label'
</script>

<template>
  <Story title="Date Range Field/Basic">
    <Variant title="default">
      <div class="flex flex-col gap-2">
        <Label for="date-field" class="text-sm text-gray9">Input label</Label>

        <DateRangeFieldRoot
          id="date-field"
          v-slot="{ segments }"
          :is-date-unavailable="date => date.day === 19"
          granularity="second"
          class="flex select-none bg-white items-center rounded text-center text-green10 placeholder:text-mauve5 border border-gray9 p-2 data-[invalid]:border-red-500"
        >
          <template v-for="item in segments.start" :key="item.part">
            <DateRangeFieldInput
              v-if="item.part === 'literal'"
              :part="item.part"
              type="start"
            >
              {{ item.value }}
            </DateRangeFieldInput>
            <DateRangeFieldInput
              v-else
              :part="item.part"
              class="rounded-5px px-1 py-1 hover:bg-grass4 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black aria-[valuetext=Empty]:text-green9"
              type="start"
            >
              {{ item.value }}
            </DateRangeFieldInput>
          </template>
          -
          <template v-for="item in segments.end" :key="item.part">
            <DateRangeFieldInput
              v-if="item.part === 'literal'"
              :part="item.part"
              type="end"
            >
              {{ item.value }}
            </DateRangeFieldInput>
            <DateRangeFieldInput
              v-else
              :part="item.part"
              class="rounded-5px px-1 py-1 hover:bg-grass4 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black aria-[valuetext=Empty]:text-green9"
              type="end"
            >
              {{ item.value }}
            </DateRangeFieldInput>
          </template>
        </DateRangeFieldRoot>
      </div>
    </Variant>
  </Story>
</template>
