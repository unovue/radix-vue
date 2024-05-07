<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useDirection } from '@/shared'
import type { Direction } from '@/shared/types'
import { DismissableLayer, type DismissableLayerEmits } from '@/DismissableLayer'

type EditableRootContext = {
  id: Ref<string | undefined>
  name: Ref<string | undefined>
  maxLength: Ref<number | undefined>
  disabled: Ref<boolean>
  modelValue: Ref<string | undefined>
  placeholder: Ref<{ edit: string; preview: string }>
  isEditing: Ref<boolean>
  edit: () => void
  cancel: () => void
  submit: () => void
}

export interface EditableRootProps extends PrimitiveProps {
  /** The default value of the editable field */
  defaultValue?: string
  /** The value of the editable field */
  modelValue?: string
  /** The placeholder for the editable field */
  placeholder?: string | { edit: string; preview: string }
  /** The reading direction of the calendar when applicable. <br> If omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode. */
  dir?: Direction
  /** Whether the editable field is disabled */
  disabled?: boolean
  /** Whether the editable field is read-only */
  readonly?: boolean
  /** The activation event of the editable field */
  activationMode?: 'focus' | 'dblclick' | 'none'
  /** Whether to select the text in the input when it is focused. */
  selectOnFocus?: boolean
  /** The submit event of the editable field */
  submitMode?: 'blur' | 'enter' | 'none' | 'both'
  /** Whether to start with the edit mode active */
  startWithEditMode?: boolean
  /** The maximum number of characters allowed */
  maxLength?: number
  /** The id of the field */
  id?: string
  /** The name of the field */
  name?: string
}

export type EditableRootEmits = Omit<DismissableLayerEmits, 'escapeKeyDown'> & {
  /** Event handler called whenever the model value changes */
  'update:modelValue': [value: string]
  /** Event handler called when a value is submitted */
  'submit': [value: string | undefined]
  /** Event handler called when the editable field changes state */
  'update:state': [state: 'edit' | 'submit' | 'cancel']
}

export const [injectEditableRootContext, provideEditableRootContext]
  = createContext<EditableRootContext>('EditableRoot')
</script>

<script setup lang="ts">
import { type Ref, computed, ref, toRefs } from 'vue'
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<EditableRootProps>(), {
  defaultValue: '',
  placeholder: '',
  as: 'div',
  disabled: false,

})
const emits = defineEmits<EditableRootEmits>()
defineSlots<{
  default(props: {
    /** Whether the editable field is in edit mode */
    isEditing: boolean
    /** The value of the editable field */
    value: string | undefined
    /** Whether the editable field is empty */
    isEmpty: boolean
    /** Function to set the value of the editable */
  }): any
}>()

const {
  id,
  name,
  defaultValue,
  startWithEditMode,
  placeholder: propPlaceholder,
  maxLength,
  disabled,
  dir: propDir,
} = toRefs(props)

const { primitiveElement, currentElement: parentElement }
  = usePrimitiveElement()

const dir = useDirection(propDir)
const isEditing = ref(startWithEditMode.value ?? false)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: defaultValue.value,
  passive: (props.modelValue === undefined) as false,
})

const placeholder = computed(() => {
  return typeof propPlaceholder.value === 'string' ? { edit: propPlaceholder.value, preview: propPlaceholder.value } : propPlaceholder.value
})

const previousValue = ref(modelValue.value)

const isEmpty = computed(() => modelValue.value === '')

function cancel() {
  modelValue.value = previousValue.value
  isEditing.value = false
  emits('update:state', 'cancel')
}

function edit() {
  isEditing.value = true
  emits('update:state', 'edit')
}

function submit() {
  previousValue.value = modelValue.value
  isEditing.value = false

  emits('update:state', 'submit')
  emits('submit', modelValue.value)
}

provideEditableRootContext({
  id,
  name,
  disabled,
  isEditing,
  maxLength,
  modelValue,
  placeholder,
  edit,
  cancel,
  submit,
})
</script>

<template>
  <DismissableLayer
    as-child
    @focus-outside="emits('focusOutside', $event)"
    @interact-outside="emits('interactOutside', $event)"
    @pointer-down-outside="emits('pointerDownOutside', $event)"
    @dismiss="cancel"
  >
    <Primitive
      ref="primitiveElement"
      :as="as"
      :as-child="asChild"
      :dir="dir"
    >
      <slot
        :value="modelValue"
        :is-editing="isEditing"
        :is-empty="isEmpty"
      />
    </Primitive>
  </DismissableLayer>
</template>
