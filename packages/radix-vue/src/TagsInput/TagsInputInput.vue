<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface TagsInputInputProps extends PrimitiveProps {
  placeholder?: string
}
</script>

<script setup lang="ts">
import { nextTick } from 'vue'
import { injectTagsInputRootContext } from './TagsInputRoot.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<TagsInputInputProps>(), {
  as: 'input',
})

const context = injectTagsInputRootContext()

async function handleEnter(event: Event) {
  await nextTick()
  // if keydown 'Enter' was prevented, we let user handle updating the value themselves
  if (event.defaultPrevented)
    return

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
    @keydown.enter="handleEnter"
    @keydown="context.onInputKeydown"
  >
    <slot />
  </Primitive>
</template>
