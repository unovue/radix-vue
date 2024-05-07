<script lang="ts">
export interface EditableInputProps {
  /** The type of the input */
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { injectEditableRootContext } from './EditableRoot.vue'

withDefaults(defineProps<EditableInputProps>(), {
  type: 'text',
})

const context = injectEditableRootContext()

const disabled = computed(() => context.disabled.value)

const placeholder = computed(() => context.placeholder.value?.edit)

function handleBlur() {
  context.cancel()
}
</script>

<template>
  <input
    v-model="context.modelValue.value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :data-disabled="disabled ? '' : undefined"
    aria-label="editable input"
    :hidden="context.isEditing.value ? undefined : ''"
    @blur="handleBlur"
  >
</template>
