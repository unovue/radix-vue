<script lang="ts">
import { Primitive, type PrimitiveProps } from '..'
import { injectListboxRootContext } from './ListboxRoot.vue'

export interface ListboxContentProps extends PrimitiveProps { }
</script>

<script setup lang="ts">
import { CollectionSlot, useCollection } from '@/Collection'

defineProps<ListboxContentProps>()

const rootContext = injectListboxRootContext()
const { getItems } = useCollection()

function handleFocus(event: FocusEvent) {
  if (rootContext.highlightedElement.value) {
    rootContext.highlightedElement.value.focus()
  }
  else {
    const el = getItems()?.[0].ref
    rootContext.highlightedElement.value = el
    el.focus()
  }
}
</script>

<template>
  <CollectionSlot>
    <Primitive
      role="listbox"
      :as="as"
      :as-child="asChild"
      tabindex="0"
      @focus="handleFocus"
      @keydown.down.up.home.end.prevent="rootContext.onKeydownNavigation"
      @keydown.enter="rootContext.onKeydownEnter"
      @keydown="rootContext.onKeydownTypeAhead"
    >
      <slot />
    </Primitive>
  </CollectionSlot>
</template>
