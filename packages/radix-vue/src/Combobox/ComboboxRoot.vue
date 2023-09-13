<script lang="ts">
interface ComboboxContextValue {
  modelValue: Ref<string>
  onValueChange: (val: string) => void
  open: Ref<boolean>
  searchTerm: Ref<string>
  onOpenChange: (value: boolean) => void
  isUserInputted: Ref<boolean>
  options: Ref<string[]>
  filteredOptions: Ref<string[]>
  contentId: string
  inputElement: Ref<HTMLInputElement | undefined>
  onInputElementChange: (el: HTMLInputElement) => void
  onInputNavigation: (dir: 'up' | 'down' | 'home' | 'end') => void
  onInputEnter: () => void
  selectedValue: Ref<string>
  onSelectedValueChange: (val: string) => void
  parentElement: Ref<HTMLElement | undefined>
}

export const COMBOBOX_INJECT_KEY = Symbol() as InjectionKey<ComboboxContextValue>

export interface ComboboxRootProps extends PrimitiveProps {
  modelValue?: string
  defaultValue?: string
  open?: boolean
  defaultOpen?: boolean
  searchTerm?: string
}

export type ComboboxRootEmits = {
  'update:modelValue': [value: string]
  'update:open': [value: boolean]
  'update:searchTerm': [value: string]
}
</script>

<script setup lang="ts">
import { PopperRoot } from '@/Popper'
import { Primitive, type PrimitiveProps, usePrimitiveElement } from '@/Primitive'
import { useId } from '@/shared'
import { useVModel } from '@vueuse/core'
import { type InjectionKey, type Ref, computed, nextTick, provide, ref, watch } from 'vue'

const props = defineProps<ComboboxRootProps>()
const emits = defineEmits<ComboboxRootEmits>()

const searchTerm = useVModel(props, 'searchTerm', emits, {
  defaultValue: '',
  passive: true,
}) as Ref<string>

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: !props.modelValue as false,
}) as Ref<string>

const open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: !props.open as false,
})

async function onOpenChange(val: boolean) {
  open.value = val
  await nextTick()
  inputElement.value?.focus()
  isUserInputted.value = false
  if (!val)
    searchTerm.value = modelValue.value
}

function onValueChange(val: string) {
  modelValue.value = val
  searchTerm.value = val
  onOpenChange(false)
}

const isUserInputted = ref(false)
const options = ref<string[]>([])
const filteredOptions = computed(() => {
  if (isUserInputted.value)
    return options.value.filter(i => i.toLowerCase().includes(searchTerm.value?.toLowerCase()))
  else
    return options.value
},
)

const { primitiveElement, currentElement: parentElement } = usePrimitiveElement()
const inputElement = ref<HTMLInputElement>()
const selectedValue = ref<string>('')
const currentSelectedIndex = computed(() => filteredOptions.value.findIndex(i => i === selectedValue.value))

watch(() => filteredOptions.value.length, async (length) => {
  await nextTick()
  if (length && currentSelectedIndex.value === -1)
    selectedValue.value = filteredOptions.value[0]
})

provide(COMBOBOX_INJECT_KEY, {
  searchTerm,
  modelValue,
  onValueChange,
  isUserInputted,
  open,
  onOpenChange,
  options,
  filteredOptions,
  contentId: useId(),
  inputElement,
  onInputElementChange: val => inputElement.value = val,
  onInputNavigation: async (val) => {
    const index = currentSelectedIndex.value

    if ((index === 0 && val === 'up') || (index === (filteredOptions.value.length - 1) && val === 'down'))
      return

    if ((index === -1 && filteredOptions.value.length) || val === 'home')
      selectedValue.value = filteredOptions.value[0]

    else if (val === 'end')
      selectedValue.value = filteredOptions.value[filteredOptions.value.length - 1]

    else
      selectedValue.value = filteredOptions.value[val === 'up' ? index - 1 : index + 1]
  },
  onInputEnter: () => {
    onValueChange(selectedValue.value)
  },
  selectedValue,
  onSelectedValueChange: val => selectedValue.value = val,
  parentElement,
})
</script>

<template>
  <PopperRoot>
    {{ open }}
    <Primitive
      ref="primitiveElement"
      :style="{
        pointerEvents: open ? 'auto' : undefined,
      }"
      :as="as" :as-child="asChild" v-bind="$attrs"
    >
      <slot />
    </Primitive>
  </PopperRoot>
</template>
