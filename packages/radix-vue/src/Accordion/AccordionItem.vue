<script lang="ts" context="module">
import type { ComputedRef, VNodeRef } from 'vue'
import type { CollapsibleRootProps } from '../Collapsible'
import { injectAccordionContext } from './AccordionRoot.vue'
import { createContext, useArrowNavigation, useId } from '@/shared'

enum AccordionItemState {
  Open = 'open',
  Closed = 'closed',
}

export interface AccordionItemProps
  extends Omit<CollapsibleRootProps, 'open' | 'defaultOpen' | 'onOpenChange'> {
  /**
   * Whether or not an accordion item is disabled from user interaction.
   * When true, prevents the user from interacting with the item.
   *
   * @defaultValue false
   */
  disabled?: boolean
  /**
   * A string value for the accordion item. All items within an accordion should use a unique value.
   */
  value: string
}

interface AccordionItemContextValue {
  open: ComputedRef<boolean>
  dataState: ComputedRef<AccordionItemState>
  disabled: ComputedRef<boolean>
  dataDisabled: ComputedRef<'' | undefined>
  triggerId: string
  primitiveElement: VNodeRef
  currentElement: ComputedRef<HTMLElement | undefined>
  value: ComputedRef<string>
}

export const [injectAccordionItemContext, provideAccordionItemContext]
  = createContext<AccordionItemContextValue>('AccordionItem')
</script>

<script setup lang="ts">
import { CollapsibleRoot } from '@/Collapsible'
import { usePrimitiveElement } from '@/Primitive'
import { computed } from 'vue'

const props = defineProps<AccordionItemProps>()

const context = injectAccordionContext()

const open = computed(() =>
  context.isSingle.value
    ? props.value === context.modelValue.value
    : Array.isArray(context.modelValue.value)
      && !!context.modelValue.value.includes(props.value),
)

const disabled = computed(() => {
  return (
    context.disabled
    || props.disabled
    || (!!context.isSingle.value && open.value && !context.collapsible)
  )
})

const dataDisabled = computed(() => (disabled.value ? '' : undefined))

const dataState = computed(() =>
  open.value ? AccordionItemState.Open : AccordionItemState.Closed,
)

const { primitiveElement, currentElement } = usePrimitiveElement()

provideAccordionItemContext({
  open,
  dataState,
  disabled,
  dataDisabled,
  triggerId: useId(),
  primitiveElement,
  currentElement,
  value: computed(() => props.value),
})

function handleArrowKey(e: KeyboardEvent) {
  useArrowNavigation(
    e,
    currentElement.value!,
    context.parentElement.value,
    {
      arrowKeyOptions: context.orientation,
      dir: context.direction,
      focus: true,
    },
  )
}

defineExpose({ open })
</script>

<template>
  <CollapsibleRoot
    :data-orientation="context.orientation"
    :data-disabled="dataDisabled"
    :data-state="dataState"
    :disabled="disabled"
    :open="open"
    :as-child="props.asChild"
    @keydown.up.down.left.right.home.end="handleArrowKey"
  >
    <slot :open="open" />
  </CollapsibleRoot>
</template>
