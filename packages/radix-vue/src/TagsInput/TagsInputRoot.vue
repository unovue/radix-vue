<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useArrowNavigation, useDirection, useFormControl, useForwardExpose } from '@/shared'
import type { Direction } from '@/shared/types'
import { type Ref, ref, toRefs } from 'vue'

export interface TagsInputRootProps extends PrimitiveProps {
  /** The controlled value of the tags input. Can be bind as `v-model`. */
  modelValue?: Array<string>
  /** The value of the tags that should be added. Use when you do not need to control the state of the tags input */
  defaultValue?: Array<string>
  /** When `true`, allow adding tags on paste. Work in conjunction with delimiter prop. */
  addOnPaste?: boolean
  /** When `true`, allow duplicated tags. */
  duplicate?: boolean
  /** When `true`, prevents the user from interacting with the tags input. */
  disabled?: boolean
  /** The character to trigger the addition of a new tag. Also used to split tags for `@paste` event */
  delimiter?: string
  /** The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. */
  dir?: Direction
  /** Maximum number of tags. */
  max?: number
  /** When `true`, indicates that the user must add the tags input before the owning form can be submitted. */
  required?: boolean
  /** The name of the tags input submitted with its owning form as part of a name/value pair. */
  name?: string
  id?: string
}

export type TagsInputRootEmits = {
  /** Event handler called when the value changes */
  'update:modelValue': [payload: Array<string>]
  /** Event handler called when the value is invalid */
  'invalid': [payload: string]
}

export interface TagsInputRootContext {
  modelValue: Ref<Array<string>>
  onAddValue: (payload: string) => boolean
  onRemoveValue: (index: number) => void
  onInputKeydown: (event: KeyboardEvent) => void
  selectedElement: Ref<HTMLElement | undefined>
  isInvalidInput: Ref<boolean>
  addOnPaste: Ref<boolean>
  disabled: Ref<boolean>
  delimiter: Ref<string>
  dir: Ref<Direction>
  max: Ref<number>
  id: Ref<string | undefined> | undefined
}

export const [injectTagsInputRootContext, provideTagsInputRootContext]
  = createContext<TagsInputRootContext>('TagsInputRoot')
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { CollectionSlot, createCollection } from '@/Collection'
import { useFocusWithin, useVModel } from '@vueuse/core'
import { VisuallyHiddenInput } from '@/VisuallyHidden'

const props = withDefaults(defineProps<TagsInputRootProps>(), {
  defaultValue: () => [],
  delimiter: ',',
  max: 0,
})
const emits = defineEmits<TagsInputRootEmits>()

defineSlots<{
  default(props: {
    /** Current input values */
    modelValue: typeof modelValue.value
  }): any
}>()

const { addOnPaste, disabled, delimiter, max, id, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: true,
  deep: true,
}) as Ref<Array<string>>

const { forwardRef, currentElement } = useForwardExpose()
const { focused } = useFocusWithin(currentElement)
const isFormControl = useFormControl(currentElement)

const { getItems } = createCollection()

const selectedElement = ref<HTMLElement>()
const isInvalidInput = ref(false)

provideTagsInputRootContext({
  modelValue,
  onAddValue: (payload) => {
    if ((modelValue.value.length >= max.value) && !!max.value) {
      emits('invalid', payload)
      return false
    }

    if (props.duplicate) {
      modelValue.value.push(payload)
      return true
    }
    else {
      const exist = modelValue.value.includes(payload)
      if (!exist) {
        modelValue.value.push(payload)
        return true
      }
      else {
        isInvalidInput.value = true
      }
    }
    emits('invalid', payload)
    return false
  },
  onRemoveValue: (index) => {
    if (index !== -1)
      modelValue.value.splice(index, 1)
  },
  onInputKeydown: (event) => {
    const target = event.target as HTMLInputElement
    const collection = getItems().map(i => i.ref).filter(i => i.dataset.disabled !== '')
    if (!collection.length)
      return
    const lastTag = collection.at(-1)
    switch (event.key) {
      case 'Delete':
      case 'Backspace': {
        if (target.selectionStart !== 0 || target.selectionEnd !== 0)
          break

        if (selectedElement.value) {
          const index = collection.findIndex(i => i === selectedElement.value)
          modelValue.value.splice(index, 1)
          selectedElement.value = selectedElement.value === lastTag ? collection.at(index - 1) : collection.at(index + 1)
          event.preventDefault()
        }
        else if (event.key === 'Backspace') {
          selectedElement.value = lastTag
          event.preventDefault()
        }
        break
      }
      case 'Home':
      case 'End':
      case 'ArrowRight':
      case 'ArrowLeft': {
        const isArrowRight = (event.key === 'ArrowRight' && dir.value === 'ltr') || (event.key === 'ArrowLeft' && dir.value === 'rtl')
        const isArrowLeft = !isArrowRight
        // only focus on tags when cursor is at the first position
        if (target.selectionStart !== 0 || target.selectionEnd !== 0)
          break

        // if you press ArrowLeft, then we last tag
        if (isArrowLeft && !selectedElement.value) {
          selectedElement.value = lastTag
          event.preventDefault()
        }
        // if you press ArrowRight on last tag, you deselect
        else if (isArrowRight && lastTag && selectedElement.value === lastTag) {
          selectedElement.value = undefined
          event.preventDefault()
        }
        else if (selectedElement.value) {
          const el = useArrowNavigation(event, selectedElement.value, undefined, {
            itemsArray: collection,
            loop: false,
            dir: dir.value,
          })
          if (el)
            selectedElement.value = el
          event.preventDefault()
        }
        break
      }
      case 'ArrowUp':
      case 'ArrowDown': {
        if (selectedElement.value)
          event.preventDefault()
        break
      }
      default: {
        selectedElement.value = undefined
      }
    }
  },
  selectedElement,
  isInvalidInput,
  addOnPaste,
  dir,
  disabled,
  delimiter,
  max,
  id,
})
</script>

<template>
  <CollectionSlot>
    <Primitive
      :ref="forwardRef"
      :dir="dir"
      :as="as"
      :as-child="asChild"
      :data-invalid="isInvalidInput ? '' : undefined"
      :data-disabled="disabled ? '' : undefined"
      :data-focused="focused ? '' : undefined"
    >
      <slot :model-value="modelValue" />

      <VisuallyHiddenInput
        v-if="isFormControl && name"
        :name="name"
        :value="modelValue"
        :required="required"
        :disabled="disabled"
      />
    </Primitive>
  </CollectionSlot>
</template>
