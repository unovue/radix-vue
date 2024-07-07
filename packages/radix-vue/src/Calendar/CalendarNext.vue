<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { DateValue } from '@internationalized/date'

export interface CalendarNextProps extends PrimitiveProps {
  /** The function to be used for the next page. Overwrites the `nextPage` function set on the `CalendarRoot`. */
  nextPage?: (placeholder: DateValue) => DateValue
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
    :aria-disabled="rootContext.isNextButtonDisabled(props.nextPage) || undefined"
    :data-disabled="rootContext.isNextButtonDisabled(props.nextPage) || undefined"
    :disabled="rootContext.isNextButtonDisabled(props.nextPage)"
    @click="rootContext.nextPage(props.nextPage)"
  >
    <slot>Next page</slot>
  </Primitive>
</template>
