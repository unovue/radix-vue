<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { CalendarIncrement } from '@/shared/date'

export interface RangeCalendarPrevProps extends PrimitiveProps {
/* The calendar unit to go forward */
  step?: CalendarIncrement
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectRangeCalendarRootContext } from './RangeCalendarRoot.vue'

const props = withDefaults(defineProps<RangeCalendarPrevProps>(), { as: 'button' })

const rootContext = injectRangeCalendarRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="Previous page"
    :type="as === 'button' ? 'button' : undefined"
    :aria-disabled="rootContext.isPrevButtonDisabled(props.step) || undefined"
    :data-disabled="rootContext.isPrevButtonDisabled(props.step) || undefined"
    :disabled="rootContext.isPrevButtonDisabled(props.step)"
    @click="rootContext.prevPage(props.step)"
  >
    <slot>Prev page</slot>
  </Primitive>
</template>
