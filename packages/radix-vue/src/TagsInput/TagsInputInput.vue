<script lang="ts">
import { injectTagsInputRootContext } from './TagsInputRoot.vue'
import type { PrimitiveProps } from '@/Primitive'

export interface TagsInputInputProps extends PrimitiveProps {
  placeholder?: string
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<TagsInputInputProps>(), {
  as: 'input',
})

const context = injectTagsInputRootContext()

function handleEnter(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.value)
    return

  const isAdded = context.onAddValue(target.value)
  if (isAdded)
    target.value = ''
}
</script>

<template>
  <Primitive
    v-bind="props"
    type="text"
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    :data-invalid="context.isInvalidInput.value || undefined"
    @input="context.isInvalidInput.value = false"
    @keydown.enter.prevent="handleEnter"
    @keydown="context.onInputKeydown"
  >
    <slot />
  </Primitive>
</template>
