<script lang="ts">
import type { Ref } from 'vue'
import type { ListboxRootEmits, ListboxRootProps } from '@/Listbox'
import { createContext, useDirection, useEmitAsProps, useFormControl } from '@/shared'
import { usePrimitiveElement } from '@/Primitive'
import type { AcceptableValue, GenericComponentInstance } from '@/shared/types'

type ComboboxRootContext<T> = {
  modelValue: Ref<T | Array<T>>
  multiple: Ref<boolean>
  disabled: Ref<boolean>
  open: Ref<boolean>
  onOpenChange: (value: boolean) => void
  isUserInputted: Ref<boolean>
  contentId: string
  inputElement: Ref<HTMLInputElement | undefined>
  onInputElementChange: (el: HTMLInputElement) => void
  highlightedElement: Ref<HTMLElement | undefined>
  parentElement: Ref<HTMLElement | undefined>
  onResetSearchTerm: EventHookOn
}

export const [injectComboboxRootContext, provideComboboxRootContext]
  = createContext<ComboboxRootContext<AcceptableValue>>('ComboboxRoot')

export type ComboboxRootEmits<T = AcceptableValue> = ListboxRootEmits<T> & {
  /** Event handler called when the open state of the combobox changes. */
  'update:open': [value: boolean]
}

export interface ComboboxRootProps<T = AcceptableValue> extends Omit<ListboxRootProps<T>, 'orientation' | 'selectionBehavior' > {
  /** The controlled open state of the Combobox. Can be binded-with with `v-model:open`. */
  open?: boolean
  /** The open state of the combobox when it is initially rendered. <br> Use when you do not need to control its open state. */
  defaultOpen?: boolean
  /** The name of the combobox. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /**
   * Whether to reset the searchTerm when the Combobox input blurred
   * @defaultValue `true`
   */
  resetSearchTermOnBlur?: boolean
}
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import { computed, nextTick, ref, toRefs, watch } from 'vue'
import { PopperRoot } from '@/Popper'
import { type EventHookOn, createEventHook, useVModel } from '@vueuse/core'
import { VisuallyHiddenInput } from '@/VisuallyHidden'
import { ListboxRoot } from '@/Listbox'

const props = withDefaults(defineProps<ComboboxRootProps<T>>(), {
  open: undefined,
  resetSearchTermOnBlur: true,
})
const emits = defineEmits<ComboboxRootEmits<T>>()

defineSlots<{
  default: (props: {
    /** Current open state */
    open: typeof open.value
    /** Current active value */
    modelValue: typeof modelValue.value
  }) => any
}>()

const { primitiveElement, currentElement: parentElement } = usePrimitiveElement<GenericComponentInstance<typeof ListboxRoot>>()
const { multiple, disabled, dir: propDir } = toRefs(props)
const emitAsProps = useEmitAsProps(emits)
const dir = useDirection(propDir)
const isFormControl = useFormControl(parentElement)

const modelValue = useVModel(props, 'modelValue', emits, {
  // @ts-expect-error ignore the type error here
  defaultValue: props.defaultValue ?? multiple.value ? [] : undefined,
  passive: (props.modelValue === undefined) as false,
  deep: true,
}) as Ref<T | T[]>

const open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>

async function onOpenChange(val: boolean) {
  open.value = val

  if (val) {
    primitiveElement.value?.handleSelectedHighlight()
    isUserInputted.value = true
  }

  inputElement.value?.focus()
  setTimeout(() => {
    if (!val && props.resetSearchTermOnBlur)
      resetSearchTerm.trigger()
  }, 1)
}

const resetSearchTerm = createEventHook()
const isUserInputted = ref(false)
const inputElement = ref<HTMLInputElement>()
const highlightedElement = computed(() => primitiveElement.value?.highlightedElement ?? undefined)

provideComboboxRootContext({
  modelValue,
  isUserInputted,
  multiple,
  disabled,
  open,
  onOpenChange,
  contentId: '',
  inputElement,
  highlightedElement,
  onInputElementChange: val => inputElement.value = val,
  parentElement,
  onResetSearchTerm: resetSearchTerm.on,
})
</script>

<template>
  <PopperRoot>
    <ListboxRoot
      ref="primitiveElement"
      v-bind="{ ...$attrs, ...emitAsProps }"
      v-model="modelValue"
      :style="{
        pointerEvents: open ? 'auto' : undefined,
      }"
      :as="as"
      :as-child="asChild"
      :dir="dir"
      :multiple="multiple"
      :by="by as any"
    >
      <slot
        :open="open"
        :model-value="modelValue"
      />

      <VisuallyHiddenInput
        v-if="isFormControl && props.name"
        :name="props.name"
        :value="modelValue"
      />
    </ListboxRoot>
  </PopperRoot>
</template>
