<script setup lang="ts">
import { onBeforeMount, onUnmounted } from 'vue'
import { injectPopoverContext } from './PopoverRoot.vue'
import { PopperAnchor, type PopperAnchorProps } from '@/Popper'

export interface PopoverAnchorProps extends PopperAnchorProps {}
const props = defineProps<PopoverAnchorProps>()

const context = injectPopoverContext()

onBeforeMount(() => {
  context.hasCustomAnchor.value = true
})
onUnmounted(() => {
  context.hasCustomAnchor.value = false
})
</script>

<template>
  <PopperAnchor v-bind="props">
    <slot />
  </PopperAnchor>
</template>
