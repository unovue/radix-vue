<script lang="ts">
import type { PopperAnchorProps } from '@/Popper'
import { useForwardRef } from '@/shared'

export interface PopoverAnchorProps extends PopperAnchorProps {}
</script>

<script setup lang="ts">
import { onBeforeMount, onUnmounted } from 'vue'
import { injectPopoverRootContext } from './PopoverRoot.vue'
import { PopperAnchor } from '@/Popper'

const props = defineProps<PopoverAnchorProps>()

const { forwardRef } = useForwardRef()
const rootContext = injectPopoverRootContext()

onBeforeMount(() => {
  rootContext.hasCustomAnchor.value = true
})
onUnmounted(() => {
  rootContext.hasCustomAnchor.value = false
})
</script>

<template>
  <PopperAnchor v-bind="props" :ref="forwardRef">
    <slot />
  </PopperAnchor>
</template>
