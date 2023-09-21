<script setup lang="ts">
import { inject, ref } from 'vue'
import { TOAST_PROVIDER_INJECTION_KEY } from './ToastProvider.vue'
import { VisuallyHidden } from '@/VisuallyHidden'
import { useTimeout } from '@vueuse/shared'
import { useRafFn } from '@vueuse/core'

const context = inject(TOAST_PROVIDER_INJECTION_KEY)

const isAnnounced = useTimeout(1000)
const renderAnnounceText = ref(false)

useRafFn(() => {
  renderAnnounceText.value = true
})
</script>

<template>
  <VisuallyHidden v-if="isAnnounced || renderAnnounceText">
    {{ context?.label.value }}
    <slot />
  </VisuallyHidden>
</template>
