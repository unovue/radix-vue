<script lang="ts">
interface TooltipProviderContextValue {
  isOpenDelayed: Ref<boolean>
  delayDuration: Ref<number>
  onOpen(): void
  onClose(): void
  onPointerInTransitChange(inTransit: boolean): void
  isPointerInTransitRef: Ref<boolean>
  disableHoverableContent: Ref<boolean>
}

export const TOOLTIP_PROVIDER_INJECTION_KEY = Symbol() as InjectionKey<TooltipProviderContextValue>

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
}
</script>

<script setup lang="ts">
import { type InjectionKey, type Ref, onUnmounted, provide, ref, toRefs } from 'vue'

const props = withDefaults(defineProps<TooltipProviderProps>(), {
  delayDuration: 700,
  skipDelayDuration: 300,
  disableHoverableContent: false,
})
const { delayDuration, skipDelayDuration, disableHoverableContent } = toRefs(props)

const isOpenDelayed = ref(true)
const isPointerInTransitRef = ref(false)
const skipDelayTimerRef = ref(0)

onUnmounted(() => {
  window.clearTimeout(skipDelayTimerRef.value)
})

provide(TOOLTIP_PROVIDER_INJECTION_KEY, {
  isOpenDelayed,
  delayDuration,
  onOpen() {
    window.clearTimeout(skipDelayTimerRef.value)
    isOpenDelayed.value = false
  },
  onClose() {
    window.clearTimeout(skipDelayTimerRef.value)
    skipDelayTimerRef.value = window.setTimeout(
      () => isOpenDelayed.value = true,
      skipDelayDuration.value,
    )
  },
  isPointerInTransitRef,
  onPointerInTransitChange(inTransit) {
    isPointerInTransitRef.value = inTransit
  },
  disableHoverableContent,

})
</script>

<template>
  <slot />
</template>
