<script lang="ts">
import type { Ref } from 'vue'
import { createContext, useForwardExpose } from '@/shared'

interface TooltipProviderContext {
  isOpenDelayed: Ref<boolean>
  delayDuration: Ref<number>
  onOpen(): void
  onClose(): void
  onPointerInTransitChange(inTransit: boolean): void
  isPointerInTransitRef: Ref<boolean>
  disableHoverableContent: Ref<boolean>
  disableClosingTrigger: Ref<boolean>
}

export const [injectTooltipProviderContext, provideTooltipProviderContext]
  = createContext<TooltipProviderContext>('TooltipProvider')

export interface TooltipProviderProps {
  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened.
   * @defaultValue 700
   */
  delayDuration?: number
  /**
   * How much time a user has to enter another trigger without incurring a delay again.
   * @defaultValue 300
   */
  skipDelayDuration?: number
  /**
   * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
   * @defaultValue false
   */
  disableHoverableContent?: boolean
  /**
   * When `true`, clicking on trigger will not close the content.
   * @defaultValue false
   */
  disableClosingTrigger?: boolean
}
</script>

<script setup lang="ts">
import { refAutoReset, useTimeoutFn } from '@vueuse/shared'
import { ref, toRefs } from 'vue'

const props = withDefaults(defineProps<TooltipProviderProps>(), {
  delayDuration: 700,
  skipDelayDuration: 300,
  disableHoverableContent: false,
})
const { delayDuration, skipDelayDuration, disableHoverableContent, disableClosingTrigger } = toRefs(props)
useForwardExpose()

const isOpenDelayed = ref(true)
// Reset the inTransit state if idle/scrolled.
const isPointerInTransitRef = refAutoReset(false, 300)

const { start: startTimer, stop: clearTimer } = useTimeoutFn(() => {
  isOpenDelayed.value = true
}, skipDelayDuration, { immediate: false })

provideTooltipProviderContext({
  isOpenDelayed,
  delayDuration,
  onOpen() {
    clearTimer()
    isOpenDelayed.value = false
  },
  onClose() {
    startTimer()
  },
  isPointerInTransitRef,
  onPointerInTransitChange(inTransit) {
    isPointerInTransitRef.value = inTransit
  },
  disableHoverableContent,
  disableClosingTrigger,
})
</script>

<template>
  <slot />
</template>
