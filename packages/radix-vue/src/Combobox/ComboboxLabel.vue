<script lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface ComboboxLabelProps extends PrimitiveProps {
  for?: string
}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { COMBOBOX_GROUP_INJECTION_KEY } from './ComboboxGroup.vue'

const props = withDefaults(defineProps<ComboboxLabelProps>(), {
  as: 'label',
})

const groupContext = inject(COMBOBOX_GROUP_INJECTION_KEY, {
  id: '',
})
</script>

<template>
  <Primitive v-bind="props" :id="groupContext.id">
    <slot />
  </Primitive>
</template>
