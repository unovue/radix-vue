<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { CalendarIncrement } from '@/shared/date'

export interface CalendarNextProps extends PrimitiveProps {
/** The calendar unit to go forward */
  step?: CalendarIncrement
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

const props = withDefaults(defineProps<CalendarNextProps>(), { as: 'button', step: 'month' })

const rootContext = injectCalendarRootContext()
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
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
