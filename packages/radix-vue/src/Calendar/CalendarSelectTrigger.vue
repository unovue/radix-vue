<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { DateValue } from '@internationalized/date'

export interface CalendarSelectTriggerProps extends PrimitiveProps {
  type: 'month' | 'year'
  value: DateValue
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<CalendarSelectTriggerProps>(), { as: 'div' })
</script>

<template>
  <Primitive data-radix-vue-calendar-select-trigger v-bind="props">
    <slot />
  </Primitive>
</template>
