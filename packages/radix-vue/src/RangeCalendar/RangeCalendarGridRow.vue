<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectRangeCalendarRootContext } from './RangeCalendarRoot.vue'

export interface RangeCalendarGridRowProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<RangeCalendarGridRowProps>(), { as: 'tr' })

const rootContext = injectRangeCalendarRootContext()
</script>

<template>
  <Primitive v-bind="props" :data-radix-vue-calendar-month-view="rootContext.calendarView.value === 'month' ? '' : undefined">
    <slot />
  </Primitive>
</template>
