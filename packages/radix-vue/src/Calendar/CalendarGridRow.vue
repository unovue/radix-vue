<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

export interface CalendarGridRowProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<CalendarGridRowProps>(), { as: 'tr' })

const rootContext = injectCalendarRootContext()
</script>

<template>
  <Primitive v-bind="props" :data-radix-vue-calendar-month-view="rootContext.calendarView.value === 'month' ? '' : undefined">
    <slot />
  </Primitive>
</template>
