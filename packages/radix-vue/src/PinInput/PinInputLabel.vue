<script lang="ts">
import { type PrimitiveProps } from '@/Primitive'
import { injectPinInputRootContext } from './PinInputRoot.vue'

export interface PinInputLabelProps extends PrimitiveProps {
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<PinInputLabelProps>(), {
  as: 'label',
})

const context = injectPinInputRootContext()
</script>

<template>
  <Primitive v-bind="props" :for="context.inputId">
    <slot />
  </Primitive>
</template>
