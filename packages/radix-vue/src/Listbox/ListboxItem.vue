<script lang="ts">
export interface ListboxItemProps<T = AcceptableValue> extends PrimitiveProps {
  value: T
  disabled?: boolean
}
export type SelectEvent<T> = CustomEvent<{ originalEvent: PointerEvent; value?: T }>

const LISTBOX_SELECT = 'listbox.select'
</script>

<script setup lang="ts"  generic="T extends AcceptableValue = AcceptableValue">
import { RovingFocusItem } from '@/RovingFocus'
import { injectListboxRootContext } from './ListboxRoot.vue'
import { computed } from 'vue'
import type { PrimitiveProps } from '..'
import type { AcceptableValue } from './utils'
import isEqual from 'fast-deep-equal'
import { handleAndDispatchCustomEvent, useId } from '@/shared'

const props = withDefaults(defineProps<ListboxItemProps>(), {
  as: 'div',
})

const id = useId(undefined, 'radix-vue-listbox-item')
const rootContext = injectListboxRootContext()

const isSelected = computed(() => Array.isArray(rootContext.modelValue.value)
  ? rootContext.modelValue.value?.some(val => isEqual(val, props.value))
  : rootContext.modelValue.value === props.value)

const disabled = computed(() => rootContext.disabled.value && props.disabled)

async function handleSelect(ev: SelectEvent<T>) {
  // emits('select', ev)
  if (ev?.defaultPrevented)
    return

  if (!disabled.value && ev)
    rootContext!.onValueChange(props.value)
}

function handleSelectCustomEvent(ev: PointerEvent) {
  const eventDetail = { originalEvent: ev, value: props.value as T }
  handleAndDispatchCustomEvent(LISTBOX_SELECT, handleSelect, eventDetail)
}

function handleVirtualizedKeydown(event: KeyboardEvent) {
  rootContext.virtualKeydownHook.trigger(event)
}
</script>

<template>
  <RovingFocusItem
    :id="id"
    :tab-stop-id="id"
    role="option"
    :aria-selected="isSelected"
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :data-state="isSelected ? 'checked' : 'unchecked'"
    @pointerdown="handleSelectCustomEvent"
    @keyup.enter="handleSelectCustomEvent"
    @keydown="event => {
      if (rootContext.isVirtual.value) handleVirtualizedKeydown(event)
    }"
  >
    <slot />
  </RovingFocusItem>
</template>
