<script lang="ts">
import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { createContext, handleAndDispatchCustomEvent, useId } from '@/shared'

export type SelectEvent = CustomEvent<{ originalEvent: PointerEvent; value?: string | object }>
interface ComboboxItemContext {
  isSelected: Ref<boolean>
}

export const [injectComboboxItemContext, provideComboboxItemContext]
  = createContext<ComboboxItemContext>('ComboboxItem')

export type ComboboxItemEmits = {
  select: [event: SelectEvent]
}

export interface ComboboxItemProps extends PrimitiveProps {
  value: string | object
  disabled?: boolean
  textValue?: string
}

const COMBOBOX_SELECT = 'combobox.select'
</script>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  ref,
  toRefs,
} from 'vue'
import { injectComboboxRootContext } from './ComboboxRoot.vue'
import { injectComboboxGroupContext } from './ComboboxGroup.vue'
import {
  Primitive,
  usePrimitiveElement,
} from '@/Primitive'
import { CollectionItem } from '@/Collection'
import isEqual from 'fast-deep-equal'

const props = defineProps<ComboboxItemProps>()
const emits = defineEmits<ComboboxItemEmits>()

const { disabled } = toRefs(props)

const rootContext = injectComboboxRootContext()
const groupContext = injectComboboxGroupContext({ id: '', options: ref([]) })
const { primitiveElement, currentElement } = usePrimitiveElement()

const isSelected = computed(() =>
  rootContext.multiple.value && Array.isArray(rootContext.modelValue.value)
    ? rootContext.modelValue.value?.includes(props.value as never)
    : isEqual(rootContext.modelValue?.value, props.value),
)

const isFocused = computed(() => isEqual(rootContext.selectedValue.value, props.value))
const textValue = ref(props.textValue ?? '')
const textId = useId()

const isInOption = computed(() =>
  rootContext.isUserInputted.value
    ? rootContext.searchTerm.value === ''
     || rootContext.filteredOptions.value.map(i => JSON.stringify(i)).includes(JSON.stringify(props.value))
    : true)

async function handleSelect(ev: SelectEvent) {
  emits('select', ev)
  if (ev?.defaultPrevented)
    return

  if (!disabled.value && ev)
    rootContext!.onValueChange(props.value)
}

function handleSelectCustomEvent(ev?: PointerEvent) {
  if (!ev)
    return
  const eventDetail = { originalEvent: ev, value: props.value }
  handleAndDispatchCustomEvent(COMBOBOX_SELECT, handleSelect, eventDetail)
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

onMounted(() => {
  if (!groupContext.options?.value?.includes(props.value))
    groupContext.options?.value.push(props.value)

  if (!textValue.value && currentElement.value?.textContent)
    textValue.value = currentElement.value.textContent
})

provideComboboxItemContext({
  isSelected,
})
</script>

<template>
  <CollectionItem>
    <Primitive
      v-show="isInOption"
      ref="primitiveElement"
      role="option"
      tabindex="-1"
      :value="value"
      :aria-labelledby="textId"
      :data-highlighted="isFocused ? '' : undefined"
      :aria-selected="isSelected"
      :data-state="isSelected ? 'checked' : 'unchecked'"
      :aria-disabled="disabled || undefined"
      :data-disabled="disabled ? '' : undefined"
      :as="as"
      :as-child="asChild"
      @click="handleSelectCustomEvent"
      @pointermove="handlePointerMove"
    >
      <slot>{{ value }}</slot>
    </Primitive>
  </CollectionItem>
</template>
