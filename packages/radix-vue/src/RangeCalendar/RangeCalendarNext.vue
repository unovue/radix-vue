<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface RangeCalendarNextProps extends PrimitiveProps {}
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
    :aria-disabled="rootContext.isNextButtonDisabled.value || undefined"
    :data-disabled="rootContext.isNextButtonDisabled.value || undefined"
    :disabled="rootContext.isNextButtonDisabled.value"
    @click="rootContext.nextPage"
  >
    <slot>Next page</slot>
  </Primitive>
</template>
