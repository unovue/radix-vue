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

function handleInput(event: InputEvent) {
  context.modelValue.value = (event.target as HTMLInputElement).value
}

function handleBlur() {
  context.cancel()
}
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="context.modelValue.value"
    :disabled="disabled"
    :data-disabled="disabled ? '' : undefined"
    aria-label="editable input"
    :hidden="context.isEditing ? undefined : ''"
    @input="handleInput($event as InputEvent)"
    @blur="handleBlur"
  >
</template>
