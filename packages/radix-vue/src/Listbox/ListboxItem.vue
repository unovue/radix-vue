<script lang="ts">
export interface ListboxItemProps<T = AcceptableValue> extends PrimitiveProps {
  value: T
  disabled?: boolean
}
export type SelectEvent<T> = CustomEvent<{ originalEvent: PointerEvent; value?: T }>

export type ListboxItemEmits<T = AcceptableValue> = {
  /** Event handler called when the selecting item. <br> It can be prevented by calling `event.preventDefault`. */
  select: [event: SelectEvent<T>]
}

const LISTBOX_SELECT = 'listbox.select'
</script>

<script setup lang="ts"  generic="T extends AcceptableValue = AcceptableValue">
import { injectListboxRootContext } from './ListboxRoot.vue'
import { computed } from 'vue'
import { Primitive, type PrimitiveProps } from '..'
import { type AcceptableValue, valueComparator } from './utils'
import { handleAndDispatchCustomEvent, useForwardExpose, useId } from '@/shared'
import { CollectionItem } from '@/Collection'

const props = withDefaults(defineProps<ListboxItemProps>(), {
  as: 'div',
})
const emits = defineEmits<ListboxItemEmits>()

const { forwardRef, currentElement } = useForwardExpose()
const id = useId(undefined, 'radix-vue-listbox-item')
const rootContext = injectListboxRootContext()

const isHighlighted = computed(() => currentElement.value === rootContext.highlightedElement.value)
const isSelected = computed(() => valueComparator(rootContext.modelValue.value, props.value, rootContext.by))

const disabled = computed(() => rootContext.disabled.value || props.disabled)

async function handleSelect(ev: SelectEvent<T>) {
  emits('select', ev)
  if (ev?.defaultPrevented)
    return

  if (!disabled.value && ev) {
    rootContext.onValueChange(props.value)
    rootContext.onChangeHighlight(ev.target as HTMLElement)
  }
}

function handleSelectCustomEvent(ev: PointerEvent) {
  const eventDetail = { originalEvent: ev, value: props.value as T }
  handleAndDispatchCustomEvent(LISTBOX_SELECT, handleSelect, eventDetail)
}
</script>

<template>
  <CollectionItem>
    <Primitive
      :id="id"
      :ref="forwardRef"
      role="option"
      :aria-selected="isSelected"
      :as="as"
      :as-child="asChild"
      :disabled="disabled ? '' : undefined"
      :data-disabled="disabled ? '' : undefined"
      :data-highlighted="isHighlighted ? '' : undefined"
      :data-state="isSelected ? 'checked' : 'unchecked'"
      @click="handleSelectCustomEvent"
      @keyup.enter="handleSelectCustomEvent"
    >
      <slot />
    </Primitive>
  </CollectionItem>
</template>
