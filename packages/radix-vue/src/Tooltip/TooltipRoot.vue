<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import { TOOLTIP_PROVIDER_INJECTION_KEY } from './TooltipProvider.vue'

export interface TooltipRootProps {
  /**
   * The open state of the tooltip when it is initially rendered.
   * Use when you do not need to control its open state.
   */
  defaultOpen?: boolean
  /**
   * The controlled open state of the tooltip.
   */
  open?: boolean
  /**
   * Override the duration given to the `Provider` to customise
   * the open delay for a specific tooltip.
   *
   * @default 700
   */
  delayDuration?: number
  /**
   * How much time a user has to enter another trigger without incurring a delay again.
   * @defaultValue 300
   */
  skipDelayDuration?: number
  /**
   * Prevents Tooltip.Content from remaining open when hovering.
   * Disabling this has accessibility consequences. Inherits
   * from Tooltip.Provider.
   */
  disableHoverableContent?: boolean
}

export type TooltipRootEmits = {
  'update:open': [value: boolean]
}

export const TOOLTIP_INJECTION_KEY
  = Symbol() as InjectionKey<TooltipContextValue>

export interface TooltipContextValue {
  contentId: string
  open: Ref<boolean>
  stateAttribute: Ref<'closed' | 'delayed-open' | 'instant-open'>
  trigger: Ref<HTMLElement | undefined>
  onTriggerChange(trigger: HTMLElement | undefined): void
  onTriggerEnter(): void
  onTriggerLeave(): void
  onOpen(): void
  onClose(): void
  disableHoverableContent: Ref<boolean>
}
</script>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed, inject, onUnmounted, provide, ref, watch } from 'vue'
import { PopperRoot } from '@/Popper'
import { useId } from '@/shared'
import { TOOLTIP_OPEN } from './utils'

const props = withDefaults(defineProps<TooltipRootProps>(), {
  defaultOpen: false,
  open: undefined,
  delayDuration: 700,
})

const emit = defineEmits<TooltipRootEmits>()

const providerContext = inject(TOOLTIP_PROVIDER_INJECTION_KEY)

const disableHoverableContent = computed(() => props.disableHoverableContent ?? providerContext?.disableHoverableContent.value)
const delayDuration = computed(() => props.delayDuration ?? providerContext?.delayDuration.value)

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: true,
})

watch(open, (n) => {
  if (!providerContext?.onClose)
    return
  if (n) {
    providerContext.onOpen()
    // as `onChange` is called within a lifecycle method we
    // avoid dispatching via `dispatchDiscreteCustomEvent`.
    document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN))
  }
  else {
    providerContext.onClose()
  }
})

const wasOpenDelayedRef = ref(false)
const trigger = ref<HTMLElement>()
const openTimerRef = ref(0)

const stateAttribute = computed(() => {
  if (!open.value)
    return 'closed'
  return wasOpenDelayedRef.value ? 'delayed-open' : 'instant-open'
})

function handleOpen() {
  window.clearTimeout(openTimerRef.value)
  wasOpenDelayedRef.value = false
  open.value = true
}
function handleClose() {
  window.clearTimeout(openTimerRef.value)
  open.value = false
}
function handleDelayedOpen() {
  window.clearTimeout(openTimerRef.value)
  openTimerRef.value = window.setTimeout(() => {
    wasOpenDelayedRef.value = true
    open.value = true
  }, delayDuration.value)
}

onUnmounted(() => window.clearTimeout(openTimerRef.value))

provide(TOOLTIP_INJECTION_KEY, {
  contentId: useId(),
  open,
  stateAttribute,
  trigger,
  onTriggerChange(el) {
    trigger.value = el
  },
  onTriggerEnter() {
    if (providerContext?.isOpenDelayed.value)
      handleDelayedOpen()
    else handleOpen()
  },
  onTriggerLeave() {
    if (disableHoverableContent.value) { handleClose() }
    else {
      // Clear the timer in case the pointer leaves the trigger before the tooltip is opened.
      window.clearTimeout(openTimerRef.value)
    }
  },
  onOpen: handleOpen,
  onClose: handleClose,
  disableHoverableContent,

})
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
