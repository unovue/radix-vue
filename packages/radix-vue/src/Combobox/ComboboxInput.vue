<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'

export interface ComboboxInputProps {
  type?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<ComboboxInputProps>(), {
  type: 'text',
})

const context = inject(COMBOBOX_INJECT_KEY)

const elRef = ref()
onMounted(() => {
  context!.inputElement = elRef
  context?.onInputElementChange(elRef.value)
})

const disabled = computed(() => props.disabled || context?.disabled.value || false)

function handleKeyDown(ev: KeyboardEvent) {
  if (!context?.open.value)
    context?.onOpenChange(true)
  else
    context.onInputNavigation(ev.key === 'ArrowUp' ? 'up' : 'down')
}

function handleHomeEnd(ev: KeyboardEvent) {
  if (!context?.open.value)
    return
  context.onInputNavigation(ev.key === 'Home' ? 'home' : 'end')
}

function handleInput() {
  if (!context?.open.value)
    context?.onOpenChange(true)

  context!.isUserInputted.value = true
}
</script>

<template>
  <input
    ref="elRef"
    v-model="context!.searchTerm.value"
    :type="type"
    :aria-expanded="context?.open.value"
    :aria-controls="context?.contentId"
    :disabled="disabled"
    :aria-disabled="disabled ?? undefined"
    aria-autocomplete="list"
    tabindex="0"
    role="combobox"
    @input="handleInput"
    @keydown.down.up.prevent="handleKeyDown"
    @keydown.enter="context?.onInputEnter"
    @keydown.home.end.prevent="handleHomeEnd"
  >
</template>
