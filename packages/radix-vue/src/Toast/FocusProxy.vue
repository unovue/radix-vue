<script setup lang="ts">
import { VisuallyHidden } from '@/VisuallyHidden'
import { inject } from 'vue'
import { TOAST_PROVIDER_INJECTION_KEY } from './ToastProvider.vue'

const emits = defineEmits<{
  'focusFromOutsideViewport': [void]
}>()

const context = inject(TOAST_PROVIDER_INJECTION_KEY)
</script>

<template>
  <VisuallyHidden
    aria-hidden
    tabindex="0"
    style="position: 'fixed'"
    @focus="(event) => {
      const prevFocusedElement = event.relatedTarget as HTMLElement | null;
      const isFocusFromOutsideViewport = !context!.viewport.value?.contains(prevFocusedElement);
      if (isFocusFromOutsideViewport) emits('focusFromOutsideViewport');
    }"
  >
    <slot />
  </VisuallyHidden>
</template>
