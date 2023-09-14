<script lang="ts">
interface ComboboxContextValue {
  modelValue: Ref<string | Array<string> | object | Array<object>>
  onValueChange: (val: string | object) => void
  searchTerm: Ref<string>
  multiple: Ref<boolean>
  disabled: Ref<boolean>
  open: Ref<boolean>
  onOpenChange: (value: boolean) => void
  isUserInputted: Ref<boolean>
  options: Ref<Array<string | object>>
  filteredOptions: Ref<Array<string | object>>
  contentId: string
  inputElement: Ref<HTMLInputElement | undefined>
  onInputElementChange: (el: HTMLInputElement) => void
  onInputNavigation: (dir: 'up' | 'down' | 'home' | 'end') => void
  onInputEnter: () => void
  selectedValue: Ref<string | object | undefined>
  onSelectedValueChange: (val: string | object) => void
  parentElement: Ref<HTMLElement | undefined>
}

export const COMBOBOX_INJECT_KEY = Symbol() as InjectionKey<ComboboxContextValue>

export type ComboboxRootEmits = {
  'update:modelValue': [value: string | Array<string> | object | Array<object>]
  'update:open': [value: boolean]
  'update:searchTerm': [value: string]
}

export interface ComboboxRootProps extends PrimitiveProps {
  modelValue?: string | string[] | object | object[]
  defaultValue?: string | string[] | object | object[]
  open?: boolean
  defaultOpen?: boolean
  searchTerm?: string
  multiple?: boolean
  disabled?: boolean
  filterFunction?: (val: string) => boolean
}
</script>

<script setup lang="ts">
import { PopperRoot } from '@/Popper'
import { Primitive, type PrimitiveProps, usePrimitiveElement } from '@/Primitive'
import { useId } from '@/shared'
import { useVModel } from '@vueuse/core'
import { type InjectionKey, type Ref, computed, nextTick, onMounted, provide, ref, toRefs, watch } from 'vue'

const props = withDefaults(defineProps<ComboboxRootProps>(), {
  open: undefined,
})
const emit = defineEmits<ComboboxRootEmits>()

const { multiple, disabled } = toRefs(props)
const searchTerm = useVModel(props, 'searchTerm', emit, {
  defaultValue: '',
  passive: true,
}) as Ref<string>

const modelValue = useVModel(props, 'modelValue', emit, {
  defaultValue: props.defaultValue ?? multiple.value ? [] : undefined,
  passive: !props.modelValue as false,
  deep: true,
}) as Ref<string | Array<string> | object | Array<object>>

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: !props.open as false,
})

async function onOpenChange(val: boolean) {
  open.value = val
  await nextTick()
  inputElement.value?.focus()
  isUserInputted.value = false
  if (!val && !multiple.value && typeof modelValue.value === 'string')
    searchTerm.value = modelValue.value
}

function onValueChange(val: string | object) {
  if (typeof val === 'string' && !multiple.value)
    searchTerm.value = val

  if (multiple.value && Array.isArray(modelValue.value)) {
    const index = modelValue.value.findIndex(i => i === val)
    // @ts-expect-error  assigning to type never?
    index === -1 ? modelValue.value.push(val) : modelValue.value.splice(index, 1)
  }
  else {
    modelValue.value = val
  }
  if (!multiple.value)
    onOpenChange(false)
}

const isUserInputted = ref(false)
const options = ref<string[]>([])
const filteredOptions = computed(() => {
  if (isUserInputted.value)
    return options.value.filter(props.filterFunction ?? (i => i.toLowerCase().includes(searchTerm.value?.toLowerCase())))
  else
    return options.value
},
)

const { primitiveElement, currentElement: parentElement } = usePrimitiveElement()
const inputElement = ref<HTMLInputElement>()
const selectedValue = ref<string | object>()
const activeIndex = computed(() => filteredOptions.value.findIndex(i => i === selectedValue.value))

watch(() => filteredOptions.value.length, async (length) => {
  await nextTick()
  if (length && activeIndex.value === -1)
    selectedValue.value = filteredOptions.value[0]
})

onMounted(() => {
  if (typeof modelValue.value === 'string')
    searchTerm.value = modelValue.value
})

provide(COMBOBOX_INJECT_KEY, {
  searchTerm,
  modelValue,
  onValueChange,
  isUserInputted,
  multiple,
  disabled,
  open,
  onOpenChange,
  options,
  filteredOptions,
  contentId: useId(),
  inputElement,
  onInputElementChange: val => inputElement.value = val,
  onInputNavigation: async (val) => {
    const index = activeIndex.value

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
    if (selectedValue.value)
      onValueChange(selectedValue.value)
  },
  selectedValue,
  onSelectedValueChange: val => selectedValue.value = val,
  parentElement,
})
</script>

<template>
  <PopperRoot>
    <Primitive
      ref="primitiveElement"
      :style="{
        pointerEvents: open ? 'auto' : undefined,
      }"
      :as="as" :as-child="asChild" v-bind="$attrs"
    >
      {{ modelValue }}
      <slot
        :active-index="activeIndex"
        :open="open"
        :disabled="disabled"
        :value="modelValue"
      />
    </Primitive>
  </PopperRoot>
</template>
