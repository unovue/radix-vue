<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { CalendarIncrement } from '@/shared/date'

export interface RangeCalendarNextProps extends PrimitiveProps {
/* The calendar unit to go forward */
  step?: CalendarIncrement
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectRangeCalendarRootContext } from './RangeCalendarRoot.vue'

const props = withDefaults(defineProps<RangeCalendarNextProps>(), { as: 'button' })

const rootContext = injectRangeCalendarRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="Next page"
    :type="as === 'button' ? 'button' : undefined"
    :aria-disabled="rootContext.isNextButtonDisabled(props.step) || undefined"
    :data-disabled="rootContext.isNextButtonDisabled(props.step) || undefined"
    :disabled="rootContext.isNextButtonDisabled(props.step)"
    @click="rootContext.nextPage(props.step)"
  >
    <slot>Next page</slot>
  </Primitive>
</template>
