<script setup lang="ts">
import { inject, ref } from 'vue'
import PopoverContentImpl, {
  type PopoverContentImplEmits,
  type PopoverContentImplProps,
} from './PopoverContentImpl.vue'
import { POPOVER_INJECTION_KEY } from './PopoverRoot.vue'
import { useBodyScrollLock, useEmitAsProps } from '@/shared'

const props = defineProps<PopoverContentImplProps>()
const emits = defineEmits<PopoverContentImplEmits>()
const context = inject(POPOVER_INJECTION_KEY)
const isRightClickOutsideRef = ref(false)

useBodyScrollLock(true)

const emitsAsProps = useEmitAsProps(emits)

// aria-hide everything except the content (better supported equivalent to setting aria-modal)
// React.useEffect(() => {
//   const content = contentRef.current;
//   if (content) return hideOthers(content);
// }, []);
</script>

<template>
  <PopoverContentImpl
    v-bind="{ ...props, ...emitsAsProps }"
    :trap-focus="context?.open.value"
    disable-outside-pointer-events
    @close-auto-focus.prevent="
      (event) => {
        emits('closeAutoFocus', event);

        if (!isRightClickOutsideRef) context?.triggerElement.value?.focus();
      }
    "
    @pointer-down-outside="
      (event) => {
        emits('pointerDownOutside', event);

        const originalEvent = event.detail.originalEvent;
        const ctrlLeftClick
          = originalEvent.button === 0 && originalEvent.ctrlKey === true;
        const isRightClick = originalEvent.button === 2 || ctrlLeftClick;

        isRightClickOutsideRef = isRightClick;
      }
    "
    @focus-outside.prevent
  >
    <slot />
  </PopoverContentImpl>
</template>
