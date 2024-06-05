import { type Ref, ref } from 'vue'
import { findValuesBetween } from './arrays'

export function useSelectionBehavior<T>(
  modelValue: Ref<T | T[]>,
  props: { multiple?: boolean, selectionBehavior?: 'toggle' | 'replace', isVirtual?: boolean },
) {
  const { multiple = false, selectionBehavior = 'toggle' } = props

  const firstValue = ref()

  const onSelectItem = (val: T, condition: (existingValue: T) => boolean) => {
    // multiple select
    if (multiple && Array.isArray(modelValue.value)) {
      if (selectionBehavior === 'replace') {
        modelValue.value = [val]
        firstValue.value = val
      }
      else {
        const index = modelValue.value.findIndex(v => condition(v))
        if (index !== -1)
          modelValue.value.splice(index, 1)
        else
          modelValue.value.push(val)
      }
    }
    // single select
    else {
      if (selectionBehavior === 'replace') {
        modelValue.value = { ...val }
      }
      else {
        if (!Array.isArray(modelValue.value) && condition(modelValue.value))
          modelValue.value = undefined as any
        else
          modelValue.value = { ...val }
      }
    }
  }

  function handleMultipleReplace(intent: 'first' | 'last' | 'prev' | 'next', currentElement: HTMLElement | Element | null, getItems: () => { ref: HTMLElement, value?: any }[], options: any[]) {
    if (!firstValue?.value || !multiple || !Array.isArray(modelValue.value))
      return

    const collection = getItems().filter(i => i.ref.dataset.disabled !== '')
    const lastValue = collection.find(i => i.ref === currentElement)?.value
    if (!lastValue)
      return

    let value: T[] | null = null
    switch (intent) {
      case 'prev':
      case 'next': {
        value = findValuesBetween(options, firstValue.value, lastValue)
        break
      }
      case 'first': {
        value = findValuesBetween(options, firstValue.value, options?.[0])
        break
      }
      case 'last': {
        value = findValuesBetween(options, firstValue.value, options?.[options.length - 1])
        break
      }
    }

    modelValue.value = value
  }

  return {
    firstValue,
    onSelectItem,
    handleMultipleReplace,
  }
}