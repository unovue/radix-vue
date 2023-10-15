<script setup lang="ts">
import { ref } from 'vue'
import { injectToastProviderContext } from './ToastProvider.vue'
import { VisuallyHidden } from '@/VisuallyHidden'
import { useTimeout } from '@vueuse/shared'
import { useRafFn } from '@vueuse/core'

const providerContext = injectToastProviderContext()

const isAnnounced = useTimeout(1000)
const renderAnnounceText = ref(false)

useRafFn(() => {
  renderAnnounceText.value = true
})
</script>

<template>
  <VisuallyHidden v-if="isAnnounced || renderAnnounceText">
    {{ providerContext.label.value }}
    <slot />
  </VisuallyHidden>
</template>
