<script setup lang="ts">
import { VisuallyHidden } from '@/VisuallyHidden'
import { injectToastProviderContext } from './ToastProvider.vue'

const emits = defineEmits<{
  'focusFromOutsideViewport': [void]
}>()

const providerContext = injectToastProviderContext()
</script>

<template>
  <VisuallyHidden
    aria-hidden
    tabindex="0"
    style="position: fixed"
    @focus="(event) => {
      const prevFocusedElement = event.relatedTarget as HTMLElement | null;
      const isFocusFromOutsideViewport = !providerContext.viewport.value?.contains(prevFocusedElement);
      if (isFocusFromOutsideViewport) emits('focusFromOutsideViewport');
    }"
  >
    <slot />
  </VisuallyHidden>
</template>
