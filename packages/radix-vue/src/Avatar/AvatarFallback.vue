<script lang="ts">
export interface AvatarFallbackProps extends PrimitiveProps {
  delayMs?: number
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { Primitive, type PrimitiveProps } from '../Primitive'
import { injectAvatarContext } from './AvatarRoot.vue'

const props = withDefaults(defineProps<AvatarFallbackProps>(), {
  delayMs: 0,
  as: 'span',
})

const context = injectAvatarContext()

const canRender = ref(false)
let timeout: ReturnType<typeof setTimeout> | undefined

if (props.delayMs) {
  timeout = setTimeout(() => {
    canRender.value = true
    clearTimeout(timeout)
  }, props.delayMs)
}
else {
  canRender.value = true
}
</script>

<template>
  <Primitive
    v-if="canRender && context.imageLoadingStatus.value !== 'loaded'"
    :as-child="props.asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
