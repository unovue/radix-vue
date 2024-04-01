<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface SelectTriggerProps extends PrimitiveProps {
  disabled?: boolean
}
</script>

<script setup lang="ts">
import { computed, nextTick, onMounted } from 'vue'
import {
  injectSelectRootContext,
} from './SelectRoot.vue'
import { OPEN_KEYS, shouldShowPlaceholder } from './utils'
import { Primitive } from '@/Primitive'
import { PopperAnchor } from '@/Popper'
import { useCollection, useForwardExpose, useId, useTypeahead } from '@/shared'

const props = withDefaults(defineProps<SelectTriggerProps>(), {
  as: 'button',
})
const rootContext = injectSelectRootContext()

const isDisabled = computed(() => rootContext.disabled?.value || props.disabled)

const { forwardRef, currentElement: triggerElement } = useForwardExpose()

rootContext.contentId ||= useId(undefined, 'radix-vue-select-content')
onMounted(() => {
  rootContext.triggerElement = triggerElement
})

const { injectCollection } = useCollection()
const collectionItems = injectCollection()

const { search, handleTypeaheadSearch, resetTypeahead }
  = useTypeahead(collectionItems)
function handleOpen() {
  if (!isDisabled.value) {
    rootContext.onOpenChange(true)
    // reset typeahead when we open
    resetTypeahead()
  }
}
</script>

<template>
  <PopperAnchor as-child>
    <Primitive
      :ref="forwardRef"
      role="combobox"
      :type="as === 'button' ? 'button' : undefined"
      :aria-controls="rootContext.contentId"
      :aria-expanded="rootContext.open.value || false"
      :aria-required="rootContext.required?.value"
      aria-autocomplete="none"
      :disabled="isDisabled"
      :dir="rootContext?.dir.value"
      :data-state="rootContext?.open.value ? 'open' : 'closed'"
      :data-disabled="isDisabled ? '' : undefined"
      :data-placeholder="
        shouldShowPlaceholder(rootContext.modelValue?.value) ? '' : undefined
      "
      :as-child="asChild"
      :as="as"
      @pointerup="
        async (event: MouseEvent) => {
          // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
          // but not when the control key is pressed (avoiding MacOS right click)
          if (!isDisabled && event.button === 0 && event.ctrlKey === false) {
            handleOpen();
            rootContext.triggerPointerDownPosRef.value = {
              x: Math.round(event.pageX),
              y: Math.round(event.pageY),
            };

            // prevent trigger focusing when opening
            // this allows the content to be given focus without competition
            await nextTick();
            if (rootContext.open.value) event.preventDefault();
          }
        }
      "
      @keydown="
        (event) => {
          const isTypingAhead = search !== '';
          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
          if (!isModifierKey && event.key.length === 1)
            if (isTypingAhead && event.key === ' ') return;
          handleTypeaheadSearch(event.key);
          if (OPEN_KEYS.includes(event.key)) {
            handleOpen();
            event.preventDefault();
          }
        }
      "
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
