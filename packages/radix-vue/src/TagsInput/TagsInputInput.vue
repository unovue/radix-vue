<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface TagsInputInputProps extends PrimitiveProps {
  placeholder?: string
  autoFocus?: boolean
}
</script>

<script setup lang="ts">
import { nextTick, onMounted } from 'vue'
import { injectTagsInputRootContext } from './TagsInputRoot.vue'
import { Primitive, usePrimitiveElement } from '@/Primitive'

const props = withDefaults(defineProps<TagsInputInputProps>(), {
  as: 'input',
})

const context = injectTagsInputRootContext()
const { primitiveElement, currentElement } = usePrimitiveElement()

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

onMounted(() => {
  const inputEl = currentElement.value.nodeName === 'INPUT'
    ? currentElement.value
    : currentElement.value.querySelector('input')

  if (!inputEl)
    return

  setTimeout(() => {
    // make sure all DOM was flush then only capture the focus
    if (props.autoFocus)
      inputEl?.focus()
  }, 1)
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
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
