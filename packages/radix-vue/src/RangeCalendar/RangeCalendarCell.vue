<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { type DateValue, isSameMonth } from '@internationalized/date'

export interface RangeCalendarCellProps extends PrimitiveProps {
  date: DateValue
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectRangeCalendarRootContext } from './RangeCalendarRoot.vue'

const props = withDefaults(defineProps<RangeCalendarCellProps>(), { as: 'td' })
const rootContext = injectRangeCalendarRootContext()
// || rootContext.isDateUnavailable(date)
</script>

<template>
  <Primitive
    v-bind="props"
    role="gridcell"
    :aria-selected="rootContext.isSelected(date) ? true : undefined"
    :aria-disabled="rootContext.isDateDisabled(date) || !isSameMonth(date, rootContext.placeholder.value)"
    :data-disabled="rootContext.isDateDisabled(date) || !isSameMonth(date, rootContext.placeholder.value) ? '' : undefined"
  >
    <slot />
  </Primitive>
</template>
