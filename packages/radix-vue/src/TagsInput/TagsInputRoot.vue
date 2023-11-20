<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useArrowNavigation, useDirection } from '@/shared'
import type { Direction } from '@/shared/types'
import { type Ref, ref, toRefs } from 'vue'

export interface TagsInputRootProps extends PrimitiveProps {
  modelValue?: Array<string | object>
  defaultValue?: Array<string | object>
  duplicate?: boolean
  dir?: Direction
}

export type TagsInputRootEmits = {
  'update:modelValue': [payload: Array<string | object>]
}

export interface TagsInputRootContext {
  modelValue: Ref<Array<string | object>>
  onAddValue: (payload: string | object) => boolean
  onRemoveValue: (index: number) => void
  onInputKeydown: (event: KeyboardEvent) => void
  selectedElement: Ref<HTMLElement | undefined>
  isInvalidInput: Ref<boolean>
  dir: Ref<Direction>

}

export const [injectTagsInputRootContext, provideTagsInputRootContext]
  = createContext<TagsInputRootContext>('TagsInputRoot')
</script>

<script setup lang="ts">
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { CollectionSlot, createCollection } from '@/Collection'
import { useVModel } from '@vueuse/core'

const props = defineProps<TagsInputRootProps>()
const emits = defineEmits<TagsInputRootEmits>()

const { dir: propDir } = toRefs(props)
const dir = useDirection(propDir)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? [],
  passive: (props.modelValue === undefined) as false,
  deep: true,
}) as Ref<Array<string | object>>

const { primitiveElement, currentElement } = usePrimitiveElement()

const { getItems } = createCollection()

const selectedElement = ref<HTMLElement>()
const isInvalidInput = ref(false)

provideTagsInputRootContext({
  modelValue,
  onAddValue: (payload) => {
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
    return false
  },
  onRemoveValue: (index) => {
    if (index !== -1)
      modelValue.value.splice(index, 1)
  },
  onInputKeydown: (event) => {
    const target = event.target as HTMLInputElement
    const collection = getItems().map(i => i.$el)
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
        // only focus on tags when cursor is at the first position
        if (target.selectionStart !== 0 || target.selectionEnd !== 0)
          break

        // if you press ArrowLeft, then we last tag
        if (event.key === 'ArrowLeft' && !selectedElement.value) {
          selectedElement.value = lastTag
          event.preventDefault()
        }
        // if you press ArrowRight on last tag, you deselect
        else if (event.key === 'ArrowRight' && lastTag && selectedElement.value === lastTag) {
          selectedElement.value = undefined
          event.preventDefault()
        }
        else if (selectedElement.value) {
          const el = useArrowNavigation(event, selectedElement.value, currentElement.value, {
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
  dir,
})
</script>

<template>
  <CollectionSlot>
    <Primitive ref="primitiveElement">
      <slot :values="modelValue" />
    </Primitive>
  </CollectionSlot>
</template>
