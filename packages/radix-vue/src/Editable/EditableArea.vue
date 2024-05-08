<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectEditableRootContext } from './EditableRoot.vue'

export interface EditableAreaProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<EditableAreaProps>(), { as: 'div' })

const context = injectEditableRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    :data-placeholder-shown="context.isEditing ? undefined : ''"
    :data-focus="context.isEditing ? '' : undefined"
    :data-empty="context.isEmpty ? '' : undefined"
    :data-disabled="context.disabled ? '' : undefined"
  >
    <slot />
  </Primitive>
</template>
