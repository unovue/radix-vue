<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import { VisuallyHidden } from '@/VisuallyHidden'

interface BubbleSelectProps {
  autocomplete?: string
  autofocus?: boolean
  disabled?: boolean
  form?: string
  multiple?: boolean
  name?: string
  required?: boolean
  size?: number
  value?: any
}

const props = defineProps<BubbleSelectProps>()
const { value } = toRefs(props)
const selectElement = ref<HTMLElement>()

// This would bubble "change" event to form, with the target as Select element.
// We temporary disable this as not sure if it will be needed for Vue
watch(value, (_value, _prevValue) => {
  const selectProto = window.HTMLSelectElement.prototype
  const descriptor = Object.getOwnPropertyDescriptor(
    selectProto,
    'value',
  ) as PropertyDescriptor
  const setValue = descriptor.set
  if (_prevValue !== _value && setValue) {
    const changeEvent = new Event('change', { bubbles: true })
    const inputEvent = new Event('input', { bubbles: true })
    setValue.call(selectElement.value, value.value)
    selectElement.value?.dispatchEvent(changeEvent)
    selectElement.value?.dispatchEvent(inputEvent)
  }
})

/**
 * We purposefully use a `select` here to support form autofill as much
 * as possible.
 *
 * We purposefully do not add the `value` attribute here to allow the value
 * to be set programmatically and bubble to any parent form `onChange` event.
 *
 * We use `VisuallyHidden` rather than `display: "none"` because Safari autofill
 * won't work otherwise.
 */
</script>

<template>
  <VisuallyHidden as-child>
    <select
      ref="selectElement"
      v-bind="props"
      v-model="value"
      :default-value="value"
    >
      <slot />
    </select>
  </VisuallyHidden>
</template>
