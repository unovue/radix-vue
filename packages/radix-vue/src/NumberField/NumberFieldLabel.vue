<script lang="ts">
import { injectNumberFieldRootContext } from './NumberFieldRoot.vue'
import type { LabelProps } from '@/Label'

export interface NumberFieldLabelProps extends Omit<LabelProps, 'for'> {
}
</script>

<script setup lang="ts">
import { Label } from '@/Label'

const props = withDefaults(defineProps<NumberFieldLabelProps>(), {
  as: 'label',
})

const rootContext = injectNumberFieldRootContext()
</script>

<template>
  <Label
    v-bind="props"
    :id="rootContext.labelId"
    :for="rootContext.inputId"
  >
    <slot />
  </Label>
</template>
