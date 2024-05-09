<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectNumberFieldRootContext } from './NumberFieldRoot.vue'

export interface NumberFieldLabelProps extends PrimitiveProps {
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<NumberFieldLabelProps>(), {
  as: 'label',
})

const rootContext = injectNumberFieldRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    :id="rootContext.labelId"
  >
    <slot />
  </Primitive>
</template>
