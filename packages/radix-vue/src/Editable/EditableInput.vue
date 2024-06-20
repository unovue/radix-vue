<script lang="ts">
export interface EditableInputProps {
  /** The type of the input */
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url'
}
</script>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { injectEditableRootContext } from './EditableRoot.vue'
import { useKbd } from '@/shared'

withDefaults(defineProps<EditableInputProps>(), {
  type: 'text',
})

const kbd = useKbd()

const context = injectEditableRootContext()

const disabled = computed(() => context.disabled.value)

const placeholder = computed(() => context.placeholder.value?.edit)

const inputRef = ref<HTMLInputElement | undefined>()

onMounted(() => {
  context.inputRef.value = inputRef.value
  if (context.startWithEditMode.value) {
    inputRef.value?.focus()
    if (context.selectOnFocus.value)
      inputRef.value?.select()
  }
})

watch(context.isEditing, (value) => {
  if (value) {
    nextTick(() => {
      inputRef.value?.focus()
      if (context.selectOnFocus.value)
        inputRef.value?.select()
    })
  }
})

function handleSubmitKeyDown(event: KeyboardEvent) {
  if ((context.submitMode.value === 'enter' && event.key === kbd.ENTER) || (context.submitMode.value === 'both' && (event.key === kbd.SPACE || event.key === kbd.ENTER) && !event.shiftKey))
    context.submit()
}
</script>

<template>
  <input
    ref="inputRef"
    v-model="context.modelValue.value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :data-disabled="disabled ? '' : undefined"
    :data-readonly="context.readonly.value ? '' : undefined"
    :readonly="context.readonly.value"
    aria-label="editable input"
    :hidden="context.autoResize.value ? undefined : !context.isEditing.value"
    :style="context.autoResize.value ? { all: 'unset', gridArea: '1 / 1 / auto / auto', visibility: !context.isEditing.value ? 'hidden' : undefined } : undefined"
    @keydown.enter.space="handleSubmitKeyDown"
    @keydown.esc="context.cancel"
  >
</template>
