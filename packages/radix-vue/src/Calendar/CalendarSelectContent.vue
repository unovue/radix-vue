<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface CalendarSelectContentProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

const props = withDefaults(defineProps<CalendarSelectContentProps>(), { as: 'div' })

const rootContext = injectCalendarRootContext()

// const selectGrid = computed(() => {
//   if
// })
</script>

<template>
  <Primitive v-bind="props">
    <slot />
  </Primitive>
</template>
