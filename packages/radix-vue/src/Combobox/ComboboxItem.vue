<script lang="ts">
interface ComboboxItemContextValue {
  isSelected: Ref<boolean>
}

export const COMBOBOX_ITEM_INJECTION_KEY
  = Symbol() as InjectionKey<ComboboxItemContextValue>

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
  type InjectionKey,
  type Ref,
  computed,
  getCurrentInstance,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  ref,
  toRefs,
} from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'
import { COMBOBOX_GROUP_INJECTION_KEY } from './ComboboxGroup.vue'

import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { useId } from '@/shared'

const props = defineProps<ComboboxItemProps>()
const emits = defineEmits<ComboboxItemEmits>()

const { disabled } = toRefs(props)

const context = inject(COMBOBOX_INJECT_KEY)
const groupContext = inject(COMBOBOX_GROUP_INJECTION_KEY, { id: '', options: ref([]) })
const { primitiveElement, currentElement } = usePrimitiveElement()

const isSelected = computed(() =>
  context?.multiple.value && Array.isArray(context.modelValue.value)
    ? context.modelValue.value?.includes(props.value as never)
    : JSON.stringify(context?.modelValue?.value) === JSON.stringify(props.value),
)

const isFocused = computed(() => JSON.stringify(context?.selectedValue.value) === JSON.stringify(props.value))
const textValue = ref(props.textValue ?? '')
const textId = useId()

const isInOption = computed(() =>
  context?.isUserInputted.value
    ? context?.searchTerm.value === ''
     || context?.filteredOptions.value.map(i => JSON.stringify(i)).includes(JSON.stringify(props.value))
    : true)

async function handleSelect(ev?: PointerEvent) {
  await nextTick()
  if (ev?.defaultPrevented)
    return

  if (!disabled.value) {
    context!.onValueChange(props.value)
    emits('select', props.value)
  }
}

async function handlePointerMove(event: PointerEvent) {
  await nextTick()
  if (event.defaultPrevented)
    return

  context?.onSelectedValueChange(props.value)
}

if (props.value === '') {
  throw new Error(
    'A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.',
  )
}

const instance = getCurrentInstance()
onMounted(() => {
  if (instance)
    context?.optionsInstance.value.add(instance)

  if (!groupContext?.options?.value?.includes(props.value))
    groupContext?.options?.value.push(props.value)

  if (!textValue.value && currentElement.value?.textContent)
    textValue.value = currentElement.value.textContent
})

onUnmounted(() => {
  if (instance)
    context?.optionsInstance.value.delete(instance)
})

provide(COMBOBOX_ITEM_INJECTION_KEY, {
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
