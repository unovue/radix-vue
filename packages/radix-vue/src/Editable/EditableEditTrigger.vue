<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface EditableEditTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { injectEditableRootContext } from './EditableRoot.vue'

const props = withDefaults(defineProps<EditableEditTriggerProps>(), { as: 'button' })

useForwardExpose()
const context = injectEditableRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    aria-label="edit"
    :type="as === 'button' ? 'button' : undefined"
    :hidden="context.isEditing ? undefined : ''"
    @click="context.edit"
  >
    <slot>Edit</slot>
  </Primitive>
</template>
