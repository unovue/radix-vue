<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface EditableCancelTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectEditableRootContext } from './EditableRoot.vue'

const props = withDefaults(defineProps<EditableCancelTriggerProps>(), { as: 'button' })

useForwardExpose()
const context = injectEditableRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="cancel"
    :type="as === 'button' ? 'button' : undefined"
    :hidden="context.isEditing ? '' : undefined"
    @click="context.cancel"
  >
    <slot>Cancel</slot>
  </Primitive>
</template>
