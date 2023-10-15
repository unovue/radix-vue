<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { injectComboboxRootContext } from './ComboboxRoot.vue'

export interface ComboboxInputProps {
  type?: string
  disabled?: boolean
  autoFocus?: boolean
}

const props = withDefaults(defineProps<ComboboxInputProps>(), {
  type: 'text',
})

const rootContext = injectComboboxRootContext()

const elRef = ref()
onMounted(() => {
  rootContext.inputElement = elRef
  rootContext.onInputElementChange(elRef.value)
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

function handleInput() {
  if (!rootContext.open.value)
    rootContext.onOpenChange(true)

  rootContext.isUserInputted.value = true
}
</script>

<template>
  <input
    ref="elRef"
    v-model="rootContext.searchTerm.value"
    :type="type"
    :aria-expanded="rootContext.open.value"
    :aria-controls="rootContext.contentId"
    :disabled="disabled"
    :aria-disabled="disabled ?? undefined"
    aria-autocomplete="list"
    tabindex="0"
    role="combobox"
    autocomplete="false"
    :autofocus="autoFocus"
    @input="handleInput"
    @keydown.down.up.prevent="handleKeyDown"
    @keydown.enter="rootContext.onInputEnter"
    @keydown.home.end.prevent="handleHomeEnd"
  >
</template>
