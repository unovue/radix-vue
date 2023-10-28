<script lang="ts">
export interface TeleportProps {
  to?: string | HTMLElement
  disabled?: boolean
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { useMounted } from '@vueuse/core'

withDefaults(defineProps<TeleportProps>(), {
  to: 'body',
})

const isMounted = useMounted()
</script>

<template>
  <Teleport v-if="isMounted || forceMount" :to="to" :disabled="disabled">
    <slot />
  </Teleport>
</template>
