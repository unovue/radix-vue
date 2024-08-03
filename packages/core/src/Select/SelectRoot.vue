<script lang="ts">
import type { Ref, VNode } from 'vue'
import type { AcceptableValue, Direction } from '@/shared/types'
import { createContext, isNullish, useDirection, useFormControl } from '@/shared'
import { compare } from './utils'
import { useCollection } from '@/Collection'

export interface SelectRootProps<T = AcceptableValue> {
  /** The controlled open state of the Select. Can be bind as `v-model:open`. */
  open?: boolean
  /** The open state of the select when it is initially rendered. Use when you do not need to control its open state. */
  defaultOpen?: boolean
  /** The value of the select when initially rendered. Use when you do not need to control the state of the Select */
  defaultValue?: T | Array<T>
  /** The controlled value of the Select. Can be bind as `v-model`. */
  modelValue?: T | Array<T>
  /** Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared. */
  by?: string | ((a: T, b: T) => boolean)
  /** The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode. */
  dir?: Direction
  /** The name of the Select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** Whether multiple options can be selected or not. */
  multiple?: boolean
  /** Native html input `autocomplete` attribute. */
  autocomplete?: string
  /** When `true`, prevents the user from interacting with Select */
  disabled?: boolean
  /** When `true`, indicates that the user must select a value before the owning form can be submitted. */
  required?: boolean
}

export type SelectRootEmits<T = AcceptableValue> = {
  /** Event handler called when the value changes. */
  'update:modelValue': [value: T]
  /** Event handler called when the open state of the context menu changes. */
  'update:open': [value: boolean]
}

export interface SelectRootContext<T> {
  triggerElement: Ref<HTMLElement | undefined>
  onTriggerChange: (node: HTMLElement | undefined) => void
  valueElement: Ref<HTMLElement | undefined>
  onValueElementChange: (node: HTMLElement) => void
  contentId: string
  modelValue: Ref<T | Array<T> | undefined>
  onValueChange: (value: T) => void
  open: Ref<boolean>
  multiple: Ref<boolean>
  required?: Ref<boolean>
  by?: string | ((a: T, b: T) => boolean)
  onOpenChange: (open: boolean) => void
  dir: Ref<Direction>
  triggerPointerDownPosRef: Ref<{ x: number, y: number } | null>
  isEmptyModelValue: Ref<boolean>
  disabled?: Ref<boolean>
}

export const [injectSelectRootContext, provideSelectRootContext]
  = createContext<SelectRootContext<AcceptableValue>>('SelectRoot')

export interface SelectNativeOptionsContext {
  onNativeOptionAdd: (option: VNode) => void
  onNativeOptionRemove: (option: VNode) => void
}

export const [injectSelectNativeOptionsContext, provideSelectNativeOptionsContext]
  = createContext<SelectNativeOptionsContext>('SelectRoot')
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import { computed, ref, toRefs } from 'vue'
import BubbleSelect from './BubbleSelect.vue'
import { PopperRoot } from '@/Popper'
import { useVModel } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SelectRootProps>(), {
  modelValue: undefined,
  open: undefined,
})
const emits = defineEmits<SelectRootEmits>()

defineSlots<{
  default: (props: {
    /** Current input values */
    modelValue: typeof modelValue.value
    /** Current open state */
    open: typeof open.value
  }) => any
}>()

const { required, disabled, multiple, dir: propDir } = toRefs(props)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? (multiple.value ? [] : undefined),
  passive: (props.modelValue === undefined) as false,
  deep: true,
}) as Ref<T | Array<T> | undefined>

const open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>

const triggerElement = ref<HTMLElement>()
const valueElement = ref<HTMLElement>()
const triggerPointerDownPosRef = ref({
  x: 0,
  y: 0,
})

const isEmptyModelValue = computed(() => {
  if (multiple.value && Array.isArray(modelValue.value))
    return modelValue.value.length === 0
  else
    return isNullish(modelValue.value)
})

useCollection({ isProvider: true })
const dir = useDirection(propDir)

provideSelectRootContext({
  triggerElement,
  onTriggerChange: (node) => {
    triggerElement.value = node
  },
  valueElement,
  onValueElementChange: (node) => {
    valueElement.value = node
  },
  contentId: '',
  modelValue,
  onValueChange: (value: any) => {
    if (multiple.value && Array.isArray(modelValue.value)) {
      const index = modelValue.value.findIndex(i => compare(i, value, props.by))
      index === -1 ? modelValue.value.push(value) : modelValue.value.splice(index, 1)
    }
    else {
      modelValue.value = value
    }
  },
  by: props.by,
  open,
  multiple,
  required,
  onOpenChange: (value) => {
    open.value = value
  },
  dir,
  triggerPointerDownPosRef,
  disabled,
  isEmptyModelValue,
})

const isFormControl = useFormControl(triggerElement)
const nativeOptionsSet = ref<Set<VNode>>(new Set())

// The native `select` only associates the correct default value if the corresponding
// `option` is rendered as a child **at the same time** as itself.
// Because it might take a few renders for our items to gather the information to build
// the native `option`(s), we generate a key on the `select` to make sure Vue re-builds it
// each time the options change.
const nativeSelectKey = computed(() => {
  return Array.from(nativeOptionsSet.value)
    .map(option => option.props?.value)
    .join(';')
})

provideSelectNativeOptionsContext({
  onNativeOptionAdd: (option) => {
    nativeOptionsSet.value.add(option)
  },
  onNativeOptionRemove: (option) => {
    nativeOptionsSet.value.delete(option)
  },
})
</script>

<template>
  <PopperRoot>
    <slot
      :model-value="modelValue"
      :open="open"
    />

    <BubbleSelect
      v-if="isFormControl"
      :key="nativeSelectKey"
      aria-hidden
      tabindex="-1"
      :multiple="multiple"
      :required="required"
      :name="name"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :value="modelValue"
      @change="modelValue = $event.target.value"
    >
      <option
        v-if="modelValue === undefined"
        value=""
      />
      <component
        v-bind="option.props"
        :is="option"
        v-for="option in Array.from(nativeOptionsSet)"
        :key="option.key ?? ''"
      />
    </BubbleSelect>
  </PopperRoot>
</template>
