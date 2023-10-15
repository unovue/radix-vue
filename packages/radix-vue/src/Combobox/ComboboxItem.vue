<script lang="ts">
import { createContext, useId } from '@/shared'

type ComboboxItemContext = {
  isSelected: Ref<boolean>
}

export const [injectComboboxItemContext, provideComboboxItemContext]
  = createContext<ComboboxItemContext>('ComboboxItem')

export type ComboboxItemEmits = {
  select: [value: string | object]
}

export interface ComboboxItemProps extends PrimitiveProps {
  value: string | object
  disabled?: boolean
  textValue?: string
}
</script>

<script setup lang="ts">
import {
  type Ref,
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
} from 'vue'
import { injectComboboxRootContext } from './ComboboxRoot.vue'
import { injectComboboxGroupContext } from './ComboboxGroup.vue'

import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'

const props = defineProps<ComboboxItemProps>()
const emits = defineEmits<ComboboxItemEmits>()

const { disabled } = toRefs(props)

const rootContext = injectComboboxRootContext()
const groupContext = injectComboboxGroupContext()
const { primitiveElement, currentElement } = usePrimitiveElement()

const isSelected = computed(() =>
  rootContext.multiple.value && Array.isArray(rootContext.modelValue.value)
    ? rootContext.modelValue.value?.includes(props.value as never)
    : JSON.stringify(rootContext.modelValue?.value) === JSON.stringify(props.value),
)

const isFocused = computed(() => JSON.stringify(rootContext.selectedValue.value) === JSON.stringify(props.value))
const textValue = ref(props.textValue ?? '')
const textId = useId()

const isInOption = computed(() =>
  rootContext.isUserInputted.value
    ? rootContext.searchTerm.value === ''
     || rootContext.filteredOptions.value.map(i => JSON.stringify(i)).includes(JSON.stringify(props.value))
    : true)

async function handleSelect(ev?: PointerEvent) {
  await nextTick()
  if (ev?.defaultPrevented)
    return

  if (!disabled.value) {
    rootContext.onValueChange(props.value)
    emits('select', props.value)
  }
}

async function handlePointerMove(event: PointerEvent) {
  await nextTick()
  if (event.defaultPrevented)
    return

  rootContext.onSelectedValueChange(props.value)
}

if (props.value === '') {
  throw new Error(
    'A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.',
  )
}

const instance = getCurrentInstance()
onMounted(() => {
  if (instance)
    rootContext.optionsInstance.value.add(instance)

  if (!groupContext.options?.value?.includes(props.value))
    groupContext.options?.value.push(props.value)

  if (!textValue.value && currentElement.value?.textContent)
    textValue.value = currentElement.value.textContent
})

onUnmounted(() => {
  if (instance)
    rootContext.optionsInstance.value.delete(instance)
})

provideComboboxItemContext({
  isSelected,
})
</script>

<template>
  <Primitive
    v-if="isInOption"
    ref="primitiveElement"
    role="option"
    tabindex="-1"
    data-radix-vue-collection-item
    :aria-labelledby="textId"
    :data-highlighted="isFocused ? '' : undefined"
    :aria-selected="isSelected"
    :data-state="isSelected ? 'checked' : 'unchecked'"
    :aria-disabled="disabled || undefined"
    :data-disabled="disabled ? '' : undefined"
    :as="as"
    :as-child="asChild"
    @click="handleSelect"
    @pointermove="handlePointerMove"
  >
    <slot>{{ value }}</slot>
  </Primitive>
</template>
