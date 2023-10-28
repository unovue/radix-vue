<script lang="ts">
import type { ComponentInternalInstance, ComputedRef, Ref } from 'vue'
import type { Direction } from '@/shared/types'
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useCollection, useDirection, useFormControl, useId } from '@/shared'

type ComboboxRootContext = {
  modelValue: Ref<string | Array<string> | object | Array<object>>
  onValueChange: (val: string | object) => void
  searchTerm: Ref<string>
  multiple: Ref<boolean>
  disabled: Ref<boolean>
  open: Ref<boolean>
  onOpenChange: (value: boolean) => void
  isUserInputted: Ref<boolean>
  options: ComputedRef<Array<string | object>>
  optionsInstance: Ref<Set<ComponentInternalInstance>>
  filteredOptions: Ref<Array<string | object>>
  contentId: string
  contentElement: Ref<HTMLElement | undefined>
  onContentElementChange: (el: HTMLElement) => void
  inputElement: Ref<HTMLInputElement | undefined>
  onInputElementChange: (el: HTMLInputElement) => void
  onInputNavigation: (dir: 'up' | 'down' | 'home' | 'end') => void
  onInputEnter: () => void
  selectedValue: Ref<string | object | undefined>
  onSelectedValueChange: (val: string | object) => void
  parentElement: Ref<HTMLElement | undefined>
}

export const [injectComboboxRootContext, provideComboboxRootContext]
  = createContext<ComboboxRootContext>('ComboboxRoot')

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
  name?: string
  dir?: Direction
  filterFunction?: (val: Array<string | any>, term: string) => Array<any>
}
</script>

<script setup lang="ts">
import { computed, nextTick, ref, toRaw, toRefs, watch } from 'vue'
import { PopperRoot } from '@/Popper'
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { useVModel } from '@vueuse/core'
import { VisuallyHiddenInput } from '@/VisuallyHidden'

const props = withDefaults(defineProps<ComboboxRootProps>(), {
  open: undefined,
})
const emit = defineEmits<ComboboxRootEmits>()

const { multiple, disabled, name, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)

const searchTerm = useVModel(props, 'searchTerm', emit, {
  defaultValue: '',
  passive: (props.searchTerm === undefined) as false,
}) as Ref<string>

const modelValue = useVModel(props, 'modelValue', emit, {
  defaultValue: props.defaultValue ?? multiple.value ? [] : undefined,
  passive: (props.modelValue === undefined) as false,
  deep: true,
}) as Ref<string | Array<string> | object | Array<object>>

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>

async function onOpenChange(val: boolean) {
  open.value = val
  await nextTick()
  if (val && open.value === val)
    inputElement.value?.focus()
  if (!val)
    isUserInputted.value = false

  scrollSelectedValueIntoView()
}

function onValueChange(val: string | object) {
  if (multiple.value && Array.isArray(modelValue.value)) {
    const index = modelValue.value.findIndex(i => toRaw(i) === val)
    index === -1 ? modelValue.value.push(val as never) : modelValue.value.splice(index, 1)
  }
  else {
    modelValue.value = val
    onOpenChange(false)
  }
}

const isUserInputted = ref(false)
const optionsInstance = ref<Set<ComponentInternalInstance>>(new Set())

const inputElement = ref<HTMLInputElement>()
const contentElement = ref<HTMLElement>()
const { primitiveElement, currentElement: parentElement } = usePrimitiveElement()
const { createCollection } = useCollection(undefined, 'data-radix-vue-combobox-item')
const collections = createCollection(contentElement)

const selectedValue = ref<string | object>()

const options = computed(() => {
  const instances = Array.from(optionsInstance.value)
  // we sort the instances based on the rendered html order
  return instances
    .sort((a, b) => collections.value.indexOf(a.vnode.el as HTMLElement) - collections.value.indexOf(b.vnode.el as HTMLElement))
    .map(i => i.props.value as string | object)
})

const filteredOptions = computed(() => {
  if (isUserInputted.value) {
    if (props.filterFunction)
      return props.filterFunction(options.value, searchTerm.value)

    else if (typeof options.value[0] === 'string')
      return options.value.filter(i => (i as string).toLowerCase().includes(searchTerm.value?.toLowerCase()))
  }
  return options.value
})

const activeIndex = computed(() => filteredOptions.value.findIndex(i => toRaw(i) === toRaw(selectedValue.value)))
const selectedElement = computed(() => {
  return Array.from(optionsInstance.value).find(i => toRaw(i.props.value) === toRaw(selectedValue.value))?.vnode.el as HTMLElement | null
})

watch(() => filteredOptions.value.length, (length) => {
  if (length && activeIndex.value === -1)
    selectedValue.value = filteredOptions.value[0]
})

watch(modelValue, async (val) => {
  await nextTick()
  selectedValue.value = val
  if (typeof val === 'string' && !multiple.value)
    searchTerm.value = val
  else
    searchTerm.value = ''
}, { immediate: true })

watch(open, (val) => {
  if (val && modelValue.value) {
    if (typeof modelValue.value === 'string' && !multiple.value)
      selectedValue.value = modelValue.value

    else if (Array.isArray(modelValue.value) && multiple.value)
      selectedValue.value = modelValue.value[0]
  }
})

const isFormControl = useFormControl(parentElement)

function scrollSelectedValueIntoView() {
  // Find the highlighted element and scroll into view
  // We can put this in Item, but we avoid having too many watcher
  if (selectedElement.value instanceof Element)
    selectedElement.value.scrollIntoView({ block: 'nearest' })
}

provideComboboxRootContext({
  searchTerm,
  modelValue,
  onValueChange,
  isUserInputted,
  multiple,
  disabled,
  open,
  onOpenChange,
  options,
  optionsInstance,
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

    scrollSelectedValueIntoView()
  },
  onInputEnter: async () => {
    if (selectedValue.value && selectedElement.value instanceof Element)
      selectedElement.value?.click()
  },
  selectedValue,
  onSelectedValueChange: val => selectedValue.value = val,
  parentElement,
  contentElement,
  onContentElementChange: val => contentElement.value = val,
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
      :dir="dir"
    >
      <slot
        :active-index="activeIndex"
        :open="open"
        :disabled="disabled"
        :value="modelValue"
      />

      <VisuallyHiddenInput v-if="isFormControl && name" :name="name" :value="modelValue" />
    </Primitive>
  </PopperRoot>
</template>
