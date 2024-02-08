<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface ComboboxInputProps extends PrimitiveProps {
  /** Nactive input type */
  type?: string
  /** When `true`, prevents the user from interacting with item */
  disabled?: boolean
  /** Focus on element when mounted. */
  autoFocus?: boolean
}
</script>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { injectComboboxRootContext } from './ComboboxRoot.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<ComboboxInputProps>(), {
  type: 'text',
  as: 'input',
})

const rootContext = injectComboboxRootContext()

const { forwardRef, currentElement } = useForwardExpose()
onMounted(() => {
  const inputEl = currentElement.value.nodeName === 'INPUT'
    ? currentElement.value as HTMLInputElement
    : currentElement.value.querySelector('input')
  if (!inputEl)
    return

  rootContext.onInputElementChange(inputEl)

  setTimeout(() => {
    // make sure all DOM was flush then only capture the focus
    if (props.autoFocus)
      inputEl?.focus()
  }, 1)
})

const disabled = computed(() => props.disabled || rootContext.disabled.value || false)

function handleKeyDown(ev: KeyboardEvent) {
  if (!rootContext.open.value)
    rootContext.onOpenChange(true)
  else
    rootContext.onInputNavigation(ev.key === 'ArrowUp' ? 'up' : 'down')
}

function handleHomeEnd(ev: KeyboardEvent) {
  if (!rootContext.open.value)
    return
  rootContext.onInputNavigation(ev.key === 'Home' ? 'home' : 'end')
}

function handleInput(event: Event) {
  rootContext.searchTerm.value = (event.target as HTMLInputElement)?.value
  if (!rootContext.open.value)
    rootContext.onOpenChange(true)

  rootContext.isUserInputted.value = true
}
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as="as"
    :as-child="asChild"
    :type="type"
    :disabled="disabled"
    :value="rootContext.searchTerm.value"
    :aria-expanded="rootContext.open.value"
    :aria-controls="rootContext.contentId"
    :aria-disabled="disabled ?? undefined"
    aria-autocomplete="list"
    role="combobox"
    autocomplete="false"
    @input="handleInput"
    @keydown.down.up.prevent="handleKeyDown"
    @keydown.enter="rootContext.onInputEnter"
    @keydown.home.end.prevent="handleHomeEnd"
  >
    <slot />
  </Primitive>
</template>
