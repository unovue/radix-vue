<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface CalendarGridProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectCalendarRootContext } from './CalendarRoot.vue'

const props = withDefaults(defineProps<CalendarGridProps>(), { as: 'table' })

const rootContext = injectCalendarRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    tabindex="-1"
    role="grid"
    :aria-readonly="rootContext.readonly ? true : undefined"
    :aria-disabled="rootContext.disabled ? true : undefined"
    :data-readonly="rootContext.readonly ? '' : undefined"
    :data-disabled="rootContext.disabled ? '' : undefined"
  >
    <slot />
  </Primitive>
</template>
