<script setup lang="ts">
import { DateFieldInput, DateFieldRoot, Label } from 'radix-vue'
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label class="text-sm text-white" for="date-field">Birthday</Label>
    <DateFieldRoot
      id="date-field"
      v-slot="{ segments }"
      :is-date-unavailable="date => date.day === 19"
      class="w-36 flex select-none bg-white items-center rounded-lg text-center text-green10 border border-transparent p-1 data-[invalid]:border-red-500"
    >
      <template v-for="item in segments" :key="item.part">
        <DateFieldInput
          v-if="item.part === 'literal'"
          :part="item.part"
        >
          {{ item.value }}
        </DateFieldInput>
        <DateFieldInput
          v-else
          :part="item.part"
          class="rounded p-0.5   focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black aria-[valuetext=Empty]:text-green9"
        >
          {{ item.value }}
        </DateFieldInput>
      </template>
    </DateFieldRoot>
  </div>
</template>
