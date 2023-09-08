<script setup lang="ts">
export interface TeleportProps {
  to?: string | HTMLElement
  disabled?: boolean
  forceMount?: boolean
}

withDefaults(defineProps<TeleportProps>(), {
  to: 'body',
})

import { useMounted } from '@vueuse/core'

const isMounted = useMounted()
</script>

<template>
  <Teleport v-if="isMounted || forceMount" :to="to" :disabled="disabled">
    <slot />
  </Teleport>
</template>
