<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { CalendarIncrement } from '@/shared/date'

export interface CalendarPrevProps extends PrimitiveProps {
/** The calendar unit to go back */
  step?: CalendarIncrement
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

const props = withDefaults(defineProps<CalendarPrevProps>(), { as: 'button', step: 'month' })

const rootContext = injectCalendarRootContext()
</script>

<template>
  <Primitive
    aria-label="Previous page"
    :as="props.as"
    :as-child="props.asChild"
    :type="as === 'button' ? 'button' : undefined"
    :aria-disabled="rootContext.isPrevButtonDisabled(props.step) || undefined"
    :data-disabled="rootContext.isPrevButtonDisabled(props.step) || undefined"
    :disabled="rootContext.isPrevButtonDisabled(props.step)"
    @click="rootContext.prevPage(props.step)"
  >
    <slot>Prev page</slot>
  </Primitive>
</template>
