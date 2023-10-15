<script setup lang="ts">
import { onBeforeMount, onUnmounted } from 'vue'
import { injectPopoverRootContext } from './PopoverRoot.vue'
import { PopperAnchor, type PopperAnchorProps } from '@/Popper'

export interface PopoverAnchorProps extends PopperAnchorProps {}
const props = defineProps<PopoverAnchorProps>()

const rootContext = injectPopoverRootContext()

onBeforeMount(() => {
  rootContext.hasCustomAnchor.value = true
})
onUnmounted(() => {
  rootContext.hasCustomAnchor.value = false
})
</script>

<template>
  <PopperAnchor v-bind="props">
    <slot />
  </PopperAnchor>
</template>
