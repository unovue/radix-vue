<script lang="ts">
import type { ComputedRef, InjectionKey, Ref } from 'vue'

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
   * Prevents Tooltip.Content from remaining open when hovering.
   * Disabling this has accessibility consequences. Inherits
   * from Tooltip.Provider.
   */
  disableHoverableContent?: boolean
}

export interface TooltipRootEmits {
  (e: 'update:open', value: boolean): void
}

export const TOOLTIP_INJECTION_KEY
  = Symbol() as InjectionKey<TooltipProvideValue>

export interface TooltipProvideValue {
  open: Readonly<Ref<boolean>>
  showTooltip(delayed: boolean): void
  hideTooltip(): void
  delayMs: number
  dataState: ComputedRef<'closed' | 'delayed-open' | 'instant-open'>
  disableHoverableContent: ComputedRef<boolean>
  contentId: string
}
</script>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed, provide, ref } from 'vue'
import { PopperRoot } from '@/Popper'
import { useId } from '@/shared'

const props = withDefaults(defineProps<TooltipRootProps>(), {
  defaultOpen: false,
  open: undefined,
  delayDuration: 700,
})

const emit = defineEmits<TooltipRootEmits>()

const open = useVModel(props, 'open', emit, {
  defaultValue: props.defaultOpen,
  passive: true,
})

const delayedOpen = ref(false)
const dataState = computed(() => {
  if (!open.value)
    return 'closed'
  return delayedOpen.value ? 'delayed-open' : 'instant-open'
})

provide<TooltipProvideValue>(TOOLTIP_INJECTION_KEY, {
  open,
  showTooltip: (delayed: boolean) => {
    delayedOpen.value = delayed
    open.value = true
  },
  hideTooltip: () => (open.value = false),
  delayMs: props.delayDuration,
  dataState,
  disableHoverableContent: computed(() => props.disableHoverableContent),
  contentId: useId(),
})
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
