<script setup lang="ts">
import { inject } from 'vue'
import { DIALOG_INJECTION_KEY } from './DialogRoot.vue'
import DialogContentImpl, {
  type DialogContentImplEmits,
  type DialogContentImplProps,
} from './DialogContentImpl.vue'
import { useEmitAsProps, useHideOthers } from '@/shared'
import { usePrimitiveElement } from '@/Primitive'

const props = defineProps<DialogContentImplProps>()
const emits = defineEmits<DialogContentImplEmits>()

const context = inject(DIALOG_INJECTION_KEY)

const emitsAsProps = useEmitAsProps(emits)

const { primitiveElement, currentElement } = usePrimitiveElement()
useHideOthers(currentElement)
</script>

<template>
  <DialogContentImpl
    ref="primitiveElement"
    v-bind="{ ...props, ...emitsAsProps }"
    :trap-focus="context?.open.value"
    :disable-outside-pointer-events="true"
    @close-auto-focus="
      (event) => {
        emits('closeAutoFocus', event);

        if (!event.defaultPrevented) {
          event.preventDefault();
          context?.triggerElement.value?.focus();
        }
      }
    "
    @pointer-down-outside="
      (event) => {
        const originalEvent = event.detail.originalEvent;
        const ctrlLeftClick
          = originalEvent.button === 0 && originalEvent.ctrlKey === true;
        const isRightClick = originalEvent.button === 2 || ctrlLeftClick;

        // If the event is a right-click, we shouldn't close because
        // it is effectively as if we right-clicked the `Overlay`.
        if (isRightClick) event.preventDefault();
      }
    "
    @focus-outside="
      (event) => {
        // When focus is trapped, a `focusout` event may still happen.
        // We make sure we don't trigger our `onDismiss` in such case.
        event.preventDefault();
      }
    "
    @open-auto-focus="emits('openAutoFocus', $event)"
  >
    <slot />
  </DialogContentImpl>
</template>
