<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface CalendarNextProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

const props = withDefaults(defineProps<CalendarNextProps>(), { as: 'button' })

const rootContext = injectCalendarRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="Next page"
    :type="as === 'button' ? 'button' : undefined"
    :aria-disabled="rootContext.isNextButtonDisabled.value || undefined"
    :data-disabled="rootContext.isNextButtonDisabled.value || undefined"
    :disabled="rootContext.isNextButtonDisabled.value"
    @click="rootContext.nextPage"
  >
    <slot>Next page</slot>
  </Primitive>
</template>
