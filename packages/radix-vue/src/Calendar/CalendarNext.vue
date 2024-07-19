<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { CalendarIncrement } from '@/shared/date'
import type { DateValue } from '@internationalized/date'

export interface CalendarNextProps extends PrimitiveProps {
/**
 * The calendar unit to go forward
 * @deprecated Use `nextPage` instead
 */
  step?: CalendarIncrement
  /** The function to be used for the next page. Overwrites the `nextPage` function set on the `CalendarRoot`. */
  nextPage?: (placeholder: DateValue) => DateValue
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

const props = withDefaults(defineProps<CalendarNextProps>(), { as: 'button', step: 'month' })
const disabled = computed(() => rootContext.disabled.value || rootContext.isNextButtonDisabled(props.step, props.nextPage))

const rootContext = injectCalendarRootContext()
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    aria-label="Next page"
    :type="as === 'button' ? 'button' : undefined"
    :aria-disabled="disabled || undefined"
    :data-disabled="disabled || undefined"
    :disabled="disabled"
    @click="rootContext.nextPage(props.step, props.nextPage)"
  >
    <slot>Next page</slot>
  </Primitive>
</template>
