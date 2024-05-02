<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface EditableSubmitTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectEditableRootContext } from './EditableRoot.vue'

const props = withDefaults(defineProps<EditableSubmitTriggerProps>(), { as: 'button' })

useForwardExpose()
const context = injectEditableRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="submit"
    :type="as === 'button' ? 'button' : undefined"
    :hidden="context.isEditing ? '' : undefined"
    @click="context.submit"
  >
    <slot>Submit</slot>
  </Primitive>
</template>
