<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectEditableRootContext } from './EditableRoot.vue'
import { computed } from 'vue'

export interface EditablePreviewProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<EditablePreviewProps>(), { as: 'span' })

const context = injectEditableRootContext()

const placeholder = computed(() => context.placeholder.value?.preview)
</script>

<template>
  <Primitive
    v-bind="props"
    tabindex="0"
    :data-placeholder-shown="context.isEditing ? undefined : ''"
    :hidden="context.isEditing.value ? '' : undefined"
  >
    <slot>
      {{ context.modelValue.value || placeholder }}
    </slot>
  </Primitive>
</template>
