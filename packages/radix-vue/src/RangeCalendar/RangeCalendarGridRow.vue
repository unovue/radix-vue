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
  <Primitive v-bind="props" :data-radix-vue-calendar-view="rootContext.calendarView.value">
    <slot />
  </Primitive>
</template>
