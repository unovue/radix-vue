<script lang="ts">
interface ComboboxItemContextValue {
  value: string
  textId: string
  disabled: Ref<boolean>
  isSelected: Ref<boolean>
  onItemTextChange(node: HTMLElement | undefined): void
}

export const COMBOBOX_ITEM_INJECTION_KEY
  = Symbol() as InjectionKey<ComboboxItemContextValue>

export type SelectItemEmits = {
  select: [value: string]
}

export interface SelectItemProps extends PrimitiveProps {
  value: string
  disabled?: boolean
  textValue?: string
}
</script>

<script setup lang="ts">
import {
  type InjectionKey,
  type Ref,
  computed,
  inject,
  nextTick,
  onMounted,
  provide,
  ref,
  toRefs,
} from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'
import { COMBOBOX_GROUP_INJECTION_KEY } from './ComboboxGroup.vue'

import {
  Primitive,
  type PrimitiveProps,
} from '@/Primitive'
import { useId } from '@/shared'

const props = defineProps<SelectItemProps>()
const emits = defineEmits<SelectItemEmits>()

const { disabled } = toRefs(props)

const context = inject(COMBOBOX_INJECT_KEY)
const groupContext = inject(COMBOBOX_GROUP_INJECTION_KEY)

const isSelected = computed(() => context?.multiple.value ? context.modelValue.value?.includes(props.value) : context?.modelValue?.value === props.value)
const isFocused = computed(() => context?.selectedValue.value === props.value)
const textValue = ref(props.textValue ?? '')
const textId = useId()

const isInOption = computed(() =>
  context?.isUserInputted.value ? context?.searchTerm.value === '' || context?.filteredOptions.value.includes(props.value) : true)

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

onMounted(() => {
  if (!context?.options.value.includes(props.value))
    context?.options.value.push(props.value)
  if (!groupContext?.options?.value?.includes(props.value))
    groupContext?.options?.value.push(props.value)
})

provide(COMBOBOX_ITEM_INJECTION_KEY, {
  value: props.value,
  disabled,
  textId,
  isSelected,
  onItemTextChange: (node) => {
    textValue.value = ((textValue.value || node?.textContent) ?? '').trim()
  },
})
</script>

<template>
  <Primitive
    v-if="isInOption"
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
    @pointerup="handleSelect"
    @pointermove="handlePointerMove"
  >
    <slot />
  </Primitive>
</template>
