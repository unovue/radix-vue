<script lang="ts">
import { type PrimitiveProps } from '@/Primitive'
import { injectPinInputRootContext } from './PinInputRoot.vue'
import { useArrowNavigation } from '@/shared'

export interface PinInputInputProps extends PrimitiveProps {
  /** Position of the value this input binds to. */
  index: number
  /** When `true`, prevents the user from interacting with the pin input */
  disabled?: boolean
}
</script>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(defineProps<PinInputInputProps>(), {
  as: 'input',
})

const context = injectPinInputRootContext()
const inputElements = computed(() => Array.from(context.inputElements!.value))

const disabled = computed(() => props.disabled || context.disabled.value)
const isOtpMode = computed(() => context.otp.value)
const isNumbericMode = computed(() => context.type.value === 'number')
const isPasswordMode = computed(() => context.mask.value)

const inputRef = ref()
function handleInput(event: InputEvent) {
  const target = event.target as HTMLInputElement

  if ((event.data?.length ?? 0) > 1) {
    handleMultipleCharacter(target.value)
    return
  }

  if (isNumbericMode.value && !/^[0-9]*$/.test(target.value)) {
    target.value = target.value.replace(/\D/g, '')
    return
  }

  target.value = target.value.slice(-1)
  updateModelValueAt(props.index, target.value)

  const nextEl = inputElements.value[props.index + 1]
  if (nextEl)
    nextEl.focus()
}

function handleKeydown(event: KeyboardEvent) {
  useArrowNavigation(event, document.activeElement as HTMLElement, undefined, {
    itemsArray: inputElements.value,
    focus: true,
    loop: false,
    arrowKeyOptions: 'horizontal',
    dir: context.dir.value,
  })
}

function handleBackspace(event: KeyboardEvent) {
  event.preventDefault()
  const target = event.target as HTMLInputElement
  const value = target.value

  if (value) {
    updateModelValueAt(props.index, '')
  }
  else {
    const prevEl = inputElements.value[props.index - 1]
    if (prevEl) {
      prevEl.focus()
      updateModelValueAt(props.index - 1, '')
    }
  }
}

function handleDelete(event: KeyboardEvent) {
  if (event.key === 'Delete') {
    event.preventDefault()
    updateModelValueAt(props.index, '')
  }
}

function handleFocus(event: FocusEvent) {
  const target = event.target as HTMLInputElement
  target.setSelectionRange(1, 1)

  if (!target.value)
    target.placeholder = ''
}

function handleBlur(event: FocusEvent) {
  const target = event.target as HTMLInputElement
  nextTick(() => {
    if (!target.value)
      target.placeholder = context.placeholder.value
  })
}

function handlePaste(event: ClipboardEvent) {
  event.preventDefault()
  const clipboardData = event.clipboardData
  if (!clipboardData)
    return

  const values = clipboardData.getData('text')
  handleMultipleCharacter(values)
}

function handleMultipleCharacter(values: string) {
  const tempModelValue = [...context.modelValue.value]
  const initialIndex = values.length >= inputElements.value.length ? 0 : props.index
  const lastIndex = Math.min(initialIndex + values.length, inputElements.value.length)
  for (let i = initialIndex; i < lastIndex; i++) {
    const input = inputElements.value[i]
    const value = values[i - initialIndex]
    if (isNumbericMode.value && !/^[0-9]*$/.test(value))
      continue

    tempModelValue[i] = value
    input.focus()
  }
  context.modelValue.value = tempModelValue
  inputElements.value[lastIndex]?.focus()
}

function updateModelValueAt(index: number, value: string) {
  const tempModelValue = [...context.modelValue.value]
  tempModelValue[index] = value
  context.modelValue.value = tempModelValue
}

onMounted(() => {
  context.onInputElementChange(inputRef.value)
})
onUnmounted(() => {
  context.inputElements?.value.delete(inputRef.value)
})
</script>

<template>
  <input
    ref="inputRef"
    autocapitalize="none"
    :autocomplete="isOtpMode ? 'one-time-code' : 'false'"
    :type="isPasswordMode ? 'password' : 'text'"
    :inputmode="isNumbericMode ? 'numeric' : 'text'"
    :pattern="isNumbericMode ? '[0-9]*' : undefined"
    :placeholder="context.placeholder.value"
    :value="context.modelValue.value.at(index)"
    :disabled="disabled"
    :data-disabled="disabled ? '' : undefined"
    :data-complete="context.isCompleted.value ? '' : undefined"
    :aria-label="`pin input ${index + 1} of ${inputElements.length}`"
    @input="handleInput($event as InputEvent)"
    @keydown.left.right.up.down.home.end="handleKeydown"
    @keydown.backspace="handleBackspace"
    @keydown.delete="handleDelete"
    @focus="handleFocus"
    @blur="handleBlur"
    @paste="handlePaste"
  >
</template>
