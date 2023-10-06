<script setup lang="ts">
import { computed, inject, nextTick, onMounted, ref } from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'

export interface ComboboxInputProps {
  type?: string
  disabled?: boolean
  autoFocus?: boolean
}

const props = withDefaults(defineProps<ComboboxInputProps>(), {
  type: 'text',
})

const context = inject(COMBOBOX_INJECT_KEY)

const elRef = ref<HTMLInputElement>()
onMounted(() => {
  if (!elRef.value)
    return

  context!.inputElement = elRef
  context?.onInputElementChange(elRef.value)

  nextTick(() => {
    // make sure all DOM was flush then only capture the focus
    if (props.autoFocus)
      elRef.value?.focus()
  })
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
    autocomplete="false"
    @input="handleInput"
    @keydown.down.up.prevent="handleKeyDown"
    @keydown.enter="context?.onInputEnter"
    @keydown.home.end.prevent="handleHomeEnd"
  >
</template>
