<script lang="ts">
export interface SelectGroupProps extends PrimitiveProps {}

interface SelectGroupContextValue {
  id: string
}
export const SELECT_GROUP_INJECTION_KEY
  = Symbol() as InjectionKey<SelectGroupContextValue>
</script>

<script setup lang="ts">
import { type InjectionKey, provide } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { useId } from '@/shared'

const props = defineProps<SelectGroupProps>()

const id = useId()
provide(SELECT_GROUP_INJECTION_KEY, {
  id,
})
</script>

<template>
  <Primitive role="group" v-bind="props" :aria-labelledby="id">
    <slot />
  </Primitive>
</template>
